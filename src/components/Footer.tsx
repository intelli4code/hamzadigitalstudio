import { Button } from "@/components/ui/button";
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
          Ready to transform your{" "}
          <br className="hidden md:block" />
          client experience?
        </h2>
        <p className="text-base md:text-lg text-card-dark-foreground/60 max-w-xl mx-auto mb-8 md:mb-10 px-4">
          Join thousands of freelancers and agencies who've streamlined their client workflow
        </p>
        <Button variant="hero-cta" size="xl" className="group">
          Get early access
          <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-card-dark/20 rounded-lg ml-2 group-hover:bg-card-dark/30 transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </span>
        </Button>
      </motion.div>

      {/* Footer Links */}
      <div className="section-container py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Logo */}
          <a href="/" className="font-display text-xl md:text-2xl italic font-medium">
            Cliento
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            <a href="#" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Product
            </a>
            <a href="#" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Pricing
            </a>
            <a href="#" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Resources
            </a>
            <a href="#" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs md:text-sm text-card-dark-foreground/60 hover:text-card-dark-foreground transition-colors">
              Terms
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs md:text-sm text-card-dark-foreground/40">
            © 2025 Cliento. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
