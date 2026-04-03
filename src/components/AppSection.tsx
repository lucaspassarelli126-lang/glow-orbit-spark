import { useRef, useState, useCallback } from "react";
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
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = useCallback(() => {
    setFlipped((prev) => !prev);
  }, []);

  return (
    <section className="bg-background py-16 lg:py-20 px-4 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center" ref={ref}>
        {/* Phone + Card composition */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
          style={{ perspective: "1000px", height: "520px" }}
        >
          {/* Phone */}
          <div
            className="relative flex-shrink-0 overflow-hidden"
            style={{
              width: "260px",
              height: "530px",
              background: "white",
              borderRadius: "50px",
              border: "12px solid #1a1a1a",
              transform: "rotate(-12deg) translateX(-60px)",
              boxShadow: "0 0 50px rgba(0,0,0,0.15)",
              zIndex: 1,
            }}
          >
            {/* Notch */}
            <div
              className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[60px] h-[5px] rounded-[10px]"
              style={{ background: "#333", zIndex: 10 }}
            />

            {/* Phone Screen */}
            <div className="flex flex-col gap-3 p-5 pt-9 h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[18px] font-bold text-foreground">←</span>
                <h3 className="text-base font-semibold text-foreground">Cartões</h3>
              </div>

              {/* Invoice Card */}
              <div className="bg-background rounded-[14px] p-4 shadow-sm">
                <p className="text-[11px] text-muted-foreground flex items-center gap-2">
                  Fatura de Agosto
                  <span className="bg-[#00AEEF] text-primary-foreground px-2 py-0.5 rounded-md text-[9px] font-bold">
                    Aberta
                  </span>
                </p>
                <p className="text-2xl font-bold text-foreground mt-1">R$ 50,00</p>
                <p className="text-[11px] text-muted-foreground mt-1">Melhor dia para compra 02/09</p>
                <button
                  className="mt-3 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-[11px] font-bold"
                >
                  Ativar débito automático
                </button>
              </div>

              {/* Limit */}
              <div className="bg-muted rounded-[14px] p-4">
                <p className="text-[11px] text-muted-foreground">Limite cartão</p>
                <div className="h-2 bg-border rounded-full mt-2 mb-2 relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-[40%] bg-primary rounded-full" />
                </div>
                <p className="text-sm font-bold text-foreground">R$ 400,00</p>
                <p className="text-[10px] text-muted-foreground">Utilizado</p>
              </div>

              {/* Small card info */}
              <div className="bg-primary text-primary-foreground rounded-[14px] p-4">
                <p className="text-[11px] font-semibold">Cibele C Carag...</p>
                <p className="text-[10px] opacity-80">•••• 1827</p>
              </div>

              {/* Grid options */}
              <div className="grid grid-cols-3 gap-2 mt-1">
                <div className="bg-muted rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <span className="text-sm">📱</span>
                  <span className="text-[9px] text-muted-foreground font-medium">Cartão Digital</span>
                </div>
                <div className="bg-muted rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <span className="text-sm">💰</span>
                  <span className="text-[9px] text-muted-foreground font-medium">Poupança Mais Limite</span>
                </div>
                <div className="bg-muted rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <span className="text-sm">⚙️</span>
                  <span className="text-[9px] text-muted-foreground font-medium">Opções de limite</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Flip Card */}
          <div
            className="absolute cursor-pointer"
            style={{
              width: "290px",
              height: "180px",
              right: "20px",
              top: "200px",
              transform: "rotate(12deg)",
              zIndex: 3,
              perspective: "1000px",
            }}
            onClick={handleCardClick}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                className="absolute w-full h-full rounded-[20px] p-6 flex flex-col justify-between"
                style={{
                  backfaceVisibility: "hidden",
                  background: "linear-gradient(135deg, #FF8A00 0%, #E65C00 100%)",
                  boxShadow: "50px 50px 80px rgba(0,0,0,0.3)",
                }}
              >
                {/* Logo */}
                <div className="self-end flex items-center gap-1 -mt-1">
                  <span className="text-primary-foreground font-black text-3xl tracking-tighter" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                    inter
                  </span>
                </div>
                {/* Chip */}
                <div
                  className="w-[45px] h-[35px] rounded-lg relative"
                  style={{
                    background: "linear-gradient(135deg, #d1d1d1 0%, #a1a1a1 100%)",
                    border: "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-black/20" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/20" />
                </div>
                {/* Mastercard */}
                <div className="self-end flex mb-1">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#EB001B] -mr-3" />
                  <div className="w-[36px] h-[36px] rounded-full bg-[#F79E1B] opacity-85" />
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute w-full h-full rounded-[20px] flex flex-col justify-start"
                style={{
                  backfaceVisibility: "hidden",
                  background: "linear-gradient(135deg, #E65C00 0%, #FF8A00 100%)",
                  boxShadow: "50px 50px 80px rgba(0,0,0,0.3)",
                  transform: "rotateY(180deg)",
                  padding: 0,
                }}
              >
                {/* Magnetic stripe */}
                <div className="w-full h-[45px] bg-[#333] mt-[30px]" />
                {/* Signature */}
                <div
                  className="w-4/5 h-[35px] bg-[#eee] mx-auto mt-5 flex items-center justify-end pr-4"
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  <span className="text-foreground font-bold text-sm">123</span>
                </div>
                {/* Info */}
                <div className="px-6 py-4 text-[10px] text-primary-foreground/90">
                  <p>Este cartão é pessoal e intransferível.</p>
                  <p>Ouvidoria: 0800 940 7772</p>
                  <p className="font-bold mt-1">BANCO INTER S.A.</p>
                </div>
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
