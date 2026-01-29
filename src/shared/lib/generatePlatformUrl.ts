/**
 * 아티스트와 곡명으로 음악 플랫폼 검색 URL을 동적 생성
 */

export type PlatformType = 'youtube' | 'spotify';

/**
 * YouTube 검색 결과 URL 생성
 * @param artist 아티스트명
 * @param title 곡명
 * @returns YouTube 검색 결과 페이지 URL
 */
export function generateYouTubeSearchUrl(artist: string, title: string): string {
  const query = `${artist} ${title}`;
  const encodedQuery = encodeURIComponent(query);
  return `https://www.youtube.com/results?search_query=${encodedQuery}`;
}

/**
 * Spotify 검색 결과 URL 생성
 * @param artist 아티스트명
 * @param title 곡명
 * @returns Spotify 검색 결과 페이지 URL
 */
export function generateSpotifySearchUrl(artist: string, title: string): string {
  const query = `${artist} ${title}`;
  const encodedQuery = encodeURIComponent(query);
  return `https://open.spotify.com/search/${encodedQuery}`;
}

/**
 * 플랫폼 타입에 따라 적절한 검색 URL 생성
 * @param platform 플랫폼 타입 ('youtube' | 'spotify')
 * @param artist 아티스트명
 * @param title 곡명
 * @returns 플랫폼별 검색 결과 URL
 */
export function generatePlatformUrl(
  platform: PlatformType,
  artist: string,
  title: string
): string {
  switch (platform) {
    case 'youtube':
      return generateYouTubeSearchUrl(artist, title);
    case 'spotify':
      return generateSpotifySearchUrl(artist, title);
    default:
      throw new Error(`Unknown platform: ${platform}`);
  }
}
