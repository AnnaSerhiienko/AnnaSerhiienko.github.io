# Anna Serhiienko Portfolio

A high-end designer portfolio featuring Brand Identity, UI/UX, Illustration, and Game Design.

## 🚀 How to Host

This project uses a modern "Zero-Build" architecture. It relies on standard browser features (ES6 Modules and Import Maps) which means it can be hosted on any static file server without needing a complex `npm build` step.

### Option 1: Vercel (Recommended)
1. Install [Vercel CLI](https://vercel.com/download) or connect your GitHub repository to Vercel.
2. Ensure `index.html` is in the root directory.
3. Vercel will automatically detect and host it. No build command is required.

### Option 2: Netlify
1. Drag and drop the project folder into the Netlify "Drop" zone.
2. Alternatively, connect your GitHub repo and set the "Build Command" to empty and "Publish Directory" to `.`.

### Option 3: GitHub Pages
1. Push your code to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select the branch (usually `main`) and the folder (`/root`).
4. GitHub will give you a `github.io` link.

## 🛠 Tech Stack
- **React 19**: Powered by a build-less CDN import map.
- **Tailwind CSS**: Utility-first styling with custom animations.
- **Google Gemini API**: Integrated AI assistant for visitor inquiries.
- **Lucide React**: Clean and consistent iconography.

## 🔑 Environment Variables
- `process.env.API_KEY`: Required for the Gemini AI Chat Widget. Most hosting providers allow you to set this in their dashboard under "Environment Variables".

---

*Designed & Developed for Anna Serhiienko.*