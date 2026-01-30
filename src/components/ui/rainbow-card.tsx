import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RainbowCardProps {
    children: ReactNode;
    className?: string;
    contentClassName?: string;
}

export const RainbowCard = ({ children, className, contentClassName }: RainbowCardProps) => {
    return (
        <div
            className={cn(
                "relative rounded-3xl p-[2px] bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] animate-rainbow",
                className
            )}
        >
            <div className={cn("relative bg-card rounded-3xl h-full w-full", contentClassName)}>
                {children}
            </div>
        </div>
    );
};
