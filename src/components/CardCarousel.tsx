import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, DollarSign, Percent, Tag, Crown, TrendingUp, CheckCircle } from "lucide-react";

const TIERS = [
  {
    id: "gold",
    label: "Gold",
    name: "Inter Gold",
    gradient: "linear-gradient(135deg, #FF8A00 0%, #E65C00 100%)",
    loop: "1 ponto a cada R$ 10,00",
    badge: "Sem anuidade",
    benefits: [
      { icon: Plane, text: "Acumule milhas aéreas" },
      { icon: DollarSign, text: "Compras em dólar sem IOF adicional" },
      { icon: Percent, text: "Cashback em compras selecionadas" },
      { icon: Tag, text: "Descontos exclusivos em parceiros" },
      { icon: TrendingUp, text: "Investimentos facilitados" },
      { icon: Crown, text: "Programa de fidelidade Inter Loop" },
    ],
    requirements: [
      "Abrir conta gratuita no Inter",
      "Ter 18 anos ou mais com CPF válido",
    ],
  },
  {
    id: "platinum",
    label: "Platinum",
    name: "Inter Platinum",
    gradient: "linear-gradient(135deg, #D1D5DB 0%, #9CA3AF 100%)",
    loop: "1 ponto a cada R$ 5,00",
    badge: "Sem anuidade",
    benefits: [
      { icon: Plane, text: "Milhas em dobro em voos nacionais" },
      { icon: DollarSign, text: "Câmbio com taxa reduzida" },
      { icon: Percent, text: "Cashback de até 1,5%" },
      { icon: Tag, text: "Descontos em mais de 200 parceiros" },
      { icon: Crown, text: "Acesso a salas VIP (2x/ano)" },
      { icon: TrendingUp, text: "Rendimento superior na poupança" },
    ],
    requirements: [
      "Portabilidade de salário de R$ 6 mil",
      "Ou fatura de R$ 5.000 em 4 meses",
    ],
  },
  {
    id: "prime",
    label: "Prime",
    name: "Inter Black",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #333333 100%)",
    textColor: "white",
    loop: "1 ponto a cada R$ 2,50",
    badge: "Sem anuidade",
    benefits: [
      { icon: Plane, text: "Milhas ilimitadas com bônus 2x" },
      { icon: DollarSign, text: "Câmbio comercial em compras" },
      { icon: Percent, text: "Cashback de até 2%" },
      { icon: Tag, text: "Duo Gourmet incluso" },
      { icon: Crown, text: "Salas VIP ilimitadas (LoungeKey)" },
      { icon: TrendingUp, text: "Assessoria de investimentos" },
    ],
    requirements: [
      "Plano anual Duo Gourmet ativo",
      "Ou fatura de R$ 7.000 em 4 meses",
    ],
  },
  {
    id: "win",
    label: "Win",
    name: "Inter Win",
    gradient: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
    textColor: "white",
    loop: "1 ponto a cada R$ 2,00",
    badge: "Sem anuidade",
    benefits: [
      { icon: Plane, text: "Milhas ilimitadas com bônus 3x" },
      { icon: DollarSign, text: "Câmbio comercial + spread zero" },
      { icon: Percent, text: "Cashback de até 2,5%" },
      { icon: Tag, text: "Concierge pessoal 24h" },
      { icon: Crown, text: "Salas VIP ilimitadas + acompanhante" },
      { icon: TrendingUp, text: "Wealth management dedicado" },
    ],
    requirements: [
      "Investimentos a partir de R$ 1 milhão",
    ],
  },
];

const AUTO_PLAY_INTERVAL = 4000;

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TIERS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [next, isPaused]);

  const tier = TIERS[activeIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b border-border">
        {TIERS.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActiveIndex(i)}
            className={`px-6 py-3 text-sm font-semibold transition-all duration-300 border-b-2 ${
              i === activeIndex
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tier.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left: Card visual */}
          <div className="flex justify-center">
            <div
              className="w-[300px] h-[185px] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
              style={{
                background: tier.gradient,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.3)",
              }}
            >
              {/* Glare */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6) 0%, transparent 60%)",
                }}
              />
              {/* Logo */}
              <div className="flex justify-end">
                <span className="text-2xl font-black tracking-tight" style={{ color: tier.textColor || "#fff" }}>
                  inter
                </span>
              </div>
              {/* Chip */}
              <div className="w-11 h-8 rounded-md" style={{ background: "linear-gradient(135deg, #d1d1d1, #a1a1a1)", border: "1px solid rgba(0,0,0,0.1)" }} />
              {/* Mastercard */}
              <div className="flex justify-end items-end gap-0">
                <div className="w-8 h-8 rounded-full bg-[#EB001B] -mr-3 relative z-10" />
                <div className="w-8 h-8 rounded-full bg-[#F79E1B] opacity-85" />
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                {tier.badge}
              </span>
            </div>

            {/* Inter Loop */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-2">
              <span className="text-amber-600 font-bold text-sm">Inter Loop</span>
              <span className="text-sm text-foreground">{tier.loop}</span>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-3">
              {tier.benefits.map((b) => (
                <div key={b.text} className="flex items-start gap-2">
                  <b.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-2">Como ter o seu cartão</p>
              {tier.requirements.map((r) => (
                <div key={r} className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-sm text-muted-foreground">{r}</span>
                </div>
              ))}
            </div>

            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,140,0,0.3)]">
              Pedir cartão
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-6">
        {TIERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-primary w-6" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
