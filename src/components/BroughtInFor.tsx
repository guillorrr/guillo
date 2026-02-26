import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const items = [
  "Designing scalable WordPress architectures",
  "Fixing performance issues in production",
  "Building complex admin platforms",
  "Integrating AI into existing systems",
  "Taking ownership of technical direction",
];

const BroughtInFor = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-text-accent text-sm tracking-widest uppercase mb-3">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            What I'm Usually Brought In For
          </h2>
        </motion.div>

        <div className="space-y-0 border-t border-border">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 py-5 border-b border-border group"
            >
              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-lg text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BroughtInFor;
