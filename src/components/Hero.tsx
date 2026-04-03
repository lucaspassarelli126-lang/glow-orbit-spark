import { motion } from "framer-motion";
import { Shield, Users } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";

const Hero = () => {
  const [flipped, setFlipped] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (centerX - e.clientX) / 25;
    const y = (e.clientY - centerY) / 25;
    setTilt({ x, y });
    setShinePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setShinePos({ x: 50, y: 50 });
  }, []);

  // Initial "peek" animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setTilt({ x: 25, y: 0 });
      setTimeout(() => setTilt({ x: 0, y: 0 }), 800);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const baseRotate = "rotateZ(-12deg)";
  const cardTransform = flipped
    ? `${baseRotate} rotateY(${180 + tilt.x}deg) rotateX(${tilt.y}deg)`
    : `${baseRotate} rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`;

  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-8 lg:gap-20">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.2] tracking-tight mb-6">
            Fácil,{" "}
            <br className="hidden sm:block" />
            rápido{" "}
            <br className="hidden sm:block" />
            <span className="text-primary">e gratuito.</span>
          </h1>
          <p className="text-base text-gray-text leading-relaxed mb-8 max-w-[90%]">
            A plataforma financeira que simplifica sua vida. Abra sua conta em
            minutos, sem burocracia e sem taxas escondidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#conta"
              className="inline-flex items-center justify-center rounded-4xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(255,140,0,0.3)] active:translate-y-0"
            >
              Abra sua conta
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center rounded-4xl border-2 border-primary bg-transparent px-8 py-3 text-base font-semibold text-primary transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5"
            >
              Conheça os cartões
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3 rounded-xl bg-muted p-4">
              <Shield size={24} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">Seguro</p>
                <p className="text-xs text-gray-text">Proteção em todas as transações</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-muted p-4">
              <Users size={24} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">Prático</p>
                <p className="text-xs text-gray-text">Tudo na palma da sua mão</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - 3D Interactive Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-start"
          style={{ perspective: "1200px" }}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="w-[340px] h-[210px] cursor-pointer"
            onClick={() => { setFlipped((f) => !f); setHasClicked(true); }}
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.8s",
              transform: cardTransform,
            }}
          >
            {/* FRONT */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                background: "linear-gradient(135deg, #8a8a8a, #5e5e5e)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
              }}
            >
              {/* Shine */}
              <div
                className="absolute w-[200%] h-[200%]"
                style={{
                  background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,255,255,0.25), transparent 60%)`,
                  top: "-50%",
                  left: "-50%",
                  pointerEvents: "none",
                }}
              />
              {/* Hint icon */}
              {!hasClicked && (
                <span className="absolute top-2.5 right-3 text-white/70 text-lg pointer-events-none animate-hint-move">
                  ↺
                </span>
              )}
              {/* Logo */}
              <span className="absolute top-5 left-5 text-white text-[26px] font-bold">inter</span>
              {/* Chip */}
              <div
                className="absolute top-[70px] left-5 w-[55px] h-[40px] rounded-lg"
                style={{ background: "linear-gradient(145deg, #666, #444)" }}
              />
              {/* Number */}
              <p className="absolute bottom-[70px] left-5 text-white text-lg tracking-widest">
                1234 5678 9012 3456
              </p>
              {/* Name */}
              <p className="absolute bottom-10 left-5 text-white text-sm">SEU NOME</p>
              {/* Expiry */}
              <p className="absolute bottom-10 right-5 text-white text-sm">12/30</p>
              {/* Mastercard circles */}
              <div className="absolute bottom-4 right-5 flex">
                <div className="w-10 h-10 rounded-full bg-[#eb001b] -mr-2.5 relative z-10" />
                <div className="w-10 h-10 rounded-full bg-[#f79e1b]" />
              </div>
            </div>

            {/* BACK */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                backfaceVisibility: "hidden",
                background: "linear-gradient(135deg, #6b6b6b, #4a4a4a)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="bg-black h-10 mt-5" />
              <div className="bg-white w-4/5 h-10 mx-auto mt-8 flex items-center justify-end pr-3 font-bold text-black rounded">
                123
              </div>
            </div>
          </div>
          {/* Hint */}
          {!hasClicked && (
            <p className="mt-6 text-center text-xs text-muted-foreground animate-pulse">
              Clique no cartão para virar
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
