import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import globalAccountImg from "@/assets/c6-global-account.png";

const GlobalAccount = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="pt-20 pb-0 px-6 bg-background relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-end gap-12">
        {/* Left column */}
        <motion.div
          className="flex-1 text-center lg:text-left pb-20"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6 mt-10 lg:mt-0">
            C6 Conta Global com{" "}
            <span className="text-primary">Dólar e Euro</span>
          </h2>
          <ul className="space-y-4 text-muted-foreground text-base md:text-lg mb-8">
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-primary font-bold text-xl">•</span>
              <span>Dólar e euro com spread a partir de 0,75%</span>
            </li>
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-primary font-bold text-xl">•</span>
              <span>Câmbio 24h no mesmo app da sua conta no Brasil</span>
            </li>
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-primary font-bold text-xl">•</span>
              <span>Cartão de débito internacional exclusivo</span>
            </li>
            <li className="flex items-start gap-3 justify-center lg:justify-start">
              <span className="text-primary font-bold text-xl">•</span>
              <span>Saques em caixas eletrônicos pelo mundo todo</span>
            </li>
          </ul>
          <motion.button
            className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full text-lg hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Abrir C6 Conta Global
          </motion.button>
        </motion.div>

        {/* Right column */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0 self-end"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src={globalAccountImg}
            alt="C6 Conta Global Dólar e Euro"
            className="w-[340px] md:w-[420px] lg:w-[500px] max-w-full h-auto drop-shadow-2xl relative -bottom-2 md:-bottom-4"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalAccount;
