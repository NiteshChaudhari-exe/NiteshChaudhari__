
# 🚀 Modern Developer Portfolio

> A beautiful, blazing-fast, and fully responsive developer portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.


![Live Preview](https://your-live-site-link.com/preview.png)

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



## 🚀 Deployment

This project is ready for deployment to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

**Production Checklist:**
- [x] All build and runtime errors resolved
- [x] All warnings (including Tailwind and chunk size) addressed
- [x] Code-splitting implemented for faster load times
- [x] Static assets (images, etc.) referenced from the public directory
- [x] Previewed production build and verified all sections/images

To deploy:
1. Push your code to GitHub:
  ```sh
  git add .
  git commit -m "Ready for deployment: code-splitting, image fixes, production build clean"
  git push origin main
  ```
2. Connect your repository to your preferred static hosting provider and follow their deployment instructions.

- Update your info, images, and content in the `src/components` and `src/assets` folders.
- Edit theme, colors, and layout in `tailwind.config.js` and `src/styles/globals.css`.
- Add or remove sections as needed for your personal brand.
- To customize the animated heart, edit `src/components/Footer.tsx` and `src/components/footer-heart-animate.css`.



## 📦 Available Scripts

- `npm run dev` — Start local dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code with ESLint



## 📸 Screenshots

Add screenshots or GIFs here to showcase your portfolio UI and animations:

![Home Section](https://your-live-site-link.com/screenshot-home.png)
![Projects Section](https://your-live-site-link.com/screenshot-projects.png)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Crafted with ❤️ by [Nitesh Chaudhari].



