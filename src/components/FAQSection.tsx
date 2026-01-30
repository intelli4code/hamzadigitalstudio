import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "Timeline varies based on project complexity. A simple landing page takes 2-3 weeks, a full business website takes 4-6 weeks, and custom e-commerce or web applications take 8-12 weeks. We'll provide a detailed timeline during our discovery call."
    },
    {
        question: "What's included in your web design packages?",
        answer: "All packages include custom design, responsive development, SEO optimization, and basic training. Our Professional and Enterprise packages also include CMS integration, advanced animations, custom functionality, and ongoing support options."
    },
    {
        question: "Do you offer website maintenance after launch?",
        answer: "Yes! We offer monthly maintenance packages that include security updates, content updates, performance monitoring, and technical support. We also provide one-time update services if you prefer."
    },
    {
        question: "What technologies do you use?",
        answer: "We specialize in modern tech stacks including React, Next.js, Tailwind CSS for custom builds, and platforms like WordPress, Webflow, and Shopify for CMS-based projects. We choose the best technology based on your specific needs and budget."
    },
    {
        question: "Can you redesign my existing website?",
        answer: "Absolutely! We specialize in website redesigns and modernization. We'll analyze your current site, preserve what works, and transform the rest into a modern, high-performing website that drives results."
    },
    {
        question: "How many revisions do I get?",
        answer: "Our packages include 2-3 rounds of revisions at key milestones (design mockups, development review). We work collaboratively throughout the process to ensure we're aligned before moving forward."
    },
    {
        question: "Do you provide content writing services?",
        answer: "We can help guide your content strategy and provide copywriting recommendations. For full content creation, we partner with professional copywriters and can include this in your project scope."
    },
    {
        question: "What happens after my website launches?",
        answer: "After launch, we provide training on how to manage your site, one month of complimentary support for bug fixes, and optional maintenance packages. We're always here to help your website grow with your business."
    },
];

const FAQSection = () => {
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
                        FAQ
                    </motion.div>

                    <BlurReveal
                        as="h2"
                        delay={0.1}
                        className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground max-w-3xl mx-auto leading-tight px-4"
                    >
                        Frequently Asked{" "}
                        <br className="hidden md:block" />
                        Questions
                    </BlurReveal>

                    <Typewriter
                        text="Everything you need to know about working with us"
                        delay={0.3}
                        speed={25}
                        className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4"
                    />
                </div>

                {/* FAQ Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                                <AccordionTrigger className="text-left py-5 md:py-6 hover:no-underline">
                                    <span className="font-display text-lg md:text-xl font-medium text-foreground pr-4">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:text-lg text-muted-foreground pb-5 md:pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 md:mt-16 text-center p-6 md:p-8 rounded-3xl bg-secondary"
                    >
                        <p className="text-base md:text-lg text-foreground mb-2">
                            Still have questions?
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground">
                            We're here to help!{" "}
                            <a href="#" className="text-primary hover:underline font-medium">
                                Schedule a free consultation
                            </a>
                            {" "}or{" "}
                            <a href="#" className="text-primary hover:underline font-medium">
                                send us a message
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
