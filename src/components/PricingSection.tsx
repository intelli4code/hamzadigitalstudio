import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { Typewriter } from "@/components/ui/typewriter";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for freelancers just getting started",
    price: { monthly: 19, yearly: 15 },
    features: [
      "Up to 5 active clients",
      "10GB file storage",
      "Basic client portal",
      "Email notifications",
      "Mobile app access",
      "Community support",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing freelancers and small teams",
    price: { monthly: 49, yearly: 39 },
    features: [
      "Unlimited clients",
      "100GB file storage",
      "Custom branding",
      "Advanced analytics",
      "Priority notifications",
      "Invoice integration",
      "Priority support",
      "API access",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Agency",
    description: "For agencies and larger teams",
    price: { monthly: 99, yearly: 79 },
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "Team collaboration",
      "White-label portal",
      "Advanced permissions",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

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
            Simple pricing for{" "}
            <br className="hidden md:block" />
            every stage of growth
          </BlurReveal>

          <Typewriter
            text="Start free for 14 days. No credit card required."
            delay={0.3}
            speed={25}
            className="mt-6 text-base md:text-lg text-card-dark-foreground/60 max-w-xl mx-auto px-4"
          />

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-3 bg-card-dark-foreground/10 rounded-full p-1"
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all ${!isYearly
                ? 'bg-primary text-primary-foreground'
                : 'text-card-dark-foreground/60 hover:text-card-dark-foreground'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${isYearly
                ? 'bg-primary text-primary-foreground'
                : 'text-card-dark-foreground/60 hover:text-card-dark-foreground'
                }`}
            >
              Yearly
              <span className="bg-success text-success-foreground text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative rounded-3xl p-6 md:p-8 ${plan.popular
                ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-4 ring-offset-card-dark'
                : 'bg-card text-foreground'
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card-dark text-card-dark-foreground text-xs font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="font-display text-xl md:text-2xl font-medium mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl md:text-5xl font-medium">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className={plan.popular ? 'text-primary-foreground/60' : 'text-muted-foreground'}>
                    /month
                  </span>
                </div>
                {isYearly && (
                  <p className={`text-sm mt-1 ${plan.popular ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                    Billed annually
                  </p>
                )}
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
