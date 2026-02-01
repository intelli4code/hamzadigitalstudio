import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowUpRight, Folder, FileText, MessageSquare, CreditCard } from "lucide-react";
import heroBackground from "@/assets/hero-clouds.jpg";
import { useRef } from "react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ui/ThemeToggle";

const techStack = [
  { name: "React", svg: "React" },
  { name: "Next.js", svg: "Next.js" },
  { name: "Tailwind", svg: "Tailwind" },
  { name: "WordPress", svg: "WordPress" },
  { name: "Webflow", svg: "Webflow" },
  { name: "Shopify", svg: "Shopify" },
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
        className="absolute inset-0 z-0 w-full h-full"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        {/* Light mode background */}
        <img
          src={heroBackground}
          alt=""
          className="w-full h-[120%] object-cover object-bottom dark:hidden"
        />
        {/* Dark mode background with intense blur */}
        <div className="hidden dark:block absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/dark-mode-hero.png"
            alt=""
            className="w-full h-full object-cover object-center blur-2xl scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </motion.div>

      {/* Content with parallax fade */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center section-container text-center py-12 md:py-20 px-4"
      >
        {/* Day/Night Toggle */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 flex justify-center"
        >
          <ThemeToggle />
        </motion.div> */}

        {/* Headline */}
        <BlurReveal
          as="h1"
          delay={0.1}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground max-w-4xl leading-tight"
        >
          Transforming Ideas into{" "}
          <br className="hidden sm:block" />
          Stunning Digital Experiences
        </BlurReveal>

        {/* Subheadline */}
        <Typewriter
          text="We craft beautiful, high-performing websites that drive results. From custom web design to full-stack development, we bring your vision to life with modern technology and creative excellence"
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
          <RainbowButton
            size="lg"
            className="group px-8 py-6 text-base md:text-lg font-semibold"
            onClick={() => window.location.href = '/start-project'}
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </RainbowButton>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-8"
        >
          {[
            { icon: Folder, label: "Web Design" },
            { icon: FileText, label: "Development" },
            { icon: MessageSquare, label: "E-commerce" },
            { icon: CreditCard, label: "SEO" },
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
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="text-sm md:text-lg lg:text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-pointer"
              >
                {tech.svg}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
