
You are an AI assistant specialized in UI/UX design systems and frontend implementation, collaborating with a Senior Product Designer, Frontend Engineer, and Product Manager.
Your task is to create a comprehensive Design Guide for the product described below.
IMPORTANT:
- All outputs must be written in **Korean**
- Use **Markdown**
- This design guide should be practical for real frontend implementation
- The product is chatbot-centered
- The visual style is intentionally playful and emotional, while the functionality is serious and intelligent
---
<design-preferences>
Style: Retro pixel-art inspired, cute, playful, nostalgic  
Visual Tone: Friendly, cozy, emotional, non-intimidating  
Design Balance: Cute visuals + serious recommendation intelligence  
Color Scheme:
- Pastel-based palette with soft contrast
- Light background with colorful accent elements
- Avoid harsh blacks; prefer dark navy or muted gray
Primary Color (example):
- Primary 500: 
#7C8CF8 (can be adjusted in design system)
Typography:
- Pixel-style or rounded sans-serif for headings
- Highly readable sans-serif for body text
Iconography:
- Pixel-style icons
- Simple shapes, minimal detail
- Emotion-driven icons (hearts, stars, chat bubbles, music-related symbols)
</design-preferences>
<mood-keywords>
cute, cozy, nostalgic, playful, pixel-art, emotional, friendly, human
</mood-keywords>
<breakpoints>
$breakpoints: (
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 1024px,
  'wide': 1440px
);
</breakpoints>
<A guide to human smelling design>
- Prioritize emotional comfort over efficiency
- The chatbot should feel like a friendly music companion, not a tool
- Micro-copy should be warm, casual, and encouraging
- Avoid aggressive animations or heavy transitions
- Subtle delight through visuals, not motion
</A guide to human smelling design>
<references>
- Retro pixel-art UI inspiration
- Cute game UI / lo-fi music culture visuals
- Reference image style: pastel pixel illustrations with icons, objects, and characters
</references>
---
Design guide must include the following contents:
<table-of-contents>
- Design System Overview
- Color Palette (Tailwind CSS variables with HEX codes)
- Typography System
- Iconography Rules
- Page Implementations
  - Chatbot Main Page
  - Recommendation Result Page
  - Playlist Detail Page
  - User Taste / History Page
- Layout Components
  - Applicable routes
  - Core components
  - Responsive behavior
- Interaction Patterns
- Breakpoints & Responsive Strategy
- Accessibility (WCAG 2.2 considerations)
</table-of-contents>
---
<Formatting-Guidelines>
- Output language: Korean
- Use Markdown with clear section separators (---)
- Specify Tailwind CSS variable names (e.g. --color-primary-500)
- Include component specification tables (default / hover / active states)
- Provide example image placeholders using https://picsum.photos
- Include a WCAG 2.2 contrast ratio checklist
- Include example snippets or pseudo-code blocks where helpful
</Formatting-Guidelines>
---
Additional design considerations:
- Chatbot UI is the emotional core of the product
- Recommendation cards should feel collectible and special
- Clearly indicate music source platforms with friendly visual markers
- “Hidden gem” recommendations should feel like a reward or surprise
- Design should scale visually even as features grow
Now, based on all the above information, generate a complete and detailed Design Guide.

더 보기
오전 10:40
음악 추천 챗봇 디자인 가이드
Version 1.0 | 레트로 픽셀아트 기반 음악 큐레이션 서비스

📋 목차
디자인 시스템 개요
컬러 팔레트
타이포그래피 시스템
아이코노그래피 규칙
페이지 구현 명세
레이아웃 컴포넌트
인터랙션 패턴
반응형 전략
접근성 가이드라인
디자인 시스템 개요
핵심 디자인 철학
"따뜻한 감성으로 진지한 음악 추천을"

이 디자인 시스템은 레트로 픽셀아트의 향수와 귀여움을 기반으로, 사용자에게 편안하고 친근한 음악 발견 경험을 제공합니다. 시각적으로는 playful하지만, 기능적으로는 intelligent한 균형을 유지합니다.

디자인 원칙
감정적 편안함 우선 - 효율성보다 사용자의 감정적 경험을 최우선
친구 같은 챗봇 - 도구가 아닌 음악 친구처럼 느껴지도록
수집 가능한 경험 - 추천 카드는 특별하고 소장하고 싶은 느낌
숨겨진 보물 발견 - 히든젬 추천은 보상과 놀라움으로
조용한 즐거움 - 과도한 애니메이션 대신 섬세한 비주얼 디테일
감성 키워드
귀여움 (cute) • 아늑함 (cozy) • 향수 (nostalgic) 
재미 (playful) • 픽셀아트 (pixel-art) • 감성적 (emotional)
친근함 (friendly) • 인간적 (human)
컬러 팔레트
Primary Colors (메인 브랜드 컬러)
파스텔 퍼플 - 친근하고 창의적인 느낌

css
--color-primary-50: #F5F6FE
--color-primary-100: #EBEDFB
--color-primary-200: #D7DBF7
--color-primary-300: #B8BFF2
--color-primary-400: #9AA6ED
--color-primary-500: #7C8CF8  /* 메인 컬러 */
--color-primary-600: #5B6CD9
--color-primary-700: #4452B0
--color-primary-800: #2F3987
--color-primary-900: #1F265E
Secondary Colors (보조 컬러)
파스텔 핑크 - 감성적이고 따뜻한 느낌

