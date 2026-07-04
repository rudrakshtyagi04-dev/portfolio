import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold tracking-tighter text-foreground text-lg">
            RT
          </span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center md:text-left">
          Designed & built by <span className="text-foreground font-medium">Rudraksh Tyagi</span>
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/rudrakshtyagi04-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/rudraksh-tyagi-789736248" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
