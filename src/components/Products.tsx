import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cards = [
  { name: "Ainter Ótio", type: "Gratuito", desc: "Cartão ideal para começar sua vida financeira.", gradient: "linear-gradient(135deg, #FF8C00 0%, #FF6600 100%)" },
  { name: "Ainter Gold", type: "Gold", desc: "Benefícios exclusivos e cashback em compras.", gradient: "linear-gradient(135deg, #FFD700 0%, #FFC700 100%)" },
  { name: "Ainter Platinum", type: "Platinum", desc: "Mais vantagens e limite diferenciado.", gradient: "linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 100%)" },
  { name: "Ainter Black", type: "Black", desc: "O máximo em benefícios e exclusividade.", gradient: "linear-gradient(135deg, #000000 0%, #333333 100%)" },
  { name: "Ainter Visa", type: "Internacional", desc: "Aceito em milhões de estabelecimentos.", gradient: "linear-gradient(135deg, #1A1F71 0%, #0E47A1 100%)" },
];

const Products = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="produtos" className="bg-muted py-16 lg:py-20 px-4 lg:px-10">
      <div className="mx-auto max-w-[1400px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha o cartão ideal para você
          </h2>
          <p className="text-base text-gray-text">
            Opções para todos os perfis, do básico ao premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] cursor-pointer transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.03] hover:shadow-[var(--shadow-card-hover)]"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              whileHover={{ rotateX: -3, rotateY: 3 }}
            >
              <div
                className="w-full h-[140px] rounded-xl mb-4 flex items-end p-4"
                style={{ background: card.gradient }}
              >
                <span className="text-sm font-bold text-primary-foreground opacity-80 drop-shadow">
                  {card.name}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{card.name}</h3>
              <span className="inline-block rounded-4xl bg-secondary text-accent-foreground text-xs font-semibold px-3 py-1 mb-3">
                {card.type}
              </span>
              <p className="text-sm text-gray-text leading-relaxed mb-4 min-h-[40px]">
                {card.desc}
              </p>
              <button className="w-full rounded-xl bg-primary text-primary-foreground py-3 text-sm font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,140,0,0.3)]">
                Saiba mais
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
