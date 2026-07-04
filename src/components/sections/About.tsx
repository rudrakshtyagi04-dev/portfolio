import { motion } from 'framer-motion';
import { Code2, Clock, Globe, MapPin, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 bg-card border border-border rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Code2 className="text-primary" /> Who I am
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I'm Rudraksh Tyagi, a detail-oriented Full Stack Developer based in India. I engineer robust, scalable web applications focusing on the MERN stack. My approach combines rigorous architectural planning with an obsession for frontend polish.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              When I'm not writing code, I'm analyzing system designs, exploring new frontend paradigms, or optimizing build processes. I don't just assemble components; I craft seamless digital experiences.
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute -right-4 -top-4 text-secondary/10 group-hover:text-secondary/20 transition-colors duration-500">
              <Globe size={120} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <MapPin className="text-secondary mb-4" size={28} />
              <h3 className="text-lg font-bold mb-1">Location</h3>
              <p className="text-muted-foreground">India</p>
              <p className="text-sm text-muted-foreground/60 mt-2">IST (UTC +5:30)</p>
            </div>
          </motion.div>

          {/* Quick Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-black text-foreground mb-1">2+</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Years Coding</p>
              </div>
              <div>
                <p className="text-3xl font-black text-foreground mb-1">10+</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-gradient-to-r from-card to-card/50 border border-border rounded-3xl p-8 flex items-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex gap-6 items-center">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">My Approach</h3>
                <p className="text-muted-foreground">
                  Performance is a feature. Accessibility is a requirement. Good design is transparent. I build applications that are as fast as they are beautiful.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Current Status Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
            <Clock className="text-foreground mb-4" size={28} />
            <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Currently Building</h3>
            <p className="text-foreground font-medium">SaaS AI Agent Platform</p>
            <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              In active development
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
