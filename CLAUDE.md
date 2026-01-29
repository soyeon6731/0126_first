# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **K-POP AI Curator** - a chatbot-based music recommendation service built as a 3-hour MVP. The application uses LLM (OpenAI) to analyze user mood/situation prompts and recommend K-POP songs with links to YouTube Music and Spotify.

**Key Features:**
- Single-page chatbot interface for music recommendations
- LLM-powered music curation based on mood, genre, and situation
- No authentication required (public-facing MVP)
- Supabase backend for music database
- Links to external music platforms (YouTube, Spotify)

**Tech Stack:**
- **Framework:** Next.js 15.1.0 (App Router) with Turbopack
- **Frontend:** React 19, TypeScript, Tailwind CSS
- **UI Components:** shadcn/ui with Radix UI primitives
- **Backend:** Supabase (PostgreSQL database + future Edge Functions)
- **LLM:** OpenAI API (GPT-4o-mini recommended for cost efficiency)
- **State Management:** Zustand
- **Form Handling:** React Hook Form + Zod validation
- **Animations:** Framer Motion

## Development Commands

### Running the Application
```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Supabase Integration
The project uses Supabase MCP server for database operations. Database connection details are in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Public anon key for client-side access
- `OPENAI_API_KEY` - OpenAI API key for LLM recommendations

### Database Schema
The database consists of 3 main tables:
1. **music_tracks** - Song metadata (title, artist, genres[], mood_tags[])
2. **music_platforms** - Platform info (YouTube, Spotify) - pre-populated
3. **track_platform_links** - Many-to-many mapping between tracks and platform URLs

See `documents/ERD.md` for complete schema details.

## Architecture

### Code Architecture: Feature-Sliced Design (FSD)

This project follows **Feature-Sliced Design (FSD)** methodology - organizing code by user features rather than technical concerns (components, hooks, utils).

#### Core Principle
**Feature-centric structure** instead of technology-centric structure. Code is organized around business domains and user interactions.

#### Layer Hierarchy (Top → Bottom)
```
app/        # Entry points, global setup, providers, routing
pages/      # Complete page units (1:1 mapping with URL routes)
widgets/    # Independent, composable UI blocks (header, sidebar, dashboard)
features/   # User interaction capabilities (create-account, send-message, filter-tracks)
entities/   # Business domain data structures (user, track, playlist)
shared/     # Reusable common code (api, config, lib, ui)
```

#### Strict Import Rules

**1. Layer Reference Rules**
- Upper layers can only import from lower layers
- Same-level imports are prohibited
- Reverse imports are strictly forbidden

```typescript
✅ Allowed:
features/ → entities/ → shared/
pages/ → widgets/ → features/

❌ Forbidden:
entities/ → features/
features/A → features/B
shared/ → entities/
```

**2. Slice Structure**
Each slice is organized by business domain:

```
features/
  recommend-music/
    model/      # State, business logic
    ui/         # Components
    api/        # API calls
    lib/        # Utilities
    index.ts    # Public API (entry point)
```

**3. Public API Rules**
- Each slice exports only through `index.ts`
- Star exports (`export *`) are prohibited
- Use explicit named exports only

```typescript
// ✅ Correct
export { RecommendMusicForm } from './ui/RecommendMusicForm';
export { useRecommendMusic } from './model/useRecommendMusic';

