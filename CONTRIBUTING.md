# Contributing to My Portfolio

First off, thank you for considering contributing! This project is open to all kinds of contributions and feedback.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## How to Contribute

### 1. **Report Bugs**
- Check if the bug already exists in [Issues](https://github.com/NiteshChaudhari-exe/my-portfolio/issues)
- If not, create a new issue with:
  - Clear description of the problem
  - Steps to reproduce
  - Expected vs actual behavior
  - Browser/OS information
  - Screenshots if applicable

### 2. **Suggest Features**
- Open an issue with the `enhancement` label
- Describe the feature and why it would be useful
- Provide examples or mockups if possible

### 3. **Submit Code Changes**
1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/my-portfolio.git
   cd my-portfolio
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Use TypeScript for type safety
   - Add comments for complex logic
   - Keep components modular and reusable

4. **Test your changes**
   ```bash
   npm run lint
   npm run build
   npm run preview
   ```

5. **Commit with semantic messages**
   ```bash
   git commit -m "feat: add amazing feature"
   git commit -m "fix: resolve bug in component"
   git commit -m "docs: update documentation"
   git commit -m "style: format code with prettier"
   git commit -m "refactor: improve component performance"
   ```

   **Commit types:**
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code formatting (no functional changes)
   - `refactor:` - Code refactoring without feature changes
   - `test:` - Test additions or modifications
   - `chore:` - Build process, dependencies, etc.

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Go to GitHub and create a new PR
   - Provide a clear description of your changes
   - Reference any related issues
   - Wait for review and feedback

## Development Workflow

### Setup
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:5173`

### Linting
```bash
npm run lint
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Code Style Guidelines

- **TypeScript**: Use strict mode, add type annotations
- **React**: Use functional components with hooks
- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Components**: Keep components small and focused on a single responsibility
- **Styling**: Use Tailwind CSS utility classes, avoid inline styles
- **Comments**: Add comments for complex logic, not obvious code

### Example Component Structure

```typescript
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export function MyComponent({ title, onAction }: MyComponentProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [state, setState] = useState(false);

  return (
    <section ref={ref} className={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2>{title}</h2>
      {/* Component content */}
    </section>
  );
}
```

## Pull Request Requirements

Before submitting a PR, ensure:
- ✅ Code passes linting (`npm run lint`)
- ✅ No TypeScript errors
- ✅ Build succeeds (`npm run build`)
- ✅ Responsive design works on mobile/tablet/desktop
- ✅ Dark mode works correctly (if applicable)
- ✅ All links and forms work
- ✅ No console errors or warnings
- ✅ Meaningful commit messages with semantic prefixes
- ✅ Updated documentation if needed

## Project Structure

```
src/
├── components/     # React components
├── contexts/       # React contexts (theming, state)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and helpers
├── styles/         # Global CSS
└── utils/          # Additional utilities
```

## Technologies

- **React 19** — UI framework
- **TypeScript 5.9** — Type safety
- **Vite 7** — Build tool
- **Tailwind CSS 3.4** — Styling
- **Framer Motion 12** — Animations
- **ESLint** — Code quality

## Questions?

- Open a [Discussion](https://github.com/NiteshChaudhari-exe/my-portfolio/discussions)
- Check [Issues](https://github.com/NiteshChaudhari-exe/my-portfolio/issues)
- Email: chaudharinitesh485@gmail.com

Thank you for contributing! 🙌
