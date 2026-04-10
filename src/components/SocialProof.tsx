import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
const testimonials = [
  {
    name: 'Astha Singh',
    role: 'UI Designer — Bengaluru',
    quote:
      'I connected with incredible mentors nearby and learned hands-on design techniques.',
    image: 'https://i.pinimg.com/736x/f9/e3/cd/f9e3cd2175f691ed060f470c0b2d1c3c.jpg',
    color: 'bg-lavender',
  },
  {
    name: 'Rohit Kumar',
    role: 'Frontend Developer — Delhi',
    quote:
      'Peer exchanges helped me land freelance work — real projects and real feedback.',
    image: 'https://i.pinimg.com/736x/18/b8/68/18b8682e1b858bd07591876942083f03.jpg',
    color: 'bg-mint',
  },
  {
    name: 'Kavya Iyer',
    role: 'Digital Artist — Chennai',
    quote:
      'The community is so supportive — I grew my portfolio by collaborating with others.',
    image: 'https://i.pinimg.com/736x/e2/5c/dd/e25cdd4d9af187f5bf085f3c3a443959.jpg',
    color: 'bg-peach',
  },
  {
    name: 'Arjun Singh',
    role: 'Product Manager — Mumbai',
    quote:
      'We exchange product insights and mock interviews — great place to practice.',
    image: 'https://i.pinimg.com/736x/17/94/30/179430bbe08926ede2e09a7771622a06.jpg',
    color: 'bg-soft-blue',
  },
  {
    name: 'Meera Patel',
    role: 'Content Writer — Ahmedabad',
    quote:
      'I swapped copywriting lessons for basic React help — both of us advanced quickly.',
    image: 'https://i.pinimg.com/736x/29/92/a4/2992a4fc23f8e4286f1299f9b75ae98e.jpg',
    color: 'bg-lavender',
  },
  {
    name: 'Sanjay Rao',
    role: 'Music Producer — Hyderabad',
    quote:
      'Collaboration here led to a small EP release — the feedback loop is fantastic.',
    image: 'https://i.pinimg.com/736x/2d/d5/7b/2dd57b967bea9060db4f669d16460b64.jpg',
    color: 'bg-mint',
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-warm-white px-6" id="community">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            Voices from the Gurukul
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