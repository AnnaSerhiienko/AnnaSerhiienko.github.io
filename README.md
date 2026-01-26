# Anna Serhiienko Portfolio

A high-end designer portfolio featuring Brand Identity, UI/UX, Illustration, and Game Design.

## ⚠️ Important: Local Development
If you try to open `index.html` directly in your browser (e.g., `file:///.../index.html`), it **will not load** and you will see **CORS errors** in the console. This is because modern browsers block ES modules over the `file://` protocol for security.

### How to view locally:
You must use a local web server. Here are the easiest ways:

1.  **VS Code (Recommended)**: Install the **"Live Server"** extension. Open `index.html`, then click the "Go Live" button in the bottom right corner of VS Code.
2.  **Python**: If you have Python installed, open your terminal in this folder and run:
    - `python -m http.server 8000` (then go to `http://localhost:8000`)
3.  **Node.js**: If you have Node installed, run:
    - `npx serve .` (then go to `http://localhost:3000`)

---

## 🌐 Deploying to Your Own Hosting / Domain

This project uses a **Zero-Build ES6 architecture**. There is no `npm install` or `npm build` required.

### Deployment via GitHub Pages (Free)
Since your folder is named `AnnaSerhiienko.github.io`, you can host this for free on GitHub:
1. Push all files to a repository named `AnnaSerhiienko.github.io`.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, ensure "Deploy from a branch" is selected.
4. Select the `main` branch and `/root` folder, then click **Save**.
5. Your site will be live at `https://annaserhiienko.github.io` within minutes.

### Deployment via FTP/SFTP
1. **Connect**: Use an FTP client (like FileZilla).
2. **Upload**: Drag all files into your `public_html` or `www` directory.
3. **Domain**: Point your domain to that folder.

### API Key (For AI Assistant)
To enable the Gemini AI Chat:
- On GitHub Pages: Go to Settings > Secrets and variables > Actions > Variables and add `API_KEY`.
- On Traditional Hosting: The `process.env.API_KEY` is usually injected by the environment. If your hosting doesn't support this, you may need a small backend proxy or to hardcode the key in `services/geminiService.ts` (though this is not recommended for public repositories).

---

*Designed for Anna Serhiienko.*