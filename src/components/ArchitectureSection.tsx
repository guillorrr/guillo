import { motion } from "framer-motion";

const principles = [
  "System design & architecture planning",
  "Clean architecture & SOLID principles",
  "Long-term maintainability over quick fixes",
  "Technical decision-making & trade-off analysis",
  "Performance debugging & profiling",
  "Scaling platforms from MVP to enterprise",
];

const ArchitectureSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-text-accent text-xs sm:text-sm tracking-widest uppercase mb-3">
            Beyond Code
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
            Architecture Mindset
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            Writing code is one part. I focus on the decisions that make systems
            resilient, maintainable, and ready to scale — before the first line is written.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 py-3 px-4 rounded-lg border border-border/40 bg-card/30"
            >
              <span className="font-mono text-primary text-xs">0{i + 1}</span>
              <span className="text-xs sm:text-sm text-secondary-foreground">{p}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
