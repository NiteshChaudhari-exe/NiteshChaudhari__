# 🚀 Modern Developer Portfolio

> A beautiful, blazing-fast, and fully responsive developer portfolio built with cutting-edge modern web technologies. Showcase your work with stunning animations, smooth transitions, and an exceptional user experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=flat-square&logo=vercel)](https://niteshchaudhari.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Node](https://img.shields.io/badge/Node-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## ⚡ Quick Links

| Action | Link |
|--------|------|
| 🌐 **Live Site** | [niteshchaudhari.vercel.app](https://niteshchaudhari.vercel.app/) |
| 📖 **GitHub Repo** | [NiteshChaudhari-exe/my-portfolio](https://github.com/NiteshChaudhari-exe/my-portfolio) |
| 💬 **Report Issues** | [Create Issue](https://github.com/NiteshChaudhari-exe/my-portfolio/issues) |
| ⭐ **Star the Repo** | [Show Support](https://github.com/NiteshChaudhari-exe/my-portfolio) |

---

## ✨ Features

### 🎨 Design & UX
- **Animated Hero Section** — Dynamic role switching with smooth transitions
- **Dark Mode Support** — Native theme persistence with system preference detection
- **Responsive Design** — Mobile-first approach, optimized for all screen sizes
- **Smooth Animations** — Scroll-triggered animations and Framer Motion effects
- **Interactive Components** — Stats counters, logo loops, and engaging elements

### 📱 Core Sections
- **Hero** — Eye-catching introduction with animated background
- **About** — Professional bio and personal branding section
- **Skills** — Technical expertise showcase with categorized skills
- **Projects** — Portfolio work with live demos and GitHub links
- **Experience** — Career timeline and professional history
- **Certifications** — Credentials and achievement badges
- **Blog** — Articles and technical posts (if enabled)
- **Testimonials** — Client/colleague recommendations and feedback
- **Contact** — Easy-to-use contact form with validation
- **SEO** — Meta tags, Open Graph, and structured data
- **Notifications** — Toast messages for user feedback
- **Loading** — Elegant loading screen animations
- **Animated Footer** — Interactive elements with animated heart icon

### ⚡ Performance & Developer Experience
- **Code-Splitting** — Optimized bundle size and faster load times
- **Type Safety** — Full TypeScript support for better DX
- **Modular Architecture** — Clean, maintainable, and scalable code structure
- **ESLint Integration** — Code quality and consistency checks

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Core Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 7 (Rolldown-powered) |
| **Styling** | Tailwind CSS 3.4 + PostCSS |
| **Animations** | Framer Motion 12 + Custom CSS |
| **Icons** | Lucide React + React Icons |
| **UI Components** | Shadcn, OGL |
| **Developer Tools** | ESLint, TypeScript 5.9 |
| **Package Manager** | npm |

## 📁 Project Structure

```
my-portfolio/
├── 📄 index.html              # HTML entry point
├── 📦 package.json            # Dependencies and scripts
├── ⚙️  vite.config.ts          # Vite configuration
├── 🎨 tailwind.config.js      # Tailwind CSS configuration
├── 📋 tsconfig.json           # TypeScript configuration
├── 🚫 .eslintrc.js            # ESLint rules
│
├── 📁 public/                 # Static assets
│   └── assets/                # Images and media files
│
└── 📁 src/
    ├── 🎯 main.tsx            # Application entry point
    ├── 📱 App.tsx             # Root component
    ├── 🎨 index.css           # Global styles
    │
    ├── 📦 components/
    │   ├── Hero.tsx           # Hero section with animations
    │   ├── About.tsx          # About/bio section
    │   ├── Skills.tsx         # Technical skills showcase
    │   ├── Projects.tsx       # Portfolio projects
    │   ├── Experience.tsx     # Work experience timeline
    │   ├── Certifications.tsx # Certifications & credentials
    │   ├── Blog.tsx           # Blog posts section
    │   ├── Testimonials.tsx   # Client/colleague testimonials
    │   ├── Contact.tsx        # Contact form & CTA
    │   ├── Navigation.tsx     # Navigation bar
    │   ├── Footer.tsx         # Footer with animated heart
    │   ├── LoadingScreen.tsx  # Loading animation
    │   ├── Toast.tsx          # Notification system
    │   ├── StatsCounter.tsx   # Animated statistics
    │   ├── LogoLoop.tsx       # Logo carousel
    │   ├── customTransitions.css
    │   ├── figma/
    │   │   └── ImageWithFallback.tsx
    │   ├── pages/
    │   │   └── Logoloop.tsx
    │   └── ui/                # Shadcn UI components
    │
    ├── 🎭 contexts/
    │   └── ThemeContext.tsx   # Dark mode theme provider
    │
    ├── 🪝 hooks/
    │   ├── useActiveSection.ts   # Active section detection
    │   └── useScrollAnimation.ts # Scroll-triggered animations
    │
    ├── 📚 lib/
    │   └── utils.ts           # Utility functions
    │
    ├── 🎨 styles/
    │   └── globals.css        # Global styles
    │
    └── 🔧 utils/
        └── toast.ts           # Toast notification utilities
```

## 🚀 Quick Start

### System Requirements
- **Node.js** ≥ 18.0.0 ([Download](https://nodejs.org))
- **npm** ≥ 9.0.0 or **yarn** ≥ 3.0.0
- **Git** for version control ([Download](https://git-scm.com))
- Any modern code editor (VS Code recommended)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/NiteshChaudhari-exe/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser

4. **Build for production**
   ```bash
   npm run build
   ```
   Outputs optimized files to `dist/` directory

5. **Preview production build**
   ```bash
   npm run preview
   ```
   Test the production build locally at `http://localhost:4173`

## 📝 Available Scripts

| Command | Purpose | Output |
|---------|---------|--------|
| `npm run dev` | Start dev server with HMR | `http://localhost:5173` |
| `npm run build` | Production build (TypeScript + Vite) | `dist/` folder |
| `npm run preview` | Preview production locally | `http://localhost:4173` |
| `npm run lint` | Check code quality with ESLint | Terminal output |

## 🎨 Customization Guide

### 📋 Step-by-Step Customization

#### 1. Personal Information
Update these files with your details:

```
├── src/components/
│   ├── Hero.tsx              # Your title, tagline, CTA
│   ├── About.tsx             # Biography and profile image
│   ├── Skills.tsx            # Technical expertise
│   ├── Projects.tsx          # Your portfolio projects
│   ├── Experience.tsx        # Work history timeline
│   ├── Certifications.tsx    # Degrees and credentials
│   └── Contact.tsx           # Contact information
├── src/components/Footer.tsx # Social media links
├── src/components/SEO.tsx    # Meta tags and SEO
└── public/assets/            # Images and media
```

#### 2. Styling & Theme
Customize the design system:
- **Colors**: [tailwind.config.js](tailwind.config.js) — Update your brand colors
- **Typography**: [tailwind.config.js](tailwind.config.js) — Font families and sizes
- **Global Styles**: [src/styles/globals.css](src/styles/globals.css) — CSS variables
- **Dark Mode**: [src/contexts/ThemeContext.tsx](src/contexts/ThemeContext.tsx) — Theme logic

#### 3. Configuration Files
- **`vite.config.ts`** — Build optimization and plugin settings
- **`tsconfig.json`** — TypeScript compiler options
- **`.eslintrc.js`** — Code linting rules
- **`postcss.config.js`** — CSS preprocessing

#### 4. Content & Assets
- Replace favicon: `public/vite.svg` → `public/favicon.ico`
- Add images: Place all media in `public/assets/` folder
- Update SEO: Edit `src/components/SEO.tsx` with your meta data
- Configure contact: Update form service in `src/components/Contact.tsx`

### 🎯 Quick Customization Checklist
- [ ] Update hero section with your name and title
- [ ] Add your profile photo to About section
- [ ] List your technical skills and expertise
- [ ] Showcase your best projects with links
- [ ] Update work experience timeline
- [ ] Add your credentials and certifications
- [ ] Configure social media links in footer
- [ ] Update contact information and form
- [ ] Customize color scheme in Tailwind config
- [ ] Update meta tags for SEO
- [ ] Test responsive design on mobile
- [ ] Verify all external links work

## 🚀 Deployment

This project is production-ready and optimized for multiple hosting platforms.

### Deploy to Vercel (Recommended) ⭐

**Why Vercel?** Automatic deployments, zero configuration, global CDN, instant HTTPS

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Paste your GitHub repo URL
   - Framework: Auto-detected (Vite)
   - Click "Deploy"

3. **Done!** Your site is live
   - Production URL provided automatically
   - Auto-deploys on every push to main

### Alternative Hosting Platforms

#### Netlify
```bash
npm run build
```
- Go to [netlify.com](https://netlify.com)
- Drag & drop `dist` folder
- Or connect GitHub for auto-deploys

#### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"deploy": "npm run build && gh-pages -d dist"
```

#### Self-Hosted (Nginx/Apache)
```bash
npm run build
# Upload dist/ folder to your server
# Configure web server for SPA routing
```

### Environment Variables
Create `.env` file if needed:
```bash
VITE_API_URL=https://api.example.com
VITE_FORM_SERVICE=formspree
```

### Production Checklist
- [x] Build passes without errors (`npm run build`)
- [x] No console errors or warnings
- [x] Code-splitting working
- [x] Images optimized
- [x] SEO meta tags configured
- [x] Mobile responsive verified
- [x] Dark mode tested
- [x] Forms functional
- [x] Links working
- [x] Performance optimized

## 🔍 SEO & Performance Optimizations

### Search Engine Optimization
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Structured data (JSON-LD schema)
- ✅ Semantic HTML markup
- ✅ Mobile-friendly design
- ✅ Fast page load times

### Performance Features
- ✅ Code-splitting for smaller bundles
- ✅ Lazy-loaded components
- ✅ Optimized image delivery
- ✅ Minified CSS and JavaScript
- ✅ Tree-shaking for unused code removal

### Accessibility
- ✅ WCAG 2.1 Level AA compliant
- ✅ Semantic HTML elements
- ✅ ARIA labels and attributes
- ✅ Keyboard navigation support
- ✅ Color contrast compliance

### User Experience
- ✅ Dark mode support with theme persistence
- ✅ Smooth page transitions
- ✅ Loading states and animations
- ✅ Toast notifications for feedback
- ✅ Mobile-first responsive design

## 📚 Technology Stack Details

### Core
- **React 19** — Latest React with improved performance
- **TypeScript 5.9** — Type-safe JavaScript development
- **Vite 7** — Lightning-fast build tool powered by Rolldown

### Styling & UI
- **Tailwind CSS 3.4** — Utility-first CSS framework
- **PostCSS** — CSS transformations and preprocessing
- **Framer Motion 12** — Professional animation library
- **Lucide React** — Beautiful SVG icons
- **React Icons** — Additional icon library
- **Shadcn** — High-quality UI components

### Development
- **ESLint** — Code quality and consistency
- **TypeScript ESLint** — TypeScript-specific linting rules
- **Autoprefixer** — CSS vendor prefixes

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome! This project can serve as a template for others.

### How to Contribute

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/my-portfolio.git
   cd my-portfolio
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your improvements**
   - Follow the existing code style
   - Add comments for clarity
   - Test your changes locally

4. **Commit with descriptive messages**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   git commit -m "fix: resolve bug in component"
   git commit -m "docs: update README"
   ```

5. **Push and create Pull Request**
   ```bash
   git push origin feature/amazing-feature
   ```
   - Go to GitHub
   - Click "New Pull Request"
   - Describe your changes
   - Submit!

### Contribution Guidelines
- Keep commits clean and focused
- Use semantic commit messages (feat:, fix:, docs:)
- Update documentation if needed
- Test on mobile and desktop
- Follow TypeScript best practices
- Use ESLint compliant code

### Found a Bug?
- Open an [Issue](https://github.com/NiteshChaudhari-exe/my-portfolio/issues)
- Describe the problem with steps to reproduce
- Share your browser/OS information
- Attach screenshots if helpful

## 📄 License

This project is open source and available under the **[MIT License](LICENSE)**.

### What you can do:
- ✅ Use commercially
- ✅ Modify the code
- ✅ Distribute copies
- ✅ Use privately

### What you must do:
- 📋 Include license and copyright notice

For more details, see [MIT License](https://opensource.org/licenses/MIT)

## 📧 Contact & Social

Let's connect! Find me on:

| Platform | Link |
|----------|------|
| 💼 **GitHub** | [@NiteshChaudhari-exe](https://github.com/NiteshChaudhari-exe/) |
| 🔗 **LinkedIn** | [@chaudhariniteshraj](https://www.linkedin.com/in/chaudhariniteshraj/) |
| 📸 **Instagram** | [@oyee_nitesh__](https://www.instagram.com/oyee_nitesh__/) |
| 📧 **Email** | [chaudharinitesh485@gmail.com](mailto:chaudharinitesh485@gmail.com) |
| 🌐 **Portfolio** | [niteshchaudhari.vercel.app](https://niteshchaudhari.vercel.app/) |

### Contact Information
- **Email:** chaudharinitesh485@gmail.com
- **Phone:** +977 9821750929
- **Location:** Kathmandu, Nepal 🇳🇵
- **Timezone:** Asia/Kathmandu

### Get In Touch
Feel free to reach out for:
- 💼 Freelance projects and collaborations
- 🤝 Partnership opportunities
- 💡 Technical discussions and advice
- 🎯 Web development inquiries
- 📧 General inquiries and feedback

**Response Time:** Usually within 24-48 hours

## 🙏 Acknowledgments

Built with ❤️ using modern technologies and best practices:
- React & TypeScript teams
- Vite and Rolldown teams
- Tailwind CSS team
- Framer Motion creators
- All open-source contributors

---

<div align="center">

### 🌟 Show Your Support

If this project helped you, please consider:
- ⭐ **Starring the repository**
- 🔗 **Sharing with your network**
- 💬 **Providing feedback**
- 🤝 **Contributing improvements**

**Built with ❤️ by [Nitesh Chaudhari](https://github.com/NiteshChaudhari-exe)**

*Last Updated: January 2026*

</div>



