# FAHUMUINRAFA - Mobile Web App (WebView-ready)

This repository is a small mobile-first web app intended to be used inside an Android WebView or hosted on GitHub Pages.
It uses a single-page mobile UI (bottom navigation), PWA manifest, and a minimal service worker for offline caching.

Files:
- index.html
- style.css
- app.js
- manifest.json
- service-worker.js
- /assets (icons)

Branding:
- App title: FAHUMUINRAFA
- Logo used: https://adab.radenfatah.ac.id/main/wp-content/uploads/2025/10/693e0f7c9d82cbf1035cbb7ab345512a-1.png

How to use:
1. Upload all files to GitHub repository root.
2. Enable GitHub Pages (branch main, root) to host the app.
3. (Optional) Use the hosted URL as WebView target in your Android app.

PWA:
- The manifest is included; service worker registers caching for basic offline usage.

