# Spotify Sender

A full-stack music sharing web app built with Next.js that integrates the Spotify API to search tracks and generate personalized CD cases with custom photo and video overlays.

## Features

1. **Search** — enter a song name and the app fetches matching tracks using the Spotify API
2. **Browse** — results are displayed as circular CDs with the album art
3. **Select** — click a result to open a track card with song details and a preview
4. **Edit** — customize your CD case by uploading a photo or video overlay
5. **Preview** — preview and share your personalized CD case

## Future Changes 
In the future I plan to implement the actual sending process of the cd via text message. I also plan on implementing a easier cloning flow as currently a user needs their own set of Spotify API keys to access the program. 

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: JavaScript
- **Styling**: Inline CSS with responsive `vw`/`vh` units
- **APIs**: Spotify Web API, Web File API, Web Storage API
- **Design**: Figma

## Getting Started

### Prerequisites
- Node.js
- A Spotify Developer account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/spotify-sender.git
cd spotify-sender
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root of the project:
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret


4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── (routes)/
│   ├── search/
│   │   └── page.js
│   ├── edit/
│   │   └── page.js
│   ├── send/
│   │   └── page.js
│   ├── photo/
│   │   └── page.js
│   ├── photo-edit/
│   │   └── page.js
│   ├── video/
│   │   └── page.js
│   └── share/
│       └── page.js
├── api/
│   └── search/
│       └── route.js
├── components/
│   ├── ResultsCircle.jsx
│   ├── TrackCard.jsx
│   └── EditDial.jsx
├── images/
├── pages/
│   ├── Edit/
│   │   ├── Cover_Page_Photo.jsx
│   │   ├── Cover_Page_Video.jsx
│   │   ├── Photo_Page.jsx
│   │   ├── Share_Page.jsx
│   │   └── Video_Page.jsx
│   ├── Edit_Page.jsx
│   ├── Home_Page.jsx
│   ├── Search_Page.jsx
│   └── Send_Page.jsx
├── global.css
├── layout.tsx
└── page.tsx
```
## Getting Spotify API Keys

1. Go to [developer.spotify.com](https://developer.spotify.com)
2. Create a new app
3. Copy the **Client ID** and **Client Secret**
4. Add them to your `.env.local` file
