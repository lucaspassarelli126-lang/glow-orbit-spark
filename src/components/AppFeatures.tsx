import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const AppFeatures = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="bg-dark-bg py-16 lg:py-20 px-4 lg:px-10" ref={ref}>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Smartphone with pulse */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div
            className="w-[280px] h-[560px] lg:w-[320px] lg:h-[640px] bg-foreground rounded-5xl border-[12px] border-foreground/70 animate-phone-pulse"
            style={{ transform: "scale(1.1) perspective(1000px) rotateY(10deg)" }}
          >
            <div className="absolute inset-3 top-6 bottom-6 bg-dark-card rounded-[32px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">a</span>
                </div>
                <p className="text-xs text-dark-text-muted">Baixe agora</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-4">
            <span className="text-primary-foreground">Baixe o app e tenha</span>
            <br />
            <span className="text-primary">um banco completo no bolso</span>
          </h2>
          <p className="text-base text-dark-text-muted leading-relaxed mb-10">
            Disponível para iOS e Android. Gerencie suas finanças, faça pagamentos e acompanhe seus investimentos em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="flex items-center gap-3 rounded-xl border-2 border-primary-foreground/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-foreground">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </button>
            <button className="flex items-center gap-3 rounded-xl border-2 border-primary-foreground/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-foreground">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
              Google Play
            </button>
          </div>

          <div className="flex gap-3">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                onClick={() => setActiveDot(dot)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  dot === activeDot ? "bg-primary" : "bg-dark-card-hover"
                }`}
                aria-label={`Slide ${dot + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeatures;
