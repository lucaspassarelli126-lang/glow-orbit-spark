import { motion } from "framer-motion";
import { Shield, Users } from "lucide-react";
import c6CardAngled from "@/assets/c6-card-angled.png";

const Hero = () => {
  return (
    <section className="bg-background relative overflow-hidden py-16 px-4 md:py-24 md:px-10 min-h-[85vh] flex items-center">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-20 relative z-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pb-10 md:pb-0"
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
      </div>

      {/* Right Column - Bleeding Corner Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[80%] md:w-[50%] lg:w-[55%] max-w-[800px] flex justify-end items-end z-0 pointer-events-none"
      >
        {/* Ajuste suave de brilho (opcional) */}
        <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full z-0" />
        
        <img
          src={c6CardAngled}
          alt="Cartão C6 Bank no Bloco"
          className="relative z-10 w-full h-auto object-cover object-right-bottom transform translate-x-[5%] translate-y-[5%]"
          style={{
            maskImage: "linear-gradient(to right, black 70%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskComposite: "destination-in",
          }}
        />
      </motion.div>
    </section>
  );
};
export default Hero;
