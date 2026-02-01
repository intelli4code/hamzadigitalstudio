import { motion } from "framer-motion";
import { Cloud, Bell, Lock, FileText, Check } from "lucide-react";
import mobileAppMockup from "@/assets/mobile-app-mockup.jpg";
import { useTheme } from "@/contexts/ThemeContext";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";

const BentoSection = () => {
  const { theme } = useTheme();

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card-dark overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="pill-badge-dark mb-6 inline-flex"
          >
            Client essentials
          </motion.div>

          <BlurReveal
            as="h2"
            delay={0.1}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-card-dark-foreground max-w-3xl mx-auto leading-tight px-4"
          >
            Modern Tech Stack &{" "}
            <br className="hidden md:block" />
            Capabilities
          </BlurReveal>

          <Typewriter
            text="Cutting-edge technology and proven methodologies that ensure your website performs flawlessly across all devices and platforms"
            delay={0.3}
            speed={25}
            className="mt-4 md:mt-6 text-base md:text-lg text-card-dark-foreground/60 max-w-xl mx-auto px-4"
          />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Secure File Transfer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="row-span-2 bg-card rounded-3xl p-5 md:p-6 lg:p-8 flex flex-col"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-purple-500 flex items-center justify-center mb-4 md:mb-6">
              <Lock className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>

            <BlurReveal
              as="h3"
              delay={0.1}
              className="font-display text-xl md:text-2xl font-medium text-foreground mb-2 md:mb-3"
            >
              Secure File Transfer
            </BlurReveal>
            <Typewriter
              text="End-to-end encrypted file sharing for client assets. We prioritize security and data privacy in every project we deliver."
              delay={0.3}
              speed={30}
              className="text-sm md:text-base text-muted-foreground mb-8"
            />

            {/* Visual representation of file transfer */}
            <div className="mt-auto bg-secondary/50 rounded-2xl p-4 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Project_Brief.pdf</p>
                    <p className="text-xs text-muted-foreground">2.4 MB • Encrypted</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-success" />
                </div>
              </div>
              <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                <div className="h-full w-full bg-success rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Realtime Updates */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-5 md:p-6 lg:p-8"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-blue-500 flex items-center justify-center mb-4 md:mb-6">
              <Cloud className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <BlurReveal
              as="h3"
              delay={0.1}
              className="font-display text-xl md:text-2xl font-medium text-foreground mb-2 md:mb-3"
            >
              Realtime Updates
            </BlurReveal>
            <Typewriter
              text="Instant data synchronization across all devices using WebSockets. Keep your users engaged with live content updates."
              delay={0.3}
              speed={30}
              className="text-sm md:text-base text-muted-foreground"
            />
          </motion.div>

          {/* 3x Stat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary rounded-3xl p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center"
          >
            <p className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-primary-foreground">5×</p>
            <p className="text-sm md:text-base text-primary-foreground/80 mt-2">faster load times</p>
          </motion.div>

          {/* 40% Stat */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary rounded-3xl p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center text-center"
          >
            <p className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-primary-foreground">90%</p>
            <p className="text-sm md:text-base text-primary-foreground/80 mt-2">client satisfaction</p>
          </motion.div>

          {/* Smart Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card rounded-3xl p-5 md:p-6 lg:p-8"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-red-500 flex items-center justify-center mb-4 md:mb-6">
              <Bell className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <BlurReveal
              as="h3"
              delay={0.1}
              className="font-display text-xl md:text-2xl font-medium text-foreground mb-2 md:mb-3"
            >
              Smart Notifications
            </BlurReveal>
            <Typewriter
              text="Intelligent alert systems that keep users informed without being intrusive. Customizable channels and delivery methods."
              delay={0.3}
              speed={30}
              className="text-sm md:text-base text-muted-foreground"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
