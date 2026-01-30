import { motion } from "framer-motion";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";

const TransformSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background border-t border-border overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="pill-badge mb-6 inline-flex"
          >
            <span className="w-2 h-2 rounded-full bg-muted-foreground" />
            Before → After
          </motion.div>

          <BlurReveal
            as="h2"
            delay={0.1}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground max-w-4xl mx-auto leading-tight px-4"
          >
            From scattered tools to a{" "}
            <br className="hidden md:block" />
            streamlined client experience
          </BlurReveal>

          <Typewriter
            text="Clearer work, fewer questions, and every project delivered with confidence"
            delay={0.3}
            speed={25}
            className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4"
          />
        </div>

        {/* Mind Map Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-16">
            {/* Before - Scattered */}
            <div className="flex-1 text-center w-full max-w-xs md:max-w-none">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
                {/* Central hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-muted-foreground/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-xl md:text-2xl">?</span>
                </div>

                {/* Scattered nodes */}
                {[
                  { label: "Emails", x: 10, y: 20, delay: 0 },
                  { label: "Slack", x: 70, y: 10, delay: 0.1 },
                  { label: "Docs", x: 85, y: 60, delay: 0.2 },
                  { label: "Sheets", x: 60, y: 85, delay: 0.3 },
                  { label: "Files", x: 15, y: 75, delay: 0.4 },
                  { label: "Notes", x: 5, y: 45, delay: 0.5 },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + node.delay }}
                    className="absolute"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground border border-dashed border-muted-foreground/30 whitespace-nowrap">
                      {node.label}
                    </div>
                  </motion.div>
                ))}

                {/* Dashed lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  <line x1="50%" y1="50%" x2="15%" y2="25%" stroke="#888" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                  <line x1="50%" y1="50%" x2="75%" y2="15%" stroke="#888" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                  <line x1="50%" y1="50%" x2="90%" y2="65%" stroke="#888" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                  <line x1="50%" y1="50%" x2="65%" y2="90%" stroke="#888" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                  <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#888" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                  <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#888" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                </svg>
              </div>
              <p className="mt-4 md:mt-6 text-muted-foreground font-medium text-sm md:text-base">Scattered & chaotic</p>
            </div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-4xl text-primary rotate-90 md:rotate-0"
            >
              →
            </motion.div>

            {/* After - Organized */}
            <div className="flex-1 text-center w-full max-w-xs md:max-w-none">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
                {/* Central Cliento hub */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-orange"
                >
                  <span className="font-display text-base md:text-lg italic text-primary-foreground">C</span>
                </motion.div>

                {/* Organized nodes */}
                {[
                  { label: "Files", x: 50, y: 5, delay: 0.1 },
                  { label: "Feedback", x: 85, y: 35, delay: 0.2 },
                  { label: "Meetings", x: 85, y: 65, delay: 0.3 },
                  { label: "Invoices", x: 50, y: 90, delay: 0.4 },
                  { label: "Projects", x: 10, y: 65, delay: 0.5 },
                  { label: "Updates", x: 10, y: 35, delay: 0.6 },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + node.delay }}
                    className="absolute -translate-x-1/2"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary border border-primary/20 whitespace-nowrap">
                      {node.label}
                    </div>
                  </motion.div>
                ))}

                {/* Solid lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="hsl(21, 100%, 50%)" strokeWidth="2" opacity="0.3" />
                  <line x1="50%" y1="50%" x2="85%" y2="40%" stroke="hsl(21, 100%, 50%)" strokeWidth="2" opacity="0.3" />
                  <line x1="50%" y1="50%" x2="85%" y2="70%" stroke="hsl(21, 100%, 50%)" strokeWidth="2" opacity="0.3" />
                  <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="hsl(21, 100%, 50%)" strokeWidth="2" opacity="0.3" />
                  <line x1="50%" y1="50%" x2="15%" y2="70%" stroke="hsl(21, 100%, 50%)" strokeWidth="2" opacity="0.3" />
                  <line x1="50%" y1="50%" x2="15%" y2="40%" stroke="hsl(21, 100%, 50%)" strokeWidth="2" opacity="0.3" />
                </svg>
              </div>
              <p className="mt-4 md:mt-6 text-primary font-medium text-sm md:text-base">Organized & clear</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformSection;
