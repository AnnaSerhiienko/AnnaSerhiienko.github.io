# Anna Serhiienko Portfolio

A high-end designer portfolio featuring Brand Identity, UI/UX, Illustration, and Game Design.

## 🌐 Deploying to Your Own Hosting

This project uses a **Zero-Build ES6 architecture**. There is no `npm install` or `npm build` required.

### Step-by-Step Upload (FTP/SFTP)
1. **Prepare Files**: Download or copy all files in this repository.
2. **Connect**: Use an FTP client (like FileZilla) or your hosting provider's File Manager.
3. **Upload**: Drag and drop all files (including `index.html`, `App.tsx`, `components/`, etc.) into your `public_html` or `www` directory.
4. **API Key**: Since you are using traditional hosting, ensure the environment where the browser runs has access to `process.env.API_KEY`. 
   - *Note*: On traditional shared hosting, you may need to use a `.env` file simulation or set headers if your host supports it. If you are using a platform like Vercel/Netlify with your custom domain, simply use their dashboard.

### Why this works:
The site uses **Import Maps** to load React and other dependencies directly from a high-speed CDN. Your browser handles the heavy lifting, ensuring the fastest possible load times without a heavy backend.

## 🛠 Features
- **Project Detail Modals**: Immersive views for every portfolio piece.
- **AI Assistant**: Gemini-powered chat for potential clients.
- **Responsive Design**: Pixel-perfect on mobile, tablet, and desktop.
- **Zero Build**: Instant updates - just change a file and refresh.

---

*Designed for Anna Serhiienko.*