// ❌ Prohibited
export * from './ui';
```

### Current Project Structure (Migrating to FSD)

```
src/
├── app/                           # Layer: app
│   ├── layout.tsx                # Root layout with Providers
│   ├── page.tsx                  # Landing page
│   ├── providers.tsx             # Client-side providers wrapper
│   └── globals.css               # Global styles + Tailwind
│
├── pages/                         # Layer: pages (to be created)
│   └── chat/                     # Chat page
│       ├── ui/
│       └── index.ts
│
├── widgets/                       # Layer: widgets (to be created)
│   ├── chat-header/              # Chat interface header
│   ├── message-list/             # Message thread display
│   └── recommendation-grid/      # Song recommendation cards grid
│
├── features/                      # Layer: features (to be created)
│   ├── send-message/             # User message sending
│   │   ├── model/
│   │   ├── ui/
│   │   └── index.ts
│   ├── recommend-music/          # LLM music recommendation
│   │   ├── model/
│   │   ├── ui/
│   │   ├── api/
│   │   └── index.ts
│   └── filter-tracks/            # Track filtering by genre/mood
│       ├── model/
│       ├── ui/
│       └── index.ts
│
├── entities/                      # Layer: entities (to be created)
│   ├── track/                    # Music track entity
│   │   ├── model/
│   │   ├── ui/
│   │   ├── api/
│   │   └── index.ts
│   ├── message/                  # Chat message entity
│   │   ├── model/
│   │   ├── ui/
│   │   └── index.ts
│   └── platform/                 # Music platform (Spotify, YouTube)
│       ├── model/
│       ├── ui/
│       └── index.ts
│
└── shared/                        # Layer: shared
    ├── api/                      # API client setup
    │   ├── supabase.ts
    │   └── openai.ts
    ├── config/                   # Configuration
    │   └── env.ts
    ├── lib/                      # Utilities
    │   └── utils.ts
    └── ui/                       # Shared UI components (shadcn/ui)
        ├── button.tsx
        ├── card.tsx
        ├── form.tsx
        └── ...

documents/                         # Product documentation
├── PRD.md                        # Product Requirements Document
├── ERD.md                        # Database schema and queries
├── IA.md                         # Information Architecture
├── DESIGN.md                     # Design system guide
└── openai_reference.md           # OpenAI API reference
```

### Design Philosophy
This project follows a **"cute visuals + serious intelligence"** approach:
- **Visual Style:** Retro pixel-art inspired, pastel colors, friendly/playful tone
- **Functionality:** Serious LLM-powered recommendations with intelligent curation
- **UX Priority:** Emotional comfort over efficiency, friend-like chatbot interaction

Key design principles (from `documents/DESIGN.md`):
- Pastel color palette (primary: #7C8CF8, secondary: #FF547A)
- Pixel-style or rounded fonts for headings
- Emoji-driven iconography (🎵, ❤️, 💎 for hidden gems)
- Micro-interactions with gentle animations
- WCAG 2.2 accessibility compliance

### Key Architectural Patterns

#### 1. Chatbot Recommendation Flow
```
User Input → OpenAI API (mood/genre extraction)
          → Supabase Query (filter by genres/mood_tags)
          → LLM Selection (10-15 songs)
          → Frontend Display (cards with platform links)
```

#### 2. Data Flow
- **Client Components:** Use `'use client'` for interactive chat UI
- **Server Actions:** Future API routes in `app/api/` for LLM integration
- **Supabase Client:** Direct queries from client (no auth for MVP)
- **State Management:** Use Zustand for chat message history

#### 3. Component Patterns
- **UI Components:** shadcn/ui for base components (headless + Tailwind)
- **Chat Messages:** Separate `BotMessage` and `UserMessage` components
- **Recommendation Cards:** Grid layout with hover effects and platform badges
- **Form Validation:** React Hook Form + Zod schemas

### File Creation Guidelines (FSD)

When adding new features:

1. **Determine the appropriate layer:**
   - User interaction? → `features/`
   - Business domain data? → `entities/`
   - Complete page? → `pages/`
   - Reusable UI block? → `widgets/`

2. **Name slices with verb+noun format:**
   - `create-account`, `filter-tracks`, `send-message`
   - NOT: `account`, `filter`, `messaging`

3. **Organize slice internals by segments:**
   - `model/` - State management, business logic
   - `ui/` - React components
   - `api/` - API calls and data fetching
   - `lib/` - Utility functions specific to this slice

4. **Export only through `index.ts`:**
   ```typescript
   // features/recommend-music/index.ts
   export { RecommendMusicButton } from './ui/RecommendMusicButton';
   export { useRecommendMusic } from './model/useRecommendMusic';
   export { fetchRecommendations } from './api/fetchRecommendations';
   ```

5. **Import from other slices:**
   ```typescript
   // ✅ Correct - importing from lower layer via public API
   import { Track } from '@/entities/track';
   import { supabaseClient } from '@/shared/api/supabase';

   // ❌ Wrong - direct file import bypassing public API
   import { Track } from '@/entities/track/model/types';

   // ❌ Wrong - same-level import
   import { filterTracks } from '@/features/filter-tracks';
   ```

### Benefits of FSD

- **Isolated Changes:** Code changes are scoped to a single slice
- **Minimal Team Conflicts:** Different developers work on different slices
- **Clear Debugging:** Responsibility is clearly defined by slice
- **Scalable:** New features don't affect existing code structure

## Implementation Guidelines

### When Building Chat UI
1. Use `role="log"` and `aria-live="polite"` for message container (accessibility)
2. Implement auto-scroll to latest message on new message arrival
3. Add typing indicator during LLM response wait time
4. Messages should fade in + slide up (300ms duration)

### When Querying Music Database
Use GIN indexes for array searches:
```sql
-- Genre search
SELECT * FROM music_tracks WHERE genres @> ARRAY['발라드'];

