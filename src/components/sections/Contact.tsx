import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Github, Linkedin, Mail, Send } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rudrakshtyagi04005@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative z-10 border-t border-white/5 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column: Info */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-foreground">
                Let's build<br />something.
              </h2>
              <p className="text-xl text-muted-foreground">
                Currently available for freelance and full-time opportunities. If you're looking for a developer who cares about both the architecture and the pixels, let's talk.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-card border border-border rounded-2xl space-y-6"
            >
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Email Me</p>
                <div className="flex items-center justify-between p-4 bg-background border border-border rounded-xl">
                  <span className="font-mono text-foreground">{email}</span>
                  <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                    title="Copy email"
                  >
                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">Socials</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/rudrakshtyagi04-dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rudraksh-tyagi-789736248" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <Linkedin size={18} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <form className="bg-card border border-border rounded-3xl p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-foreground">Accepting new projects</span>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@company.com"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors active:scale-[0.98]"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
