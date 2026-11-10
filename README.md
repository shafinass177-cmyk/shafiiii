# Shafi — Creative Agency Portfolio Website

A modern, fully responsive personal portfolio website engineered for **Shafi**, a 3rd-year Computer Science Engineering student at **Thejus Engineering College**, Kerala, India.

Built with **React**, **Vite**, **Tailwind CSS**, **GSAP (ScrollTrigger)**, **Framer Motion**, and **Lenis** for smooth inertial scrolling.

---

## 🌟 Key Highlights & Design Direction

- **Split-Screen Creative Agency Hero**: Warm burnt orange (`#E8590C`) to amber (`#FF9F1C`) gradient on the left with glowing ambient spheres, paired with a soft off-white (`#F4F1EC`) canvas on the right (and dark obsidian `#0D0D0E` in dark mode).
- **Condensed Editorial Typography**: Bold headlines using **Anton** and **Bebas Neue**, paired with **Plus Jakarta Sans** and **Inter** for crisp body legibility.
- **Micro-Interactions & Physics**:
  - **Lenis Smooth Inertial Scroll** synchronized with GSAP ScrollTrigger.
  - **3D Card Tilts** with dynamic specular reflection glare on cursor movement.
  - **Magnetic Buttons** with spring physics on interactive elements.
  - **Custom Cursor** that morphs into a glowing "VIEW ↗" badge over project cards.
  - **Animated Stat Counters** that count up as they scroll into view.
  - **Velocity Marquee** highlighting core engineering skills and technologies.
  - **Auto-sliding Testimonial Carousel** with pause-on-hover.
  - **Preloader** with animated letter reveal and progress loader.
  - **Top Scroll Progress Indicator** with amber-to-orange gradient.
  - **Floating Label Form** with instant validation and confetti celebration on transmit.
  - **Dark / Light Mode Toggle** with seamless state persistence.

---

## 📁 Project Architecture

```
shafiiii/
├── public/
│   ├── favicon.svg             # Stylized brand monogram SVG
│   └── hero-reference.jpg      # High-res design reference
├── src/
│   ├── assets/                 # Brand assets and images
│   ├── components/
│   │   ├── CustomCursor.jsx    # Desktop cursor follower & 'VIEW' expander
│   │   ├── MagneticButton.jsx  # Spring-physics magnetic attraction button
│   │   ├── Navbar.jsx          # Smart hide-on-scroll glass navbar & mobile overlay
│   │   ├── Preloader.jsx       # Initial name reveal and progress bar
│   │   ├── ScrollProgress.jsx  # Top gradient scroll progress indicator
│   │   ├── SectionHeader.jsx   # Consistent section headings with badge
│   │   ├── ThemeToggle.jsx     # Dark / Light theme switch
│   │   └── TiltCard.jsx        # 3D perspective card container with glare
│   ├── data/
│   │   └── portfolioData.js    # 🌟 SINGLE SOURCE OF TRUTH (easily editable)
│   ├── hooks/
│   │   ├── useLenis.js         # Smooth inertial scroll + GSAP sync
│   │   └── usePrefersReducedMotion.js # Accessibility hook
│   ├── sections/
│   │   ├── Hero.jsx            # Split-screen hero with portrait & floating badges
│   │   ├── About.jsx           # Bio, Thejus Engineering College card, counters, marquee
│   │   ├── Projects.jsx        # Filterable project cards with 3D tilt
│   │   ├── Services.jsx        # Interactive accordion with key deliverables
│   │   ├── Timeline.jsx        # Education & Hackathon timeline
│   │   ├── Testimonials.jsx    # Auto-sliding customer & mentor reviews
│   │   ├── Contact.jsx         # Form with validation, floating labels & confetti
│   │   └── Footer.jsx          # Minimal footer with back-to-top magnetic button
│   ├── App.jsx                 # App root & orchestration
│   ├── index.css               # Tailwind directives, glassmorphic & glow styles
│   └── main.jsx
├── index.html                  # SEO, OpenGraph tags & Google Fonts
├── tailwind.config.js          # Extended brand colors & typography
├── vite.config.js              # Vite React configuration
└── package.json
```

---

## 🛠️ Quick Start & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `/dist` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Customize Your Portfolio

All personal info, projects, services, college credentials, and social links are centralized in a single file:
👉 **[src/data/portfolioData.js](file:///c:/Users/CCLAB/Desktop/shafi/shafiiii/src/data/portfolioData.js)**

### Updating Your Bio & College Details
Edit the `personalInfo` object in `src/data/portfolioData.js`:
```javascript
export const personalInfo = {
  name: "Shafi",
  role: "Frontend Developer & UI/UX Designer",
  college: "Thejus Engineering College",
  collegeLocation: "Thrissur, Kerala, India",
  email: "your-email@gmail.com",
  // ...
};
```

### Adding New Projects
Add entries to the `projects` array in `src/data/portfolioData.js` with your title, description, tags, and links to GitHub / Live Demo.

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial Shafi portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/shafi-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and select your GitHub repository.
4. Framework preset will automatically be detected as **Vite**.
5. Click **"Deploy"**. Your website will be live in under a minute with automatic SSL and global CDN!

### Deploying to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect your repository.
4. Set Build command: `npm run build`
5. Set Publish directory: `dist`
6. Click **"Deploy Shafi Portfolio"**.
