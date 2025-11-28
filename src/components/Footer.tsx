import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Heart, Code } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ravidu419', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ravidu-dilshan-b2b6a6320/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://web.facebook.com/ravidu.dilshan.rathnayaka', label: 'Facebook' },
  ];

  return (
    <footer className="py-12 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-gray-400"
          >
            <Code className="w-5 h-5 text-violet-400" />
            <span>Powered by</span>
            
            <span><b>Ravidu Dilshan</b></span><Heart className="w-4 h-4 text-red-400 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-violet-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm"
          >
            © 2025 All rights reserved
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
