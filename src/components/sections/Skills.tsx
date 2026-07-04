import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiFirebase, SiSocketdotio,
  SiMongodb, SiMysql,
  SiGit, SiGithub, SiVercel, SiPostman, SiFigma
} from 'react-icons/si';
import { Code, Database, LayoutTemplate, Settings, Key, Server, Monitor, Zap } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <LayoutTemplate className="text-primary" size={24} />,
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <Monitor className="text-[#1572B6]" size={18} /> },
        { name: "Framer Motion", icon: <Zap className="text-pink-400" size={18} /> },
      ]
    },
    {
      title: "Backend",
      icon: <Code className="text-secondary" size={24} />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "REST APIs", icon: <Code className="text-muted-foreground" /> },
        { name: "JWT Auth", icon: <Key className="text-yellow-400" size={18} /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
      ]
    },
    {
      title: "Database",
      icon: <Database className="text-accent" size={24} />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="text-foreground" size={24} />,
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "VS Code", icon: <Monitor className="text-[#007ACC]" size={18} /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Render", icon: <Server className="text-white" size={18} /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-border rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full shadow-sm hover:border-primary/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all cursor-default"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
