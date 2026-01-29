import { supabase } from '@/shared/api/supabase';
import type { Track } from '../model/types';

/**
 * Search tracks by genre using GIN index
 * 동적 검색 링크 방식으로 변경되어 더 이상 platform_links를 조인하지 않음
 */
export async function searchTracksByGenre(
  genre: string
): Promise<Track[]> {
  const { data, error } = await supabase
    .from('music_tracks')
    .select('*')
    .contains('genres', [genre])
    .limit(50);

  if (error) {
    console.error('Error fetching tracks by genre:', error);
    throw error;
  }

  return (data as Track[]) || [];
}

/**
 * Search tracks by mood tag using GIN index
 * 동적 검색 링크 방식으로 변경되어 더 이상 platform_links를 조인하지 않음
 */
export async function searchTracksByMood(
  mood: string
): Promise<Track[]> {
  const { data, error } = await supabase
    .from('music_tracks')
    .select('*')
    .contains('mood_tags', [mood])
    .limit(50);

  if (error) {
    console.error('Error fetching tracks by mood:', error);
    throw error;
  }

  return (data as Track[]) || [];
}

/**
 * Search tracks by both genre and mood
 * 동적 검색 링크 방식으로 변경되어 더 이상 platform_links를 조인하지 않음
 */
export async function searchTracksByGenreAndMood(
  genres: string[],
  moods: string[]
): Promise<Track[]> {
  let query = supabase.from('music_tracks').select('*');

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

  return (data as Track[]) || [];
}

/**
 * Get tracks by array of IDs
 * 동적 검색 링크 방식으로 변경되어 더 이상 platform_links를 조인하지 않음
 */
export async function getTracksByIds(ids: string[]): Promise<Track[]> {
  const { data, error } = await supabase
    .from('music_tracks')
    .select('*')
    .in('id', ids);

  if (error) {
    console.error('Error fetching tracks by IDs:', error);
    throw error;
  }

  return (data as Track[]) || [];
}

/**
 * Get random tracks for initial display
 * 동적 검색 링크 방식으로 변경되어 더 이상 platform_links를 조인하지 않음
 */
export async function getRandomTracks(limit: number = 20): Promise<Track[]> {
  const { data, error } = await supabase
    .from('music_tracks')
    .select('*')
    .limit(limit);

  if (error) {
    console.error('Error fetching random tracks:', error);
    throw error;
  }

  // Shuffle the results
  return ((data as Track[]) || []).sort(() => Math.random() - 0.5);
}
