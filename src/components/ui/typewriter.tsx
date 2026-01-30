import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
    text,
    delay = 0,
    speed = 30,
    className,
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        const timer = setTimeout(() => {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i <= text.length - 1) {
                    setDisplayedText(text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setIsTypingComplete(true);
                }
            }, speed);

            return () => clearInterval(typingInterval);
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [text, speed, delay, isInView]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay }}
            className={`${className} relative`}
        >
            {/* Invisible full text to reserve space and prevent layout shift */}
            <span className="invisible" aria-hidden="true">
                {text}
            </span>

            {/* Actual typewriter text overlaid */}
            <span className="absolute inset-0">
                {displayedText}
                {isInView && !isTypingComplete && (
                    <span
                        className={`inline-block ml-1 w-0.5 h-[1em] bg-primary rounded-sm align-middle ${cursorVisible ? "opacity-100" : "opacity-0"
                            }`}
                    />
                )}
            </span>
        </motion.div>
    );
};

export { Typewriter };
