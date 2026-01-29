import {
  searchTracksByGenreAndMood,
  getTracksByIds,
  type TrackWithLinks,
} from '@/entities/track';
import {
  MAX_RECOMMENDATIONS,
} from '@/shared/config/constants';

interface MoodGenreAnalysis {
  genres: string[];
  moods: string[];
  reasoning: string;
}

/**
 * Analyze user prompt via server-side API route
 */
async function analyzePrompt(userPrompt: string): Promise<MoodGenreAnalysis> {
  const response = await fetch('/api/recommendations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'analyze', userPrompt }),
  });

  if (!response.ok) {
    throw new Error('Failed to analyze prompt');
  }

  return response.json();
}

/**
 * Select top tracks via server-side API route
 */
async function selectTopTracks(
  tracks: TrackWithLinks[],
  userPrompt: string,
  targetCount: number = MAX_RECOMMENDATIONS
): Promise<string[]> {
  if (tracks.length === 0) {
    return [];
  }

  if (tracks.length <= targetCount) {
    return tracks.map((t) => t.id);
  }

  const response = await fetch('/api/recommendations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'select',
      userPrompt,
      tracks: tracks.map((t) => ({
        id: t.id,
        title: t.title,
        artist: t.artist,
        genres: t.genres,
        mood_tags: t.mood_tags,
      })),
      targetCount,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to select tracks');
  }

  const data = await response.json();
  return data.selectedIds;
}

/**
 * Determine if a track is a hidden gem (unique genre combination)
 */
export function isHiddenGem(track: TrackWithLinks): boolean {
  const uniqueCombinations = [
    ['발라드', 'R&B'],
    ['힙합', '록'],
    ['댄스', 'R&B'],
    ['팝', '펑크'],
  ];

  return uniqueCombinations.some((combo) =>
    combo.every((genre) => track.genres.includes(genre))
  );
}

/**
 * Main recommendation function using server-side OpenAI API
 */
export async function getRecommendations(
  userPrompt: string
): Promise<TrackWithLinks[]> {
  try {
    // Step 1: Analyze user prompt to extract genres and moods
    console.log('Analyzing prompt:', userPrompt);
    const analysis = await analyzePrompt(userPrompt);
    console.log('Analysis result:', analysis);

    // Step 2: Search Supabase for matching tracks
    const candidateTracks = await searchTracksByGenreAndMood(
      analysis.genres,
      analysis.moods
    );
    console.log(`Found ${candidateTracks.length} candidate tracks`);

    if (candidateTracks.length === 0) {
      throw new Error('NO_RESULTS');
    }

    // Step 3: Use server-side API to select best matching songs
    const selectedIds = await selectTopTracks(candidateTracks, userPrompt);
    console.log(`Selected ${selectedIds.length} track IDs`);

    // Step 4: Fetch full track data with platform links
    const selectedTracks = await getTracksByIds(selectedIds);

    // Step 5: Sort to maintain selection order
    const orderedTracks = selectedIds
      .map((id) => selectedTracks.find((t) => t.id === id))
      .filter((t): t is TrackWithLinks => t !== undefined);

    return orderedTracks;
  } catch (error) {
    console.error('Recommendation error:', error);
    throw error;
  }
}
