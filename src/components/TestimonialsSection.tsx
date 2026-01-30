import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";

const testimonials = [
  {
    quote: "Hamza Digital Studio transformed our outdated website into a modern masterpiece. Our online sales increased by 180% in the first quarter alone. The team was professional, creative, and delivered ahead of schedule.",
    author: "Sarah Mitchell",
    title: "Owner, Bloom Boutique",
    avatar: "/testimonial-1.png",
  },
  {
    quote: "Working with this team was a game-changer for our business. They didn't just build a website — they created a powerful marketing tool that converts visitors into customers. The ROI has been incredible.",
    author: "Michael Chen",
    title: "CEO, TechStart Solutions",
    avatar: "/testimonial-2.png",
  },
  {
    quote: "Finally, a web agency that actually listens! They took time to understand our brand and delivered a site that perfectly represents who we are. Our clients constantly compliment the design and ease of use.",
    author: "Jessica Rodriguez",
    title: "Founder, Verde Wellness",
    avatar: "/testimonial-3.png",
  },
  {
    quote: "The e-commerce platform they built for us is simply amazing. Fast, secure, and beautiful. Our checkout conversion rate improved by 45% and customer complaints about the site dropped to nearly zero.",
    author: "David Thompson",
    title: "Director, Altitude Gear",
    avatar: "DT",
  },
  {
    quote: "I've worked with several web agencies in the past, but none compare to Hamza Digital Studio. They deliver on promises, communicate clearly, and the final product always exceeds expectations. Highly recommended!",
    author: "Emily Watson",
    title: "Marketing Manager, Skyline Properties",
    avatar: "EW",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background border-t border-border overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pill-badge mb-6 inline-flex"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            Testimonials
          </motion.div>

          <BlurReveal
            as="h2"
            delay={0.1}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground max-w-3xl mx-auto leading-tight px-4"
          >
            Loved by businesses{" "}
            <br className="hidden md:block" />
            who value excellence
          </BlurReveal>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial Card */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card/80 dark:bg-card-dark/60 backdrop-blur-xl border border-border/50 dark:border-white/10 rounded-3xl p-6 md:p-8 lg:p-12 text-center relative shadow-lg">
                    {/* Quote Icon */}
                    <div className="absolute top-4 md:top-6 left-4 md:left-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Quote className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>

                    {/* Quote */}
                    <p className="font-display text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-6 md:mb-8 mt-8 md:mt-6">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center gap-3 md:gap-4">
                      {testimonial.avatar.startsWith('/') ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary/20"
                        />
                      ) : (
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-base md:text-lg">
                          {testimonial.avatar}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-foreground text-base md:text-lg">{testimonial.author}</p>
                        <p className="text-sm md:text-base text-muted-foreground">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:-left-4 lg:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-soft flex items-center justify-center hover:bg-secondary transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-4 lg:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-soft flex items-center justify-center hover:bg-secondary transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-primary w-6 md:w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
