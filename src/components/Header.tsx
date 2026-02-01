import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgress } from "@/components/ui/scroll-progress";


const Header = () => {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${isScrolled
        ? 'bg-background/70 backdrop-blur-2xl border-b border-border/30 shadow-lg rounded-b-3xl'
        : 'bg-background/40 backdrop-blur-md border-b border-transparent rounded-b-3xl'
        }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="font-display text-xl md:text-2xl font-medium text-foreground">
            Hamza's Design Studio
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Product
            </a>
            <a href="#workflow" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#login" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Login
            </a>
            <Button variant="default" size="default" className="group hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Get early access
              <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full ml-2 group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 text-current" />
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-secondary"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <ScrollProgress />
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="section-container py-6 space-y-4">
              <a
                href="#features"
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product
              </a>
              <a
                href="#workflow"
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <div className="pt-4 flex flex-col gap-3">
                <a href="#login" className="text-center py-3 text-lg font-medium text-muted-foreground">
                  Login
                </a>
                <Button variant="hero" size="lg" className="w-full group">
                  Get early access
                  <span className="flex items-center justify-center w-6 h-6 bg-primary rounded-md ml-1 group-hover:bg-orange-light transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-primary-foreground" />
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
