import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import github from "./assests/Githubco.jpg";
import multi from "./assests/multi.jpg";
import cisco from "./assests/cisco.jpg";
import python from "./assests/python.jpg";
import linux from "./assests/linux.jpg";

const Certificates = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const certificates = [
    
    {
      title: "Multicloud Network Associate By Aviatrix",
      issuer: "Aviatrix",
      date: "2025",
      credentialId:
        "https://www.credly.com/badges/d597549c-45fa-4afc-8340-82de80ebcd82/linked_in_profile-2024",
      skills: ["Multicloud Networking", "Cloud Connectivity", "Network Security"],
      image: multi,
    },
    {
      title: "Introduction to Packet Tracers & Network Simulation",
      issuer: "Cisco",
      date: "2025",
      credentialId:
        "https://www.credly.com/badges/08b859b0-3e57-44ff-bcee-6134ab2aef1a/linked_in_profile",
      skills: ["Networking", "Routing", "Switching", "Security"],
      image: cisco,
    },
    {
      title: "Introduction to Programming Using Python",
      issuer: "University of Moratuwa",
      date: "2025",
      credentialId: "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1",
      skills: ["Python", "Programming Basics", "Problem Solving"],
      image: python,
    },
    {
      title: "Learning Linux Basics Course & Labs",
      issuer: "KodeKloud",
      date: "2025",
      credentialId: "https://learn.kodekloud.com/certificate/3bd66921-cb33-46b9-9333-cbf5bc44b6c3",
      skills: ["MERN Stack", "REST APIs", "Database Design", "Authentication"],
      image: linux,
    },
    {
      title: "GitHub Copilot Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      credentialId: "https://simpli-web.app.link/e/oZGzR8PeIWb",
      skills: ["GitHub Copilot","Version Control","Github fundamentals"],
      image: github,
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 370;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="certs" className="min-h-screen py-20 px-4 md:px-8">
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
             My Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Professional credentials and achievements</p>
        </motion.div>

       
        <div className="relative">

          
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
                       p-3 rounded-full bg-black/60 text-white border border-white/10
                       hover:bg-violet-500/60 hover:border-violet-500 
                       transition-all duration-300 backdrop-blur-md
                       flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                       p-3 rounded-full bg-black/60 text-white border border-white/10
                       hover:bg-cyan-500/60 hover:border-cyan-500
                       transition-all duration-300 backdrop-blur-md
                       flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
           
            <style>
              {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
            </style>

            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-center shrink-0 w-[350px]"
              >
                <div className="h-full backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] 
                                border border-white/10 rounded-3xl p-6 hover:border-violet-500/50 
                                transition-all duration-300 group hover:scale-105 flex flex-col">

                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 
                                    border border-violet-500/30 group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-violet-400" />
                    </div>

                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </motion.div>
                  </div>

                  
                  <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden border border-white/10 
                                  relative group-hover:border-violet-500/30 transition-colors">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-80 
                                 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">Issued: {cert.date}</p>

                 
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full backdrop-blur-xl bg-white/5 
                                   border border-white/10 text-gray-300 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                 
                  <a
                    href={cert.credentialId}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 rounded-xl backdrop-blur-xl 
                               bg-gradient-to-r from-violet-500/20 to-cyan-500/20 
                               border border-violet-500/30 text-white font-medium 
                               flex items-center justify-center gap-2 
                               hover:from-violet-500/30 hover:to-cyan-500/30 
                               transition-all duration-300 group-hover:scale-105"
                  >
                    Verify Credential
                    <ExternalLink className="w-4 h-4" />
                  </a>

                </div>
              </motion.div>
            ))}
          </div>

         
          <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
