import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import globalAccountImg from "@/assets/global-account.png";

const GlobalAccount = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left column */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Conta internacional com{" "}
            <span className="text-primary">cartão físico e virtual</span>
          </h2>
          <ul className="space-y-4 text-muted-foreground text-base md:text-lg mb-8">
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-primary font-bold text-xl">•</span>
              <span>Sem IOF nas transações internacionais</span>
            </li>
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-primary font-bold text-xl">•</span>
              <span>Câmbio com dólar comercial</span>
            </li>
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-primary font-bold text-xl">•</span>
              <span>Cashback em compras internacionais</span>
            </li>
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-primary font-bold text-xl">•</span>
              <span>Aceito em mais de 200 países</span>
            </li>
          </ul>
          <motion.button
            className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full text-lg hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Abrir conta global
          </motion.button>
        </motion.div>

        {/* Right column */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img
            src={globalAccountImg}
            alt="Conta Global Inter com cartão físico e virtual"
            className="w-[340px] md:w-[420px] lg:w-[500px] max-w-full h-auto drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalAccount;
