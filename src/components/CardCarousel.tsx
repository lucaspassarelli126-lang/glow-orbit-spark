import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Briefcase, Diamond, Award, Crown, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    id: "c6",
    label: "C6",
    icon: CreditCard,
    gradient: "linear-gradient(135deg, #F04770 0%, #F68B30 100%)",
    description: "Pontos que não expiram e anuidade zero.",
    name: "C6",
  },
  {
    id: "c6-business",
    label: "C6 Business",
    icon: Briefcase,
    gradient: "linear-gradient(135deg, #E2E2E2 0%, #CFCFCF 100%)",
    description: "Cartão sem anuidade para simplificar a gestão do seu negócio.",
    name: "C6 Business",
    textColor: "#555",
  },
  {
    id: "c6-graphene",
    label: "C6 Graphene",
    icon: Diamond,
    gradient: "linear-gradient(135deg, #6b6b6b 0%, #3d3d3d 100%)",
    description: "4,5 pontos/US$ 1 no crédito. Salas VIP ilimitadas no mundo todo. Exclusivo para quem investe a partir de R$ 5 milhões.",
    name: "C6 Graphene",
    textColor: "#1a1a1a",
  },
  {
    id: "c6-carbon",
    label: "C6 Carbon",
    icon: Award,
    // Estilo que simula a textura em malha do Carbon, via background duplo:
    gradient: "repeating-linear-gradient(45deg, #222 0%, #222 2%, #111 2%, #111 4%), linear-gradient(135deg, #1A1A1A 0%, #000000 100%)",
    description: "Até 3,5 pontos/US$ 1, salas VIP em aeroportos do mundo todo e muito mais.",
    name: "C6 Carbon",
    textColor: "#D1D5DB",
  },
  {
    id: "c6-black",
    label: "C6 Black",
    icon: Crown,
    gradient: "linear-gradient(135deg, #111111 0%, #050505 100%)",
    description: "Até 2,5 pontos/US$ 1, cashback de até 1,2% e mais.",
    name: "C6 Black",
    textColor: "#A3A3A3",
  },
  {
    id: "c6-platinum",
    label: "C6 Platinum",
    icon: Star,
    gradient: "linear-gradient(135deg, #B5BDBB 0%, #87918E 100%)",
    description: "Pontos que não expiram, anuidade zero e todos os benefícios Mastercard Platinum.",
    name: "C6 Platinum",
    textColor: "#fff",
  },
];

const AUTO_PLAY_INTERVAL = 3500;
const ITEM_HEIGHT = 65;
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
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-foreground to-transparent z-10 pointer-events-none" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-foreground to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex flex-col gap-2 relative"
            animate={{ y: -(currentIndex * ITEM_HEIGHT) + ITEM_HEIGHT }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {TIERS.map((tier, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(-(TIERS.length / 2), TIERS.length / 2, distance);

              return (
                <motion.div
                  key={tier.id}
                  animate={{
                    opacity: Math.abs(wrappedDistance) > 2 ? 0 : 1 - Math.abs(wrappedDistance) * 0.3,
                    scale: isActive ? 1 : 0.95,
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
        <div className="flex-1 relative flex items-center justify-center bg-muted rounded-2xl lg:rounded-l-none overflow-hidden min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={TIERS[currentIndex].id}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Card visual */}
              <div
                className="w-[360px] h-[220px] rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden shadow-2xl"
                style={{ background: TIERS[currentIndex].gradient }}
              >
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6) 0%, transparent 60%)" }} />
                <div className="flex justify-end">
                  <span className="text-3xl font-medium tracking-wide" style={{ color: TIERS[currentIndex].textColor || "#fff" }}>C6<span className="font-light">BANK</span></span>
                </div>
                <div className="w-12 h-9 rounded-md mt-6" style={{ background: "linear-gradient(135deg, #d1d1d1, #a1a1a1)", border: "1px solid rgba(0,0,0,0.1)" }} />
                <div className="flex justify-start items-end gap-0 absolute bottom-7 left-7">
                  {/* C6 Logo Style - Mastercard at bottom left */}
                  <div className="w-9 h-9 rounded-full bg-[#EB001B] relative z-10" />
                  <div className="w-9 h-9 rounded-full bg-[#F79E1B] opacity-85 -ml-3" />
                </div>
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
