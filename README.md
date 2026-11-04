<<<<<<< HEAD
# BeatFlow — Premium Music Discovery | Project Review 2

A polished **React + Vite** music discovery demo with a listener and administrator experience.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL displayed by Vite (normally http://localhost:5173).

## Demo accounts

| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@music.com | admin123 |
| Listener | user@music.com | user123 |

Use **Demo access** on the login page to fill these credentials automatically.

## Features

- React + Vite app with responsive charcoal / warm-orange design.
- Split-screen login and sign-up with browser Local Storage.
- Role-based navigation and separate Admin and Listener modules.
- Listener home: featured mood collections, trending tracks, albums, explore, search, likes, playlists, recently played.
- Persistent user playlists, likes, and tracks in browser Local Storage.
- Compact bottom player: play/pause, previous/next, shuffle, repeat, volume, progress display.
- Admin overview stats, catalog create/edit/delete, listener directory.
- Optional direct MP3 URLs for admin-added tracks. Built-in sample entries play **synthesized 24-second melody previews**, not commercial recordings.
- Vercel SPA routing config.

## Review 2 demonstration

1. Sign up, log out, then sign in again.
2. Browse tracks, play a synthesized sample, like a song.
3. Create a playlist and use the **+** icon next to a track to add it.
4. Log out and sign in as admin.
5. Add a track, edit it, delete it, and inspect registered listeners.
6. Refresh: data persists in the same browser.
7. Deploy to Vercel and show the live URL and GitHub repository.

## Deploy on Vercel

1. Push the contents of **this folder** (where `package.json` is located) to GitHub.
2. Import the GitHub repository in Vercel.
3. Framework Preset: **Vite**. Build command: `npm run build`; Output directory: `dist`.
4. Deploy, open the link, test login and refresh.

If the project is placed in a subfolder of the GitHub repo, set Vercel's **Root Directory** to that folder.

## Important limitations

- Authentication and password storage are **demonstration-only** (plain-text Local Storage). Not secure for production.
- Local Storage is per browser/device; user data is **not synchronized** across users or devices.
- Images load from Unsplash and require Internet connectivity; unavailable art displays a fallback.
- Seeded tracks are fictional; synthesized previews are generated client-side. To play actual audio, an admin can add a **public, directly accessible, legally authorized MP3 URL**, if the remote server supports browser playback.
- There is no real backend, cloud music catalog, or commercial streaming licensing.

## Stack
React 18, Vite 5, Lucide React, CSS, HTML5 Audio/Web Audio API, Local Storage.
=======
# BeatFlow - Music Streaming Application

A lightweight, high-performance Music Streaming Web Application created strictly using pure client-side technologies (**HTML5**, **CSS3**, and **Vanilla JavaScript**).

---

## 📌 Project Architecture

- **User Module**: Stream music, search/filter catalog, build playlists, download tracks offline, submit ratings/reviews, and view smart recommendations.
- **Admin Module**: Manage system catalog (CRUD operations on tracks), oversee user accounts, and view platform metrics.
- **Data Persistence**: Uses HTML5 `LocalStorage` for user sessions, custom playlists, catalog metadata, offline track indexing, and user reviews.
- **Styling**: Built using modern **CSS Grid** and **Flexbox** without external framework dependencies.

---

## 🔑 Demo Credentials

| Role | Email | Password |
|---|---|---|
| **Admin** | `admin@music.com` | `admin123` |
| **User** | `user@music.com` | `user123` |

---

## 🛠️ Local Setup & Execution

1. Clone or download the repository.
2. Open `index.html` directly in any standard web browser (Chrome, Edge, Firefox, Safari).
>>>>>>> b64aceec47106a04b57b2a4d8820d5ba7af5f236
