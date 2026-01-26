# Anna Serhiienko Portfolio

A high-end designer portfolio featuring Brand Identity, UI/UX, Illustration, and Game Design.

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

## For Designers — Local Development (Vite)

Use these steps to preview and edit the site locally. (The project uses Vite for local development and build.)

- Requirements: Node.js (v16+), npm

1) Install dependencies (first time):

```
npm install
```

2) Start the local dev server:

```
npm run dev
```

3) Open the site in your browser:

http://localhost:3000/

4) Make changes

- Edit files under the `components/` folder, `App.tsx`, or other source files. The Vite dev server provides fast refresh — changes will appear automatically in the browser.

5) Commit and push

```
git add .
git commit -m "docs(design): update content"
git push origin main
```

6) Production build & deploy

- On push, the repository's GitHub Actions will run the build and deployment pipeline. The CI runs `npm run build` to produce the `dist` folder and then publishes the site (per the repo's existing deploy scripts).

If you'd like, I can add screenshots or page-specific notes for particular components or pages.