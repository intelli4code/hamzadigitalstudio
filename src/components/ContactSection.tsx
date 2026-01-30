import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RainbowCard } from "@/components/ui/rainbow-card";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";

const ContactSection = () => {
    return (
        <section id="contact" className="py-16 md:py-24 lg:py-32 bg-secondary border-t border-border overflow-hidden">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left Column - Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="pill-badge mb-6 inline-flex"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Contact Us
                        </motion.div>

                        <BlurReveal
                            as="h2"
                            delay={0.1}
                            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 md:mb-6"
                        >
                            Let's Build Something{" "}
                            <br className="hidden md:block" />
                            Amazing Together
                        </BlurReveal>

                        <Typewriter
                            text="Ready to transform your digital presence? Get in touch and let's discuss how we can help your business grow online"
                            delay={0.3}
                            speed={20}
                            className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12"
                        />

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground mb-1">Email</p>
                                    <a
                                        href="mailto:contact@hamzadigitalstudio.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        contact@hamzadigitalstudio.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground mb-1">Phone</p>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground mb-1">Location</p>
                                    <p className="text-muted-foreground">
                                        Remote & On-site Available
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <RainbowCard contentClassName="p-6 md:p-8 lg:p-10 shadow-soft">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="Website Redesign"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button type="submit" variant="hero" size="lg" className="w-full group">
                                Send Message
                                <span className="flex items-center justify-center w-6 h-6 bg-primary-foreground/20 rounded-lg ml-2 group-hover:bg-primary-foreground/30 transition-colors">
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </Button>
                        </form>
                        </RainbowCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
