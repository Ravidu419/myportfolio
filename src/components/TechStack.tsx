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
    { title: 'Network & Security', icon: Network, color: 'violet', image: bgImages.network, skills: ['TCP/IP', 'Routing', 'Packet Tracer', 'Security'] },
    { title: 'Full Stack Dev', icon: Code2, color: 'cyan', image: bgImages.fullstack, skills: ['React', 'Node', 'Express', 'MongoDB'] },
    { title: 'DevOps & Cloud', icon: Cloud, color: 'violet', image: bgImages.cloud, skills: ['AWS', 'Docker', 'Git', 'Linux'] },
    { title: 'Database', icon: Database, color: 'cyan', image: bgImages.database, skills: ['MongoDB', 'Fire Base', 'SQL'] },
    { title: 'Version Control', icon: GitBranch, color: 'violet', image: bgImages.git, skills: ['Git', 'GitHub', 'GitLab'] },
    { title: 'DevOps Tools', icon: Terminal, color: 'cyan', image: bgImages.devops, skills: ['Docker Compose', 'Actions', 'Bash'] },
  ];

  return (
    
    <section id="stack" className="min-h-screen w-full flex flex-col justify-center py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              My Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-sm">My Technical Arsenal</p>
        </motion.div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techCategories.map((category, index) => {
            const isViolet = category.color === 'violet';
            const accentColor = isViolet ? 'text-violet-400' : 'text-cyan-400';
            const borderColor = isViolet ? 'group-hover:border-violet-500/50' : 'group-hover:border-cyan-500/50';

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                
                className={`
                    group relative overflow-hidden rounded-2xl h-48 border border-white/10 
                    ${borderColor} transition-all duration-300 hover:shadow-xl cursor-default
                `}
              >
                
                <div className="absolute inset-0">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

               
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                
                <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                  
                 
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-1">
                        <category.icon className={`w-5 h-5 ${accentColor}`} />
                        <h3 className="text-lg font-bold text-white shadow-black drop-shadow-md">
                            {category.title}
                        </h3>
                    </div>
                    <div className={`h-0.5 w-8 rounded-full ${isViolet ? 'bg-violet-500' : 'bg-cyan-500'} mb-3`} />
                  </div>

                  
                  <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] md:text-xs font-medium text-gray-200 bg-white/10 border border-white/10 rounded-full"
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Lock className="w-3 h-3 text-gray-400" />
            <p className="text-xs text-gray-400">
              Secured with industry standards & DevSecOps practices
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;