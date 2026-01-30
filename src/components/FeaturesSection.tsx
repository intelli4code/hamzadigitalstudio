import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-background border-t border-border overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="pill-badge mb-6 inline-flex"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            Core features
          </motion.div>

          <BlurReveal
            as="h2"
            delay={0.1}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground max-w-3xl mx-auto leading-tight px-4"
          >
            Powerful features built{" "}
            <br className="hidden md:block" />
            for client clarity
          </BlurReveal>

          <Typewriter
            text="Simple, structured tools that help your clients understand every part of the project — without asking for updates"
            delay={0.3}
            speed={25}
            className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4"
          />
        </div>

        {/* Feature 1 - Organized Client Spaces */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16 lg:mb-24"
        >
          {/* Dark UI Card */}
          <div className="ui-card-dark rounded-3xl p-5 md:p-6 lg:p-8 order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6 text-sm text-card-dark-foreground/60">
              <div>
                <span className="block text-xs uppercase tracking-wider mb-1">Client</span>
                <span className="text-card-dark-foreground font-medium text-sm md:text-base">Kim Creed</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider mb-1">Budget</span>
                <span className="text-card-dark-foreground font-medium text-sm md:text-base">$2,450</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider mb-1">Tasks</span>
                <span className="text-card-dark-foreground font-medium text-sm md:text-base">12</span>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3">
              {[
                { title: "Branding for agency", color: "bg-card-dark-foreground/10" },
                { title: "Website design", color: "bg-primary" },
                { title: "Webflow development", color: "bg-card-dark-foreground/5" },
              ].map((project, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-3 md:p-4 lg:p-5 rounded-2xl ${project.color} ${i === 1 ? 'text-primary-foreground' : 'text-card-dark-foreground'}`}
                >
                  <span className="font-display text-lg sm:text-xl md:text-2xl font-medium truncate mr-3">{project.title}</span>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${i === 1 ? 'bg-card-dark-foreground/20' : 'bg-primary'}`}>
                    <ArrowRight className={`w-4 h-4 md:w-5 md:h-5 ${i === 1 ? '' : 'text-primary-foreground'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <BlurReveal
              as="h3"
              delay={0.1}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-3 md:mb-4"
            >
              Organized{" "}
              <br className="hidden md:block" />
              client spaces
            </BlurReveal>
            <Typewriter
              text="Branded, structured spaces where clients can follow all their work — with support for multiple active projects in one clean view."
              delay={0.3}
              speed={25}
              className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8"
            />

            <div className="border-t border-border pt-4 md:pt-6">
              <p className="text-sm text-muted-foreground mb-1 md:mb-2">faster first-deliverable handoff</p>
              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-primary">2,5×</p>
            </div>
          </div>
        </motion.div>

        {/* Feature 2 - Smart Communication */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-16 lg:mb-24"
        >
          {/* Text Content */}
          <div className="order-1">
            <BlurReveal
              as="h3"
              delay={0.1}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-3 md:mb-4"
            >
              Smart communication{" "}
              <br className="hidden md:block" />
              & updates
            </BlurReveal>
            <Typewriter
              text="Clients get meaningful updates — not noise. Every change, file, task, and message appears instantly and stays connected to the right context."
              delay={0.3}
              speed={25}
              className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8"
            />

            <div className="border-t border-border pt-4 md:pt-6">
              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-primary">40%</p>
              <p className="text-sm text-muted-foreground mt-1 md:mt-2">fewer status check-ins</p>
            </div>
          </div>

          {/* UI Card */}
          <div className="order-2 bg-primary rounded-3xl p-5 md:p-6 lg:p-8">
            {/* Milestones */}
            <div className="ui-card-dark rounded-2xl p-4 md:p-5 mb-3 md:mb-4">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <span className="font-medium text-card-dark-foreground text-sm md:text-base">Project milestones</span>
                <span className="text-sm text-card-dark-foreground/60">3/6</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${i <= 3 ? 'bg-primary' : 'bg-card-dark-foreground/20'}`}
                  />
                ))}
              </div>
            </div>

            {/* Recent Updates */}
            <div className="bg-card rounded-2xl p-4 md:p-5">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h4 className="font-display text-xl md:text-2xl font-medium text-foreground">Recent updates</h4>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
              </div>

              {[
                { icon: "↓", label: "Homepage visuals uploaded", time: "5h ago" },
                { icon: "✓", label: "Brand guidelines approved", time: "5h ago" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 py-2 md:py-3 border-t border-border">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-b from-muted-foreground/30 to-muted-foreground/10 flex items-center justify-center text-foreground flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs md:text-sm font-medium text-foreground flex-1 truncate">{item.label}</span>
                  <span className="text-xs text-muted-foreground flex-shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature 3 - Cash Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center"
        >
          {/* Dark UI Card */}
          <div className="ui-card-dark rounded-3xl p-5 md:p-6 lg:p-8 order-2 lg:order-1">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div>
                <h4 className="font-display text-xl md:text-2xl font-medium text-card-dark-foreground">Cash Flow</h4>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-card-dark-foreground/10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-card-dark-foreground" />
              </div>
            </div>

            <div className="flex items-center justify-between mb-3 md:mb-4">
              <span className="text-lg md:text-xl font-semibold text-card-dark-foreground">$5,280</span>
              <span className="text-card-dark-foreground/60 text-sm md:text-base">66%</span>
            </div>

            {/* Progress Bar */}
            <div className="h-10 md:h-12 bg-card-dark-foreground/10 rounded-full overflow-hidden mb-3 md:mb-4">
              <div className="h-full w-2/3 bg-primary rounded-full" />
            </div>

            <div className="text-right mb-4 md:mb-6">
              <span className="text-card-dark-foreground/60 text-sm">Goal: </span>
              <span className="text-primary font-semibold text-sm md:text-base">$8,000</span>
            </div>

            <div className="space-y-2 md:space-y-3 border-t border-card-dark-foreground/10 pt-3 md:pt-4">
              {[
                { date: "Yesterday", amount: "$1,500" },
                { date: "Dec 20, 2025", amount: "$1,500" },
                { date: "Dec 7, 2025", amount: "$4,600", muted: true },
              ].map((item, i) => (
                <div key={i} className={`flex items-center justify-between text-sm md:text-base ${item.muted ? 'text-card-dark-foreground/40' : 'text-card-dark-foreground'}`}>
                  <span>{item.date}</span>
                  <span className="font-medium">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <BlurReveal
              as="h3"
              delay={0.1}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-foreground mb-3 md:mb-4"
            >
              Cash flow &{" "}
              <br className="hidden md:block" />
              payments overview
            </BlurReveal>
            <Typewriter
              text="Monitor payments, progress, and revenue goals in one clear dashboard — no spreadsheets needed"
              delay={0.3}
              speed={25}
              className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8"
            />

            <div className="border-t border-border pt-4 md:pt-6">
              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-primary">30%</p>
              <p className="text-sm text-muted-foreground mt-1 md:mt-2">faster payment tracking</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
