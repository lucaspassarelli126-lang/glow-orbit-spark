import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, CreditCard, PiggyBank, Zap } from "lucide-react";

const features = [
  { icon: Smartphone, title: "100% Digital", desc: "Abra sua conta pelo app em minutos." },
  { icon: CreditCard, title: "Cartão Virtual", desc: "Use imediatamente para compras online." },
  { icon: PiggyBank, title: "Investimentos", desc: "Rendimento automático desde o primeiro dia." },
  { icon: Zap, title: "Pix Instantâneo", desc: "Transferências em segundos, 24/7." },
];

const WavySvg = () => (
  <svg
    viewBox="0 0 400 300"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -top-16 -left-24 w-[480px] h-[300px] -z-10 opacity-80 animate-wavy"
  >
    <path d="M0,100 Q100,80 200,100 T400,100" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
    <path d="M0,150 Q100,130 200,150 T400,150" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
    <path d="M0,200 Q100,180 200,200 T400,200" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
    <path d="M0,250 Q100,230 200,250 T400,250" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
  </svg>
);

const AppSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="bg-background py-16 lg:py-20 px-4 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center" ref={ref}>
        {/* Smartphone */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <WavySvg />
          <div
            className="w-[260px] h-[520px] lg:w-[280px] lg:h-[560px] bg-foreground rounded-5xl border-[8px] border-foreground/80 relative"
            style={{ transform: "perspective(1000px) rotateY(15deg) rotateX(5deg)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
          >
            <div className="absolute top-6 left-[2px] right-[2px] bottom-[26px] bg-muted rounded-[32px] flex items-center justify-center">
              <div className="text-center px-4">
                <div className="w-12 h-12 rounded-full bg-primary mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">a</span>
                </div>
                <p className="text-xs text-gray-text">App Ainter</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-4">
            <span className="text-foreground">Invista do seu jeito.</span>
            <br />
            <span className="text-primary">Onde estiver.</span>
          </h2>
          <p className="text-base text-gray-text leading-relaxed mb-10">
            Tenha controle total das suas finanças com um app intuitivo e repleto de funcionalidades.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3 items-start bg-muted rounded-xl p-4">
                <f.icon size={24} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{f.title}</p>
                  <p className="text-xs text-gray-text leading-snug">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppSection;
