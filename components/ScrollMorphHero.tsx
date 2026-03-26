import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { MagicText } from "./ui/magic-text";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  language: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

const FlipCard: React.FC<FlipCardProps> = ({
  src,
  language,
  index,
  total,
  phase,
  target,
}) => {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 15,
      }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-md shadow-md bg-stone-200 border border-stone-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={src}
            alt={`hero-${index}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#112D4E]/20 transition-colors group-hover:bg-transparent" />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-md shadow-md bg-[#112D4E] flex flex-col items-center justify-center p-2 border border-[#3F72AF]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center">
            <p className="text-[6px] font-bold text-[#3F72AF] uppercase tracking-widest mb-1">Language</p>
            <p className="text-[8px] font-medium text-[#F9F7F7]">{language}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Hero Component ---
const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000;

const COUNTRIES_DATA = [
  { src: "https://flagcdn.com/w320/us.png", language: "English" },
  { src: "https://flagcdn.com/w320/cn.png", language: "中文" },
  { src: "https://flagcdn.com/w320/jp.png", language: "日本語" },
  { src: "https://flagcdn.com/w320/de.png", language: "Deutsch" },
  { src: "https://flagcdn.com/w320/in.png", language: "हिन्दी" },
  { src: "https://flagcdn.com/w320/gb.png", language: "English" },
  { src: "https://flagcdn.com/w320/fr.png", language: "Français" },
  { src: "https://flagcdn.com/w320/it.png", language: "Italiano" },
  { src: "https://flagcdn.com/w320/br.png", language: "Português" },
  { src: "https://flagcdn.com/w320/ca.png", language: "English" },
  { src: "https://flagcdn.com/w320/ru.png", language: "Русский" },
  { src: "https://flagcdn.com/w320/kr.png", language: "한국어" },
  { src: "https://flagcdn.com/w320/au.png", language: "English" },
  { src: "https://flagcdn.com/w320/es.png", language: "Español" },
  { src: "https://flagcdn.com/w320/mx.png", language: "Español" },
  { src: "https://flagcdn.com/w320/id.png", language: "Bahasa" },
  { src: "https://flagcdn.com/w320/nl.png", language: "Nederlands" },
  { src: "https://flagcdn.com/w320/sa.png", language: "العربية" },
  { src: "https://flagcdn.com/w320/tr.png", language: "Türkçe" },
  { src: "https://flagcdn.com/w320/se.png", language: "Svenska" },
];

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ScrollMorphHero() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // --- Container Size ---
  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };
    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);
    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });
    return () => observer.disconnect();
  }, []);

  // --- Virtual Scroll ---
  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Intelligent Scroll Handler
    const handleWheel = (e: WheelEvent) => {
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;
      const currentScroll = scrollRef.current;
      
      const atBottom = currentScroll >= MAX_SCROLL;
      const atTop = currentScroll <= 0;
      
      // We only want to reverse the animation if the user is at the top of the page.
      // If they are scrolling up from the footer, we let the window scroll naturally.
      const isWindowAtTop = window.scrollY < 5; 

      if (isScrollingDown) {
        // If we haven't finished the animation, hijack the scroll
        if (!atBottom) {
          e.preventDefault();
          const newScroll = Math.min(currentScroll + e.deltaY, MAX_SCROLL);
          scrollRef.current = newScroll;
          virtualScroll.set(newScroll);
        }
        // If atBottom is true, we do NOT preventDefault. 
        // This allows the browser to scroll the window down naturally to the next section.
      } else if (isScrollingUp) {
        // Only hijack upward scroll if we are physically at the top of the page
        // AND we haven't finished reversing the animation yet.
        if (isWindowAtTop && !atTop) {
          e.preventDefault();
          const newScroll = Math.max(currentScroll + e.deltaY, 0);
          scrollRef.current = newScroll;
          virtualScroll.set(newScroll);
        }
      }
    };
    
    // Intelligent Touch Handler (for Mobile)
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const handleTouchMove = (e: TouchEvent) => {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY; // Positive = scrolling down
        touchStartY = touchY;

        const currentScroll = scrollRef.current;
        const atBottom = currentScroll >= MAX_SCROLL;
        const atTop = currentScroll <= 0;
        const isWindowAtTop = window.scrollY < 5;

        if (deltaY > 0) { // Scrolling Down
            if (!atBottom) {
                if (e.cancelable) e.preventDefault();
                const newScroll = Math.min(Math.max(currentScroll + deltaY, 0), MAX_SCROLL);
                scrollRef.current = newScroll;
                virtualScroll.set(newScroll);
            }
        } else if (deltaY < 0) { // Scrolling Up
            if (isWindowAtTop && !atTop) {
                if (e.cancelable) e.preventDefault();
                const newScroll = Math.min(Math.max(currentScroll + deltaY, 0), MAX_SCROLL);
                scrollRef.current = newScroll;
                virtualScroll.set(newScroll);
            }
        }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
  const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  useEffect(() => {
    const timer1 = setTimeout(() => setIntroPhase("line"), 500);
    const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  const scatterPositions = useMemo(() => {
    return COUNTRIES_DATA.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
    const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
    const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
      unsubscribeParallax();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  return (
    <div className="relative w-full h-screen border-b border-[#112D4E]/10 rounded-lg overflow-hidden bg-[#F9F7F7]">
      <div ref={containerRef} className="relative w-full h-full bg-[#F9F7F7] overflow-hidden">
        <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">
          
          {/* Enhanced Grid Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F0F9FF]/40 to-white" />
            
            {/* Animated Main Grid */}
            <motion.div 
              className="absolute inset-0 bg-[linear-gradient(to_right,#3F72AF15_1px,transparent_1px),linear-gradient(to_bottom,#3F72AF15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)]"
              style={{ 
                y: useTransform(smoothMorph, [0, 1], [0, 100]),
                scale: useTransform(smoothMorph, [0, 1], [1, 1.05])
              }}
            />
            
            {/* Fine Inner Grid */}
            <motion.div 
              className="absolute inset-0 bg-[linear-gradient(to_right,#3F72AF08_1px,transparent_1px),linear-gradient(to_bottom,#3F72AF08_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"
              style={{ 
                y: useTransform(smoothMorph, [0, 1], [0, -50]),
                opacity: useTransform(smoothMorph, [0, 1], [0.5, 1])
              }}
            />

            {/* Glowing Orbs for depth */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#3F72AF] rounded-full blur-[120px] mix-blend-multiply"
              style={{ opacity: useTransform(smoothMorph, [0, 1], [0.05, 0.15]) }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[#3F72AF] rounded-full blur-[100px] mix-blend-multiply"
              style={{ opacity: useTransform(smoothMorph, [0, 1], [0.05, 0.1]) }}
            />
          </div>

          {/* Intro Text */}
          <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 w-full px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#112D4E]"
            >
              Meridian AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-2 md:mt-4 text-[10px] md:text-sm font-mono tracking-[0.2em] md:tracking-[0.3em] text-[#3F72AF]"
            >
              CLASSICAL INTELLIGENCE
            </motion.p>
          </div>

          {/* Active Content */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute top-[15%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
          >
            <MagicText 
              text="The Protocol"
              className="text-3xl md:text-5xl font-serif text-[#112D4E] tracking-tight mb-4 justify-center"
            />
            <p className="text-sm md:text-base font-sans text-[#3F72AF] max-w-lg leading-relaxed">
              We translate chaos into cognition. <br className="hidden md:block" />
              Scroll to witness the architecture of tomorrow.
            </p>
          </motion.div>

          {/* Main Container */}
          <div className="relative flex items-center justify-center w-full h-full">
            {COUNTRIES_DATA.slice(0, TOTAL_IMAGES).map((country, i) => {
              let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };
              const isMobile = containerSize.width < 768;

              if (introPhase === "scatter") {
                target = scatterPositions[i];
                if (isMobile) target.scale = 0.5;
              } else if (introPhase === "line") {
                const lineSpacing = isMobile ? 35 : 70;
                const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                const lineX = i * lineSpacing - lineTotalWidth / 2;
                target = { x: lineX, y: 0, rotation: 0, scale: isMobile ? 0.5 : 1, opacity: 1 };
              } else {
                const minDimension = Math.min(containerSize.width, containerSize.height);
                const circleRadius = Math.min(minDimension * 0.4, 350);
                const circleAngle = (i / TOTAL_IMAGES) * 360;
                const circleRad = (circleAngle * Math.PI) / 180;
                const circlePos = {
                  x: Math.cos(circleRad) * circleRadius,
                  y: Math.sin(circleRad) * circleRadius,
                  rotation: circleAngle + 90,
                };

                const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                const arcCenterY = arcApexY + arcRadius;
                const spreadAngle = isMobile ? 100 : 130;
                const startAngle = -90 - (spreadAngle / 2);
                const step = spreadAngle / (TOTAL_IMAGES - 1);
                const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                const maxRotation = spreadAngle * 0.8; 
                const boundedRotation = -scrollProgress * maxRotation;
                const currentArcAngle = startAngle + (i * step) + boundedRotation;
                const arcRad = (currentArcAngle * Math.PI) / 180;

                const arcPos = {
                  x: Math.cos(arcRad) * arcRadius + parallaxValue,
                  y: Math.sin(arcRad) * arcRadius + arcCenterY,
                  rotation: currentArcAngle + 90,
                  scale: isMobile ? 1.2 : 1.8,
                };

                target = {
                  x: lerp(circlePos.x, arcPos.x, morphValue),
                  y: lerp(circlePos.y, arcPos.y, morphValue),
                  rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                  scale: lerp(isMobile ? 0.5 : 1, arcPos.scale, morphValue),
                  opacity: 1,
                };
              }

              return (
                <FlipCard
                  key={i}
                  src={country.src}
                  language={country.language}
                  index={i}
                  total={TOTAL_IMAGES}
                  phase={introPhase}
                  target={target}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#3F72AF] animate-bounce">
         ↓
      </div>
    </div>
  );
}