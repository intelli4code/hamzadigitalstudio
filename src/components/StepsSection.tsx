import { motion } from "framer-motion";
import { Check, User } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Create your workspace",
      description: "Set up your branded portal in minutes. Add your logo, colors, and customize the experience for your clients.",
    },
    {
      number: "02",
      title: "Add clients & projects",
      description: "Invite clients and organize their projects. Everything they need is in one place, accessible anytime.",
    },
    {
      number: "03",
      title: "Share your work",
      description: "Upload deliverables, share updates, and get feedback. Clients always know what's happening.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background border-t border-border overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Steps List */}
          <div>
            <BlurReveal
              as="h2"
              delay={0.1}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-8 md:mb-12"
            >
              Get started in{" "}
              <span className="text-primary">3 simple steps</span>
            </BlurReveal>

            <div className="space-y-6 md:space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-4 md:gap-6"
                >
                  <span className="font-body text-3xl sm:text-4xl md:text-5xl font-bold text-primary/20 flex-shrink-0">
                    {step.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl font-medium text-foreground mb-1 md:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive UI Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary rounded-3xl p-5 md:p-6 lg:p-8"
          >
            <div className="bg-card rounded-2xl p-4 md:p-5 lg:p-6 shadow-soft border border-border">
              <h4 className="text-base md:text-lg font-medium text-foreground mb-4 md:mb-6">Create your workspace</h4>

              <div className="space-y-3 md:space-y-4">
                <div>
                  <label className="text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 block">Workspace name</label>
                  <div className="flex items-center gap-2 md:gap-3 bg-secondary rounded-xl px-3 md:px-4 py-2.5 md:py-3">
                    <input
                      type="text"
                      value="Radiant Studio"
                      readOnly
                      className="bg-transparent flex-1 text-sm md:text-base text-foreground outline-none min-w-0"
                    />
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0" />
                  </div>
                </div>

                <div>
                  <label className="text-xs md:text-sm text-muted-foreground mb-1.5 md:mb-2 block">Your role</label>
                  <div className="flex items-center gap-2 md:gap-3 bg-secondary rounded-xl px-3 md:px-4 py-2.5 md:py-3">
                    <span className="text-sm md:text-base text-foreground">Freelance Designer</span>
                  </div>
                </div>

                <div className="pt-3 md:pt-4">
                  <label className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 block">Team members</label>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                      <User className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                    </div>
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-muted border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                      <span className="text-muted-foreground text-base md:text-lg">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
