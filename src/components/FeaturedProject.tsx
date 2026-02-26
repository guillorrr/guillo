import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const FeaturedProject = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <p className="font-mono text-text-accent text-xs sm:text-sm tracking-widest uppercase mb-3">
            Featured Project
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Talampaya
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="surface-glass rounded-xl p-5 sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-xs text-primary px-2 py-1 rounded bg-primary/10">
              WordPress Architecture
            </span>
            <span className="font-mono text-xs text-muted-foreground px-2 py-1 rounded bg-muted">
              Open Source
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Enterprise WordPress Architecture Boilerplate
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
            A structured WordPress base architecture designed for scalable and maintainable
            enterprise projects. Includes service layers, controllers, background jobs,
            automation pipelines, and a DevOps-ready setup. Built to eliminate the chaos
            of unstructured WordPress codebases.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["Service Layer", "Controllers", "Background Jobs", "WP-CLI", "Docker", "CI/CD"].map(tag => (
              <span key={tag} className="font-mono text-xs text-dim px-2.5 py-1 rounded border border-border">
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/guillorrr/talampaya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            View on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
