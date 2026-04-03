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
                  <span className="text-3xl font-black tracking-tight" style={{ color: TIERS[currentIndex].textColor || "#fff" }}>inter</span>
                </div>
                <div className="w-12 h-9 rounded-md" style={{ background: "linear-gradient(135deg, #d1d1d1, #a1a1a1)", border: "1px solid rgba(0,0,0,0.1)" }} />
                <div className="flex justify-end items-end gap-0">
                  <div className="w-9 h-9 rounded-full bg-[#EB001B] -mr-3 relative z-10" />
                  <div className="w-9 h-9 rounded-full bg-[#F79E1B] opacity-85" />
                </div>
              </div>

              {/* Info below card */}
              <div className="mt-6 text-center">
                <p className="text-lg font-bold text-foreground">
                  {TIERS[currentIndex].name} • {TIERS[currentIndex].loop}
                </p>
                <p className="text-sm text-muted-foreground mt-2 max-w-[340px]">
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
