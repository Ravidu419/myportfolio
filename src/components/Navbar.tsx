import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Award, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Code, label: 'Stack', href: '#stack' },
    { icon: Briefcase, label: 'Projects', href: '#projects' }, 
    { icon: Award, label: 'Certs', href: '#certs' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-4 right-4 md:top-8 md:right-8 z-50"
    >
      <div className="backdrop-blur-3xl bg-white/5 border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <ul className="flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <item.icon className="w-4 h-4 text-cyan-400 group-hover:text-violet-400 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white hidden md:block">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
