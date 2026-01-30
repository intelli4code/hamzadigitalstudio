import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";

const pricingPlans = [
  {
    name: "Starter",
    tagline: "Perfect for small businesses",
    price: "2,500",
    description: "Get a professional single-page website that makes a strong first impression",
    features: [
      "Single landing page design",
      "Fully responsive (mobile-friendly)",
      "Basic SEO optimization",
      "Contact form integration",
      "2 rounds of revisions",
      "1 month complimentary support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    tagline: "Most popular for growing businesses",
    price: "5,500",
    description: "A complete multi-page website with custom design and CMS integration",
    features: [
      "Up to 7 custom pages",
      "Custom UI/UX design",
      "CMS integration (WordPress/Webflow)",
      "Advanced SEO optimization",
      "Google Analytics setup",
      "3 rounds of revisions",
      "2 months complimentary support",
      "Blog functionality",
    ],
    cta: "Start Your Project",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For complex projects",
    price: "12,000+",
    description: "Full-scale e-commerce or custom web applications with ongoing support",
    features: [
      "Unlimited pages",
      "Custom functionality & features",
      "E-commerce integration",
      "API & third-party integrations",
      "Advanced animations & interactions",
      "Priority support & maintenance",
      "Unlimited revisions",
      "3 months complimentary support",
      "Training & documentation",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const PricingSection = () => {


  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 bg-card-dark overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pill-badge-dark mb-6 inline-flex"
          >
            <Sparkles className="w-4 h-4" />
            Pricing
          </motion.div>

          <BlurReveal
            as="h2"
            delay={0.1}
            className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-card-dark-foreground max-w-3xl mx-auto leading-tight px-4"
          >
            Simple Pricing for{" "}
            <br className="hidden md:block" />
            Every Project
          </BlurReveal>

          <Typewriter
            text="Transparent project-based pricing. No hidden fees, no recurring charges. Just quality work at fair prices"
            delay={0.3}
            speed={25}
            className="mt-6 text-base md:text-lg text-card-dark-foreground/60 max-w-xl mx-auto px-4"
          />


        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative rounded-3xl p-6 md:p-8 cursor-pointer ${plan.popular
                ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-4 ring-offset-card-dark shadow-xl'
                : 'bg-card text-foreground shadow-lg hover:shadow-2xl'
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card-dark text-card-dark-foreground text-xs font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="text-left mb-6 md:mb-8">
                <h3 className={`font-display text-2xl md:text-3xl font-medium mb-2 ${plan.popular ? 'text-card-dark-foreground' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm md:text-base mb-4 md:mb-6 ${plan.popular ? 'text-card-dark-foreground/60' : 'text-muted-foreground'}`}>
                  {plan.tagline}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-sm ${plan.popular ? 'text-card-dark-foreground/60' : 'text-muted-foreground'}`}>from</span>
                  <span className={`font-display text-4xl md:text-5xl font-medium ${plan.popular ? 'text-card-dark-foreground' : 'text-foreground'}`}>
                    ${plan.price}
                  </span>
                </div>
                <p className={`text-xs md:text-sm mt-2 ${plan.popular ? 'text-card-dark-foreground/50' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "secondary" : "hero"}
                size="lg"
                className="w-full mb-6 md:mb-8"
              >
                {plan.cta}
              </Button>

              {/* Features List */}
              <ul className="space-y-3 md:space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${plan.popular ? 'bg-primary-foreground/20' : 'bg-primary/10'
                      }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* FAQ Prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 md:mt-16 text-card-dark-foreground/60 text-sm md:text-base px-4"
        >
          Have questions?{" "}
          <a href="#" className="text-primary hover:underline">
            Check our FAQ
          </a>{" "}
          or{" "}
          <a href="#" className="text-primary hover:underline">
            contact us
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
