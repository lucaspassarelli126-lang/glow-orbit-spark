import { motion } from "framer-motion";
import { Shield, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-background py-16 lg:py-24 px-4 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
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

        {/* Right Column - 3D Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-[280px] h-[180px] lg:w-[340px] lg:h-[210px] rounded-2xl animate-rotate-card shadow-[var(--shadow-3d)]">
            {/* Card face content */}
            <div className="absolute inset-0 flex flex-col justify-between p-5 text-primary-foreground" style={{ backfaceVisibility: "hidden" }}>
              <div className="flex justify-between items-start">
                <span className="text-lg font-bold opacity-90">ainter</span>
                <div className="w-10 h-7 rounded bg-primary-foreground/20 flex items-center justify-center text-xs font-bold">
                  CHIP
                </div>
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] opacity-80 mb-1">•••• •••• •••• 4321</p>
                <p className="text-xs opacity-60 uppercase tracking-wider">Nome do Titular</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