-- Mood search
SELECT * FROM music_tracks WHERE mood_tags @> ARRAY['감성적'];

-- Join with platform links
SELECT t.*, json_agg(tpl.*) as links
FROM music_tracks t
LEFT JOIN track_platform_links tpl ON t.id = tpl.track_id
WHERE t.genres @> ARRAY['댄스'];
```

### LLM Prompt Structure
When calling OpenAI API, use this pattern:
```
사용자 요청: "{user_prompt}"

DB에 있는 K-POP 곡 중에서 위 요청에 맞는 10~15곡을 추천해주세요.
고려사항:
- 장르, 무드, 상황에 적합한 곡
- 다양한 아티스트 포함
- 곡 ID 배열로 반환

응답 형식: JSON
{
  "song_ids": ["uuid1", "uuid2", ...]
}
```

### Special Features
- **Hidden Gems (💎):** Mark special recommendations with gradient border and pulse animation
- **Platform Badges:** Show 🟢 (Spotify) or 🔴 (YouTube) on card corners
- **Quick Action Chips:** Pre-defined mood buttons (🎸 락, 🎹 재즈, 🎧 Lo-fi)

## Important Constraints

### What to Avoid
- ❌ No user authentication/login (MVP scope)
- ❌ No playlist saving to user accounts
- ❌ No recommendation history tracking
- ❌ No feedback/rating system
- ❌ Avoid aggressive animations (gentle micro-interactions only)
- ❌ Don't use harsh black colors (use dark navy #1A1A2E instead)

### Error Handling
Use friendly, emotional error messages:
- Network error: "인터넷 연결이 불안정한 것 같아. 연결을 확인해줄래?"
- LLM failure: "흠... 지금은 딱 맞는 곡을 찾기 어려울 것 같아. 조금 더 자세히 말해줄래?"
- Generic: "앗, 잠깐 문제가 생겼어. 다시 한 번 시도해줄래?"

## Future Expansion (Phase 2)
The current implementation is a 3-hour MVP. Phase 2 features include:
- User authentication (Supabase Auth or Next-Auth)
- Playlist creation and saving
- User taste profile learning
- Recommendation feedback system
- Conversation history

Prepare the codebase for these features by:
- Keeping Supabase schema extensible
- Separating authentication logic into hooks
- Using context/Zustand for user state management

## Additional Resources

- **Product Docs:** `documents/PRD.md` - Complete product requirements
- **Database Schema:** `documents/ERD.md` - All table definitions and sample queries
- **Design System:** `documents/DESIGN.md` - Complete visual design guide with color codes, typography, and component specs
- **User Flows:** `documents/IA.md` - Information architecture and page layouts

## Development Notes

- This project was bootstrapped with [EasyNext](https://github.com/easynext/easynext)
- Uses App Router (not Pages Router)
- TypeScript is required (no JavaScript files)
- Tailwind CSS with shadcn/ui design system
- All server/client component boundaries are explicitly marked
