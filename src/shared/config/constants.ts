// OpenAI Configuration
export const OPENAI_MODEL = 'gpt-4o-mini'; // Using gpt-4o-mini for cost efficiency
export const OPENAI_REASONING_EFFORT = 'low';

// App Constants
export const MAX_RECOMMENDATIONS = 15;
export const MIN_RECOMMENDATIONS = 10;

// Available Genres (from database)
export const GENRES = [
  '댄스',
  '발라드',
  '힙합',
  'R&B',
  '팝',
  '록',
] as const;

// Available Moods (from database)
export const MOODS = [
  '신나는',
  '감성적',
  '잔잔한',
  '강렬한',
  '밝은',
  '따뜻한',
  '청량한',
  '귀여운',
  '카리스마',
  '몽환적',
  '슬픈',
  '희망적',
  '서정적',
  '파워풀',
  '당당한',
  '트렌디',
  '자신감',
  '여유로운',
  '드라마틱',
  '사랑스러운',
  '그루브',
  '미래적',
  '세련된',
] as const;

// Quick Action Chips - 다양한 상황과 기분 표현
export const QUICK_ACTIONS = [
  { emoji: '🏃', label: '운동', query: '운동할 때 듣기 좋은 신나는 음악' },
  { emoji: '🚗', label: '드라이브', query: '드라이브하면서 듣기 좋은 음악' },
  { emoji: '☕', label: '카페', query: '카페에서 편하게 듣는 음악' },
  { emoji: '🌧️', label: '비오는날', query: '비 오는 날 감성적인 음악' },
  { emoji: '😊', label: '기분전환', query: '기분 전환할 수 있는 밝은 음악' },
  { emoji: '💤', label: '잠들기전', query: '잠들기 전 듣는 잔잔한 음악' },
] as const;

// Platform Configuration
export const PLATFORMS = {
  youtube: {
    name: 'YouTube Music',
    color: '#FF0000',
    emoji: '🔴',
  },
  spotify: {
    name: 'Spotify',
    color: '#1DB954',
    emoji: '🟢',
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK: '인터넷 연결이 불안정한 것 같아. 연결을 확인해줄래?',
  LLM_FAILED:
    '흠... 지금은 딱 맞는 곡을 찾기 어려울 것 같아. 조금 더 자세히 말해줄래?',
  GENERIC: '앗, 잠깐 문제가 생겼어. 다시 한 번 시도해줄래?',
  NO_RESULTS: '아쉽게도 딱 맞는 곡을 찾지 못했어. 다른 표현으로 말해줄래?',
} as const;
