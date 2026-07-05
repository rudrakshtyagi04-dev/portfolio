import { motion } from 'framer-motion';
import { ExternalLink, Folder, Github } from 'lucide-react';

export function Projects() {
  const featuredProjects = [
    {
      title: "Food & Grocery Delivery App",
      tagline: "Comprehensive end-to-end delivery ecosystem",
      description: [
        "Built a scalable platform with dedicated apps for customers, restaurants, delivery personnel, and admins.",
        "Implemented real-time order tracking using Socket.io and precise geolocation mapping.",
        "Engineered secure authentication and a robust MongoDB schema for complex multi-entity relationships."
      ],
      stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      github: "https://github.com/rudrakshtyagi04-dev/Ahaar",
      color: "from-orange-500/20 via-red-500/20 to-rose-500/20",
      border: "hover:border-orange-500/50"
    },
    {
      title: "SaaS AI Agent Platform",
      tagline: "Next-generation intelligent automation",
      description: [
        "Developed a subscription-ready SaaS platform allowing users to deploy customized AI agents.",
        "Integrated OpenAI API for advanced natural language processing and reasoning capabilities.",
        "Built a responsive, high-performance dashboard with Next.js and comprehensive auth flows."
      ],
      stack: ["React", "Next.js", "Node.js", "MongoDB", "OpenAI API", "Stripe"],
      github: "https://github.com/rudrakshtyagi04-dev",
      color: "from-primary/20 via-indigo-500/20 to-secondary/20",
      border: "hover:border-primary/50"
    },
    {
      title: "Cursor Clone — AI Editor",
      tagline: "Browser-based intelligent IDE",
      description: [
        "Engineered a web-based code editor replicating advanced AI coding assistance features.",
        "Implemented a custom file explorer, integrated terminal, and context-aware AI chat panel.",
        "Utilized Monaco Editor for robust syntax highlighting and language support."
      ],
      stack: ["React", "TypeScript", "Monaco Editor", "Node.js", "Tailwind"],
      github: "https://github.com/rudrakshtyagi04-dev",
      color: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      border: "hover:border-emerald-500/50"
    }
  ];

  const otherProjects = [
    {
      name: "Portfolio Website",
      desc: "High-performance personal portfolio with 3D elements.",
      tech: ["React", "Three.js", "Tailwind", "Framer Motion"]
    },
    {
      name: "Weather App",
      desc: "Real-time global weather forecasting dashboard.",
      tech: ["JavaScript", "OpenWeather API", "CSS3"]
    },
    {
      name: "Task Management App",
      desc: "Kanban-style productivity tool with drag-and-drop.",
      tech: ["React", "Redux", "Node.js"]
    },
    {
      name: "Authentication System",
      desc: "Secure JWT-based auth template for MERN stack.",
      tech: ["Express", "MongoDB", "JWT", "Bcrypt"]
    },
    {
      name: "Realtime Chat",
      desc: "Instant messaging application with rooms.",
      tech: ["React", "Socket.io", "Express"]
    },
    {
      name: "MERN Boilerplate",
      desc: "Production-ready starting point for full-stack apps.",
      tech: ["MongoDB", "Express", "React", "Node"]
    }
  ];

  return (
    <section id="work" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Work</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-32">
          {featuredProjects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`group flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image / Mockup Area */}
              <div className="w-full lg:w-3/5 h-[300px] sm:h-[400px] relative rounded-3xl overflow-hidden border border-border bg-card">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                
                {/* Abstract UI Representation */}
                <div className="absolute inset-8 border border-white/10 rounded-xl bg-background/80 backdrop-blur-sm shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                  {/* Mock browser header */}
                  <div className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  {/* Abstract content lines */}
                  <div className="p-6 flex-1 flex flex-col gap-4 opacity-50">
                    <div className="h-8 w-1/3 bg-white/10 rounded-lg animate-pulse" />
                    <div className="h-32 w-full bg-white/5 rounded-xl border border-white/5" />
                    <div className="flex gap-4">
                      <div className="h-24 w-1/2 bg-white/5 rounded-xl border border-white/5" />
                      <div className="h-24 w-1/2 bg-white/5 rounded-xl border border-white/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div>
                  <p className="text-primary font-mono text-sm mb-2 tracking-wider">Featured Project</p>
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-lg text-muted-foreground">{project.tagline}</p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-xl relative z-10">
                  <ul className="space-y-3">
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5 text-xs">▹</span>
                        <span className="text-sm leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium font-mono border border-secondary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                    <Github size={20} />
                    <span className="font-medium text-sm">Source Code</span>
                  </a>
                  <button disabled className="flex items-center gap-2 text-muted-foreground cursor-not-allowed opacity-50">
                    <ExternalLink size={20} />
                    <span className="font-medium text-sm">Live Demo (Soon)</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Other Noteworthy Projects</h3>
          <p className="text-muted-foreground">Smaller scale builds and technical experiments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border hover:border-primary/30 rounded-2xl p-6 h-full flex flex-col group transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Folder className="text-primary" size={24} />
                </div>
                <a href="https://github.com/rudrakshtyagi04-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={20} />
                </a>
              </div>
              
              <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h4>
              <p className="text-muted-foreground text-sm flex-1 mb-6">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
