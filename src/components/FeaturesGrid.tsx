import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wallet, BarChart3, Bell, Lock, RefreshCw, HeartHandshake } from "lucide-react";

const features = [
  { icon: Wallet, title: "Conta Digital", desc: "Conta gratuita com rendimento automático desde o primeiro dia." },
  { icon: BarChart3, title: "Investimentos", desc: "Renda fixa, ações e fundos em um só lugar." },
  { icon: Bell, title: "Notificações", desc: "Acompanhe cada transação em tempo real." },
  { icon: Lock, title: "Segurança", desc: "Autenticação biométrica e bloqueio instantâneo." },
  { icon: RefreshCw, title: "Pix e TED", desc: "Transferências ilimitadas, sem custo algum." },
  { icon: HeartHandshake, title: "Atendimento", desc: "Suporte humano 24h, quando precisar." },
];

const FeaturesGrid = () => {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-4">
            <span className="text-primary-foreground">Tudo que você precisa.</span>
            <br />
            <span className="text-primary">Sem complicação.</span>
          </h2>
          <p className="text-base text-dark-text-muted">
            Funcionalidades pensadas para simplificar sua vida financeira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-dark-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-dark-card-hover hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(255,140,0,0.1)]"
            >
              <div className="w-10 h-10 rounded-lg border-2 border-primary bg-primary/10 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-primary" />
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

export default FeaturesGrid;
