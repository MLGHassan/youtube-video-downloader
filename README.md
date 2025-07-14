# 🎬 YouTube Video Downloader – Full Stack (Educational Use Only)

A beautifully designed, fully functional YouTube video downloader built with **React**, **Tailwind CSS**, **Node.js**, and **yt-dlp**. This tool allows users to download YouTube videos via a clean, responsive interface — perfect for **offline access to educational content**.

> ⚠️ **Disclaimer**: This tool is for educational and personal use only. Downloading copyrighted content without permission may violate YouTube's [Terms of Service](https://www.youtube.com/t/terms).

---

## 🚀 Features

- 📥 Download YouTube videos directly in MP4 format
- 🌈 Stunning Apple-style UI (animated gradients, glassmorphism)
- 💬 Paste YouTube URL and trigger download instantly
- ⏳ Loader animation during processing
- 🧠 Designed with a focus on **education** and **clean UX**
- 🔁 Auto deletes video files after sending to client

---

## 🛠️ Tech Stack

| Layer         | Tech                     |
|---------------|---------------------------|
| **Frontend**  | React, Tailwind CSS, Vite |
| **Backend**   | Node.js, Express, yt-dlp  |
| **Utilities** | CORS, Fetch API, Blob handling |

---

## 📂 Folder Structure

```bash
youtube-video-downloader/
├── youtube-video-downloader-back/               # Node.js + yt-dlp server
│   ├── server.js
│   └── package.json                             # React + Tailwind app
├── src/
├── public/
├── package.json
└── README.md                                    # You're reading this!
```

---

## ⚙️ How It Works

1. User enters a YouTube video URL.
2. Frontend sends a POST request to the backend.
3. Backend uses `yt-dlp` to download the video as `.mp4`.
4. Video is sent back as a downloadable file.
5. File is deleted from server after download to save space.

---

## 🧪 Local Setup

### 🔻 1. Clone the Repository
```bash
git clone https://github.com/MLGHassan/youtube-video-downloader.git
cd youtube-video-downloader
```

---

### 🖥️ 2. Backend Setup (`/backend`)
```bash
cd youtube-video-downloader-back
npm install
# Ensure yt-dlp is installed globally
# macOS: brew install yt-dlp
# Linux: sudo apt install yt-dlp
# Windows: download binary from https://github.com/yt-dlp/yt-dlp
node server.js
```

---

### 🌐 3. Frontend Setup (`/frontend`)
```bash
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`  
Backend runs at `http://localhost:4000`

---

## ✨ Planned Enhancements

- 🎞 Show video title and thumbnail preview before download
- 🎚 Select quality (720p, 1080p, audio-only)
- 📦 Choose between formats (MP4, MP3)
- 💾 Keep download history (local or backend-based)
- 🌍 Deploy to web (Render, Railway, Vercel, etc.)

---
