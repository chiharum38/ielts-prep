# IELTS Scholar — Claude Code Instructions

## Project Overview
Single-page IELTS preparation app. AI scoring for writing and speaking via Anthropic API.
Student data saved to Supabase (cloud database). Login via Supabase Auth.

## File Structure
```
index.html          — Main HTML shell (references styles.css and app.js)
styles.css          — All CSS (~73KB, Scholar Blue design system)
app.js              — All JavaScript (~207KB, full app logic)
netlify/functions/
  score.js          — Netlify serverless proxy for Anthropic API
api/
  score.js          — Vercel serverless proxy for Anthropic API
package.json        — npm dependencies (@anthropic-ai/sdk)
netlify.toml        — Netlify deployment config
vercel.json         — Vercel deployment config (60s timeout)
.env.example        — Environment variables template
```

## Key Architecture

### API Proxy
All AI calls go through `/.netlify/functions/score` (Netlify) or `/api/score` (Vercel).
This avoids CORS issues from the browser. The function reads `ANTHROPIC_API_KEY` from env.
In `app.js`, the function `callClaude()` handles all AI calls.

### Authentication & Database
Uses Supabase for auth + data storage. Keys are in `app.js`:
```js
const SUPABASE_URL = 'https://avtiychylawasnokrixj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_...';
```

### Data Storage
All student data saved to Supabase tables:
- `ielts_history` — score history
- `ielts_writing_samples` — essays + feedback
- `ielts_speaking_samples` — transcripts + scores
- `ielts_vocab` — vocabulary lists

Row-level security ensures students only see their own data.

### Design System
"Scholar Blue" — CSS custom properties in styles.css:
- `--primary: #003461` (Academic Navy)
- `--surface`, `--surface-low`, `--surface-lowest` for backgrounds
- Fonts: Newsreader (serif) + Public Sans (sans-serif)

## Common Tasks

### Change AI scoring prompts
Search `app.js` for `const systemPrompt` — there are 3 scoring functions:
- `scoreExamEssay()` — Timed exam writing
- `checkWriting()` — Check My Essay mode
- `checkSpeaking()` — Speaking recorder

### Add a new writing prompt
Find `const writingPrompts` in `app.js` and add to `task1` or `task2` arrays.

### Add a new speaking prompt
Find `const speakingPrompts` in `app.js` and add to part 1, 2, or 3 arrays.

### Update Supabase keys
Find `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `app.js`.

### Deploy to Netlify
```bash
# Push to GitHub — Netlify auto-deploys
git add . && git commit -m "your message" && git push
```

### Deploy to Vercel
```bash
vercel --prod
```

## Environment Variables (set in Netlify/Vercel dashboard)
- `ANTHROPIC_API_KEY` — Required for AI scoring
