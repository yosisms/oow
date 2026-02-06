# 💍 OOW - Omer and Ofir Wedding Website

A beautiful, elegant Hebrew wedding invitation website featuring an interactive envelope opening animation.

## ✨ Features

- 🎨 **Interactive Envelope Animation** - Premium digital "unboxing" experience
- 🇮🇱 **Full Hebrew RTL Support** - Right-to-left layout with Hebrew fonts
- 📱 **Mobile-First Responsive Design** - Perfect on all devices
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎨 **Beautiful Color Palette** - Sage Green, Gold, and Warm Cream
- ⚡ **Lightning Fast** - Built with Vite and optimized for performance

## 🎨 Design System

### Colors
- **Sage Green**: `#5f7161` - Primary color
- **Gold**: `#c5a059` - Accent color
- **Warm Cream**: `#faf8f5` - Background color

### Typography
- Primary: Noto Sans Hebrew
- Secondary: Assistant
- Weights: 300, 400, 500, 600, 700

## 🚀 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Language**: JavaScript (ES6+)

## 📦 Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd oow

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## 📁 Project Structure

\`\`\`
oow/
├── src/
│   ├── components/
│   │   ├── Envelope/
│   │   │   ├── EnvelopeLanding.jsx    # Main envelope animation
│   │   │   └── WaxSeal.jsx            # Wax seal component
│   │   └── Home/
│   │       ├── HomeContent.jsx        # Main content wrapper
│   │       ├── Hero.jsx               # Hero section with names
│   │       ├── EventDetails.jsx       # Date, time, location
│   │       ├── Schedule.jsx           # Timeline of events
│   │       ├── RSVP.jsx              # RSVP section
│   │       └── Footer.jsx            # Footer section
│   ├── App.jsx                        # Main app component
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles
├── index.html                         # HTML template
├── tailwind.config.js                 # Tailwind configuration
├── postcss.config.js                  # PostCSS configuration
├── vite.config.js                     # Vite configuration
└── package.json                       # Dependencies
\`\`\`

## 🎯 Key Components

### EnvelopeLanding
The interactive envelope opening experience that greets visitors. Features:
- 3D rotation animation for the flap
- Clickable wax seal with particle effect
- Smooth transition to main content
- Session storage to show once per visit

### HomeContent
Main wedding information including:
- Hero section with names and date
- Event details (date, time, location)
- Timeline schedule
- RSVP contact information
- Footer with thank you message

## 🌐 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Framework Preset: Vite
4. Deploy!

### Manual Deployment

\`\`\`bash
npm run build
# Upload the contents of the dist/ folder to your hosting provider
\`\`\`

## 🎨 Customization

### Update Wedding Details

Edit the component files in \`src/components/Home/\`:
- **Names**: \`Hero.jsx\` (line 28)
- **Date**: \`Hero.jsx\` (line 21)
- **Location**: \`EventDetails.jsx\` (line 78)
- **Phone Numbers**: \`RSVP.jsx\` (lines 41, 49)
- **Schedule**: \`Schedule.jsx\` (lines 5-27)

### Change Colors

Edit \`tailwind.config.js\`:
\`\`\`javascript
colors: {
  wedding: {
    sage: '#your-color-here',
    gold: '#your-color-here',
    cream: '#your-color-here',
  }
}
\`\`\`

### Modify Animations

Adjust timing and effects in:
- \`EnvelopeLanding.jsx\` - Envelope opening animation
- Individual component files - Scroll animations

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

None! If you find any, please report them.

## 📄 License

This is a personal wedding website. Feel free to use it as inspiration for your own project!

## 💝 Credits

Built with love for Omer and Ofir's special day 💍

---

**Made with ❤️ using React, Vite, and Tailwind CSS**
