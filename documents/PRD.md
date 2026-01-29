# K-POP AI 큐레이터 간소화 PRD (3시간 MVP)

---

## 1. 제품 개요

### 1.1 제품 설명

**K-POP AI 큐레이터 (최소 버전)**는 단순한 챗봇 인터페이스를 통해 사용자가 원하는 상황/분위기를 입력하면 LLM이 K-POP 음악을 추천하는 웹 서비스입니다.

**핵심 가치:**
- 프롬프트 입력 → AI 추천 → YouTube/Spotify 링크 제공
- 로그인 없이 즉시 사용 가능
- 데이터 관리는 Supabase Dashboard에서 직접

### 1.2 범위 제한

**제외 기능:**
- ❌ 로그인/회원가입
- ❌ 사용자 프로필 관리
- ❌ 취향 학습 및 피드백 시스템
- ❌ 플레이리스트 저장
- ❌ 히스토리 관리

**포함 기능:**
- ✅ 챗봇 UI (단일 페이지)
- ✅ LLM 기반 음악 추천
- ✅ 외부 플랫폼 링크 제공 (YouTube, Spotify)

---

## 2. 핵심 기능 명세

### 2.1 챗봇 인터페이스

**기능:**
- 텍스트 입력창에 사용자 프롬프트 입력
- 예시: "퇴근길 듣기 좋은 발라드", "운동할 때 신나는 곡"
- LLM이 프롬프트 분석 후 10~15곡 추천
- 추천 결과는 카드 형태로 표시

**UI:**
```
┌──────────────────────────────────┐
│  KURATION            │
├──────────────────────────────────┤
│                                  │
│  [대화 영역]                      │
│  👤 퇴근길 듣기 좋은 발라드       │
│                                  │
│  🤖 15곡 추천해드릴게요:          │
│     1. 너의 의미 - IU             │
│        [YouTube] [Spotify]       │
│     2. 봄날 - BTS                 │
│        [YouTube] [Spotify]       │
│     ...                          │
│                                  │
├──────────────────────────────────┤
│  [메시지 입력창]       [전송]     │
└──────────────────────────────────┘
```

### 2.2 LLM 추천 로직

**Flow:**
1. 사용자 프롬프트 → LLM API 전송
2. LLM이 키워드 추출 (장르, 무드, 상황)
3. Supabase에서 매칭되는 곡 검색
4. 10~15곡 선정하여 반환

**LLM 프롬프트 예시:**
```
사용자 요청: "{user_prompt}"

DB에 있는 K-POP 곡 중에서 위 요청에 맞는 10곡을 추천해주세요.
추천 시 고려사항:
- 장르, 무드, 상황에 적합한 곡
- 다양한 아티스트 포함
- 곡 ID 배열로 반환

응답 형식: JSON
{
  "song_ids": ["uuid1", "uuid2", ...]
}
```

### 2.3 음악 데이터베이스

**Supabase 테이블:**
- `music_tracks`: 곡 정보 (제목, 아티스트, 장르, 무드 태그)
- `track_platform_links`: YouTube/Spotify 링크
- `music_platforms`: 플랫폼 정보

**초기 데이터:**
- 수동으로 50~100곡 큐레이션
- Supabase Dashboard에서 직접 입력

---

## 3. 기술 스택

### 3.1 프론트엔드
- **프레임워크**: React (Vite) 또는 Next.js
- **UI**: Tailwind CSS
- **배포**: Vercel

### 3.2 백엔드
- **BaaS**: Supabase (PostgreSQL)
- **API**: Supabase Edge Functions
- **LLM**: OpenAI GPT-4o-mini (비용 절감)

### 3.3 데이터베이스
```sql
-- music_tracks
id (uuid), title, artist, genres[], mood_tags[]

-- track_platform_links
id (uuid), track_id (fk), platform_name, external_url

-- music_platforms
id (uuid), platform_name, display_name
```

---

## 4. 개발 로드맵 (3시간)

### Hour 1: 프로젝트 설정 및 DB 구축
- [x] Supabase 프로젝트 생성
- [x] 테이블 3개 생성 (music_tracks, track_platform_links, music_platforms)
- [x] 샘플 데이터 50곡 입력 (Supabase Dashboard)
- [x] Next.js/React 프로젝트 생성

### Hour 2: 챗봇 UI 및 LLM 연동
- [x] 챗봇 UI 컴포넌트 구현
- [x] OpenAI API 연동
- [x] Supabase 쿼리 함수 작성
- [x] 추천 로직 구현

### Hour 3: 결과 표시 및 배포
- [x] 추천 결과 카드 UI
- [x] 플랫폼 링크 버튼
- [x] Vercel 배포
- [x] 테스트

---

## 5. API 명세

### 5.1 추천 요청

**Endpoint:** `/api/recommend` (Edge Function)

**Request:**
```json
{
  "prompt": "퇴근길 듣기 좋은 발라드"
}
```

**Response:**
```json
{
  "recommendations": [
    {
      "id": "uuid",
      "title": "너의 의미",
      "artist": "IU",
      "links": [
        {
          "platform": "youtube",
          "url": "https://music.youtube.com/watch?v=..."
        },
        {
          "platform": "spotify",
          "url": "https://open.spotify.com/track/..."
        }
      ]
    },
    ...
  ]
}
```

---

## 6. 샘플 데이터 구조

### 6.1 music_tracks 샘플
```sql
INSERT INTO music_tracks (title, artist, genres, mood_tags) VALUES
('너의 의미', 'IU', ARRAY['발라드'], ARRAY['감성적', '잔잔한']),
('봄날', 'BTS', ARRAY['발라드'], ARRAY['감성적', '희망적']),
('Hype Boy', 'NewJeans', ARRAY['댄스'], ARRAY['밝은', '신나는']);
```

### 6.2 track_platform_links 샘플
```sql
INSERT INTO track_platform_links (track_id, platform_name, external_url) VALUES
('uuid1', 'youtube', 'https://music.youtube.com/watch?v=...'),
('uuid1', 'spotify', 'https://open.spotify.com/track/...');
```

---

## 7. 성공 기준

**3시간 후 달성 목표:**
- [x] 챗봇 UI 작동
- [x] LLM 추천 응답 정상
- [x] 최소 10곡 추천 가능
- [x] YouTube/Spotify 링크 클릭 가능
- [x] Vercel에 배포 완료

**사용자 테스트:**
- "비 오는 날 감성 발라드" → 적절한 곡 10개 추천
- "운동할 때 신나는 곡" → 댄스/힙합 위주 추천

---

## 8. 비용 추정

- **Supabase**: 무료 플랜 (충분)
- **OpenAI API**: GPT-4o-mini ($0.15/1M tokens)
  - 추천 1회당 ~500 tokens
  - 100회 추천 = $0.0075
- **Vercel**: 무료 플랜
- **총 예상 비용**: 월 $5 미만

---

## 9. 향후 확장 방안

**Phase 2 (추가 개발 시):**
- 로그인 기능 추가
- 플레이리스트 저장
- 피드백 시스템
- 취향 학습

---

**문서 버전**: v1.0 (Simplified)
**작성일**: 2026년 1월 29일
**목표**: 3시간 내 MVP 구현
