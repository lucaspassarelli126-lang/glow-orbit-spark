import { motion } from "framer-motion";
import { Shield, Users } from "lucide-react";
import cardInter from "@/assets/card-inter.png";

const Hero = () => {
  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
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

        {/* Right Column - Large Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center relative"
          style={{ perspective: "1000px" }}
        >
          <div className="animate-rotate-card relative w-full max-w-[480px]">
            <img
              src={cardInter}
              alt="Cartão Inter"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
