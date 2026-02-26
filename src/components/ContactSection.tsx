import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-text-accent text-sm tracking-widest uppercase mb-3">
            Let's Talk
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Available for Collaboration
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Open to senior-level consulting, architecture design, and long-term
            technical collaborations. If you need someone who owns the technical direction,
            let's connect.
          </p>

          <a
            href="mailto:hello@guillo.dev"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
