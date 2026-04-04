import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, CreditCard, PiggyBank, Zap } from "lucide-react";
import c6BlackCardPremium from "@/assets/c6-black-card-premium.png";

const features = [
  { icon: Smartphone, title: "100% Digital", desc: "Abra sua conta pelo app em minutos." },
  { icon: CreditCard, title: "Cartão Virtual", desc: "Use imediatamente para compras online." },
  { icon: PiggyBank, title: "Investimentos", desc: "Rendimento automático desde o primeiro dia." },
  { icon: Zap, title: "Pix Instantâneo", desc: "Transferências em segundos, 24/7." },
];

const AppSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = useCallback(() => {
    setFlipped((prev) => !prev);
  }, []);

  return (
    <section className="bg-background py-16 lg:py-20 px-4 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center" ref={ref}>
        {/* Phone App Screens */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center w-full min-h-[400px]"
        >
          {/* Ajuste "blending" e de posicionamento se a imagem precisar de adaptação */}
          <img 
            src={c6BlackCardPremium} 
            alt="Cartão C6 Black Premium" 
            className="w-full max-w-[550px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 [mask-image:radial-gradient(circle,black_70%,transparent_100%)] mix-blend-screen" 
          />
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
          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            Tenha controle total das suas finanças com um app intuitivo e repleto de funcionalidades.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3 items-start bg-muted rounded-xl p-4">
                <f.icon size={24} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{f.title}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{f.desc}</p>
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
