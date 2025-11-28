import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

// Correct asset folder name (must be 'assets')
import campus from "./assests/school.jpg";
import school from "./assests/campus.png";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Information and Communication Technology",
      institution: "University of Sri Jayewardenepura",
      location: "Nugegoda, Sri Lanka",
      period: "2023 - Present",
      description:
        "Specializing in Network Technologies, Full Stack Development, and Cloud Computing",
      highlights: [
        "Network Architecture",
        "Software Engineering",
        "Cloud Computing",
        "DevOps Practices",
      ],
      image: campus,
    },
    {
      degree: "G.C.E. Advanced Level (Technology Stream)",
      institution:
        "N/W/P Balalla U.B Wanninayayaka National School",
      location: "Maho, Sri Lanka",
      period: "2019 - 2022",
      description:
        "Completed G.C.E. Advanced Level examination in Technology Stream",
      highlights: [
        "Science for Technology",
        "Engineering Technology",
        "Information and Communication Technology",
      ],
      image: school,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My academic journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-24 pb-12"
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 border-4 border-black z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(139, 92, 246, 0)",
                    "0 0 0 10px rgba(139, 92, 246, 0)",
                    "0 0 0 0 rgba(139, 92, 246, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-violet-500/50 transition-all duration-300 group">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 backdrop-blur-sm">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md group-hover:scale-110 transition-transform">
                        <GraduationCap className="w-8 h-8 text-violet-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-400 font-semibold text-lg mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4 text-violet-400" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-gray-200 text-sm hover:bg-white/20 transition-colors"
                      >
                        {highlight}
                      </span>
                    ))}
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
