# ⚡ Quick Start Guide

Get the wedding website up and running in 2 minutes!

## 🚀 Local Development

\`\`\`bash
# 1. Navigate to project
cd oow

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit: http://localhost:5173
\`\`\`

**That's it!** 🎉 The site is now running locally.

---

## 🌐 Deploy to Netlify (5 minutes)

### Option A: One-Click Deploy

1. **Click this button:**
   
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yosisms/oow)

2. **Connect GitHub** (if prompted)

3. **Click "Deploy"**

4. **Done!** Your site is live 🎊

### Option B: Manual Deploy

1. Go to [netlify.com](https://netlify.com) → Sign in
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub → Select `oow` repo
4. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"
6. Done! 🎉

---

## 🎨 Customize in 3 Steps

### Step 1: Update Names & Date

**File:** `src/components/Home/Hero.jsx`

\`\`\`javascript
// Line 21: Change date
<p>כ״ה באדר תשפ״ה | 25.03.2025</p>

// Line 28: Change names
<h1>עומר & עופיר</h1>
\`\`\`

### Step 2: Update Venue

**File:** `src/components/Home/EventDetails.jsx`

\`\`\`javascript
// Lines 76-84: Change location
<p>
  אולם אגדות<br />
  רחוב הכלניות 15<br />
  תל אביב
</p>
<a href="https://maps.google.com/?q=YOUR_VENUE_NAME">
  נווט לאולם ↗
</a>
\`\`\`

### Step 3: Update Contact Info

**File:** `src/components/Home/RSVP.jsx`

\`\`\`javascript
// Lines 41-49: Replace with real phone numbers
href="https://wa.me/972501234567?text=..."
href="tel:+972501234567"
\`\`\`

**Save files, and you're done!** Changes appear automatically in dev mode.

---

## 🏗️ Build for Production

\`\`\`bash
# Build the site
npm run build

# Preview the build
npm run preview
\`\`\`

The `dist/` folder contains your production-ready files.

---

## 🎯 Common Tasks

### Change Colors

**File:** `tailwind.config.js`

\`\`\`javascript
colors: {
  wedding: {
    sage: '#5f7161',  // Change primary color
    gold: '#c5a059',  // Change accent color
    cream: '#faf8f5', // Change background
  }
}
\`\`\`

### Update Schedule

**File:** `src/components/Home/Schedule.jsx`

\`\`\`javascript
const events = [
  { time: '19:00', title: 'קבלת פנים', ... },
  // Add, remove, or edit events
];
\`\`\`

### Add More Sections

1. Create new component in `src/components/Home/`
2. Import in `HomeContent.jsx`
3. Add to the layout

---

## 🆘 Troubleshooting

### Port already in use
\`\`\`bash
# Kill the process on port 5173
lsof -ti:5173 | xargs kill

# Or use a different port
npm run dev -- --port 3000
\`\`\`

### Build fails
\`\`\`bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
\`\`\`

### Styles not updating
\`\`\`bash
# Clear Tailwind cache
npm run dev
# Press 'r' in terminal to restart
\`\`\`

---

## 📱 Test on Mobile

### Option 1: Use Netlify Deploy

Deploy to Netlify → Visit on your phone

### Option 2: Local Network

\`\`\`bash
# Start server with network access
npm run dev -- --host

# You'll see:
# Network: http://192.168.x.x:5173/
# Visit this URL on your phone (same WiFi)
\`\`\`

---

## 🔗 Useful Links

- **Full README:** [README.md](README.md)
- **Deployment Guide:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Project Summary:** [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
- **GitHub Repo:** https://github.com/yosisms/oow

---

## ✅ Pre-Launch Checklist

Before sharing with guests:

- [ ] Updated names and date
- [ ] Updated venue and location
- [ ] Real phone numbers in RSVP
- [ ] WhatsApp links working
- [ ] Google Maps link correct
- [ ] Event times accurate
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] Custom domain configured (optional)
- [ ] Shared link with couple for approval

---

**Need more help?** Check the full documentation or open an issue on GitHub!

**Ready to go?** Deploy and share! 🎉💍
