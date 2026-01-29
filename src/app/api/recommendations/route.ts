import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import {
  OPENAI_MODEL,
  GENRES,
  MOODS,
  MAX_RECOMMENDATIONS,
  MIN_RECOMMENDATIONS,
} from '@/shared/config/constants';

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('Missing OpenAI API key');
}

const openai = new OpenAI({ apiKey });

interface AnalyzeRequestBody {
  action: 'analyze';
  userPrompt: string;
}

interface SelectRequestBody {
  action: 'select';
  userPrompt: string;
  tracks: {
    id: string;
    title: string;
    artist: string;
    genres: string[];
    mood_tags: string[];
  }[];
  targetCount?: number;
}

type RequestBody = AnalyzeRequestBody | SelectRequestBody;

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();

    if (body.action === 'analyze') {
      return handleAnalyze(body.userPrompt);
    }

    if (body.action === 'select') {
      return handleSelect(body.tracks, body.userPrompt, body.targetCount);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function handleAnalyze(userPrompt: string) {
  const instructions = `당신은 K-POP 음악 전문 큐레이터입니다. 사용자의 자유로운 요청을 깊이 분석하여 최적의 음악을 추천하세요.

**사용자 요청 분석 가이드:**

1. **직접적 표현**: "발라드 들려줘", "신나는 노래" 등 명시적 요청
2. **상황/활동**: "퇴근길", "운동할 때", "공부할 때", "비 오는 날" 등 → 적합한 장르/무드 추론
3. **감정/기분**: "우울해", "기분 좋아", "힘들어", "행복해" 등 → 감정에 맞는 무드 선택
4. **시간대**: "아침", "저녁", "밤늦게" 등 → 시간대에 어울리는 분위기
5. **비유적 표현**: "마음을 위로해줄", "텐션 올릴", "힐링되는" 등 → 의도 파악
6. **추상적 요청**: "뭔가 좋은 거", "요즘 듣기 좋은" 등 → 트렌디하고 대중적인 곡

**장르 매핑 예시:**
- 운동/집중력 → 댄스, 힙합
- 휴식/힐링 → 발라드, R&B
- 파티/즐거움 → 댄스, 팝
- 감상/사색 → 발라드, 록
- 트렌디/최신 → 댄스, 팝, 힙합

**무드 매핑 예시:**
- 우울함/슬픔 → 감성적, 잔잔한, 따뜻한
- 기쁨/행복 → 밝은, 신나는, 청량한
- 분노/짜증 → 강렬한, 카리스마
- 편안함/여유 → 잔잔한, 따뜻한, 몽환적
- 활기/에너지 → 신나는, 파워풀, 강렬한
- 로맨틱 → 감성적, 따뜻한, 사랑스러운

**Available genres (사용 가능한 장르):**
${GENRES.join(', ')}

**Available moods (사용 가능한 무드):**
${MOODS.join(', ')}

**중요 규칙:**
1. 사용자의 요청이 모호하거나 추상적이어도 최선을 다해 의도를 파악하세요
2. 여러 장르와 무드를 조합할 수 있습니다 (1~3개 권장)
3. 한국어 구어체, 은어, 줄임말도 이해하세요
4. reasoning에는 사용자에게 공감하며 추천 이유를 친근하게 설명하세요

**응답 형식 (JSON only, no markdown):**
{
  "genres": ["장르1", "장르2"],
  "moods": ["무드1", "무드2", "무드3"],
  "reasoning": "친근한 한국어 설명 (1-2문장)"
}

**예시:**
사용자: "퇴근하고 집가는 길에 듣고 싶어"
→ {"genres": ["발라드", "R&B"], "moods": ["잔잔한", "감성적", "따뜻한"], "reasoning": "하루의 피로를 녹여줄 부드러운 발라드와 R&B를 골라봤어!"}

사용자: "지금 완전 텐션 올리고 싶음ㅋㅋ"
→ {"genres": ["댄스", "힙합"], "moods": ["신나는", "강렬한", "파워풀"], "reasoning": "텐션 최고로 끌어올릴 강렬한 댄스와 힙합으로 준비했어!"}

사용자: "뭔가 좋은 거 추천해줘"
→ {"genres": ["팝", "댄스"], "moods": ["밝은", "트렌디"], "reasoning": "요즘 듣기 좋은 트렌디한 팝과 댄스 곡들로 준비했어!"}`;

  try {
    const response = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        { role: 'system', content: instructions },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.5, // Slightly higher for better creativity in understanding
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    const analysis = JSON.parse(content);
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Error analyzing prompt:', error);
    return NextResponse.json({
      genres: ['팝'],
      moods: ['밝은'],
      reasoning: '기본 추천으로 진행할게요!',
    });
  }
}

async function handleSelect(
  tracks: SelectRequestBody['tracks'],
  userPrompt: string,
  targetCount: number = MAX_RECOMMENDATIONS
) {
  if (tracks.length === 0) {
    return NextResponse.json({ selectedIds: [] });
  }

  if (tracks.length <= targetCount) {
    return NextResponse.json({ selectedIds: tracks.map((t) => t.id) });
  }

  const instructions = `당신은 K-POP 음악 큐레이터입니다. 사용자의 요청에 가장 적합한 ${targetCount}곡을 신중하게 선택하세요.

**사용자 요청:** "${userPrompt}"

**선곡 원칙:**
1. **적합성**: 사용자의 상황/감정/활동에 가장 잘 맞는 곡
2. **다양성**: 같은 아티스트 연속 선택 지양, 다양한 스타일 포함
3. **품질**: 대중적으로 인기 있거나 명곡으로 알려진 곡 우선
4. **흐름**: 곡 순서가 자연스럽게 이어지도록 (템포, 무드 고려)
5. **밸런스**: 너무 한 장르에 치우치지 않도록 (특별한 요청 제외)

**추천 곡 목록:**
${tracks
  .map(
    (t, i) =>
      `${i + 1}. ID: ${t.id}
   제목: ${t.title}
   아티스트: ${t.artist}
   장르: ${t.genres.join(', ')}
   무드: ${t.mood_tags.join(', ')}`
  )
  .join('\n\n')}

**선택 가이드:**
- 사용자가 "퇴근길"이라고 하면 → 차분하고 감성적인 곡 중심
- "운동"이라고 하면 → 강렬하고 신나는 곡 위주, 템포 빠른 곡
- "비 오는 날"이라고 하면 → 잔잔하고 감성적인 분위기
- "기분 전환"이라고 하면 → 밝고 경쾌한 곡들
- 구체적 장르 요청 → 해당 장르 우선, 다른 장르 소량 믹스

**응답 형식 (JSON only):**
{"selectedIds": ["id1", "id2", "id3", ...]}

**중요:** ID는 반드시 위 목록에 있는 실제 ID를 사용하세요.`;

  try {
    const response = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        { role: 'system', content: instructions },
        { role: 'user', content: `사용자 요청에 가장 적합한 ${targetCount}곡을 선택해주세요.` },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.8, // Higher temperature for more creative/diverse selection
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    const parsed = JSON.parse(content);
    let selectedIds: string[] = Array.isArray(parsed)
      ? parsed
      : parsed.selectedIds || parsed.song_ids || parsed.ids || [];

    // Validate IDs exist in tracks
    const validIds = selectedIds.filter((id: string) =>
      tracks.some((t) => t.id === id)
    );

    if (validIds.length < MIN_RECOMMENDATIONS) {
      const remaining = tracks
        .filter((t) => !validIds.includes(t.id))
        .sort(() => Math.random() - 0.5)
        .slice(0, targetCount - validIds.length)
        .map((t) => t.id);
      return NextResponse.json({ selectedIds: [...validIds, ...remaining] });
    }

    return NextResponse.json({ selectedIds: validIds.slice(0, targetCount) });
  } catch (error) {
    console.error('Error selecting top tracks:', error);
    const shuffled = [...tracks].sort(() => Math.random() - 0.5);
    return NextResponse.json({
      selectedIds: shuffled.slice(0, targetCount).map((t) => t.id),
    });
  }
}