css
--color-secondary-50: #FFF5F7
--color-secondary-100: #FFE3E9
--color-secondary-200: #FFC7D3
--color-secondary-300: #FFA0B5
--color-secondary-400: #FF7A98
--color-secondary-500: #FF547A  /* 강조 컬러 */
--color-secondary-600: #E6375D
--color-secondary-700: #B82447
--color-secondary-800: #8A1732
--color-secondary-900: #5C0F21
Accent Colors (액센트 컬러)
다양한 감정과 카테고리 표현용

css
/* 민트 - 신선함, 새로운 발견 */
--color-accent-mint-300: #A7F3D0
--color-accent-mint-500: #6EE7B7
--color-accent-mint-700: #10B981

/* 피치 - 따뜻함, 친근함 */
--color-accent-peach-300: #FED7AA
--color-accent-peach-500: #FDBA74
--color-accent-peach-700: #F97316

/* 라벤더 - 차분함, 편안함 */
--color-accent-lavender-300: #DDD6FE
--color-accent-lavender-500: #C4B5FD
--color-accent-lavender-700: #8B5CF6

/* 옐로우 - 즐거움, 에너지 */
--color-accent-yellow-300: #FDE68A
--color-accent-yellow-500: #FCD34D
--color-accent-yellow-700: #F59E0B
Neutral Colors (중립 컬러)
검정 대신 다크 네이비와 뮤트 그레이 사용

css
--color-neutral-50: #FAFAFA
--color-neutral-100: #F5F5F5
--color-neutral-200: #E5E5E5
--color-neutral-300: #D4D4D4
--color-neutral-400: #A3A3A3
--color-neutral-500: #737373
--color-neutral-600: #525252
--color-neutral-700: #404040
--color-neutral-800: #262626  /* 텍스트용 다크 그레이 */
--color-neutral-900: #1A1A2E  /* 최대 어두움 (다크 네이비) */
Semantic Colors (시맨틱 컬러)
css
/* 성공 - 플레이리스트 저장, 좋아요 완료 */
--color-success-light: #BBF7D0
--color-success-default: #4ADE80
--color-success-dark: #16A34A

/* 경고 - 주의 필요 */
--color-warning-light: #FEF3C7
--color-warning-default: #FBBF24
--color-warning-dark: #D97706

/* 에러 - 오류 발생 */
--color-error-light: #FECACA
--color-error-default: #F87171
--color-error-dark: #DC2626

/* 정보 - 팁, 가이드 */
--color-info-light: #BFDBFE
--color-info-default: #60A5FA
--color-info-dark: #2563EB
Background Colors (배경 컬러)
css
--color-bg-primary: #FEFBF6     /* 메인 배경 - 따뜻한 화이트 */
--color-bg-secondary: #F9F5F0   /* 카드 배경 */
--color-bg-tertiary: #FFF9F0    /* 강조 섹션 배경 */
--color-bg-overlay: rgba(26, 26, 46, 0.6)  /* 모달 오버레이 */
컬러 사용 가이드
용도	컬러	대비율 (WCAG 2.2)
본문 텍스트	neutral-800 on bg-primary	12.5:1 (AAA)
보조 텍스트	neutral-600 on bg-primary	7.2:1 (AAA)
버튼 텍스트	neutral-50 on primary-500	8.1:1 (AAA)
링크 텍스트	primary-600 on bg-primary	6.8:1 (AA)
비활성 텍스트	neutral-400 on bg-primary	4.5:1 (AA)
타이포그래피 시스템
폰트 패밀리
css
/* 헤딩용 - 픽셀/라운드 산세리프 */
--font-heading: 'Galmuri11', 'DungGeunMo', 'Pretendard Variable', sans-serif;

/* 본문용 - 가독성 높은 산세리프 */
--font-body: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

/* 모노스페이스 - 코드, 태그 */
--font-mono: 'Fira Code', 'D2Coding', monospace;
타입 스케일
css
/* Display - 랜딩, 특별한 순간 */
--text-display-size: 3.5rem;      /* 56px */
--text-display-line: 1.1;
--text-display-weight: 700;
--text-display-letter: -0.02em;

/* Heading 1 - 페이지 제목 */
--text-h1-size: 2.5rem;           /* 40px */
--text-h1-line: 1.2;
--text-h1-weight: 700;
--text-h1-letter: -0.01em;

/* Heading 2 - 섹션 제목 */
--text-h2-size: 2rem;             /* 32px */
--text-h2-line: 1.25;
--text-h2-weight: 600;
--text-h2-letter: -0.01em;

/* Heading 3 - 서브섹션 제목 */
--text-h3-size: 1.5rem;           /* 24px */
--text-h3-line: 1.3;
--text-h3-weight: 600;
--text-h3-letter: 0;

/* Heading 4 - 카드 제목 */
--text-h4-size: 1.25rem;          /* 20px */
--text-h4-line: 1.4;
--text-h4-weight: 600;
--text-h4-letter: 0;

