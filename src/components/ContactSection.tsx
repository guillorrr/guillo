import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-text-accent text-xs sm:text-sm tracking-widest uppercase mb-3">
            Let's Talk
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
            Available for Collaboration
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto px-2">
            Open to senior-level consulting, architecture design, and long-term
            technical collaborations. If you need someone who owns the technical direction,
            let's connect.
          </p>

          <a
            href="mailto:hola@guillo.dev"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-base sm:text-lg"
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
