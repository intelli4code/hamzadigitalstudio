import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Folder, FileText, MessageSquare, CreditCard } from "lucide-react";
import heroBackground from "@/assets/hero-clouds.jpg";
import { useRef } from "react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";

const partnerLogos = [
  { name: "PayPal", svg: "PayPal" },
  { name: "Fiverr", svg: "fiverr." },
  { name: "Freelancer", svg: "freelancer" },
  { name: "LinkedIn", svg: "Linked" },
  { name: "Stripe", svg: "stripe" },
  { name: "Upwork", svg: "Upwork" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <img
          src={heroBackground}
          alt=""
          className="w-full h-[120%] object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>

      {/* Content with parallax fade */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center section-container text-center py-12 md:py-20 px-4"
      >
        {/* Day/Night Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center bg-card-dark/90 backdrop-blur-sm rounded-full p-1 shadow-lg">
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary" />
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-transparent" />
          </div>
        </motion.div>

        {/* Headline */}
        <BlurReveal
          as="h1"
          delay={0.1}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground max-w-4xl leading-tight"
        >
          One portal for every{" "}
          <br className="hidden sm:block" />
          project & client
        </BlurReveal>

        {/* Subheadline */}
        <Typewriter
          text="A modern client portal that replaces scattered emails, messy threads, and lost files with one clean, structured space your clients can rely on every day"
          delay={0.6}
          speed={20}
          className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl px-4"
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-10"
        >
          <Button variant="hero-cta" size="xl" className="group">
            Get early access
            <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-card-dark/20 rounded-lg ml-2 group-hover:bg-card-dark/30 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </span>
          </Button>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-8"
        >
          {[
            { icon: Folder, label: "Projects" },
            { icon: FileText, label: "Files" },
            { icon: MessageSquare, label: "Messages" },
            { icon: CreditCard, label: "Billing" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Partner Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 bg-background py-8 md:py-12 border-t border-border"
      >
        <div className="section-container">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-16">
            {partnerLogos.map((logo) => (
              <span
                key={logo.name}
                className="text-sm md:text-lg lg:text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-pointer"
              >
                {logo.svg === "Linked" ? (
                  <span>Linked<span className="text-[#0A66C2]/40 hover:text-[#0A66C2]">in</span></span>
                ) : (
                  logo.svg
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
