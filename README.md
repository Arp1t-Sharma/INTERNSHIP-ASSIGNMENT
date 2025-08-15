# Persistent Chat – Figma-matched UI

This build matches your Figma look (sky header with clouds, rounded chat, light-blue bubbles, footer with dropdowns/mic/send) and keeps the persistent chat animation requirements.

## Run
```bash
npm install
npm run dev
# http://localhost:8080
```

## Notes
- Animations: container morph + fade with Framer Motion.
- State preserved via React Context in `_app.js`.
- Minimize/expand on 2nd page.
