# 🚀 Modern Developer Portfolio

>A beautiful, blazing-fast, and fully responsive developer portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

![Live Preview]()

## ✨ Features

- Animated hero section with dynamic roles
- About, Skills, Projects, Experience, Certifications, Blog, Testimonials, and Contact sections
- Modern UI/UX with dark mode support
- Smooth scroll navigation and scroll-triggered animations
- Stats counter, logo loop, and interactive elements
- SEO optimized and mobile-first design
- Toast notifications and loading screen
- Modular, maintainable code structure

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS, Framer Motion, Lucide Icons
- **UI/UX:** Responsive design, custom components, dark mode
- **Other:** ESLint, Prettier, Shadcn, OGL, React Icons

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

## 📝 Customization

- Update your info, images, and content in the `src/components` and `src/assets` folders.
- Edit theme, colors, and layout in `tailwind.config.js` and `src/styles/globals.css`.
- Add or remove sections as needed for your personal brand.

## 📦 Available Scripts

- `npm run dev` — Start local dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code with ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Crafted with ❤️ by [Nitesh Chaudhari].


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
