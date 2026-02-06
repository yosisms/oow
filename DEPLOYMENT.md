# 🚀 Deployment Guide

This guide will help you deploy the wedding website to popular hosting platforms.

## 🌐 Recommended: Netlify

Netlify offers the easiest deployment with automatic builds from GitHub.

### Steps:

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign in with GitHub

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select the `oow` repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Leave other settings as default

4. **Deploy**
   - Click "Deploy site"
   - Wait 1-2 minutes for the build to complete
   - Your site will be live at `https://random-name.netlify.app`

5. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

---

## ⚡ Alternative: Vercel

Vercel is another excellent option with automatic deployments.

### Steps:

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Import `oow` repository

3. **Configure Project**
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://oow-xxx.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain

---

## 📦 Alternative: GitHub Pages

You can also deploy to GitHub Pages (free hosting).

### Steps:

1. **Install gh-pages package**
   \`\`\`bash
   npm install -D gh-pages
   \`\`\`

2. **Update package.json**
   Add these scripts:
   \`\`\`json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   \`\`\`

3. **Update vite.config.js**
   Add base URL:
   \`\`\`javascript
   export default defineConfig({
     base: '/oow/',
     plugins: [react()],
   })
   \`\`\`

4. **Deploy**
   \`\`\`bash
   npm run deploy
   \`\`\`

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

Your site will be live at: `https://yosisms.github.io/oow/`

---

## 🖥️ Manual Deployment (Any Static Host)

For hosting on your own server or any static hosting provider:

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Upload the `dist` folder**
   - The `dist` folder contains all the production-ready files
   - Upload to your hosting provider via FTP/SFTP/dashboard

3. **Configure server**
   - Ensure all routes redirect to `index.html` (for SPA routing)
   - Set proper MIME types for `.js`, `.css`, `.svg` files

---

## 🔧 Environment Variables

If you need environment variables (API keys, etc.):

1. **Create `.env` file** (don't commit this!)
   \`\`\`
   VITE_API_KEY=your_key_here
   \`\`\`

2. **Use in code**
   \`\`\`javascript
   const apiKey = import.meta.env.VITE_API_KEY;
   \`\`\`

3. **Add to hosting platform**
   - Netlify: Site settings → Environment variables
   - Vercel: Project settings → Environment Variables
   - GitHub Pages: Not supported (use public APIs only)

---

## ✅ Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] Envelope animation works smoothly
- [ ] All Hebrew text displays correctly (RTL)
- [ ] Mobile responsive on different screen sizes
- [ ] All links work (WhatsApp, maps, etc.)
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Share the link with Omer and Ofir! 💍

---

## 🐛 Troubleshooting

### Build fails on deployment
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### Animations don't work
- Clear browser cache
- Check that JavaScript is enabled
- Ensure Framer Motion loaded correctly

### Hebrew text appears broken
- Verify RTL direction is set in HTML
- Check font loading (Google Fonts)
- Clear browser cache

### WhatsApp links don't work
- Verify phone numbers are correct
- Check URL encoding in RSVP component
- Test on mobile device

---

## 📊 Performance

The site is optimized for performance:
- **Vite** for fast builds
- **Tailwind CSS** purges unused styles
- **Lazy loading** for images
- **Code splitting** for faster initial load
- **Gzip compression** enabled on most hosts

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 90+
- Best Practices: 95+
- SEO: 100

---

**Need help?** Check the main README.md or create an issue on GitHub.
