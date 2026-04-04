import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardCarousel from "./CardCarousel";

const Products = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="produtos" className="bg-background py-16 lg:py-20 px-4 lg:px-10">
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

        <CardCarousel />
      </div>
    </section>
  );
};

export default Products;
