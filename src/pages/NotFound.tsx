import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { BackgroundBlobs } from "@/components/ui/BackgroundBlobs";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      <BackgroundBlobs />
      <MagneticCursor />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        {/* Large 404 */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="font-display text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Page not found
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="rounded-full px-6 gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            <Link to="/">
              <Button className="rounded-full px-6 gap-2 hover:bg-white hover:text-primary dark:hover:bg-secondary dark:hover:text-primary transition-all">
                <Home className="w-4 h-4" />
                Return Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
