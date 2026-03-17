import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    description: 'Perfect for beginners exploring the platform.',
    features: [
      { name: 'Basic access to the platform', included: true },
      { name: 'Limited features', included: true },
      { name: 'Limited usage per day', included: true },
      { name: 'Premium tools', included: false },
      { name: 'Priority processing', included: false },
      { name: 'Priority support', included: false }
    ],
    cta: 'Get Started Free',
    highlighted: false,
    color: 'bg-lavender',
    ctaClass: 'bg-lavender text-charcoal hover:bg-lavender/90 shadow-md hover:shadow-xl'
  },
  {
    name: 'Starter',
    price: '₹11',
    period: '/month',
    description: 'Best for regular users wanting more power.',
    features: [
      { name: 'Access to additional features', included: true },
      { name: 'Higher usage limits', included: true },
      { name: 'Some premium tools unlocked', included: true },
      { name: 'Faster performance / priority', included: true },
      { name: 'Priority support', included: false },
      { name: 'Early access to new features', included: false }
    ],
    cta: 'Choose Starter',
    highlighted: true,
    color: 'bg-mint'
  },
  {
    name: 'Pro',
    price: '₹19',
    period: '/month',
    description: 'For power users who need everything.',
    features: [
      { name: 'Full access to all features', included: true },
      { name: 'Unlimited usage', included: true },
      { name: 'All premium tools unlocked', included: true },
      { name: 'Faster performance / priority', included: true },
      { name: 'Priority support', included: true },
      { name: 'Early access to new features', included: true }
    ],
    cta: 'Go Pro',
    highlighted: false,
    color: 'bg-peach',
    ctaClass: 'bg-peach text-charcoal hover:bg-peach/90 shadow-md hover:shadow-xl'
  }
];

export function Pricing() {
  return (
    <section className="bg-warm-white px-6 py-24" id="pricing">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-lavender/50 px-4 py-1.5"
          >
            <span className="text-sm font-medium text-charcoal">Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold text-charcoal md:text-5xl"
          >
            Simple, transparent pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-charcoal/60"
          >
            Choose the plan that best fits your learning journey. Upgrade or
            downgrade at any time.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex h-full flex-col rounded-[2rem] border bg-white p-8 transition-all ${
                plan.highlighted
                  ? 'z-10 border-mint shadow-xl ring-4 ring-mint/20 md:scale-105'
                  : 'border-charcoal/5 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <span className="rounded-full bg-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-charcoal shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${plan.color}`}
                >
                  <span className="text-xl font-bold text-charcoal">
                    {plan.name[0]}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-charcoal">
                  {plan.name}
                </h3>
                <p className="h-10 text-sm text-charcoal/60">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-charcoal">
                  {plan.price}
                </span>
                <span className="font-medium text-charcoal/50">
                  {plan.period}
                </span>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-3">
                    {feature.included ? (
                      <div className="mt-0.5 rounded-full bg-mint/30 p-1 text-charcoal">
                        <Check className="h-3 w-3" />
                      </div>
                    ) : (
                      <div className="mt-0.5 rounded-full bg-charcoal/5 p-1 text-charcoal/30">
                        <X className="h-3 w-3" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? 'text-charcoal/80'
                          : 'text-charcoal/40'
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-full py-4 font-bold transition-all ${
                  plan.ctaClass
                    ? plan.ctaClass
                    : plan.highlighted
                    ? 'bg-charcoal text-white hover:scale-[1.02] hover:bg-charcoal/90'
                    : 'bg-warm-white text-charcoal hover:bg-charcoal/15'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
