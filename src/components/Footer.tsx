import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-card-dark text-card-dark-foreground overflow-hidden">
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="section-container py-16 md:py-24 lg:py-32 text-center border-b border-card-dark-foreground/10"
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium max-w-3xl mx-auto leading-tight mb-4 md:mb-6 px-4">
          Ready to elevate your{" "}
          <br className="hidden md:block" />
          digital presence?
        </h2>
        <p className="text-base md:text-lg text-card-dark-foreground/60 max-w-xl mx-auto mb-8 md:mb-10 px-4">
          Let's create a website that drives real results for your business
        </p>
        <RainbowButton size="lg" className="group px-8 py-6 text-base md:text-lg font-semibold">
          Start Your Project
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </RainbowButton>
      </motion.div>

      {/* Footer Links */}
      <div className="section-container py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Logo */}
          <a href="/" className="font-display text-xl md:text-2xl font-medium">
            Hamza's Digital Studio
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            <a href="#features" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Services
            </a>
            <a href="#workflow" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Contact
            </a>
            <a href="#" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Privacy
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs md:text-sm text-card-dark-foreground/40">
            © 2026 Hamza Digital Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
