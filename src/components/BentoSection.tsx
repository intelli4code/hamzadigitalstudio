import { motion } from "framer-motion";
import { Cloud, Bell } from "lucide-react";
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
          {/* Mobile App Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative row-span-2"
          >
            <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <img
                src={theme === 'dark' ? "/mobile-app-dark.png" : mobileAppMockup}
                alt="Mobile app preview"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Branded Client Spaces */}
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
              Responsive Design{" "}
            </BlurReveal>
            <Typewriter
              text="Beautiful, mobile-first designs that work perfectly on every screen size. Your site will look stunning on phones, tablets, and desktops"
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
              Performance Optimization
            </BlurReveal>
            <Typewriter
              text="Lightning-fast websites optimized for speed and SEO. Better performance means better rankings and higher conversion rates"
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
