import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const MagneticCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [cursorText, setCursorText] = useState("");

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("magnetic-target")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
                setCursorText("");
            }

            // Check for specific data-cursor text
            const cursorTarget = target.closest("[data-cursor]");
            if (cursorTarget) {
                setCursorText(cursorTarget.getAttribute("data-cursor") || "");
                setIsHovered(true);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        // Hide default cursor
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.body.style.cursor = "auto";
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center font-bold text-black text-[10px]"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                width: isHovered ? 80 : 16,
                height: isHovered ? 80 : 16,
                backgroundColor: isHovered ? "var(--primary-brand)" : "#ffffff",
            }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
        >
            <AnimatePresence>
                {isHovered && cursorText && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                    >
                        {cursorText}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
