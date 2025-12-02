import { motion } from 'framer-motion';
import { User, Server, Cloud, Code2, Cpu, Globe, Zap } from 'lucide-react';
import logo from "./assests/sjp.png"; 
const About = () => {
  const skills = [
    { icon: Server, title: "DevOps", desc: "CI/CD & Automation", color: "text-violet-400" },
    { icon: Cloud, title: "AWS Cloud", desc: "Scalable Infrastructure", color: "text-cyan-400" },
    { icon: Globe, title: "Networking", desc: "Network Security", color: "text-violet-400" },
    { icon: Code2, title: "Full Stack", desc: "MERN Development", color: "text-cyan-400" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My journey into Tech & Infrastructure</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           
            className="lg:col-span-2 p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-violet-500/30 shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -z-10 group-hover:bg-violet-500/20 transition-all duration-500" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/5 rounded-lg">
                <User className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Who Am I?</h3>
            </div>

            
            <p className="text-gray-300 leading-relaxed mb-6 text-lg text-justify">
              I'm <span className="text-white font-semibold">Ravidu Dilshan</span>, a passionate technologist bridging the gap between <span className="text-cyan-400">Full stack Development</span> and <span className="text-violet-800">DevOps Technologies</span>.
            </p>
            
            
            <p className="text-gray-400 leading-relaxed mb-8 text-justify">
              I am an undergraduate student studying BICT (Hons) at the University of Sri Jayewardenepura, specializing in Network Technology. Throughout my degree, I have developed a strong interest in computer networks, cybersecurity, DevOps, cloud computing, and modern cloud-based systems. I enjoy learning how large systems work, how data moves across networks, and how technology can be used to build fast, secure, and reliable services.
            </p>

            <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
              <div className="p-3 rounded-xl bg-violet-500/20">
                 
                 <img src={logo} alt="University Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Education</p>
                <p className="text-white font-medium">BICT @ University of Sri Jayewardenepura</p>
                <p className="text-sm text-cyan-400">Faculty of Technology</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {skills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
            <div className="md:col-span-3 p-1 rounded-3xl bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-violet-500/20">
                <div className="h-full bg-black/40 backdrop-blur-xl rounded-[22px] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0" />
                            <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                        </div>
                        <p className="text-gray-300">Currently studing <span className="text-white font-bold">AWS Serverless Architecture</span> & <span className="text-white font-bold">Kubernetes</span></p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <Cpu className="w-4 h-4 text-violet-400" />
                            <span className="text-sm text-gray-300">Tech Enthusiast</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <Zap className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm text-gray-300">Fast Learner</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;