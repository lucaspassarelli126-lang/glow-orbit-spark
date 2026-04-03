import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Zap, CreditCard, Gift } from "lucide-react";

const features = [
  { icon: Shield, title: "Segurança Total", desc: "Criptografia de ponta e monitoramento 24h." },
  { icon: Zap, title: "Aprovação Rápida", desc: "Análise de crédito em segundos." },
  { icon: CreditCard, title: "Sem Anuidade", desc: "Zero taxas escondidas, para sempre." },
  { icon: Gift, title: "Cashback", desc: "Ganhe de volta em todas as compras." },
];

const DarkSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="bg-dark-bg py-16 lg:py-20 px-4 lg:px-10" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            É fácil!
          </h2>
          <p className="text-base text-dark-text">
            Simplifique sua rotina financeira com a gente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-dark-card-hover hover:-translate-y-1 hover:shadow-[var(--shadow-dark-glow)]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4">
                <f.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-dark-text-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
