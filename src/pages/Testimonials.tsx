import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "CEO, TechFlow",
            text: "Hamza's Digital Studio transformed our online presence. The 'Dual-DNA' approach perfectly balanced performance with storytelling.",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Founder, StartUp Inc",
            text: "The workflow transparency was a game changer. I knew exactly what was happening at every stage. Highly recommended!",
            rating: 5
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Marketing Director, Creative Co",
            text: "Absolutely stunning visuals. The magnetic cursor and micro-interactions added that premium feel we were looking for.",
            rating: 5
        },
        {
            id: 4,
            name: "David Wilson",
            role: "Product Manager, SoftSys",
            text: "Professional, timely, and incredibly talented. The new website has already increased our conversion rates by 40%.",
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Client Stories</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        See what our partners have to say about their journey with Hamza's Digital Studio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex gap-1 text-primary mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <Quote className="w-8 h-8 text-muted-foreground/20 mb-4" />
                            <p className="text-foreground text-lg leading-relaxed mb-6">
                                "{t.text}"
                            </p>
                            <div>
                                <div className="font-bold text-foreground">{t.name}</div>
                                <div className="text-sm text-muted-foreground">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
