import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      role: "Freelance Full Stack Developer",
      company: "Self-Employed",
      date: "Feb 2025 – Present",
      description: [
        "Architecting and developing custom web applications for diverse clients.",
        "Implementing responsive, high-performance UIs using React and Next.js.",
        "Designing scalable backend architectures with Node.js and MongoDB."
      ],
      current: true
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" ref={ref}>
          {/* Animated vertical line */}
          <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-[2px] bg-border transform md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-primary origin-top"
              style={{ scaleY, height: "100%" }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center dot */}
                <div className="absolute left-4 md:left-[50%] w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-[7px] md:-translate-x-1/2 mt-6 md:mt-8 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                  {exp.current && (
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary rounded-full"
                    />
                  )}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
                    className="bg-card border border-border rounded-2xl p-6 relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20">
                            Present
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={14} />
                          <span className="font-medium text-foreground/80">{exp.company}</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50" />
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          <span>{exp.date}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5 text-xs">▹</span>
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
