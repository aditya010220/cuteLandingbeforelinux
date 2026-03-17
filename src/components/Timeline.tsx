import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Users, BookOpen, Share2, Sprout } from 'lucide-react';
const milestones = [
{
  id: 1,
  title: 'Discover',
  desc: 'Find your passion',
  icon: Compass,
  color: 'bg-lavender'
},
{
  id: 2,
  title: 'Connect',
  desc: 'Meet your peers',
  icon: Users,
  color: 'bg-mint'
},
{
  id: 3,
  title: 'Learn',
  desc: 'Deep dive together',
  icon: BookOpen,
  color: 'bg-peach'
},
{
  id: 4,
  title: 'Share',
  desc: 'Teach others',
  icon: Share2,
  color: 'bg-soft-blue'
},
{
  id: 5,
  title: 'Grow',
  desc: 'Bloom fully',
  icon: Sprout,
  color: 'bg-lavender'
}];

export function Timeline() {
  return (
    <section className="py-24 bg-warm-white overflow-hidden" id="journey">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            Your Learning Journey
          </h2>
          <p className="text-lg text-charcoal/60">
            A winding path of growth and discovery
          </p>
        </div>

        <div className="relative">
          {/* Winding Path SVG */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-full max-w-3xl h-full pointer-events-none hidden md:block">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 400 800">

              <motion.path
                d="M 200 0 Q 200 100 200 100 Q 100 150 100 250 Q 100 350 200 400 Q 300 450 300 550 Q 300 650 200 700 L 200 800"
                fill="none"
                stroke="#DBEAFE"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{
                  pathLength: 0
                }}
                whileInView={{
                  pathLength: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 2.5,
                  ease: 'easeInOut'
                }} />

            </svg>
          </div>

          <div className="space-y-24 relative z-10">
            {milestones.map((milestone, index) =>
            <motion.div
              key={milestone.id}
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-100px'
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: index * 0.2
              }}
              className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>

                {/* Content Card */}
                <div
                className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>

                  <h3 className="text-2xl font-bold text-charcoal mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-charcoal/70">{milestone.desc}</p>
                </div>

                {/* Center Marker */}
                <div className="relative flex-shrink-0">
                  <div
                  className={`w-16 h-16 rounded-full ${milestone.color} flex items-center justify-center shadow-lg border-4 border-white z-10 relative`}>

                    <milestone.icon className="w-8 h-8 text-charcoal" />
                  </div>
                </div>

                {/* Empty Space for Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}