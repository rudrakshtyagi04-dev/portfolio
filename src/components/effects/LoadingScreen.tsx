import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <div className="flex items-center overflow-hidden">
            {"Rudraksh Tyagi".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-2xl md:text-4xl font-mono font-medium tracking-tight"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
