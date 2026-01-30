import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, Children, isValidElement } from "react";

interface BlurRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
    wordStagger?: number; // Delay between each word
}

export const BlurReveal = ({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    as: Component = "div",
    wordStagger = 0.08,
}: BlurRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Process children to extract text and split into words
    const processText = (node: ReactNode): string => {
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return String(node);
        if (isValidElement(node)) {
            if (node.type === 'br') return '\n';
            if (node.props.children) return processText(node.props.children);
        }
        if (Array.isArray(node)) {
            return node.map(processText).join('');
        }
        return '';
    };

    const text = processText(children);

    // Split by lines first (newlines from <br> tags)
    const lines = text.split('\n').filter(line => line.trim());

    // Split each line into words and track position
    let wordIndex = 0;
    const linesWithWords = lines.map(line => {
        const words = line.split(/(\s+)/).filter(w => w.length > 0);
        return words.map(word => ({
            word,
            index: wordIndex++,
            isSpace: /^\s+$/.test(word)
        }));
    });

    const MotionComponent = motion[Component] as typeof motion.div;

    return (
        <MotionComponent ref={ref} className={className}>
            {linesWithWords.map((lineWords, lineIndex) => (
                <span key={lineIndex} className="block">
                    {lineWords.map((wordObj, wordIdx) => (
                        <motion.span
                            key={`${lineIndex}-${wordIdx}`}
                            initial={{
                                opacity: 0,
                                filter: "blur(10px)",
                                x: -20,
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
                                        filter: "blur(10px)",
                                        x: -20,
                                    }
                            }
                            transition={{
                                duration,
                                delay: delay + wordObj.index * wordStagger,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                            className="inline-block"
                            style={{ whiteSpace: wordObj.isSpace ? 'pre' : 'normal' }}
                        >
                            {wordObj.word}
                        </motion.span>
                    ))}
                </span>
            ))}
        </MotionComponent>
    );
};

export default BlurReveal;
