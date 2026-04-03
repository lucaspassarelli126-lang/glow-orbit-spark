import { motion } from "framer-motion";
import { Shield, Users } from "lucide-react";

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
        >
          <div
            className="relative w-[320px] h-[200px] sm:w-[400px] sm:h-[250px] lg:w-[480px] lg:h-[300px] rounded-2xl"
            style={{
              background: "linear-gradient(145deg, #b0b0b0 0%, #808080 40%, #a0a0a0 70%, #909090 100%)",
              transform: "rotate(-12deg)",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.25), 0 10px 30px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Card content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8 text-white">
              <div className="flex justify-between items-start">
                <span className="text-xl lg:text-2xl font-bold tracking-wide opacity-90">ainter</span>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-red-500 opacity-80" />
                  <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-yellow-400 opacity-80 -ml-3" />
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="w-10 h-8 lg:w-12 lg:h-9 rounded bg-yellow-300/60 mb-3 flex items-center justify-center">
                    <div className="w-6 h-5 lg:w-8 lg:h-6 border border-yellow-200/40 rounded-sm" />
                  </div>
                  <p className="text-xs lg:text-sm tracking-[0.25em] opacity-70">•••• •••• •••• 4321</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
