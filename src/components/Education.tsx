import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import school from "./assests/school.jpg"; 
import campus from "./assests/campus.png";

const Education = () => {
  const education = [
    {
      degree: "G.C.E. Advanced Level",
      institution: "N/W/P Balalla U.B Wanninayayaka N.S",
      location: "Maho, Sri Lanka",
      period: "2019 - 2022",
      description: "Technology Stream: Science for Tech, Eng Tech, ICT",
      highlights: ["Engineering Tech", "ICT", "Science for Tech"],
      image: school,
    },
    {
      degree: "B.Sc. in ICT (Hons)",
      institution: "University of Sri Jayewardenepura",
      location: "Nugegoda, Sri Lanka",
      period: "2023 - Present",
      description: "Specializing in Network Tech, Full Stack & Cloud Computing",
      highlights: ["Network Arch", "Software Eng", "Cloud Computing", "DevOps"],
      image: campus,
    },
  ];

  return (
    
    <section className="min-h-screen flex flex-col justify-center py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto w-full">
        
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
             My Education
            </span>
          </h2>
          <p className="text-gray-300 text-sm">My academic milestones</p>
        </motion.div>

        
        <div className="relative">
          
          <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 opacity-50" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-12 pb-8 last:pb-0"
            >
              
              <motion.div
                className="absolute left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 border-2 border-white/20 z-10 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                whileInView={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                
                
                <div className="absolute inset-0 z-0">
                  
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                
                <div className="relative z-10 p-5 md:p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
                    
                   
                    <div className="flex gap-4">
                     
                      <div className="p-2.5 h-fit rounded-xl bg-violet-500/30 border border-violet-500/40 backdrop-blur-md shadow-inner">
                        <GraduationCap className="w-6 h-6 text-violet-200" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-300 font-medium text-sm mb-2">
                          {edu.institution}
                        </p>
                        
                        <p className="text-gray-300 text-xs md:text-sm max-w-xl mb-3 leading-relaxed">
                          {edu.description}
                        </p>

                       
                        <div className="flex flex-wrap gap-1.5">
                          {edu.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20 text-gray-200 text-[10px] md:text-xs font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    
                    <div className="flex md:flex-col gap-3 md:gap-2 pl-12 md:pl-0 mt-2 md:mt-0 min-w-fit">
                      <div className="flex items-center gap-2 text-gray-200 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10 w-fit backdrop-blur-sm">
                        <Calendar className="w-3.5 h-3.5 text-violet-300" />
                        <span className="text-xs font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-200 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10 w-fit backdrop-blur-sm">
                        <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                        <span className="text-xs font-medium">{edu.location}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;