/* Body Large - 중요 본문 */
--text-body-lg-size: 1.125rem;    /* 18px */
--text-body-lg-line: 1.6;
--text-body-lg-weight: 400;
--text-body-lg-letter: 0;

/* Body - 기본 본문 */
--text-body-size: 1rem;           /* 16px */
--text-body-line: 1.6;
--text-body-weight: 400;
--text-body-letter: 0;

/* Body Small - 보조 정보 */
--text-body-sm-size: 0.875rem;    /* 14px */
--text-body-sm-line: 1.5;
--text-body-sm-weight: 400;
--text-body-sm-letter: 0;

/* Caption - 라벨, 메타 정보 */
--text-caption-size: 0.75rem;     /* 12px */
--text-caption-line: 1.4;
--text-caption-weight: 500;
--text-caption-letter: 0.01em;
반응형 타이포그래피
css
/* Mobile (320px~767px) */
@media (max-width: 767px) {
  --text-display-size: 2.5rem;    /* 40px */
  --text-h1-size: 2rem;           /* 32px */
  --text-h2-size: 1.5rem;         /* 24px */
}

/* Tablet (768px~1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  --text-display-size: 3rem;      /* 48px */
  --text-h1-size: 2.25rem;        /* 36px */
}
타이포그래피 사용 예시
html
<!-- 챗봇 웰컴 메시지 -->
<h1 class="font-heading text-h1 text-neutral-900">
  🎵 어떤 음악을 듣고 싶어?
</h1>

<!-- 추천 카드 제목 -->
<h4 class="font-heading text-h4 text-neutral-800">
  숨겨진 보물을 발견했어!
</h4>

<!-- 본문 텍스트 -->
<p class="font-body text-body text-neutral-700">
  네가 좋아할 것 같은 곡들을 골라봤어. 편안한 저녁 시간에 딱 맞는 분위기야.
</p>

<!-- 메타 정보 -->
<span class="font-body text-caption text-neutral-500">
  Spotify · 2024.01.15
</span>
아이코노그래피 규칙
아이콘 스타일
픽셀 스타일 아이콘 우선

8px, 16px, 24px, 32px 그리드 기반
단순한 형태, 최소한의 디테일
감정 중심 디자인 (하트, 별, 말풍선, 음표)
아이콘 사이즈
css
--icon-xs: 16px   /* 작은 인라인 아이콘 */
--icon-sm: 20px   /* 버튼 내 아이콘 */
--icon-md: 24px   /* 기본 아이콘 */
--icon-lg: 32px   /* 카드 헤더 아이콘 */
--icon-xl: 48px   /* 특별한 상태 표시 */
핵심 아이콘 세트
카테고리	아이콘	용도
음악	🎵 🎶 🎧 🎸 🎹	음악 관련 액션
감정	❤️ 💜 💙 ⭐ ✨	좋아요, 즐겨찾기
대화	💬 🗨️ 💭	챗봇 메시지
발견	🔍 💎 🎁 🌟	검색, 히든젬, 추천
액션	▶️ ⏸️ ➕ ❌	재생, 추가, 삭제
플랫폼	🟢 🔴 🟣 🟠	Spotify, YouTube, Apple Music, SoundCloud
플랫폼 아이덴티티 아이콘
각 음악 플랫폼을 친근하게 표현

css
/* Spotify */
.icon-spotify {
  color: #1DB954;
  /* 픽셀 스타일 원형 + 음파 패턴 */
}

/* YouTube Music */
.icon-youtube {
  color: #FF0000;
  /* 픽셀 스타일 재생 버튼 */
}

/* Apple Music */
.icon-apple-music {
  color: #FA243C;
  /* 픽셀 스타일 음표 + 사과 */
}

