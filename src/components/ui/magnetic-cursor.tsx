import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Set this to false to disable the magnetic cursor globally
export const MAGNETIC_CURSOR_ENABLED = false;

interface MagneticCursorProps {
    enabled?: boolean;
}

export const MagneticCursor = ({ enabled = MAGNETIC_CURSOR_ENABLED }: MagneticCursorProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isTextHovered, setIsTextHovered] = useState(false);
    const [cursorText, setCursorText] = useState("");

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 35, stiffness: 400 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Don't set up listeners if disabled
        if (!enabled) {
            document.body.classList.remove("magnetic-cursor-active");
            document.body.style.cursor = "auto";
            return;
        }

        // Add class to hide native cursor when magnetic cursor is active
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const updateBodyClass = () => {
            if (mediaQuery.matches && enabled) {
                document.body.classList.add("magnetic-cursor-active");
            } else {
                document.body.classList.remove("magnetic-cursor-active");
            }
        };

        updateBodyClass();
        mediaQuery.addEventListener("change", updateBodyClass);

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const tagName = target.tagName;

            // Check if hovering over interactive elements
            const isInteractive =
                tagName === "BUTTON" ||
                tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("magnetic-target");

            // Check if hovering over H1 headings only (for text cursor effect)
            const isText =
                !isInteractive && tagName === "H1";

            if (isInteractive) {
                setIsHovered(true);
                setIsTextHovered(false);
            } else {
                setIsHovered(false);
                setIsTextHovered(isText);
                setCursorText("");
            }

            // Check for specific data-cursor text
            const cursorTarget = target.closest("[data-cursor]");
            if (cursorTarget) {
                setCursorText(cursorTarget.getAttribute("data-cursor") || "");
                setIsHovered(true);
                setIsTextHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            mediaQuery.removeEventListener("change", updateBodyClass);
            document.body.classList.remove("magnetic-cursor-active");
        };
    }, [mouseX, mouseY, enabled]);

    // Don't render if disabled
    if (!enabled) return null;

    return (
        <motion.div
            className="hidden lg:flex fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-difference items-center justify-center font-bold text-black text-[10px]"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                width: isHovered ? 80 : isTextHovered ? 4 : 16,
                height: isHovered ? 80 : isTextHovered ? 32 : 16,
                background: isHovered
                    ? "linear-gradient(135deg, hsl(var(--primary-brand)), hsl(var(--accent)))"
                    : isTextHovered
                        ? "hsl(var(--primary-brand))"
                        : "#ffffff",
                radius: isTextHovered ? 4 : "50%"
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
