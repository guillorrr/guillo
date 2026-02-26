import { motion } from "framer-motion";
import { Server, Code2, Brain, Container } from "lucide-react";

const expertiseData = [
  {
    icon: Code2,
    title: "WordPress Enterprise",
    items: [
      "Custom architecture & service layers",
      "ACF advanced usage (blocks, custom DB tables)",
      "Multisite · WPML · Timber / Twig",
      "Background processing & WP-CLI automation",
      "Performance optimization at scale",
    ],
  },
  {
    icon: Server,
    title: "Laravel & Backend Systems",
    items: [
      "Custom CRUD platforms (Backpack)",
      "Business logic design & REST APIs",
      "Database modeling & migrations",
      "Scalable backend architecture",
      "Queue systems & job orchestration",
    ],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    items: [
      "AI chatbot development",
      "LLM integrations & prompt engineering",
      "Workflow automation with n8n",
      "AI-enhanced data pipelines",
      "Python neural networks & ML experimentation",
    ],
  },
  {
    icon: Container,
    title: "DevOps & Infrastructure",
    items: [
      "Docker-based development & deployment",
      "AWS & GCP cloud deployments",
      "CI/CD pipeline architecture",
      "Linux server management",
      "Performance, caching & CDN strategies",
    ],
  },
];

const ExpertiseSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-16"
        >
          <p className="font-mono text-text-accent text-xs sm:text-sm tracking-widest uppercase mb-3">
            Core Expertise
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Full-stack. Production-grade.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {expertiseData.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="surface-glass rounded-xl p-5 sm:p-6 hover:glow-border transition-colors"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <block.icon className="w-5 h-5 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold">{block.title}</h3>
              </div>
              <ul className="space-y-2 sm:space-y-2.5">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5 text-[6px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
