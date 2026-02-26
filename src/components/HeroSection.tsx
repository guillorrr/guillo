import { motion } from "framer-motion";
import { Github, Mail, FolderOpen } from "lucide-react";
import logo from "@/assets/logo-gb-white.png";
import bgPhoto from "@/assets/bg-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Background photo with overlay */}
      <div className="absolute inset-0">
        <img src={bgPhoto} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[300px] sm:h-[400px] rounded-full opacity-[0.08]"
        style={{ background: 'radial-gradient(ellipse, hsl(var(--primary)), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <img src={logo} alt="guillo.dev" className="h-14 sm:h-16 w-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Senior Full Stack Developer
          <br />
          <span className="text-gradient-primary">WordPress & Laravel Architect</span>
          <br />
          <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            AI & Automation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          I design scalable web platforms, architect WordPress enterprise systems,
          build Laravel-based backends, and integrate AI-driven automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">
            <FolderOpen className="w-4 h-4" />
            View Projects
          </a>
          <a href="https://github.com/guillorrr" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors">
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors">
            <Mail className="w-4 h-4" />
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 flex items-center justify-center gap-4 sm:gap-6 text-dim text-xs sm:text-sm font-mono"
        >
          <span>20+ years</span>
          <span className="text-border">·</span>
          <span>Enterprise scale</span>
          <span className="text-border">·</span>
          <span>System ownership</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
