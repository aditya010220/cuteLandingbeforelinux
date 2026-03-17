import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
const testimonials = [
  {
    name: 'Aisha Sharma',
    role: 'UI Designer — Bengaluru',
    quote:
      'I connected with incredible mentors nearby and learned hands-on design techniques.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    color: 'bg-lavender',
  },
  {
    name: 'Rohit Kumar',
    role: 'Frontend Developer — Delhi',
    quote:
      'Peer exchanges helped me land freelance work — real projects and real feedback.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    color: 'bg-mint',
  },
  {
    name: 'Kavya Iyer',
    role: 'Digital Artist — Chennai',
    quote:
      'The community is so supportive — I grew my portfolio by collaborating with others.',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    color: 'bg-peach',
  },
  {
    name: 'Arjun Singh',
    role: 'Product Manager — Mumbai',
    quote:
      'We exchange product insights and mock interviews — great place to practice.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    color: 'bg-soft-blue',
  },
  {
    name: 'Meera Patel',
    role: 'Content Writer — Ahmedabad',
    quote:
      'I swapped copywriting lessons for basic React help — both of us advanced quickly.',
    image: 'https://randomuser.me/api/portraits/women/24.jpg',
    color: 'bg-lavender',
  },
  {
    name: 'Sanjay Rao',
    role: 'Music Producer — Hyderabad',
    quote:
      'Collaboration here led to a small EP release — the feedback loop is fantastic.',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    color: 'bg-mint',
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-warm-white px-6" id="community">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            Voices from the Garden
          </h2>
          <p className="text-xl text-charcoal/60">
            Hear from our growing community.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1
            }}
            className="break-inside-avoid bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">

              <Quote className="w-8 h-8 text-lavender mb-4 fill-lavender/50" />
              <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">{t.name}</h4>
                  <p className="text-sm text-charcoal/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}