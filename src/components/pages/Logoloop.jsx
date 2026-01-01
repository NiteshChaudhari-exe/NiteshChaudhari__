import LogoLoop from '../LogoLoop';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiRedux, SiSass, SiBootstrap, SiVite, SiGit, SiFigma,
  SiFramer, SiGreensock, SiThreedotjs, SiBlender,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiGraphql, SiDocker, SiFirebase, SiPrisma, SiPython, SiDjango,
  SiKalilinux, SiWireshark, SiMetasploit, SiBurpsuite, SiLinux, SiGnubash, SiGithub,
  SiMui, SiChakraui, SiStyledcomponents, SiWebpack, SiBabel, SiEslint, SiPrettier, SiStorybook, SiCypress, SiSvg,
  SiApollographql, SiSwagger, SiRedis, SiSupabase, SiNetlify, SiVercel, SiHeroku, SiJest, SiMocha, SiGithubactions, SiTravisci, SiCircleci,
  SiOwasp, SiTorbrowser, SiOpenssl, SiVirtualbox, SiVmware, SiGooglecloud, SiDigitalocean, SiTerraform, SiKubernetes,
  SiMarkdown, SiNotion, SiSlack, SiTrello, SiJira, SiZapier
} from 'react-icons/si';

const techLogos = [
  // Web Development
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
//   { node: <SiEmotion />, title: "Emotion", href: "https://emotion.sh/" },
  { node: <SiWebpack />, title: "Webpack", href: "https://webpack.js.org/" },
//   { node: <SiBabel />, title: "Babel", href: "https://babeljs.io/" },
  { node: <SiEslint />, title: "ESLint", href: "https://eslint.org/" },
  { node: <SiPrettier />, title: "Prettier", href: "https://prettier.io/" },
  { node: <SiStorybook />, title: "Storybook", href: "https://storybook.js.org/" },
  { node: <SiCypress />, title: "Cypress", href: "https://www.cypress.io/" },
  // Animations
  { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { node: <SiGreensock />, title: "GSAP", href: "https://greensock.com/gsap/" },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org/" },
//   { node: <SiLottiefiles />, title: "Lottie", href: "https://lottiefiles.com/" },
  { node: <SiBlender />, title: "Blender", href: "https://www.blender.org/" },
//   { node: <SiAnime />, title: "Anime.js", href: "https://animejs.com/" },
//   { node: <SiD3dotjs />, title: "D3.js", href: "https://d3js.org/" },
  { node: <SiSvg />, title: "SVG", href: "https://developer.mozilla.org/en-US/docs/Web/SVG" },
  // Fullstack
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com/" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org/" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com/" },
//   { node: <SiAmazonaws />, title: "AWS", href: "https://aws.amazon.com/" },
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
//   { node: <SiTravisci />, title: "Travis CI", href: "https://travis-ci.com/" },
//   { node: <SiCircleci />, title: "CircleCI", href: "https://circleci.com/" },
  // Cyber/Ethical Hacking
  { node: <SiKalilinux />, title: "Kali Linux", href: "https://www.kali.org/" },
//   { node: <SiNmap />, title: "Nmap", href: "https://nmap.org/" },
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
  // Cloud & Infra
  { node: <SiGooglecloud />, title: "Google Cloud", href: "https://cloud.google.com/" },
//   { node: <SiMicrosoftazure />, title: "Azure", href: "https://azure.microsoft.com/" },
//   { node: <SiDigitalocean />, title: "DigitalOcean", href: "https://www.digitalocean.com/" },
//   { node: <SiTerraform />, title: "Terraform", href: "https://www.terraform.io/" },
//   { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io/" },
  // Other
  { node: <SiMarkdown />, title: "Markdown", href: "https://www.markdownguide.org/" },
  { node: <SiNotion />, title: "Notion", href: "https://www.notion.so/" },
  { node: <SiSlack />, title: "Slack", href: "https://slack.com/" },
  { node: <SiTrello />, title: "Trello", href: "https://trello.com/" },
  { node: <SiJira />, title: "Jira", href: "https://www.atlassian.com/software/jira" },
  { node: <SiZapier />, title: "Zapier", href: "https://zapier.com/" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function Logoloop() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
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
      
      {/* Vertical loop with deceleration on hover */}
     {/* <LogoLoop
        logos={techLogos}
        speed={80}
        direction="up"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      /> */}
    </div>
  );
}

export default Logoloop;