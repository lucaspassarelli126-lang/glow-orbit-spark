import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Briefcase, Diamond, Award, Crown, Star } from "lucide-react";
import { cn } from "@/lib/utils";

import c6CardStandard from "@/assets/c6-card-standard.png";
import c6CardBusiness from "@/assets/c6-card-business.png";
import c6CardGraphene from "@/assets/c6-card-graphene.png";
import c6CardCarbon from "@/assets/c6-card-carbon.png";
import c6CardBlack from "@/assets/c6-black-card-premium.png";

const TIERS = [
  {
    id: "c6",
    label: "C6",
    icon: CreditCard,
    image: c6CardStandard,
    description: "Pontos que não expiram e anuidade zero.",
    name: "C6",
  },
  {
    id: "c6-business",
    label: "C6 Business",
    icon: Briefcase,
    image: c6CardBusiness,
    description: "Cartão sem anuidade para simplificar a gestão do seu negócio.",
    name: "C6 Business",
    textColor: "#555",
  },
  {
    id: "c6-graphene",
    label: "C6 Graphene",
    icon: Diamond,
    image: c6CardGraphene,
    description: "4,5 pontos/US$ 1 no crédito. Salas VIP ilimitadas no mundo todo. Exclusivo para quem investe a partir de R$ 5 milhões.",
    name: "C6 Graphene",
    textColor: "#1a1a1a",
  },
  {
    id: "c6-carbon",
    label: "C6 Carbon",
    icon: Award,
    image: c6CardCarbon,
    description: "Até 3,5 pontos/US$ 1, salas VIP em aeroportos do mundo todo e muito mais.",
    name: "C6 Carbon",
    textColor: "#D1D5DB",
  },
  {
    id: "c6-black",
    label: "C6 Black",
    icon: Crown,
    image: c6CardBlack,
    description: "Até 2,5 pontos/US$ 1, cashback de até 1,2% e mais.",
    name: "C6 Black",
    textColor: "#A3A3A3",
  },
  {
    id: "c6-platinum",
    label: "C6 Platinum",
    icon: Star,
    image: c6CardBusiness, // Fallback for Platinum using Business silver style
    description: "Pontos que não expiram, anuidade zero e todos os benefícios Mastercard Platinum.",
    name: "C6 Platinum",
    textColor: "#fff",
  },
];

const AUTO_PLAY_INTERVAL = 3500;
const ITEM_HEIGHT = 73; // Increased to account for gap-2 (8px) + button height
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};


const CardCarousel = () => {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = ((step % TIERS.length) + TIERS.length) % TIERS.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + TIERS.length) % TIERS.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);




  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 min-h-[420px]">
        {/* LEFT — Pill list */}
        <div className="relative flex-shrink-0 lg:w-[340px] bg-foreground rounded-2xl lg:rounded-r-none p-6 flex flex-col justify-center overflow-hidden">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-foreground to-transparent z-10 pointer-events-none" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-foreground to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex flex-col gap-2 relative"
            animate={{ y: -(currentIndex * ITEM_HEIGHT) + (ITEM_HEIGHT * 0.5) }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {TIERS.map((tier, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              // Remove wrapping from opacity/scale logic to prevent "gaps" in the linear list
              // only show items within a certain linear distance from center
              const opacity = Math.abs(distance) > 2 ? 0 : 1 - (Math.abs(distance) * 0.35);

              return (
                <motion.div
                  key={tier.id}
                  animate={{
                    opacity: opacity,
                    scale: isActive ? 1 : 0.92,
                    filter: isActive ? "blur(0px)" : `blur(${Math.abs(distance) * 1}px)`,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-700 text-left group border w-full",
                      isActive
                        ? "bg-card text-primary border-card z-10"
                        : "bg-transparent text-primary-foreground/60 border-primary-foreground/20 hover:border-primary-foreground/40 hover:text-primary-foreground"
                    )}
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      <tier.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-primary-foreground/60")} />
                    </span>
                    <span className="text-sm font-semibold whitespace-nowrap">
                      {tier.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT — Active card */}
        <div className="flex-1 relative flex items-center justify-center rounded-2xl lg:rounded-l-none overflow-hidden min-h-[420px] bg-black/50">

          {/* Hidden SVG filter for removing dark card backgrounds */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <filter id="card-bg-remove" colorInterpolationFilters="sRGB">
                <feColorMatrix type="luminanceToAlpha" result="luma" />
                <feComponentTransfer in="luma" result="mask">
                  <feFuncA type="linear" slope="4" intercept="-0.3" />
                </feComponentTransfer>
                <feComposite in="SourceGraphic" in2="mask" operator="in" />
              </filter>
            </defs>
          </svg>

          <AnimatePresence mode="wait">
            <motion.div
              key={TIERS[currentIndex].id}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Card visual — SVG filter removes black background pixels */}
              <div 
                className="flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95"
                style={{ width: "480px", height: "300px", maxWidth: "100%" }}
              >
                <img
                   src={TIERS[currentIndex].image}
                   alt={TIERS[currentIndex].name}
                   style={{ 
                     width: "100%",
                     height: "100%",
                     objectFit: "contain",
                     objectPosition: "center center",
                     filter: "url(#card-bg-remove)"
                   }}
                />
              </div>

              {/* Info below card */}
              <div className="mt-6 text-center px-4">
                <p className="text-2xl font-bold text-foreground">
                  {TIERS[currentIndex].name}
                </p>
                <p className="text-base text-muted-foreground mt-3 max-w-[400px]">
                  {TIERS[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
