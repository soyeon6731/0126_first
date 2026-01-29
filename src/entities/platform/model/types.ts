export type PlatformName = 'youtube' | 'spotify';

export interface Platform {
  id: string;
  platform_name: PlatformName;
  display_name: string;
  created_at: string;
}
