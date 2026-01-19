# Setup & Installation Guide

## Quick Start

### Prerequisites
- Node.js 18.x or 20.x
- npm or yarn package manager
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/NiteshChaudhari-exe/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your configuration:

```env
# Email Service - Choose one:

# Option A: EmailJS (Recommended)
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Option B: Formspree
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id

# Optional: reCAPTCHA
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here

# Optional: Analytics
VITE_GA_ID=your_google_analytics_id
```

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## Email Service Configuration

### Setting Up EmailJS

1. **Create Account**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account
   - Create a new service

2. **Get Credentials**
   - Service ID: Found in "Email Services" section
   - Template ID: Create a template in "Email Templates" section
   - Public Key: Found in "Account" > "API Keys"

3. **Create Email Template**
   Template variables available:
   ```
   {{from_name}}      - Sender's name
   {{from_email}}     - Sender's email
   {{message}}        - Message content
   {{reply_to}}       - Reply email
   {{to_email}}       - Your email address
   ```

4. **Add to `.env.local`**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_xxxxx
   ```

### Setting Up Formspree

1. **Create Account**
   - Go to [formspree.io](https://formspree.io/)
   - Sign up or log in

2. **Create Form**
   - Create a new form
   - Copy your form endpoint

3. **Add to `.env.local`**
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```

### Setting Up reCAPTCHA (Optional)

1. **Register Site**
   - Go to [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
   - Create a new site (reCAPTCHA v3 recommended)

2. **Get Keys**
   - Site Key: For frontend
   - Secret Key: For backend validation

3. **Add to `.env.local`**
   ```env
   VITE_RECAPTCHA_SITE_KEY=your_site_key_here
   VITE_RECAPTCHA_SECRET_KEY=your_secret_key_here
   ```

---

## Development Commands

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

---

## Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   ├── ErrorBoundary.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── ... other components
├── contexts/            # React context & providers
│   ├── ThemeContext.tsx
│   └── useTheme.ts
├── hooks/               # Custom React hooks
│   ├── useActiveSection.ts
│   └── useScrollAnimation.ts
├── lib/                 # Utilities & services
│   ├── formService.ts   # Email submission service
│   └── utils.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── styles/              # Global styles
│   └── globals.css
└── App.tsx             # Main application component
```

---

## Customization Guide

### Update Personal Information

1. **Hero Section** - [src/components/Hero.tsx](src/components/Hero.tsx)
   - Update roles, headline, description

2. **About Section** - [src/components/About.tsx](src/components/About.tsx)
   - Add your bio, skills, experience

3. **Projects Section** - [src/components/Projects.tsx](src/components/Projects.tsx)
   - Add your portfolio projects

4. **Contact Section** - [src/components/Contact.tsx](src/components/Contact.tsx)
   - Update email, phone, social links

5. **SEO** - [src/components/SEO.tsx](src/components/SEO.tsx)
   - Update meta tags and Open Graph

### Replace Images

Place your images in `public/assets/`:
- Profile photo: `public/assets/me.jpg`
- Project screenshots: `public/assets/project-*.jpg`

### Update Social Links

Update social media links in:
- [src/components/Hero.tsx](src/components/Hero.tsx)
- [src/components/Footer.tsx](src/components/Footer.tsx)

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in project settings

3. **Environment Variables in Vercel**
   - Add same variables from `.env.local`
   - Deploy

### Deploy to Netlify

1. **Connect to GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Connect your repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Add Environment Variables**
   - Go to Site settings > Build & deploy
   - Add environment variables

---

## Troubleshooting

### Email Form Not Sending

**Issue:** "Email service not configured"
- **Solution:** Ensure `.env.local` has correct EmailJS or Formspree credentials

**Issue:** CORS Error
- **Solution:** EmailJS handles CORS automatically. For custom backend, configure CORS headers

### Dark Mode Not Working

**Issue:** Theme not persisting
- **Solution:** Check if localStorage is enabled in browser

### Build Fails

**Issue:** TypeScript errors
- **Solution:** Run `npm run lint` to check errors

**Issue:** Module not found
- **Solution:** Run `npm install` to ensure all dependencies are installed

### Performance Issues

**Tip:** Run `npm run build` locally to check bundle size
**Tip:** Use browser DevTools Performance tab to profile

---

## Best Practices

### Code Quality
- Run `npm run lint` before committing
- Write meaningful commit messages
- Keep components modular and reusable

### Security
- Never commit `.env.local` (added to `.gitignore`)
- Always validate and sanitize form inputs
- Use environment variables for sensitive data

### Performance
- Images: Optimize size before adding (< 200KB recommended)
- Lazy load components where applicable
- Monitor bundle size with `npm run build`

### Accessibility
- Test with keyboard navigation
- Use semantic HTML
- Test with screen readers
- Ensure sufficient color contrast

---

## Support & Resources

- **GitHub Issues:** [Report bugs](https://github.com/NiteshChaudhari-exe/my-portfolio/issues)
- **Discussions:** [Ask questions](https://github.com/NiteshChaudhari-exe/my-portfolio/discussions)
- **Documentation:**
  - [Vite Guide](https://vitejs.dev)
  - [React Docs](https://react.dev)
  - [TypeScript Handbook](https://www.typescriptlang.org/docs/)
  - [Tailwind CSS](https://tailwindcss.com)

---

## License

MIT License - See [LICENSE](LICENSE) for details
