import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Smartphone, CreditCard, PiggyBank, Zap } from "lucide-react";

const features = [
  { icon: Smartphone, title: "100% Digital", desc: "Abra sua conta pelo app em minutos." },
  { icon: CreditCard, title: "Cartão Virtual", desc: "Use imediatamente para compras online." },
  { icon: PiggyBank, title: "Investimentos", desc: "Rendimento automático desde o primeiro dia." },
  { icon: Zap, title: "Pix Instantâneo", desc: "Transferências em segundos, 24/7." },
];

const AppSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const glareRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!glareRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glareRef.current.style.left = `${x - rect.width}px`;
    glareRef.current.style.top = `${y - rect.height}px`;
  }, []);

  return (
    <section className="bg-background py-16 lg:py-20 px-4 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center" ref={ref}>
        {/* Phone + Card composition */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
          style={{ perspective: "1600px", height: "480px" }}
        >
          {/* Blurred background shape */}
          <div
            className="absolute w-full h-full rounded-[100px] opacity-0 animate-fade-in-bg"
            style={{
              background: "linear-gradient(135deg, #7a3b0c, #3a1a05)",
              filter: "blur(20px)",
              transform: "scale(1.1) rotate(-6deg)",
            }}
          />

          {/* Phone */}
          <div
            className="absolute w-[240px] h-[480px] left-1/2 -ml-[200px] top-[-20px] rounded-[40px] opacity-0 animate-rise-phone"
            style={{
              background: "linear-gradient(145deg, #111, #000)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.4), inset 0 0 10px rgba(255,255,255,0.08)",
            }}
          >
            <div className="absolute inset-[10px] rounded-[30px] bg-gradient-to-b from-white to-muted p-5">
              <p className="text-foreground font-semibold text-sm mb-1">Cartões</p>
              <p className="text-foreground text-xl font-bold">R$ 50,00</p>
            </div>
          </div>

          {/* Floating Card */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="absolute w-[300px] h-[180px] top-[170px] left-1/2 ml-[-60px] rounded-[20px] opacity-0 animate-rise-card overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(var(--orange-primary)), #ff3d00)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.35), inset 0 0 30px rgba(255,255,255,0.2)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glare */}
            <div
              ref={glareRef}
              className="absolute pointer-events-none"
              style={{
                width: "200%",
                height: "200%",
                background: "radial-gradient(circle, rgba(255,255,255,0.35), transparent 60%)",
                top: "-50%",
                left: "-50%",
                transition: "all 0.1s",
              }}
            />
            {/* Logo */}
            <span className="absolute top-5 right-5 text-primary-foreground font-semibold text-[22px]">
              ainter
            </span>
            {/* Chip */}
            <div
              className="absolute top-[70px] left-[25px] w-[50px] h-[35px] rounded-lg"
              style={{ background: "linear-gradient(145deg, #ddd, #999)" }}
            />
            {/* Mastercard circles */}
            <div className="absolute bottom-4 right-5 flex">
              <div className="w-10 h-10 rounded-full bg-[#eb001b] -mr-3" />
              <div className="w-10 h-10 rounded-full bg-[#f79e1b]" />
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
