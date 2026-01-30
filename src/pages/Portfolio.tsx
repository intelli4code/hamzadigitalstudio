import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RainbowCard } from "@/components/ui/rainbow-card";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

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
    },
    {
        id: 5,
        title: "Eco-Tech Brand Identity",
        category: "Branding",
        stat: "Brand Strategy",
        description: "Comprehensive brand identity for a sustainable technology startup, including logo design and guidelines.",
        stack: ["Figma", "Illustrator"],
        color: "#059669", // Emerald-600
        video: "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
    },
    {
        id: 6,
        title: "Medical App Interface",
        category: "UX/UI Design",
        stat: "Accessibility",
        description: "Patient-centric mobile application design focusing on accessibility and clarity for elderly users.",
        stack: ["Figma", "Prototyping"],
        color: "#0891b2", // Cyan-600
        video: "https://assets.mixkit.co/videos/preview/mixkit-male-doctor-checking-patient-files-in-hospital-41129-large.mp4"
    }
];

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-background">
            <MagneticCursor />
            <Header />
            <main className="pt-24 md:pt-32 pb-24">
                <div className="section-container">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">Selected Works</h1>
                        <p className="text-xl text-muted-foreground">A collection of digital products, websites, and brand experiences.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {projects.map((project, index) => (
                            <RainbowCard
                                key={project.id}
                                className="group"
                                contentClassName="bg-card overflow-hidden p-0 flex flex-col h-full"
                            >
                                {/* Video/Image Container */}
                                <div className="relative aspect-video overflow-hidden">
                                    <video
                                        src={project.video}
                                        muted
                                        loop
                                        autoPlay
                                        playsInline
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500" />

                                    <div className="absolute top-4 right-4 z-10">
                                        <Button size="icon" variant="secondary" className="rounded-full w-10 h-10 alpha-bg backdrop-blur-md">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{project.category}</span>
                                        <span className={`text-xs px-2 py-1 rounded bg-secondary text-foreground font-medium`}>{project.stat}</span>
                                    </div>

                                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="px-2 py-1 bg-secondary rounded text-xs text-foreground font-medium">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </RainbowCard>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;
