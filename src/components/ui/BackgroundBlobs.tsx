// Optimized background blobs using CSS animations instead of Framer Motion
// This reduces JavaScript overhead and improves performance

export const BackgroundBlobs = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Blob 1 - Top Left */}
            <div
                className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[80px] animate-blob-1 will-change-transform"
            />

            {/* Blob 2 - Bottom Right */}
            <div
                className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-teal-500/30 rounded-full blur-[80px] animate-blob-2 will-change-transform"
            />

            {/* Blob 3 - Center */}
            <div
                className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-400/25 rounded-full blur-[70px] animate-blob-3 will-change-transform"
            />

            {/* Blob 4 - Top Right */}
            <div
                className="absolute top-0 right-1/4 w-[250px] h-[250px] bg-purple-400/25 rounded-full blur-[60px] animate-blob-4 will-change-transform"
            />
        </div>
    );
};