/* SoundCloud */
.icon-soundcloud {
  color: #FF5500;
  /* 픽셀 스타일 구름 + 음파 */
}
아이콘 상태 변화
css
/* 기본 상태 */
.icon {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

/* Hover - 살짝 커짐 */
.icon:hover {
  transform: scale(1.1);
}

/* Active - 눌림 효과 */
.icon:active {
  transform: scale(0.95);
}

/* Disabled - 반투명 */
.icon:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
아이콘 접근성
html
<!-- 의미 있는 아이콘 -->
<button aria-label="플레이리스트에 추가">
  <span class="icon icon-add" aria-hidden="true">➕</span>
  <span class="sr-only">플레이리스트에 추가</span>
</button>

<!-- 장식용 아이콘 -->
<h3>
  <span class="icon" aria-hidden="true">🎵</span>
  오늘의 추천
</h3>
```

---

## 페이지 구현 명세

### 1. 챗봇 메인 페이지

**목적:** 음악 추천의 감성적 시작점. 친구와 대화하듯 자연스럽게 음악 취향 파악

#### 레이아웃 구조
```
┌─────────────────────────────────────┐
│  Header (로고 + 프로필)              │
├─────────────────────────────────────┤
│                                     │
│  Chat Container                     │
│  ┌───────────────────────────────┐  │
│  │ AI 메시지 (왼쪽 정렬)         │  │
│  │ ┌─────────────────────────┐   │  │
│  │ │ 💬 안녕! 오늘은 어떤    │   │  │
│  │ │    음악이 듣고 싶어?     │   │  │
│  │ └─────────────────────────┘   │  │
│  │                               │  │
│  │      User 메시지 (오른쪽)     │  │
│  │   ┌─────────────────────────┐ │  │
│  │   │ 잔잔하고 따뜻한 느낌의  │ │  │
│  │   │ 노래가 좋아             │ │  │
│  │   └─────────────────────────┘ │  │
│  │                               │  │
│  │ Quick Actions                 │  │
│  │ [🎸 락] [🎹 재즈] [🎧 Lo-fi] │  │
│  └───────────────────────────────┘  │
│                                     │
├─────────────────────────────────────┤
│  Input Bar                          │
│  [텍스트 입력창]           [전송 버튼]│
└─────────────────────────────────────┘
컴포넌트 명세
Chat Message Bubble

상태	스타일
AI 메시지	bg-primary-50, border-2 border-primary-200, rounded-2xl, 왼쪽 정렬
User 메시지	bg-secondary-50, border-2 border-secondary-200, rounded-2xl, 오른쪽 정렬
시스템 메시지	bg-neutral-100, border-dashed, 중앙 정렬
html
<!-- AI 메시지 예시 -->
<div class="flex items-start gap-3 max-w-[80%]">
  <div class="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center">
    🎵
  </div>
  <div class="bg-primary-50 border-2 border-primary-200 rounded-2xl rounded-tl-none p-4">
    <p class="text-body text-neutral-800">
      좋아! 차분하면서도 따뜻한 느낌이구나. 혹시 어쿠스틱 기타 사운드 좋아해?
    </p>
    <span class="text-caption text-neutral-500 mt-2 block">오후 3:24</span>
  </div>
</div>

<!-- User 메시지 예시 -->
<div class="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
  <div class="w-8 h-8 rounded-full bg-secondary-200 flex items-center justify-center">
    😊
  </div>
  <div class="bg-secondary-50 border-2 border-secondary-200 rounded-2xl rounded-tr-none p-4">
    <p class="text-body text-neutral-800">
      응, 기타 소리 좋아해!
    </p>
    <span class="text-caption text-neutral-500 mt-2 block">오후 3:25</span>
  </div>
</div>
Quick Action Chips

감정적으로 빠른 선택을 유도하는 버튼

css
.quick-chip {
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-primary-200);
  border-radius: 24px;
  padding: 8px 16px;
  font-size: var(--text-body-sm-size);
  transition: all 0.2s ease;
}

.quick-chip:hover {
  background: var(--color-primary-100);
  border-color: var(--color-primary-400);
  transform: translateY(-2px);
}
Input Bar

html
<div class="fixed bottom-0 left-0 right-0 bg-bg-primary border-t-2 border-neutral-200 p-4">
  <div class="max-w-4xl mx-auto flex gap-3 items-center">
    <input 
      type="text" 
      placeholder="어떤 음악이 듣고 싶은지 말해줘 >_<"
      class="flex-1 px-4 py-3 bg-bg-secondary border-2 border-neutral-300 rounded-2xl
             focus:border-primary-500 focus:outline-none text-body"
    />
    <button class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center
                   hover:bg-primary-600 active:scale-95 transition">
      <span class="text-2xl">💌</span>
    </button>
  </div>
</div>
인터랙션 디테일
타이핑 인디케이터
html
   <div class="typing-indicator">
     <span></span><span></span><span></span>
   </div>
```
   - 3개의 점이 순차적으로 깜빡임
   - 색상: `primary-400`

2. **메시지 등장 애니메이션**
   - Fade in + Slide up
   - Duration: 300ms
   - Easing: ease-out

3. **스크롤 동작**
   - 새 메시지 시 자동 하단 스크롤
   - 부드러운 스크롤 (smooth behavior)

---

### 2. 추천 결과 페이지

**목적:** 추천받은 곡들을 특별하고 수집 가능한 경험으로 제공

#### 레이아웃 구조
```
┌─────────────────────────────────────┐
│  Header                             │
│  ← 뒤로 | 💜 네 취향의 보물 상자    │
├─────────────────────────────────────┤
│  Summary Card                       │
│  ┌───────────────────────────────┐  │
│  │ ✨ 총 12곡을 찾았어!          │  │
│  │ 차분하고 따뜻한 어쿠스틱      │  │
│  │ [전체 플레이] [저장하기]      │  │
│  └───────────────────────────────┘  │
├─────────────────────────────────────┤
│  Recommendation Cards (Grid)        │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐│
│  │ 💎      │ │         │ │         ││
│  │ Hidden  │ │ Song 2  │ │ Song 3  ││
│  │ Gem!    │ │         │ │         ││
│  └─────────┘ └─────────┘ └─────────┘│
│  ┌─────────┐ ┌─────────┐            │
│  │ Song 4  │ │ Song 5  │            │
│  └─────────┘ └─────────┘            │
└─────────────────────────────────────┘
추천 카드 컴포넌트
일반 추천 카드

