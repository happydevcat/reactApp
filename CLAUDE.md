# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `voca/` directory:

```bash
npm start          # Start React dev server (port 3000)
npm run build      # Production build
npm test           # Run tests
```

JSON Server must run separately for API:
```bash
npx json-server --watch ./src/db/data.json --port 3001
```

## Architecture

This is a vocabulary learning app (영단어 앱) built with React 18 + TypeScript (partial) backed by JSON Server as a mock REST API.

**Routing** (`src/App.js`):
- `/` → DayList — lists all lesson days
- `/day/:day` → Day — words for a specific day
- `/createWord` → CreateWord — add a new word
- `/createDay` → CreateDay — add a new day

**Data layer** (`src/db/data.json`):
- `days[]`: `{ id, day }` — lesson day entries
- `words[]`: `{ id, day, eng, kor, isDone }` — vocabulary words
- All CRUD goes through JSON Server at `http://localhost:3001`

**Data fetching**: `src/hooks/useFetch.ts` — custom hook that wraps `fetch` for GET requests; used by DayList, Day, CreateDay, and CreateWord components.

**Mutation pattern**: Components call `fetch` directly for POST/PUT/DELETE (not useFetch). Word updates (isDone toggle, delete) are handled inside `Word.tsx`; new words/days are created in their respective Create* components.

**File mix**: Legacy components are `.js`; newer components are `.tsx`. Interfaces (IDay, Iword, Iprops) are defined inline within their component files.

## Stack
- React 18.3.1, React Router 7.1.1, TypeScript 5.7.2
- Create React App (react-scripts 5.0.1)
- JSON Server (mock REST backend)
