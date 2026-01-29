export interface Track {
  id: string;
  title: string;
  artist: string;
  genres: string[];
  mood_tags: string[];
  created_at: string;
  links?: PlatformLink[];
}

export interface PlatformLink {
  id: string;
  platform_id: string;
  external_url: string;
  music_platforms: {
    platform_name: 'youtube' | 'spotify';
    display_name: string;
  };
}

export interface TrackWithLinks extends Track {
  track_platform_links: PlatformLink[];
}
