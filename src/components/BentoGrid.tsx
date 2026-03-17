import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 180, damping: 22 },
  }),
};

const cards = [
  {
    title: 'Live Sessions',
    description: 'Real-time workshops with experts.',
    
    colSpan: 'md:col-span-7 md:row-span-2',
    image: 'https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif',
    titleSize: 'text-3xl',
    descSize: 'text-lg',
    large: true,
    extra: 'attending',
  },
  {
    title: 'Study Groups',
    description: 'Find your squad.',
    
    colSpan: 'md:col-span-5',
    image: 'https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif',
  },
  {
    title: 'Skill Matching',
    description: 'AI-powered connections.',
    
    colSpan: 'md:col-span-5',
    image: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
  },
  {
    title: 'Progress',
    description: 'Track your growth journey.',
    
    colSpan: 'md:col-span-4 md:row-span-2',
    image: 'https://media.giphy.com/media/26u4nJPf0JtQPdStq/giphy.gif',
    titleSize: 'text-2xl',
    large: true,
    extra: 'chart',
  },
  {
    title: 'Events',
    description: 'Community gatherings.',
    
    colSpan: 'md:col-span-4',
    image: 'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
    extra: 'days',
  },
  {
    title: 'Library',
    description: 'Curated resources.',
    
    colSpan: 'md:col-span-4',
    image: 'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
  },
];

export function BentoGrid() {
  return (
    <section className="py-28 bg-warm-white/40 px-6" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-lavender/60 text-charcoal/80 text-sm font-semibold rounded-full mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold text-charcoal mb-4"
          >
            Everything You Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal/50 max-w-md mx-auto"
          >
            Tools to help your garden grow.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[180px]">
          {cards.map((card, i) => {
            return (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`${card.colSpan} rounded-[2rem] relative overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/15`}
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                {/* Content */}
                <div className="relative z-10 h-full p-7 md:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-end">
                    {card.extra === 'days' && (
                      <div className="flex gap-1.5">
                        {['Mon', 'Tue', 'Wed'].map((d) => (
                          <span
                            key={d}
                            className="text-[10px] font-semibold text-white/70 bg-white/15 backdrop-blur-sm px-2 py-1 rounded-lg"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-auto">
                    {card.extra === 'chart' && (
                      <div className="flex items-end gap-1.5 h-16 mb-4">
                        {[40, 65, 45, 80, 60, 90, 70].map((h, j) => (
                          <div
                            key={j}
                            className="flex-1 bg-white/30 rounded-t-lg transition-all duration-300 group-hover:bg-white/50"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    )}

                    {card.extra === 'attending' && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex -space-x-2">
                          {[...Array(3)].map((_, j) => (
                            <div
                              key={j}
                              className="w-7 h-7 rounded-full bg-white/30 backdrop-blur-sm border-2 border-white/30"
                            />
                          ))}
                        </div>
                        <span className="text-xs text-white/60 ml-1">2.4k attending</span>
                      </div>
                    )}

                    <h3
                      className={`${card.titleSize || 'text-xl'} font-bold text-white mb-1`}
                    >
                      {card.title}
                    </h3>
                    <p className={`${card.descSize || 'text-sm'} text-white/70 font-medium`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
