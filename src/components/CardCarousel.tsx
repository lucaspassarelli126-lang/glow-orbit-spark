import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Award, Crown, Gem } from "lucide-react";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    id: "gold",
    label: "Gold",
    icon: CreditCard,
    gradient: "linear-gradient(135deg, #FF8A00 0%, #E65C00 100%)",
    description: "Cartão ideal para começar. Sem anuidade e com cashback.",
    name: "Inter Gold",
    loop: "1 ponto a cada R$ 10,00",
  },
  {
    id: "platinum",
    label: "Platinum",
    icon: Award,
    gradient: "linear-gradient(135deg, #D1D5DB 0%, #9CA3AF 100%)",
    description: "Benefícios exclusivos com milhas em dobro e câmbio reduzido.",
    name: "Inter Platinum",
    loop: "1 ponto a cada R$ 5,00",
  },
  {
    id: "prime",
    label: "Prime",
    icon: Crown,
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)",
    description: "Salas VIP ilimitadas, Duo Gourmet e assessoria exclusiva.",
    name: "Inter Black",
    loop: "1 ponto a cada R$ 2,50",
    textColor: "#fff",
  },
  {
    id: "win",
    label: "Win",
    icon: Gem,
    gradient: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
    description: "O máximo em exclusividade para clientes de alta renda.",
    name: "Inter Win",
    loop: "1 ponto a cada R$ 2,00",
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

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = TIERS.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

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

        {/* RIGHT — Card stack */}
        <div className="flex-1 relative flex items-center justify-center bg-muted rounded-2xl lg:rounded-l-none overflow-hidden min-h-[350px]">
          <div className="relative w-[320px] h-[350px]" style={{ perspective: "1200px" }}>
            {TIERS.map((tier, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={tier.id}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  initial={false}
                  animate={{
                    rotateY: isActive ? 0 : isPrev ? -35 : isNext ? 35 : 60,
                    scale: isActive ? 1 : 0.85,
                    x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                    z: isActive ? 0 : -150,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Card visual */}
                  <div
                    className="w-[300px] h-[185px] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl"
                    style={{ background: tier.gradient }}
                  >
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6) 0%, transparent 60%)" }} />
                    <div className="flex justify-end">
                      <span className="text-2xl font-black tracking-tight" style={{ color: tier.textColor || "#fff" }}>inter</span>
                    </div>
                    <div className="w-11 h-8 rounded-md" style={{ background: "linear-gradient(135deg, #d1d1d1, #a1a1a1)", border: "1px solid rgba(0,0,0,0.1)" }} />
                    <div className="flex justify-end items-end gap-0">
                      <div className="w-8 h-8 rounded-full bg-[#EB001B] -mr-3 relative z-10" />
                      <div className="w-8 h-8 rounded-full bg-[#F79E1B] opacity-85" />
                    </div>
                  </div>

                  {/* Info below card */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.15 }}
                        className="mt-5 text-center"
                      >
                        <p className="text-sm font-bold text-foreground">
                          {tier.name} • {tier.loop}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 max-w-[260px]">
                          {tier.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
