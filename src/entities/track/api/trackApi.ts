import { supabase } from '@/shared/api/supabase';
import type { Track, TrackWithLinks } from '../model/types';

/**
 * Search tracks by genre using GIN index
 */
export async function searchTracksByGenre(
  genre: string
): Promise<TrackWithLinks[]> {
  const { data, error } = await supabase
    .from('music_tracks')
    .select(
      `
      *,
      track_platform_links (
        id,
        platform_id,
        external_url,
        music_platforms (
          platform_name,
          display_name
        )
      )
    `
    )
    .contains('genres', [genre])
    .limit(50);

  if (error) {
    console.error('Error fetching tracks by genre:', error);
    throw error;
  }

  return (data as any[]) || [];
}

/**
 * Search tracks by mood tag using GIN index
 */
export async function searchTracksByMood(
  mood: string
): Promise<TrackWithLinks[]> {
  const { data, error } = await supabase
    .from('music_tracks')
    .select(
      `
      *,
      track_platform_links (
        id,
        platform_id,
        external_url,
        music_platforms (
          platform_name,
          display_name
        )
      )
    `
    )
    .contains('mood_tags', [mood])
    .limit(50);

  if (error) {
    console.error('Error fetching tracks by mood:', error);
    throw error;
  }

  return (data as any[]) || [];
}

/**
 * Search tracks by both genre and mood
 */
export async function searchTracksByGenreAndMood(
  genres: string[],
  moods: string[]
): Promise<TrackWithLinks[]> {
  let query = supabase.from('music_tracks').select(
    `
      *,
      track_platform_links (
        id,
        platform_id,
        external_url,
        music_platforms (
          platform_name,
          display_name
        )
      )
    `
  );

  // Add genre filter if provided
  if (genres.length > 0) {
    query = query.or(
      genres.map((g) => `genres.cs.{${g}}`).join(',')
    );
  }

  // Add mood filter if provided
  if (moods.length > 0) {
    query = query.or(
      moods.map((m) => `mood_tags.cs.{${m}}`).join(',')
    );
  }

  const { data, error } = await query.limit(50);

  if (error) {
    console.error('Error fetching tracks:', error);
    throw error;
  }

  return (data as any[]) || [];
}

/**
 * Get tracks by array of IDs
 */
export async function getTracksByIds(ids: string[]): Promise<TrackWithLinks[]> {
  const { data, error } = await supabase
    .from('music_tracks')
    .select(
      `
      *,
      track_platform_links (
        id,
        platform_id,
        external_url,
        music_platforms (
          platform_name,
          display_name
        )
      )
    `
    )
    .in('id', ids);

  if (error) {
    console.error('Error fetching tracks by IDs:', error);
    throw error;
  }

  return (data as any[]) || [];
}

/**
 * Get random tracks for initial display
 */
export async function getRandomTracks(limit: number = 20): Promise<TrackWithLinks[]> {
  const { data, error } = await supabase
    .from('music_tracks')
    .select(
      `
      *,
      track_platform_links (
        id,
        platform_id,
        external_url,
        music_platforms (
          platform_name,
          display_name
        )
      )
    `
    )
    .limit(limit);

  if (error) {
    console.error('Error fetching random tracks:', error);
    throw error;
  }

  // Shuffle the results
  return ((data as any[]) || []).sort(() => Math.random() - 0.5);
}
