"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  AiCloudIcon,
  GlobalSearchIcon,
  CommandFreeIcons,
  CheckmarkCircle01Icon,
  DashboardSquare01Icon,
  MagicWandIcon,
  SmartPhone01Icon,
  Pizza04Icon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";

const FEATURES = [
  {
    id: "support",
    label: "Support Agent",
    icon: AiCloudIcon,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    description:
      "Handles your entire customer support autonomously — reads messages, responds instantly, and escalates only when truly needed.",
  },
  {
    id: "lead",
    label: "Lead Agent",
    icon: GlobalSearchIcon,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    description:
      "Captures every lead, qualifies them automatically, and sends personalized follow-ups before they go cold.",
  },
  {
    id: "inbox",
    label: "Inbox Agent",
    icon: CommandFreeIcons,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
    description:
      "Takes over your email — categorizes, drafts replies, flags urgent messages, and routes conversations automatically.",
  },
  {
    id: "hiring",
    label: "Hiring Agent",
    icon: CheckmarkCircle01Icon,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200",
    description:
      "Screens resumes, ranks candidates, sends responses, and schedules interviews without any manual effort.",
  },
  {
    id: "invoice",
    label: "Invoice Agent",
    icon: DashboardSquare01Icon,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200",
    description:
      "Generates invoices, tracks payments, sends reminders for overdue amounts, and keeps your books updated.",
  },
  {
    id: "research",
    label: "Research Agent",
    icon: MagicWandIcon,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    description:
      "Scans sources across the web, pulls relevant information, and delivers structured reports to your inbox.",
  },
  {
    id: "onboarding",
    label: "Onboarding Agent",
    icon: CheckmarkCircle01Icon,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
    description:
      "Guides new clients or employees from day one to fully set up — sends documents, collects signatures, schedules meetings.",
  },
  {
    id: "social",
    label: "Social Agent",
    icon: SmartPhone01Icon,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    description:
      "Monitors mentions, drafts responses, schedules posts, and keeps your brand active around the clock.",
  },
  {
    id: "report",
    label: "Report Agent",
    icon: DashboardSquare01Icon,
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200",
    description:
      "Pulls data from all your tools and builds clean, readable reports on the schedule you set.",
  },
  {
    id: "booking",
    label: "Booking Agent",
    icon: Pizza04Icon,
    image:
      "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1200",
    description:
      "Manages your entire scheduling — handles bookings, checks availability, sends reminders, and reschedules when needed.",
  },
];

const AUTO_PLAY_INTERVAL = 3000;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemHeight, setItemHeight] = useState(65);
  const [cardOffset, setCardOffset] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setItemHeight(44);
        setCardOffset(40);
      } else if (width < 640) {
        setItemHeight(48);
        setCardOffset(50);
      } else if (width < 768) {
        setItemHeight(54);
        setCardOffset(70);
      } else if (width < 1024) {
        setItemHeight(58);
        setCardOffset(85);
      } else {
        setItemHeight(65);
        setCardOffset(100);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-4 md:p-8">
      <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row min-h-[420px] sm:min-h-[480px] md:min-h-[550px] lg:min-h-[600px] lg:aspect-video border border-border/40">
        <div className="w-full lg:w-[40%] min-h-[260px] sm:min-h-[300px] md:min-h-[380px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:pl-16 bg-[#62B2FE] ">
          <div className="absolute inset-x-0 top-0 h-8 sm:h-10 md:h-16 lg:h-16 bg-gradient-to-b from-[#62B2FE] via-[#62B2FE]/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-8 sm:h-10 md:h-16 lg:h-16 bg-gradient-to-t from-[#62B2FE] via-[#62B2FE]/80 to-transparent z-40" />
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: itemHeight,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * itemHeight,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3.5 lg:py-4 rounded-full transition-all duration-700 text-left group border",
                      isActive
                        ? "bg-[#F9F7F7] text-[#62B2FE] border-[#F9F7F7] z-10"
                        : "bg-transparent text-[#F9F7F7]/60 border-[#F9F7F7]/20 hover:border-[#F9F7F7]/40 hover:text-[#F9F7F7]"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-500",
                        isActive ? "text-[#62B2FE]" : "text-[#F9F7F7]/40"
                      )}
                    >
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={18}
                        strokeWidth={2}
                      />
                    </div>

                    <span className="font-normal text-[10px] sm:text-xs md:text-sm lg:text-[15px] tracking-tight whitespace-nowrap uppercase">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex-1 min-h-[320px] sm:min-h-[380px] md:min-h-[450px] lg:h-full relative bg-secondary/30 flex items-center justify-center py-8 sm:py-10 md:py-16 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-border/20">
          <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[420px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive
                      ? 0
                      : isPrev
                      ? -cardOffset
                      : isNext
                      ? cardOffset
                      : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[1.2rem] sm:rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.8rem] overflow-hidden border-2 sm:border-4 md:border-6 lg:border-8 border-background bg-background origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0"
                        : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 lg:p-10 pt-16 sm:pt-20 md:pt-28 lg:pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <p className="text-[#F9F7F7] font-normal text-xs sm:text-sm md:text-lg lg:text-2xl leading-tight drop-shadow-md tracking-tight">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 flex items-center gap-2 sm:gap-3 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F9F7F7] shadow-[0_0_10px_white]" />
                    <span className="text-[#F9F7F7]/80 text-[8px] sm:text-[9px] md:text-[10px] font-normal uppercase tracking-[0.3em] font-mono">
                      Autonomous
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
