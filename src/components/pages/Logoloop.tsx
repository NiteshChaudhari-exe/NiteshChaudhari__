import '../customTransitions.css';
import LogoLoop from '../LogoLoop';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiSass, SiBootstrap, SiVite, SiGit, SiFigma,
  SiMui, SiChakraui, SiStyledcomponents, SiWebpack, SiEslint, SiPrettier, SiStorybook, SiCypress, SiFramer, SiGreensock, SiThreedotjs, SiBlender, SiSvg,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiGraphql, SiDocker, SiFirebase, SiPrisma, SiPython, SiDjango,
  SiApollographql, SiSwagger, SiRedis, SiSupabase, SiNetlify, SiVercel, SiHeroku, SiJest, SiMocha, SiGithubactions,
  SiKalilinux, SiWireshark, SiMetasploit, SiBurpsuite, SiLinux, SiGnubash, SiGithub, SiOwasp, SiTorbrowser, SiOpenssl, SiVirtualbox, SiVmware, SiGooglecloud,
  SiMarkdown, SiNotion, SiSlack, SiTrello, SiJira, SiZapier
} from 'react-icons/si';

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org/" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiSass />, title: "Sass", href: "https://sass-lang.com/" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com/" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev/" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com/" },
  { node: <SiMui />, title: "Material UI", href: "https://mui.com/" },
  { node: <SiChakraui />, title: "Chakra UI", href: "https://chakra-ui.com/" },
  { node: <SiStyledcomponents />, title: "Styled Components", href: "https://styled-components.com/" },
  { node: <SiWebpack />, title: "Webpack", href: "https://webpack.js.org/" },
  { node: <SiEslint />, title: "ESLint", href: "https://eslint.org/" },
  { node: <SiPrettier />, title: "Prettier", href: "https://prettier.io/" },
  { node: <SiStorybook />, title: "Storybook", href: "https://storybook.js.org/" },
  { node: <SiCypress />, title: "Cypress", href: "https://www.cypress.io/" },
  { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { node: <SiGreensock />, title: "GSAP", href: "https://greensock.com/gsap/" },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org/" },
  { node: <SiBlender />, title: "Blender", href: "https://www.blender.org/" },
  { node: <SiSvg />, title: "SVG", href: "https://developer.mozilla.org/en-US/docs/Web/SVG" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com/" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org/" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com/" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io/" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com/" },
  { node: <SiApollographql />, title: "Apollo GraphQL", href: "https://www.apollographql.com/" },
  { node: <SiSwagger />, title: "Swagger", href: "https://swagger.io/" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io/" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com/" },
  { node: <SiNetlify />, title: "Netlify", href: "https://www.netlify.com/" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com/" },
  { node: <SiHeroku />, title: "Heroku", href: "https://www.heroku.com/" },
  { node: <SiJest />, title: "Jest", href: "https://jestjs.io/" },
  { node: <SiMocha />, title: "Mocha", href: "https://mochajs.org/" },
  { node: <SiGithubactions />, title: "GitHub Actions", href: "https://github.com/features/actions" },
  { node: <SiKalilinux />, title: "Kali Linux", href: "https://www.kali.org/" },
  { node: <SiWireshark />, title: "Wireshark", href: "https://www.wireshark.org/" },
  { node: <SiMetasploit />, title: "Metasploit", href: "https://www.metasploit.com/" },
  { node: <SiBurpsuite />, title: "Burp Suite", href: "https://portswigger.net/burp" },
  { node: <SiLinux />, title: "Linux", href: "https://www.linux.org/" },
  { node: <SiGnubash />, title: "Bash", href: "https://www.gnu.org/software/bash/" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
  { node: <SiOwasp />, title: "OWASP", href: "https://owasp.org/" },
  { node: <SiTorbrowser />, title: "Tor", href: "https://www.torproject.org/" },
  { node: <SiOpenssl />, title: "OpenSSL", href: "https://www.openssl.org/" },
  { node: <SiVirtualbox />, title: "VirtualBox", href: "https://www.virtualbox.org/" },
  { node: <SiVmware />, title: "VMware", href: "https://www.vmware.com/" },
  { node: <SiGooglecloud />, title: "Google Cloud", href: "https://cloud.google.com/" },
  { node: <SiMarkdown />, title: "Markdown", href: "https://www.markdownguide.org/" },
  { node: <SiNotion />, title: "Notion", href: "https://www.notion.so/" },
  { node: <SiSlack />, title: "Slack", href: "https://slack.com/" },
  { node: <SiTrello />, title: "Trello", href: "https://trello.com/" },
  { node: <SiJira />, title: "Jira", href: "https://www.atlassian.com/software/jira" },
  { node: <SiZapier />, title: "Zapier", href: "https://zapier.com/" },
];

function Logoloop() {
  return (
    <div className="logoloop-container">
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={60}
        direction="left"
        logoHeight={55}
        gap={80}
        hoverSpeed={20}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default Logoloop;
