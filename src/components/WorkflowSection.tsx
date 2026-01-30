import { motion } from "framer-motion";
import { ArrowRight, Upload, Check, MessageSquare, Flag } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";
import { RainbowCard } from "@/components/ui/rainbow-card";

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-16 md:py-24 lg:py-32 bg-background">
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
            <span className="w-2 h-2 rounded-full bg-success" />
            Built for clarity
          </motion.div>

          <BlurReveal
            as="h2"
            delay={0.1}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground max-w-4xl mx-auto leading-tight px-4"
          >
            Our Proven Design &{" "}
            <br className="hidden md:block" />
            Development Process
          </BlurReveal>

          <Typewriter
            text="From concept to launch, we follow a streamlined process that keeps you informed and involved at every step"
            delay={0.3}
            speed={25}
            className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4"
          />
        </div>

        {/* Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 - Client Workspace */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.01 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <RainbowCard contentClassName="p-5 md:p-6 shadow-soft hover:shadow-lg">
              {/* Mini UI Preview */}
              <div className="bg-secondary rounded-2xl p-4 md:p-5 mb-5 md:mb-6">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted-foreground/20 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-muted-foreground/30 to-muted-foreground/10" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm md:text-base truncate">Alex Kim</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Radiant</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-muted-foreground">Balance</p>
                    <p className="font-semibold text-foreground text-sm md:text-base">$4,280</p>
                  </div>
                </div>

                {[
                  { icon: Folder, label: "Client projects", count: 3 },
                  { icon: MessageSquare, label: "Recent updates", count: 6 },
                  { icon: FileText, label: "Invoices", count: 4 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 md:py-3 border-t border-border/50">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground text-sm md:text-base truncate">{item.label}</span>
                      <span className="text-muted-foreground text-sm hidden sm:inline">({item.count})</span>
                    </div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-card-dark flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-card-dark-foreground" />
                    </div>
                  </div>
                ))}
              </div>

              <BlurReveal
                as="h3"
                delay={0.1}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-foreground mb-2 md:mb-3"
              >
                Discovery & Strategy{" "}
                <br className="hidden md:block" />
                phase
              </BlurReveal>
              <Typewriter
                text="We start by understanding your business goals, target audience, and project requirements. This phase includes competitor research, content strategy, and technical planning"
                delay={0.3}
                speed={30}
                className="text-sm md:text-base text-muted-foreground"
              />
            </RainbowCard>
          </motion.div>

          {/* Card 2 - Organization System */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.01 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <RainbowCard contentClassName="p-5 md:p-6 shadow-soft hover:shadow-lg">
              {/* Mini UI Preview */}
              <div className="bg-secondary rounded-2xl p-4 md:p-5 mb-5 md:mb-6">
                {[
                  { icon: Upload, label: "Homepage visuals uploaded", time: "5h ago" },
                  { icon: Check, label: "Brand guidelines approved", time: "4h ago" },
                  { icon: MessageSquare, label: "Feedback received on mockups", time: "1d ago" },
                  { icon: Flag, label: "Project scope finalized", time: "2d ago" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 py-2 md:py-3 first:pt-0 last:pb-0 border-t first:border-0 border-border/50">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-card-dark flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-card-dark-foreground" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground flex-1 truncate">{item.label}</span>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{item.time}</span>
                  </div>
                ))}

                <div className="mt-3 md:mt-4 flex justify-center">
                  <button className="inline-flex items-center gap-2 bg-card-dark text-card-dark-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                    Confirm stage
                    <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    </span>
                  </button>
                </div>
              </div>

              <BlurReveal
                as="h3"
                delay={0.1}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-foreground mb-2 md:mb-3"
              >
                Design & Prototyping{" "}
                <br className="hidden md:block" />
                phase
              </BlurReveal>
              <Typewriter
                text="Our designers create beautiful, user-focused mockups. You'll see your site come to life with interactive prototypes before we write a single line of code"
                delay={0.3}
                speed={30}
                className="text-sm md:text-base text-muted-foreground"
              />
            </RainbowCard>
          </motion.div>

          {/* Card 3 - Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, scale: 1.01 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <RainbowCard contentClassName="p-5 md:p-6 shadow-soft hover:shadow-lg md:col-span-2 lg:col-span-1">
              {/* Mini UI Preview - Chat Style */}
              <div className="bg-secondary rounded-2xl p-4 md:p-5 mb-5 md:mb-6 space-y-3 md:space-y-4">
                <div className="flex justify-end">
                  <div className="bg-muted rounded-2xl rounded-tr-sm px-3 md:px-4 py-2 max-w-[85%]">
                    <p className="text-xs md:text-sm text-foreground">Expect an update within a day. See you later!</p>
                    <p className="text-xs text-muted-foreground mt-1 text-right">2:43 PM</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/20 flex-shrink-0" />
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-bl-sm px-3 md:px-4 py-2">
                      <p className="text-xs md:text-sm">Thank you and have a good day. See you later!</p>
                      <p className="text-xs text-primary-foreground/70 mt-1">2:45 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-2.5 md:p-3 border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-success" />
                    <span className="text-xs text-muted-foreground">Task has been completed</span>
                    <span className="text-xs text-muted-foreground ml-auto hidden sm:inline">4:53 PM</span>
                  </div>
                  <p className="font-medium text-foreground text-xs md:text-sm">Redesign the hero for About us</p>
                  <p className="text-xs text-muted-foreground">Website redesign</p>
                </div>
              </div>

              <BlurReveal
                as="h3"
                delay={0.1}
                className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-foreground mb-2 md:mb-3"
              >
                Development & Launch{" "}
                <br className="hidden md:block" />
                phase
              </BlurReveal>
              <Typewriter
                text="We build your site with modern technology, rigorous testing, and optimization. After final approval, we handle the launch and provide training on managing your new site"
                delay={0.3}
                speed={30}
                className="text-sm md:text-base text-muted-foreground"
              />
            </RainbowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Folder = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

export default WorkflowSection;
