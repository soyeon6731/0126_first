/**
 * 음악 트랙 기본 정보
 * 동적 검색 링크 방식으로 전환되어 더 이상 DB의 platform_links에 의존하지 않음
 */
export interface Track {
  id: string;
  title: string;
  artist: string;
  genres: string[];
  mood_tags: string[];
  created_at: string;
}

/**
 * @deprecated 더 이상 사용하지 않음. 동적 검색 링크 방식으로 전환됨.
 * Track 타입을 직접 사용하세요.
 */
export interface PlatformLink {
  id: string;
  platform_id: string;
  external_url: string;
  music_platforms: {
    platform_name: 'youtube' | 'spotify';
    display_name: string;
  };
}

/**
 * @deprecated 더 이상 사용하지 않음. 동적 검색 링크 방식으로 전환됨.
 * Track 타입을 직접 사용하세요.
 */
export interface TrackWithLinks extends Track {
  track_platform_links: PlatformLink[];
}
