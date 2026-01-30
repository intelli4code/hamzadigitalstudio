import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Preloader = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const interval = 20;
        const steps = duration / interval;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.8, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
        >
            <div className="relative overflow-hidden">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground"
                >
                    {Math.round(count)}%
                </motion.p>
            </div>
        </motion.div>
    );
};
