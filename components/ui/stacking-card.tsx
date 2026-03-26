'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import ScrollReveal from '../ScrollReveal';

export interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0 px-4 sm:px-6 md:px-0'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={cn(
          'flex flex-col relative origin-top rounded-xl md:rounded-md text-[#F9F7F7] shadow-xl md:shadow-none',
          '-top-[10%] md:-top-[25%]',
          'min-h-[250px] md:h-[450px]',
          'w-full sm:w-[90%] md:w-[85%] lg:w-[70%]',
          'p-6 sm:p-8 md:p-10'
        )}
      >
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-4'>{title}</h2>
        <div className={cn(
          'flex h-full mt-2 md:mt-6',
          'flex-col md:flex-row',
          'gap-4 sm:gap-6 md:gap-8'
        )}>
          <div className={cn(
            'relative',
            'w-full md:w-[45%]',
            'top-0 md:top-[5%]'
          )}>
            <p className='text-base sm:text-lg lg:text-xl font-light leading-[1.7] md:leading-[1.8] text-[#F9F7F7]/90 md:text-[#DBE2EF]/90'>{description}</p>
          </div>

          <div
            className={cn(
              'relative rounded-lg overflow-hidden',
              'hidden md:block', // Hidden on mobile, visible on tablets/desktops
              'w-full md:w-[60%]',
              'h-[200px] sm:h-[250px] md:h-full'
            )}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img src={url} alt='Card background' className='absolute inset-0 w-full h-full object-cover' />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main id="automation" className='bg-black' ref={container}>
        <>
          <section className='relative overflow-hidden text-[#F9F7F7] min-h-[70vh] w-full bg-slate-950 grid place-content-center py-20 px-6 sm:px-8'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0'></div>

            <div className="relative z-10 flex flex-col items-center justify-center gap-6 max-w-[1100px] mx-auto">
              <ScrollReveal
                baseOpacity={0}
                baseRotation={0}
                blurStrength={3}
                rotationEnd="bottom center"
                wordAnimationEnd="bottom center"
                containerClassName="text-sm sm:text-base md:text-lg text-[#DBE2EF] font-mono tracking-[0.25em] uppercase font-bold text-center"
              >
                AI Automation
              </ScrollReveal>
              
              <ScrollReveal
                baseOpacity={0.1}
                baseRotation={3}
                blurStrength={5}
                rotationEnd="bottom center"
                wordAnimationEnd="bottom center"
                containerClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[5.5rem] font-serif font-medium text-center tracking-tight leading-[1.05] text-[#F9F7F7]"
              >
                Most of Your Daily Operations Already Follow a Pattern. We Automate That Pattern.
              </ScrollReveal>
            </div>
          </section>
        </>

        <section className='text-[#F9F7F7] w-full bg-slate-950 relative z-20'>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        <footer className='group bg-slate-950 relative overflow-hidden'>
          <h2 className='text-[14vw] lg:text-[16vw] translate-y-10 lg:translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            MERIDIAN AI
          </h2>
          <div className='bg-black h-20 sm:h-32 lg:h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
        </footer>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;
