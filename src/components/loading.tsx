import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative">
        
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-24 h-24 rounded-full border-t-4 border-l-4 border-violet-500 border-opacity-50"
        />
        
        
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-2 rounded-full border-b-4 border-r-4 border-cyan-500 border-opacity-50"
        />

        
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center font-bold text-white tracking-widest text-sm"
        >
          LOADING
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;