
# 🚀 Modern Developer Portfolio

> A beautiful, blazing-fast, and fully responsive developer portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.


**Status:** [✅ Live Preview](https://niteshchaudhari.vercel.app/)

---



## ✨ Features

- Animated hero section with dynamic roles
- About, Skills, Projects, Experience, Certifications, Blog, Testimonials, and Contact sections
- Modern UI/UX with dark mode support
- Smooth scroll navigation and scroll-triggered animations
- Stats counter, logo loop, and interactive elements
- SEO optimized and mobile-first design
- Toast notifications and loading screen
- Modular, maintainable code structure
- **Animated gradient heart icon in the footer**
- **Code-splitting for optimal performance**


## 🛠️ Tech Stack & Dependencies

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS, Framer Motion, Lucide Icons
- **UI/UX:** Responsive design, custom components, dark mode
- **Other:** ESLint, Prettier, Shadcn, OGL, React Icons
- **Animation:** Custom CSS/SVG for animated icons


## 📁 Project Structure

```
├── public/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # UI components (Hero, About, Projects, etc.)
│   ├── contexts/         # React context providers (Theme, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   ├── styles/           # Global and component styles
│   ├── utils/            # Utility functions (toast, etc.)
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html
├── package.json
└── ...
```



## 🚦 Getting Started

1. **Clone the repo:**
   ```sh
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production:**
  ```sh
  npm run build
  # or
  yarn build
  ```

5. **Preview the production build:**
  ```sh
  npm run preview
  ```
  Then open [http://localhost:4173](http://localhost:4173) (or the port shown in your terminal) to verify everything works as expected.



## � Customization

### Edit Your Information
- Update your info, images, and content in the `src/components` and `public/assets` folders.
- Edit theme, colors, and layout in `tailwind.config.js` and `src/styles/globals.css`.
- Add or remove sections as needed for your personal brand.

### Key Files to Modify
- **Hero Section:** `src/components/Hero.tsx` — Update your headline, subtitle, and CTA
- **About Section:** `src/components/About.tsx` — Update bio and add your image to `public/assets`
- **Projects:** `src/components/Projects.tsx` — Add your real GitHub and demo links
- **Experience:** `src/components/Experience.tsx` — Update your work history
- **Skills:** `src/components/Skills.tsx` — Customize your tech stack
- **Contact:** `src/components/Contact.tsx` — Update your contact info
- **Footer:** `src/components/Footer.tsx` — Add your social media links
- **Animated Heart:** To customize, edit `src/components/Footer.tsx` and `src/components/footer-heart-animate.css`
- **SEO:** `src/components/SEO.tsx` — Update meta tags and canonical URL

## 🚀 Deployment

This project is production-ready and deployed to **[Vercel](https://niteshchaudhari.vercel.app/)**.

### Deployment Steps
1. **Push to GitHub:**
   ```sh
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
2. **Deploy to Vercel:**
   - Connect your GitHub repository to [Vercel](https://vercel.com)
   - Vercel will automatically build and deploy on every push to main
   - Your site will be live at a Vercel URL

### Alternative Deployment
- **Netlify:** Connect repo, build command: `npm run build`, publish directory: `dist`
- **GitHub Pages:** Use gh-pages package or GitHub Actions
- **Other Hosts:** Run `npm run build` and deploy the `dist` folder

### Production Checklist
- [x] All build and runtime errors resolved
- [x] All warnings (including Tailwind and chunk size) addressed
- [x] Code-splitting implemented for faster load times
- [x] Static assets referenced from public directory
- [x] SEO optimized with meta tags and structured data
- [x] Tested on mobile and desktop browsers
- [x] Dark mode fully functional



## 📦 Available Scripts

- `npm run dev` — Start local dev server with HMR
- `npm run build` — Build for production with optimizations
- `npm run preview` — Preview the production build locally
- `npm run lint` — Check code with ESLint

## 🔍 SEO & Performance

- **SEO:** Fully optimized with meta tags, structured data (schema.org), and Open Graph tags
- **Performance:** Code-splitting enabled, lazy-loaded components, optimized images
- **Accessibility:** WCAG compliant, semantic HTML, ARIA labels
- **Dark Mode:** Native dark mode support with theme persistence

## 📚 Technologies

- **React 19** — UI library with hooks and suspense
- **TypeScript** — Type safety and better DX
- **Vite** — Fast build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations and transitions
- **Lucide Icons** — Beautiful SVG icons

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio. Contributions are welcome!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact & Socials

- **Website:** [niteshchaudhari.vercel.app](https://niteshchaudhari.vercel.app/)
- **GitHub:** [NiteshChaudhari-exe](https://github.com/NiteshChaudhari-exe)
- **LinkedIn:** Update in Footer.tsx
- **Email:** Update in Contact.tsx

---

> Built with ❤️ by [Nitesh Chaudhari](https://github.com/NiteshChaudhari-exe)
>
> *Last Updated: January 2026*



