import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    resources: [
      { label: 'Blog', href: '#blog' },
      { label: 'Experience', href: '#experience' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
              N<Heart size={15} className="text-red-500 fill-red-500" />
            </div>
            <p className="text-gray-400 mb-4 hover:text-white transition-color hover:scale-105 duration-1000">
              Building amazing digital experiences with passion and precision.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:scale-105 duration-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:scale-105 duration-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Get In Touch</h4>
            <p className="text-gray-400 mb-2 hover:scale-105 duration-1000 hover:text-white transition-colors">chaudharinitesh485@gmail.com</p>
            <p className="text-gray-400 mb-2 hover:scale-105 duration-1000 hover:text-white transition-colors">+977 9821750929</p>
            <p className="text-gray-400 hover:scale-105 duration-1000 hover:text-white transition-colors">Kathmandu, Nepal (Asia)</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
            © {currentYear} Nitesh Chaudhari.
           
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1 hover:text-white transition-colors">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> and lots of coffee.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 hover:text-white transition-colors">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors ">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

