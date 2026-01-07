# Deployment Guide for Wedding Site

This project is configured for deployment on **Vercel** using **Astro SSR**.

## Prerequisites
- [Vercel CLI](https://vercel.com/download) installed (`npm install -g vercel`)
- A Vercel account

## Deployment Steps

### Option 1: Vercel CLI (Recommended for fast iterations)

1. Open your terminal and navigate to the `wedding-site` directory:
   ```bash
   cd ../wedding-site
   ```

2. Login to Vercel (if not already):
   ```bash
   vercel login
   ```

3. Deploy to preview:
   ```bash
   vercel
   ```
   *Follow the prompts to link the project.*

4. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option 2: Git Integration (Recommended for CI/CD)

1. Create a new repository on GitHub/GitLab/Bitbucket.
2. Initialize git and push your code:
   ```bash
   cd ../wedding-site
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Go to [Vercel Dashboard](https://vercel.com/new) and "Import" your repository.
4. Vercel will automatically detect Astro and configure the build settings.

## Important Notes
- **SSR Configuration**: The project is set to `output: 'server'` in `astro.config.mjs` because the `src/pages/api/videos.ts` endpoint uses Node.js `fs` module to list videos dynamically.
- **Video Files**: Ensure all videos in `public/videos/` are actual files and not symlinks, as Vercel does not support symlinks in the `public` directory. (This has been handled).
- **Size Limit**: Vercel's free tier has a limit on deployment size. If you have many large videos, consider using a specialized video hosting service (like Mux or Cloudinary) if you exceed the limit.
