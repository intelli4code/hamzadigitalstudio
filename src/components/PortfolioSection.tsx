import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { RainbowCard } from "@/components/ui/rainbow-card";
import { ArrowUpRight, Github, Monitor, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: 1,
        title: "E-commerce Redesign",
        category: "Web Design & Development",
        stat: "+250% Engagement",
        description: "A complete overhaul of a fashion retail platform focusing on conversion optimization and seamless user experience.",
        stack: ["React", "Shopify", "Tailwind"],
        color: "#e11d48", // Rose-600
        video: "https://assets.mixkit.co/videos/preview/mixkit-online-shopping-and-checking-stock-41133-large.mp4"
    },
    {
        id: 2,
        title: "Fintech Dashboard",
        category: "Product Design",
        stat: "Real-time Data",
        description: "High-performance dashboard for trading analytics with websocket integration and sub-millisecond updates.",
        stack: ["Next.js", "D3.js", "WebSockets"],
        color: "#2563eb", // Blue-600
        video: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-41135-large.mp4"
    },
    {
        id: 3,
        title: "Travel Documentary",
        category: "Video Editing",
        stat: "4K Cinematic",
        description: "Color grading and sound design for a travel series. Immersive storytelling through pacing and rhythm.",
        stack: ["Premiere Pro", "After Effects"],
        color: "#d97706", // Amber-600
        video: "https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4"
    },
    {
        id: 4,
        title: "AI Image Generator",
        category: "Full Stack App",
        stat: "10k+ Users",
        description: "SaaS platform allowing users to generate art with stable diffusion. scalable serverless architecture.",
        stack: ["Python", "React", "AWS"],
        color: "#7c3aed", // Violet-600
        video: "https://assets.mixkit.co/videos/preview/mixkit-virtual-reality-game-play-41138-large.mp4"
    }
];

const PortfolioSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);
    const smoothX = useSpring(x, { damping: 15, stiffness: 100 });

    const [activeColor, setActiveColor] = useState<string>("");

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            {/* Dynamic Background Overlay */}
            <motion.div
                className="fixed inset-0 z-0 pointer-events-none opacity-20"
                animate={{ backgroundColor: activeColor }}
                transition={{ duration: 0.5 }}
            />

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                {/* Horizontal Scroll Track */}
                <motion.div style={{ x: smoothX }} className="flex gap-8 px-8 md:px-20 lg:px-32">

                    {/* Header Card */}
                    <div className="w-[80vw] md:w-[600px] flex-shrink-0 flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="pill-badge mb-4">Selected Works</span>
                            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                Dual-DNA <br /> Portfolio
                            </h2>
                        </div>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                            A curated selection of projects bridging the gap between high-performance code and cinematic storytelling.
                        </p>
                    </div>

                    {/* Project Cards */}
                    {projects.map((project) => (
                        <RainbowCard
                            key={project.id}
                            className="group relative w-[85vw] md:w-[80vw] lg:w-[1100px] flex-shrink-0 bg-background"
                            contentClassName="h-[70vh] md:h-[80vh] flex flex-col md:flex-row overflow-hidden p-0"
                        >
                            {/* Video/Visual Side (60%) */}
                            <div
                                className="relative w-full md:w-[60%] h-[50%] md:h-full bg-black overflow-hidden group-hover:cursor-none"
                                onMouseEnter={() => setActiveColor(project.color)}
                                onMouseLeave={() => setActiveColor("")}
                            >
                                {/* Cinematic Letterbox Bars */}
                                <div className="absolute top-0 left-0 right-0 h-10 md:h-16 bg-black z-10 opacity-80" />
                                <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 bg-black z-10 opacity-80" />

                                {/* Video Placeholder */}
                                <video
                                    src={project.video}
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                />

                                {/* Overlay Text */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                    <div
                                        className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 border border-white/20"
                                        data-cursor="VIEW"
                                    >
                                        <p className="text-white font-medium text-xs tracking-widest">PLAY</p>
                                    </div>
                                </div>
                            </div>

                            {/* Info Side (40%) */}
                            <div className="w-full md:w-[40%] h-[50%] md:h-full p-6 md:p-10 lg:p-12 flex flex-col justify-between bg-card dark:bg-card-dark">
                                <div>
                                    <div className="flex items-start justify-between mb-2">
                                        <span
                                            className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-bold rounded-full uppercase tracking-wider mb-4"
                                        >
                                            {project.stat}
                                        </span>
                                        <Button variant="ghost" size="icon" className="rounded-full">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </Button>
                                    </div>

                                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.stack.map((tech) => (
                                            <div key={tech} className="px-3 py-1.5 bg-secondary rounded-lg text-xs font-medium text-foreground">
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
                                    <div className="text-sm font-medium text-muted-foreground">
                                        Category
                                    </div>
                                    <div className="text-sm font-semibold text-foreground">
                                        {project.category}
                                    </div>
                                </div>
                            </div>
                        </RainbowCard>
                    ))}

                    {/* Breathing Room End Space */}
                    <div className="w-[10vw] flex-shrink-0" />
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;