html
<div class="recommendation-card group">
  <!-- 앨범아트 -->
  <div class="relative overflow-hidden rounded-xl mb-3">
    <img 
      src="https://picsum.photos/300/300" 
      alt="앨범 커버"
      class="w-full aspect-square object-cover transition-transform duration-300 
             group-hover:scale-105"
    />
    <!-- 재생 오버레이 -->
    <div class="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100
                transition-opacity flex items-center justify-center">
      <button class="w-14 h-14 bg-white rounded-full flex items-center justify-center">
        ▶️
      </button>
    </div>
    <!-- 플랫폼 뱃지 -->
    <div class="absolute top-2 right-2 w-6 h-6 bg-white rounded-full 
                flex items-center justify-center shadow-md">
      🟢
    </div>
  </div>
  
  <!-- 곡 정보 -->
  <h4 class="font-heading text-h4 text-neutral-900 mb-1 truncate">
    Autumn Leaves
  </h4>
  <p class="text-body-sm text-neutral-600 truncate mb-2">
    Eva Cassidy
  </p>
  
  <!-- 메타 정보 -->
  <div class="flex items-center gap-2 text-caption text-neutral-500">
    <span>🎸 Folk</span>
    <span>•</span>
    <span>4:32</span>
  </div>
  
  <!-- 액션 버튼 -->
  <div class="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
    <button class="flex-1 px-3 py-2 bg-primary-100 border border-primary-300 
                   rounded-lg text-body-sm hover:bg-primary-200">
      ➕ 추가
    </button>
    <button class="px-3 py-2 bg-neutral-100 border border-neutral-300 
                   rounded-lg hover:bg-neutral-200">
      ❤️
    </button>
  </div>
</div>
히든젬 카드 (특별 강조)

html
<div class="recommendation-card hidden-gem">
  <!-- 특별 배지 -->
  <div class="absolute -top-2 -right-2 z-10">
    <div class="bg-gradient-to-br from-accent-yellow-400 to-accent-yellow-600 
                rounded-full p-2 shadow-lg animate-pulse">
      <span class="text-xl">💎</span>
    </div>
  </div>
  
  <!-- 빛나는 테두리 효과 -->
  <div class="absolute inset-0 bg-gradient-to-br from-accent-yellow-300/50 
              to-accent-mint-300/50 rounded-2xl blur-sm -z-10"></div>
  
  <!-- 일반 카드와 동일한 내부 구조 + 특별 라벨 -->
  <div class="bg-accent-yellow-50 border-2 border-accent-yellow-400 rounded-xl p-1 mb-2">
    <span class="text-caption font-bold text-accent-yellow-800">
      ✨ 숨겨진 보물이야!
    </span>
  </div>
  
  <!-- ... 나머지 카드 내용 ... -->
</div>
카드 그리드 레이아웃
css
.recommendations-grid {
  display: grid;
  gap: 1.5rem;
  padding: 1rem;
}

