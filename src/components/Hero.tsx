import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import profileImg from '../assests/profile4.png';



const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-cyan-900/20" />

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 text-violet-300 text-sm">
              Network Technologist | Full Stack Developer | Cloud and DevOps
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Hi, I'm
            </span>
            <br />
            <span className="text-white">RAVIDU DILSHAN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-xl text-justify"
          >
            I am <span className="text-cyan-400 font-semibold">Ravidu Dilshan</span>. Welcome to my portfolio! I’m passionate about building modern, efficient, and secure digital solutions. Explore my work to learn more about my skills in Web development, networking, and cloud technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
        
            <a 
              href="/Ravidu_Dilshan_CV.pdf"  
              download="Ravidu_Dilshan_CV.pdf" 
              className="px-8 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-xs mx-auto">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-full overflow-hidden shadow-2xl p-2">
              <img 
                src={profileImg} 
                alt="Ravidu Dilshan" 
                className="w-full h-full object-cover rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;