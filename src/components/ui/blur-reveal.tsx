import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface BlurRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
}

export const BlurReveal = ({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    as: Component = "div",
}: BlurRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const MotionComponent = motion[Component] as typeof motion.div;

    return (
        <MotionComponent
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                filter: "blur(20px)",
                x: -50,
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        filter: "blur(0px)",
                        x: 0,
                    }
                    : {
                        opacity: 0,
                        filter: "blur(20px)",
                        x: -50,
                    }
            }
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
        >
            {children}
        </MotionComponent>
    );
};

export default BlurReveal;
