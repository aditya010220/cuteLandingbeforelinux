import React from 'react'
import { motion } from 'framer-motion'
import {
  Palette,
  Code,
  Music,
  PenTool,
  Camera,
  Globe,
  ArrowUpRight,
  ArrowRight,
  Users,
  Zap,
} from 'lucide-react'
const categories = [
  {
    id: 1,
    name: 'Design',
    icon: Palette,
    color: 'bg-lavender',
    learners: 120,
  },
  {
    id: 2,
    name: 'Music',
    icon: Music,
    color: 'bg-peach',
    learners: 85,
  },
  {
    id: 3,
    name: 'Writing',
    icon: PenTool,
    color: 'bg-soft-blue',
    learners: 210,
  },
  {
    id: 4,
    name: 'Photography',
    icon: Camera,
    color: 'bg-lavender',
    learners: 150,
  },
  {
    id: 5,
    name: 'Languages',
    icon: Globe,
    color: 'bg-peach',
    learners: 95,
  },
]
export function SkillExchange() {
  return (
    <section className="py-24 bg-white px-6" id="exchange">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="inline-flex items-center gap-2 bg-mint/30 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            <span className="text-sm font-medium text-charcoal">
              Learning Paths
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
          >
            Explore Learning Paths
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed"
          >
            Share what you know, learn what you love. Find your perfect skill
            exchange across six thriving communities.
          </motion.p>
        </div>

        {/* Featured Card: Coding */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-charcoal/5 shadow-sm hover:shadow-md transition-shadow mb-8 relative overflow-hidden group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-mint px-3 py-1 rounded-full">
                
                <span className="text-xs font-bold text-charcoal uppercase tracking-wide">
                  Most Popular
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-charcoal flex items-center gap-3">
                Coding
                <Code className="w-8 h-8 text-charcoal/20" />
              </h3>

              <p className="text-lg text-charcoal/60 leading-relaxed max-w-lg">
                From frontend to backend, exchange coding skills with 340+
                active developers. Learn React, Python, TypeScript, and more
                through peer mentorship.
              </p>

              <div className="flex flex-wrap gap-6 text-sm font-medium text-charcoal/80 pt-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-mint" />
                  340 active learners
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-4 h-4 text-mint" />
                  89 exchanges this week
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-charcoal text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 group-hover:bg-charcoal/90">
                  Start Exchanging{' '}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Decorative Side (Code Illustration) */}
            <div className="relative h-64 lg:h-full min-h-[300px] bg-charcoal/5 rounded-3xl p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>

              {/* Fake Code Lines */}
              {/* Replace the fake code lines with an image. */}
              {/* Swap the `src` below with your Pinterest image URL when ready. */}
              <div className="w-full max-w-sm mx-auto opacity-95">
                <img
                  src="https://i.pinimg.com/736x/6c/99/6b/6c996bf860ccbd7c0d2511093edee0bf.jpg"
                  alt="Illustration or screenshot for coding example"
                  className="w-full h-auto rounded-2xl object-cover shadow-md"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-lg"
              >
                <span className="text-sm font-bold text-charcoal">Knowledge Swap</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delay: 0.4 + index * 0.1,
              }}
              className="bg-white rounded-3xl p-6 border border-charcoal/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group cursor-pointer flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-charcoal/50 font-medium">
                  {category.learners} learners
                </p>
              </div>

              <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                <div className="w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-charcoal" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Exchange Ticker */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="bg-warm-white/50 rounded-3xl p-6 border border-charcoal/5 flex flex-wrap justify-center gap-8 text-sm text-charcoal/60 font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mint" />
            Sarah: UI Design ↔ React
          </div>
          <div className="hidden sm:block w-px h-4 bg-charcoal/10" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-peach" />
            Alex: Photography ↔ Spanish
          </div>
          <div className="hidden sm:block w-px h-4 bg-charcoal/10" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lavender" />
            David: Music Prod ↔ Illustration
          </div>
        </motion.div>
      </div>
    </section>
  )
}