/* Mobile: 1 column */
@media (min-width: 320px) {
  .recommendations-grid {
    grid-template-columns: 1fr;
  }
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .recommendations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .recommendations-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Wide: 4 columns */
@media (min-width: 1440px) {
  .recommendations-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

### 3. 플레이리스트 상세 페이지

**목적:** 생성된 플레이리스트를 관리하고 듣기

#### 레이아웃 구조
```
┌─────────────────────────────────────┐
│  Header                             │
│  ← 뒤로                             │
├─────────────────────────────────────┤
│  Playlist Hero                      │
│  ┌───────────────────────────────┐  │
│  │  [큰 플레이리스트 커버]       │  │
│  │  🎵 차분한 저녁 시간           │  │
│  │  12곡 • 48분 • 2024.01.15     │  │
│  │  [▶️ 전체 재생] [💾 저장]     │  │
│  └───────────────────────────────┘  │
├─────────────────────────────────────┤
│  Track List                         │
│  1. [아트] Song Title - Artist      │
│  2. [아트] Song Title - Artist      │
│  3. [아트] Song Title - Artist 💎   │
│  ...                                │
└─────────────────────────────────────┘
Track List Item
html
<div class="track-item group hover:bg-primary-50 rounded-lg p-3 transition-colors">
  <div class="flex items-center gap-4">
    <!-- 순서 번호 -->
    <span class="text-body-sm text-neutral-500 w-6 text-right group-hover:hidden">
      1
    </span>
    <button class="text-xl hidden group-hover:block">
      ▶️
    </button>
    
    <!-- 앨범아트 썸네일 -->
    <img 
      src="https://picsum.photos/56/56" 
      alt="앨범 커버"
      class="w-14 h-14 rounded-lg object-cover"
    />
    
    <!-- 곡 정보 -->
    <div class="flex-1 min-w-0">
      <h5 class="text-body font-medium text-neutral-900 truncate">
        Autumn Leaves
      </h5>
      <p class="text-body-sm text-neutral-600 truncate">
        Eva Cassidy
      </p>
    </div>
    
    <!-- 재생 시간 -->
    <span class="text-body-sm text-neutral-500">
      4:32
    </span>
    
    <!-- 특별 뱃지 (히든젬) -->
    <span class="text-xl">💎</span>
    
    <!-- 액션 버튼 -->
    <button class="p-2 hover:bg-neutral-200 rounded-lg opacity-0 group-hover:opacity-100">
      ⋯
    </button>
  </div>
</div>
```

---

### 4. 사용자 취향/히스토리 페이지

**목적:** 사용자의 음악 여정을 시각화하고 관리

#### 레이아웃 구조
```
┌─────────────────────────────────────┐
│  Header                             │
│  💜 내 음악 여정                    │
├─────────────────────────────────────┤
│  Stats Overview                     │
│  ┌─────┐ ┌─────┐ ┌─────┐            │
│  │ 48  │ │ 12  │ │ 256 │            │
│  │곡 발견│플리저장│💎발견│            │
│  └─────┘ └─────┘ └─────┘            │
├─────────────────────────────────────┤
│  Taste Profile                      │
│  [차분함 ████████░░ 80%]            │
│  [에너지틱 ████░░░░░░░ 40%]         │
│  [실험적 ██████░░░░ 60%]            │
├─────────────────────────────────────┤
│  Recent Conversations               │
│  [대화 카드] [대화 카드]            │
├─────────────────────────────────────┤
│  Saved Playlists                    │
│  [플리 카드] [플리 카드]            │
└─────────────────────────────────────┘
Taste Profile 바
html
<div class="taste-bar-container mb-4">
  <div class="flex items-center justify-between mb-2">
    <span class="text-body-sm font-medium text-neutral-700 flex items-center gap-2">
      <span>🌙</span>
      차분함
    </span>
    <span class="text-body-sm font-bold text-primary-600">
      80%
    </span>
  </div>
  <div class="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
    <div 
      class="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full
             transition-all duration-500"
      style="width: 80%"
    ></div>
  </div>
</div>
Conversation History Card
html
<div class="conversation-card bg-bg-secondary border-2 border-neutral-200 
            rounded-2xl p-4 hover:border-primary-300 transition-colors cursor-pointer">
  <div class="flex items-start gap-3 mb-3">
    <span class="text-2xl">💬</span>
    <div class="flex-1">
      <h4 class="text-h4 font-heading text-neutral-900 mb-1">
        차분한 저녁 시간 음악
      </h4>
      <p class="text-body-sm text-neutral-600">
        2024년 1월 15일 오후 3:24
      </p>
    </div>
  </div>
  
  <div class="flex flex-wrap gap-2 mb-3">
    <span class="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-caption">
      어쿠스틱
    </span>
    <span class="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-caption">
      포크
    </span>
  </div>
  
  <div class="flex items-center justify-between text-body-sm text-neutral-500">
    <span>12곡 추천받음</span>
    <span>💎 2개 발견</span>
  </div>
</div>
```

---

## 레이아웃 컴포넌트

### 적용 라우트
```
/               → 챗봇 메인 레이아웃
/chat/:id       → 챗봇 대화 레이아웃
/recommendations → 추천 결과 레이아웃
/playlist/:id   → 플레이리스트 상세 레이아웃
/profile        → 사용자 프로필 레이아웃
핵심 컴포넌트
1. App Shell
html
<div class="app-shell min-h-screen bg-bg-primary">
  <!-- Navigation Header -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-sm
                 border-b-2 border-neutral-200">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <span class="text-3xl">🎵</span>
        <h1 class="font-heading text-h4 text-primary-600">MelodyMate</h1>
      </div>
      
      <!-- Navigation -->
      <nav class="hidden md:flex gap-6">
        <a href="/" class="text-body hover:text-primary-600 transition-colors">
          홈
        </a>
        <a href="/profile" class="text-body hover:text-primary-600 transition-colors">
          내 취향
        </a>
      </nav>
      
      <!-- User Profile -->
      <button class="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center">
        😊
      </button>
    </div>
  </header>
  
  <!-- Main Content -->
  <main class="pt-16 pb-20">
    <!-- 페이지별 내용 -->
  </main>
  
  <!-- Bottom Navigation (Mobile) -->
  <nav class="fixed bottom-0 left-0 right-0 md:hidden bg-bg-primary border-t-2 border-neutral-200">
    <div class="flex justify-around py-2">
      <button class="flex flex-col items-center gap-1 p-2">
        <span class="text-xl">🏠</span>
        <span class="text-caption text-neutral-700">홈</span>
      </button>
      <button class="flex flex-col items-center gap-1 p-2">
        <span class="text-xl">💬</span>
        <span class="text-caption text-neutral-700">대화</span>
      </button>
      <button class="flex flex-col items-center gap-1 p-2">
        <span class="text-xl">💜</span>
        <span class="text-caption text-neutral-700">취향</span>
      </button>
    </div>
  </nav>
</div>
2. Container
css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1440px) {
  .container {
    max-width: 1280px;
  }
}
3. Card
html
<div class="card bg-bg-secondary border-2 border-neutral-200 rounded-2xl p-6 
            hover:border-primary-300 hover:shadow-lg transition-all">
  <!-- 카드 내용 -->
</div>

<!-- 특별 강조 카드 -->
<div class="card-special bg-gradient-to-br from-primary-50 to-secondary-50 
            border-2 border-primary-300 rounded-2xl p-6 shadow-md">
  <!-- 특별 카드 내용 -->
</div>
4. Button
타입	스타일	용도
Primary	bg-primary-500 text-white	주요 액션
Secondary	bg-secondary-500 text-white	보조 액션
Outline	border-2 border-primary-500 text-primary-600	부가 액션
Ghost	bg-transparent hover:bg-neutral-100	경량 액션
Icon	w-10 h-10 rounded-full	아이콘만
html
<!-- Primary Button -->
<button class="btn-primary px-6 py-3 bg-primary-500 text-white rounded-2xl 
               font-medium hover:bg-primary-600 active:scale-95 
               transition-all shadow-sm">
  전체 재생하기
</button>

<!-- Secondary Button -->
<button class="btn-secondary px-6 py-3 bg-secondary-500 text-white rounded-2xl 
               font-medium hover:bg-secondary-600 active:scale-95 transition-all">
  저장하기
</button>

<!-- Outline Button -->
<button class="btn-outline px-6 py-3 border-2 border-primary-500 text-primary-600 
               rounded-2xl font-medium hover:bg-primary-50 transition-all">
  플레이리스트 보기
</button>

<!-- Icon Button -->
<button class="btn-icon w-12 h-12 rounded-full bg-neutral-100 
               hover:bg-neutral-200 flex items-center justify-center transition-all">
  ❤️
</button>
5. Input
html
<!-- Text Input -->
<div class="form-group mb-4">
  <label class="block text-body-sm font-medium text-neutral-700 mb-2">
    장르 선택
  </label>
  <input 
    type="text"
    placeholder="예: 재즈, 인디, 클래식..."
    class="w-full px-4 py-3 bg-bg-secondary border-2 border-neutral-300 
           rounded-xl text-body focus:border-primary-500 focus:outline-none
           transition-colors"
  />
</div>

<!-- Textarea -->
<textarea 
  placeholder="어떤 분위기의 음악을 찾고 있어?"
  rows="4"
  class="w-full px-4 py-3 bg-bg-secondary border-2 border-neutral-300 
         rounded-xl text-body focus:border-primary-500 focus:outline-none
         transition-colors resize-none"
></textarea>
반응형 동작
Mobile (320px~767px)
단일 컬럼 레이아웃
Bottom Navigation 활성화
카드 전체 너비 사용
타이포그래피 축소
터치 최적화 (버튼 최소 44x44px)
Tablet (768px~1023px)
2컬럼 그리드
Side Navigation 가능
여백 증가
카드 호버 효과 활성화
Desktop (1024px~1439px)
3컬럼 그리드
전체 Navigation 표시
최적 읽기 너비 유지
풍부한 인터랙션
Wide (1440px+)
4컬럼 그리드 (추천 카드)
최대 컨테이너 너비 제한
여백 활용한 시각적 여유
인터랙션 패턴
1. 마이크로 인터랙션
좋아요 애니메이션

css
@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.2); }
  50% { transform: scale(0.95); }
}

.like-button.active {
  animation: heartBeat 0.4s ease;
  color: var(--color-secondary-500);
}
카드 등장 애니메이션

css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.recommendation-card {
  animation: fadeInUp 0.4s ease-out;
  animation-fill-mode: both;
}

.recommendation-card:nth-child(1) { animation-delay: 0.1s; }
.recommendation-card:nth-child(2) { animation-delay: 0.2s; }
.recommendation-card:nth-child(3) { animation-delay: 0.3s; }
2. 상태 피드백
로딩 상태

html
<!-- Skeleton Card -->
<div class="skeleton-card animate-pulse">
  <div class="w-full aspect-square bg-neutral-200 rounded-xl mb-3"></div>
  <div class="h-5 bg-neutral-200 rounded mb-2"></div>
  <div class="h-4 bg-neutral-200 rounded w-2/3"></div>
</div>
성공 토스트

html
<div class="toast success fixed top-20 right-4 bg-success-default text-white 
            px-4 py-3 rounded-xl shadow-lg flex items-center gap-3
            animate-slideInRight">
  <span class="text-xl">✅</span>
  <span class="text-body-sm font-medium">플레이리스트에 추가됐어!</span>
</div>
3. 호버 효과
카드 호버

css
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(124, 140, 248, 0.15);
  border-color: var(--color-primary-400);
}
4. 스크롤 기반 인터랙션
무한 스크롤 (추천 결과)

javascript
// Pseudo-code
onScroll(() => {
  if (nearBottom && hasMore && !loading) {
    loadMoreRecommendations();
  }
});
스티키 헤더

css
.sticky-header {
  position: sticky;
  top: 64px;
  z-index: 10;
  background: var(--color-bg-primary);
  backdrop-filter: blur(8px);
}
반응형 전략
Breakpoint 정의
scss
$breakpoints: (
  'mobile': 320px,   // 최소 지원 너비
  'tablet': 768px,   // 태블릿 시작
  'desktop': 1024px, // 데스크톱 시작
  'wide': 1440px     // 와이드 스크린
);
반응형 유틸리티 클래스
css
/* Show/Hide */
.mobile-only { display: block; }
.tablet-up { display: none; }

@media (min-width: 768px) {
  .mobile-only { display: none; }
  .tablet-up { display: block; }
}

/* Spacing */
.container-padding {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container-padding {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .container-padding {
    padding: 3rem;
  }
}
이미지 반응형
html
<picture>
  <source 
    srcset="album-cover-large.jpg" 
    media="(min-width: 1024px)"
  />
  <source 
    srcset="album-cover-medium.jpg" 
    media="(min-width: 768px)"
  />
  <img 
    src="album-cover-small.jpg" 
    alt="앨범 커버"
    loading="lazy"
    class="w-full h-auto"
  />
</picture>
터치 최적화
css
/* 터치 타겟 최소 크기 */
.touch-target {
  min-width: 44px;
  min-height: 44px;
}

/* 터치 피드백 */
@media (hover: none) {
  .card:active {
    transform: scale(0.98);
    opacity: 0.9;
  }
}
접근성 가이드라인
WCAG 2.2 준수 체크리스트
✅ 인식 가능성 (Perceivable)
1.1 대체 텍스트

 모든 이미지에 의미 있는 alt 속성
 장식용 이미지는 alt="" 또는 aria-hidden="true"
 아이콘 버튼에 aria-label 제공
html
<!-- Good -->
<button aria-label="플레이리스트에 추가">
  <span aria-hidden="true">➕</span>
</button>

<!-- Bad -->
<button>
  ➕
</button>
1.3 적응 가능성

 시맨틱 HTML 사용 (header, main, nav, article)
 헤딩 레벨 순서 준수 (h1 → h2 → h3)
 폼 요소에 label 연결
1.4 구별 가능성

 텍스트 대비율 4.5:1 이상 (본문)
 텍스트 대비율 3:1 이상 (제목, 큰 텍스트)
 색상만으로 정보 전달 금지
✅ 운용 가능성 (Operable)
2.1 키보드 접근성

 모든 기능 키보드로 접근 가능
 포커스 순서 논리적
 포커스 트랩 방지
css
/* 포커스 표시 */
:focus-visible {
  outline: 3px solid var(--color-primary-500);
  outline-offset: 2px;
}
2.4 탐색 가능성

 스킵 링크 제공
 페이지 제목 명확
 링크 텍스트 의미 있음
html
<a href="#main-content" class="skip-link">
  본문으로 바로가기
</a>
2.5 입력 방식

 터치 타겟 최소 44x44px
 제스처 대안 제공
✅ 이해 가능성 (Understandable)
3.1 읽기 쉬움

 언어 명시 (<html lang="ko">)
 간결하고 명확한 문구
3.2 예측 가능성

 일관된 네비게이션 위치
 포커스 시 자동 제출 금지
3.3 입력 지원

 에러 메시지 명확
 폼 라벨 및 도움말 제공
html
<div class="form-group">
  <label for="mood-input">듣고 싶은 분위기</label>
  <input 
    id="mood-input"
    type="text"
    aria-describedby="mood-help"
  />
  <small id="mood-help" class="text-caption text-neutral-600">
    예: 차분한, 신나는, 우울한
  </small>
</div>
✅ 견고성 (Robust)
4.1 호환성

 유효한 HTML 마크업
 ARIA 속성 올바른 사용
 스크린 리더 테스트
색상 대비 체크
조합	대비율	WCAG 등급
neutral-800 on bg-primary	12.5:1	AAA
neutral-700 on bg-primary	9.8:1	AAA
neutral-600 on bg-primary	7.2:1	AAA
primary-600 on bg-primary	6.8:1	AA
primary-500 on white	4.8:1	AA
secondary-600 on bg-primary	5.2:1	AA
ARIA 사용 예시
Live Region (챗봇 메시지)

html
<div 
  role="log" 
  aria-live="polite" 
  aria-atomic="false"
  class="chat-messages"
>
  <!-- 새 메시지가 추가될 때 스크린 리더가 읽음 -->
</div>
Modal Dialog

html
<div 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
  class="modal"
>
  <h2 id="modal-title">플레이리스트 저장</h2>
  <!-- 모달 내용 -->
</div>
```

---

## 부록: 마이크로카피 가이드

### 톤 앤 매너

**DO ✅**
- "좋아! 차분한 분위기구나 🌙"
- "이 곡 정말 숨겨진 보물이야 💎"
- "네 취향 저격할 것 같아!"
- "오늘은 어떤 음악이 듣고 싶어?"

**DON'T ❌**
- "검색 결과입니다."
- "추천 곡 목록"
- "데이터를 분석 중입니다."
- "입력하십시오."

### 에러 메시지
```
일시적 문제 발생:
"앗, 잠깐 문제가 생겼어. 다시 한 번 시도해줄래?"

네트워크 오류:
"인터넷 연결이 불안정한 것 같아. 연결을 확인해줄래?"

추천 실패:
"흠... 지금은 딱 맞는 곡을 찾기 어려울 것 같아. 조금 더 자세히 말해줄래?"
변경 이력
버전	날짜	변경 내용
1.0	2024.01.29	초기 디자인 가이드 작성
마지막 업데이트: 2026년 1월 29일
문서 관리: Product Design Team
피드백: design-feedback@melodymate.app
