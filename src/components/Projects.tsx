import { motion } from 'framer-motion';
import { Github, ExternalLink, } from 'lucide-react';
import citizen from './assests/citizen.jpg';
import cal from './assests/cal.png';

const Projects = () => {
  const projects = [
    {
      title: 'Full Automated CI/CD Pipeline',
      description: 'Enterprise-grade continuous integration and deployment pipeline using Github actions, Docker, and AWS EC2 for automated testing and deployment.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Docker', 'Github Actions', 'AWS', 'Git', 'Automation'],
      github: '#',
      live: '#',
    },
    
    {
      title: 'Citizen Voice – A Full-Stack Civic Tech Platform',
      description: 'Modern e-commerce solution with React frontend, Node.js backend, MongoDB database, and integrated payment processing.',
      image: citizen,
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      github: 'https://github.com/hashalagayendra/Citizen-Voice.git',
      live: '#',
    },
    
    {
      title: 'CI/CD Automation Simple Calculator Web App',
      description: 'A simple calculator web application demonstrating CI/CD automation using Docker and Bash scripts for streamlined deployment and updates.',
      image: cal,
      tags: ['Bash', 'Docker', 'Github Actions', 'Scripts'],
      github: '#',
      live: '#',
    },

  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 md:px-8">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my latest work and innovations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.github}
                    className="p-2 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 text-xs hover:border-violet-500/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-violet-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Ravidu419"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 text-white font-medium hover:from-violet-500/30 hover:to-cyan-500/30 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
