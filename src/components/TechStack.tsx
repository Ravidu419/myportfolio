import { motion } from 'framer-motion';
import { Network, Code2, Cloud, Database, GitBranch, Terminal, Lock } from 'lucide-react';

const bgImages = {
  network: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
  fullstack: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2069&auto=format&fit=crop",
  cloud: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  database: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  git: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop",
  devops: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop"
};

const TechStack = () => {
  const techCategories = [
    {
      title: 'Network & Security',
      icon: Network,
      color: 'violet',
      image: bgImages.network,
      skills: ['TCP/IP', 'Routing & Switching', 'Cisco Packet Tracer', 'Network Security', ],
    },
    {
      title: 'Full Stack Development',
      icon: Code2,
      color: 'cyan',
      image: bgImages.fullstack,
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'violet',
      image: bgImages.cloud,
      skills: ['AWS', 'Docker', 'Git', 'Linux', 'CI/CD'],
    },
    {
      title: 'Database Technologies',
      icon: Database,
      color: 'cyan',
      image: bgImages.database,
      skills: ['MongoDB', 'Fire Base', 'SQL'],
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      color: 'violet',
      image: bgImages.git,
      skills: ['Git', 'GitHub', 'GitLab', 'Version Control', 'Collaboration'],
    },
    {
      title: 'DevOps Tools',
      icon: Terminal,
      color: 'cyan',
      image: bgImages.devops,
      skills: [ 'Docker Compose', 'GitHub Actions', 'Bash', 'Automation'],
    },
  ];

  const getColorClasses = (color: string) => {
    if (color === 'violet') {
      return {
        border: 'border-violet-500/30',
        hoverBorder: 'group-hover:border-violet-500',
        overlayBg: 'bg-violet-950/20',
        iconBg: 'bg-violet-500/100',
        iconColor: 'text-violet-400',
        glow: 'group-hover:shadow-violet-500/50',
      };
    }
    return {
      border: 'border-cyan-500/30',
      hoverBorder: 'group-hover:border-cyan-500',
      overlayBg: 'bg-cyan-950/40',
      iconBg: 'bg-cyan-500/20',
      iconColor: 'text-cyan-400',
      glow: 'group-hover:shadow-cyan-500/50',
    };
  };

  return (
    <section id="stack" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden border ${colors.border} ${colors.hoverBorder} rounded-3xl hover:shadow-2xl ${colors.glow} transition-all duration-300 h-full`}
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className={`absolute inset-0 ${colors.overlayBg} transition-opacity duration-300 group-hover:opacity-70`} />
                </div>

                <div className="relative z-10 p-6 h-full flex flex-col bg-black/10 backdrop-blur-[2px]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl ${colors.iconBg} backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform`}>
                      <category.icon className={`w-6 h-6 ${colors.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white drop-shadow-lg shadow-black">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full backdrop-blur-md bg-black/40 border border-white/10 text-gray-100 text-sm font-medium hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-violet-500/10 border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="w-8 h-8 text-violet-400" />
              <h3 className="text-2xl font-bold text-white">Security & Best Practices</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Committed to implementing industry-standard security practices, including secure coding, network security protocols, and cloud security best practices. Always staying updated with the latest cybersecurity trends and DevSecOps methodologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;