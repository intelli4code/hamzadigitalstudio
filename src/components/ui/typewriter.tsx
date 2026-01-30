import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface TypewriterProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
    cursor?: boolean;
}

export const Typewriter = ({
    text,
    className = "",
    delay = 0,
    speed = 30,
    cursor = true,
}: TypewriterProps) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (!isInView) return;

        let currentIndex = 0;
        const timeoutId = setTimeout(() => {
            const intervalId = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                    setIsComplete(true);
                }
            }, speed);

            return () => clearInterval(intervalId);
        }, delay * 1000);

        return () => clearTimeout(timeoutId);
    }, [isInView, text, delay, speed]);

    return (
        <p ref={ref} className={className}>
            <span>{displayedText}</span>
            {cursor && !isComplete && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
                />
            )}
        </p>
    );
};

export default Typewriter;
