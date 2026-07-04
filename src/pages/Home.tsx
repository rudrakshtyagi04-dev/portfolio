import { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { CustomCursor } from '@/components/effects/CustomCursor';
import { LoadingScreen } from '@/components/effects/LoadingScreen';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  // Initialize smooth scrolling
  useLenis();

  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      <LoadingScreen />
      
      <Navbar />
      
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      <Footer />
    </main>
  );
}
