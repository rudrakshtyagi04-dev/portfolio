import { useState, useEffect, useRef, Component, ReactNode } from "react";
import { motion } from "framer-motion";

class WebGLBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function AnimatedOrb() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.005;
      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${Math.sin(t) * 12}px, ${Math.cos(t * 0.7) * 10}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div ref={orbRef} className="absolute right-[-80px] top-[-80px] md:right-[-40px] md:top-[-40px]" style={{ width: "600px", height: "600px" }}>
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(ellipse at 35% 40%, rgba(59,130,246,0.25) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-16 rounded-full"
          style={{
            background: "radial-gradient(ellipse at 65% 55%, rgba(6,182,212,0.2) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)",
          }}
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            inset: "60px",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            inset: "100px",
            border: "1px solid rgba(139,92,246,0.15)",
          }}
          animate={{ scale: [1.08, 1, 1.08], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            inset: "140px",
            border: "1px solid rgba(6,182,212,0.1)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: "4px",
              height: "4px",
              background: i % 2 === 0 ? "rgba(59,130,246,0.6)" : "rgba(139,92,246,0.6)",
              top: `${30 + Math.sin((i / 6) * Math.PI * 2) * 35}%`,
              left: `${50 + Math.cos((i / 6) * Math.PI * 2) * 35}%`,
              boxShadow: i % 2 === 0 ? "0 0 8px rgba(59,130,246,0.8)" : "0 0 8px rgba(139,92,246,0.8)",
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ThreeCanvas() {
  const [loaded, setLoaded] = useState(false);
  const [Fiber, setFiber] = useState<{ Canvas: unknown; useFrame: unknown } | null>(null);

  useEffect(() => {
    import("@react-three/fiber").then((mod) => {
      setFiber(mod as unknown as { Canvas: unknown; useFrame: unknown });
      setLoaded(true);
    }).catch(() => {});
  }, []);

  if (!loaded || !Fiber) return <AnimatedOrb />;

  return <AnimatedOrb />;
}

export function ThreeScene() {
  const [webGLOk, setWebGLOk] = useState<boolean | null>(null);

  useEffect(() => {
    setWebGLOk(isWebGLAvailable());
  }, []);

  if (webGLOk === false) return <AnimatedOrb />;

  return (
    <WebGLBoundary fallback={<AnimatedOrb />}>
      <AnimatedOrb />
    </WebGLBoundary>
  );
}
