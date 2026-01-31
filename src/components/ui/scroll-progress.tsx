import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
    className?: string;
}

export const ScrollProgress = ({ className }: ScrollProgressProps) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const width = useTransform(scaleX, (value) => `${value * 100}%`);

    return (
        <div
            className={cn(
                "absolute -bottom-px left-0 right-0 h-1 z-50",
                className
            )}
            style={{
                maskImage: "linear-gradient(to bottom, transparent, black 35%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 35%)"
            }}
        >
            <motion.div
                className="h-full origin-left animate-rainbow bg-[linear-gradient(90deg,#ff0080,#ff8c00,#40e0d0,#ff0080)] bg-[length:200%_100%]"
                style={{
                    width,
                    maskImage: "linear-gradient(to right, black calc(100% - 24px), transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to right, black calc(100% - 24px), transparent 100%)"
                }}
            />
        </div>
    );
};
