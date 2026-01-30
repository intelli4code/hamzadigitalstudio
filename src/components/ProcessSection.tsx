import { motion } from "framer-motion";
import { RainbowCard } from "@/components/ui/rainbow-card";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { FileCode2, MonitorPlay, MessageSquareShare, Zap, LayoutTemplate, Layers } from "lucide-react";

const ProcessSection = () => {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="section-container">
                {/* Header */}
                <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="pill-badge mb-6"
                    >
                        <Layers className="w-4 h-4" />
                        Our Workflow
                    </motion.div>

                    <BlurReveal
                        as="h2"
                        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        How We Work
                    </BlurReveal>

                    <p className="text-muted-foreground text-lg md:text-xl">
                        We define the goal before we touch the timeline. A proven process for agency-quality results.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* Step 1: Discovery (Large Left) */}
                    <RainbowCard
                        className="md:col-span-2 md:row-span-1"
                        contentClassName="h-full bg-card p-8 flex flex-col md:flex-row gap-8 items-center"
                    >
                        <div className="flex-1 space-y-4 text-left">
                            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center font-bold text-xl">01</div>
                            <h3 className="text-2xl font-bold font-display">Discovery</h3>
                            <p className="text-muted-foreground text-lg">"We define the goal before we touch the timeline."</p>
                            <p className="text-sm text-foreground/60">Wireframing, Storyboarding, Strategy.</p>
                        </div>
                        {/* Visual: Wireframe Mockup */}
                        <div className="flex-1 w-full aspect-video bg-secondary rounded-xl border border-border/50 relative overflow-hidden p-4 group">
                            <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />
                            <div className="w-full h-full border-2 border-dashed border-primary/30 rounded flex items-center justify-center">
                                <LayoutTemplate className="w-16 h-16 text-primary/40" />
                            </div>
                            {/* Animated elements */}
                            <motion.div
                                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 left-8 w-24 h-4 bg-foreground/10 rounded"
                            />
                            <motion.div
                                animate={{ x: [0, -5, 0], y: [0, 8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 right-8 w-16 h-16 bg-foreground/5 rounded-full"
                            />
                        </div>
                    </RainbowCard>

                    {/* Step 2: Creation (Creation Card) */}
                    <RainbowCard
                        className="md:col-span-1 md:row-span-2"
                        contentClassName="h-full bg-card p-8 flex flex-col justify-between"
                    >
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold text-xl">02</div>
                            <h3 className="text-2xl font-bold font-display">Creation</h3>
                            <p className="text-muted-foreground">"Precision editing and clean code."</p>
                        </div>

                        {/* Visual: Code/Timeline */}
                        <div className="mt-8 flex-1 bg-zinc-950 rounded-xl p-4 font-mono text-xs text-green-400 overflow-hidden relative">
                            <div className="absolute top-2 left-2 flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            </div>
                            <div className="mt-6 opacity-80">
                                <span className="text-purple-400">const</span> <span className="text-blue-400">createMagic</span> = () ={'>'} {'{'}<br />
                                &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-yellow-400">App</span> /&gt;<br />
                                &nbsp;&nbsp;);<br />
                                {'}'};
                            </div>
                            {/* Cursor blink */}
                            <motion.div
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="w-2 h-4 bg-green-400 inline-block align-middle ml-1"
                            />
                        </div>
                    </RainbowCard>

                    {/* Step 3: Refinement (Feedback) */}
                    <RainbowCard
                        className="md:col-span-1 md:row-span-1"
                        contentClassName="h-full bg-card p-8 flex flex-col gap-4"
                    >
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center font-bold text-xl">03</div>
                            <MessageSquareShare className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold font-display">Refinement</h3>
                        <p className="text-muted-foreground">"Unlimited iterations until it's perfect."</p>

                        {/* Visual: Feedback Loop */}
                        <div className="mt-auto flex items-center justify-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">Approved</span>
                            <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium line-through opacity-50">Draft 1</span>
                        </div>
                    </RainbowCard>

                    {/* Step 4: Delivery (Lightning) */}
                    <RainbowCard
                        className="md:col-span-1 md:row-span-1"
                        contentClassName="h-full bg-card p-8 flex flex-col gap-4"
                    >
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 flex items-center justify-center font-bold text-xl">04</div>
                            <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                        </div>
                        <h3 className="text-2xl font-bold font-display">Delivery</h3>
                        <p className="text-muted-foreground">"High-speed hosting and 4K export."</p>

                        {/* Visual: Lightning 3D Effect Placeholder */}
                        <div className="mt-auto flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-20" />
                                <Zap className="w-16 h-16 text-yellow-500 relative z-10" strokeWidth={1.5} />
                            </motion.div>
                        </div>
                    </RainbowCard>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
