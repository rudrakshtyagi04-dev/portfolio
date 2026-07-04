import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, MapPin, Terminal } from 'lucide-react';
import { ThreeScene } from '../three/ThreeScene';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 2.5, // After loading screen
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <ThreeScene />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="flex items-center gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-foreground/80">Available for new opportunities</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-foreground/80">
              <Terminal size={14} className="text-primary" />
              <span>2+ Years Experience</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-foreground/80">
              <MapPin size={14} className="text-secondary" />
              <span>India</span>
            </div>
          </motion.div>

          <div className="mb-10 font-bold tracking-tighter leading-[1.1]">
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.6 }}
                className="text-5xl md:text-7xl lg:text-8xl text-foreground"
              >
                Building products
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.7 }}
                className="text-5xl md:text-7xl lg:text-8xl text-muted-foreground"
              >
                that solve
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.8 }}
                className="text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
              >
                real-world problems.
              </motion.h1>
            </div>
          </div>

          <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            I'm a Full Stack Developer specializing in the MERN stack. I build precise, high-performance web applications that users love and businesses rely on.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <a 
              href="#work"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-primary rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient"></div>
              <span className="relative z-10">View my work</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/resume.pdf"
              download="Rudraksh_Tyagi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-foreground border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <span>Download Resume</span>
              <Download size={16} />
            </a>
            <div className="flex items-center gap-2 ml-4">
              <a href="https://github.com/rudrakshtyagi04-dev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rudraksh-tyagi-789736248" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-[1px] h-4 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
