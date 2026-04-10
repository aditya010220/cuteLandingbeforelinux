import { motion } from 'framer-motion';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
export function Hero() {
  const dashboardUrl =
    (import.meta as ImportMeta & { env?: Record<string, string> }).env
      ?.VITE_DASHBOARD_URL ?? '';

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-warm-white overflow-hidden relative flex items-center">
      {/* Background Decorative Blobs replaced with image assets (keeps same layout) */}
      <img
        src="/images/hero-blob-left.svg"
        alt="decorative blob left"
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] -z-10 pointer-events-none"
      />
      <img
        src="/images/hero-blob-right.svg"
        alt="decorative blob right"
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT COLUMN: Text Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            type: 'spring'
          }}
          className="space-y-8 relative z-10">

          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-lavender/50">

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold text-charcoal/80 tracking-wide uppercase text-[10px]">
              Skills are the new currency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.3
            }}
            className="text-5xl md:text-7xl font-bold text-charcoal leading-[1.1] tracking-tight">

            Where Skills Are <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-charcoal/70">
              Exchanged, Not Sold
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-mint z-[-1]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none">

                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  opacity="0.6" />

              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.4
            }}
            className="text-lg md:text-xl text-charcoal/70 max-w-lg leading-relaxed">

            Learn by teaching. Teach by learning. A peer-to-peer skill exchange
            platform where knowledge flows freely — no money involved.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{
              opacity: 2,
              y: 20
            }}
            animate={{
              opacity: 6,
              y: 0
            }}
            transition={{
              delay: 0.5
            }}
            className="flex flex-wrap gap-4">

            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={() => {
                if (dashboardUrl) window.location.href = dashboardUrl;
              }}
              className="bg-lavender px-8 py-4 rounded-full font-bold text-charcoal shadow-lg shadow-lavender/30 hover:shadow-xl hover:shadow-lavender/40 flex items-center gap-2 transition-all">

              Enter the Gurukul <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a
              href="#journey"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.8)'
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('journey');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full font-bold text-charcoal border-2 border-charcoal/10 hover:border-charcoal/30 transition-all bg-transparent">

              Explore How It Works
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 0.6
            }}
            className="pt-8 flex items-center gap-8 border-t border-charcoal/5">

            <div>
              <p className="text-2xl font-bold text-charcoal">15K+</p>
              <p className="text-sm text-charcoal/60 font-medium">
                Active Learners
              </p>
            </div>
            <div className="w-px h-10 bg-charcoal/10" />
            <div>
              <p className="text-2xl font-bold text-charcoal">8K+</p>
              <p className="text-sm text-charcoal/60 font-medium">
                Skill Exchanges
              </p>
            </div>
            <div className="w-px h-10 bg-charcoal/10" />
            <div className="flex items-center gap-3">
              <div className="bg-soft-blue/30 p-2 rounded-full">
                <LinkIcon className="w-5 h-5 text-charcoal" />
              </div>
              <div>
                <p className="text-2xl font-bold text-charcoal">500+</p>
                <p className="text-sm text-charcoal/60 font-medium">
                  Skills Available
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Photo Grid Collage */}
        <div className="relative hidden lg:block h-[520px]">
          {/* Image 1 – Top Left (taller, blue/teal tint bg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className="absolute top-0 left-0 w-[55%] h-[340px] rounded-[1.5rem] overflow-hidden shadow-xl bg-soft-blue group cursor-pointer z-10"
          >
            <img
              src="https://i.pinimg.com/1200x/ef/d8/5b/efd85b15afa779e5d94aa7ea1b20dee6.jpg"
              alt="mentor teaching"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Image 2 – Top Right (purple bg, offset down) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            className="absolute top-[60px] right-0 w-[48%] h-[280px] rounded-[1.5rem] overflow-hidden shadow-xl bg-lavender group cursor-pointer z-10"
          >
            <img
              src="https://i.pinimg.com/736x/1d/1b/7b/1d1b7b3b77e031adcaa41f009afd10ea.jpg"
              alt="learner"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lavender/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Image 3 – Bottom Center (wider, green bg, overlapping) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
            className="absolute bottom-0 left-[10%] w-[65%] h-[220px] rounded-[1.5rem] overflow-hidden shadow-xl bg-mint group cursor-pointer z-20"
          >
            <img
              src="https://i.pinimg.com/1200x/14/04/22/140422703343548dd59a5f1bc4e458f6.jpg"
              alt="community collaborating"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-peach/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-3 left-1/2 -translate-x-1/2 bg-lavender/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg z-10"
            >
              <span className="text-sm font-bold text-charcoal padding-left-2">Community</span>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -top-4 left-[45%] bg-mint p-3 rounded-2xl shadow-lg z-30"
          >
            <span className="text-sm font-bold text-charcoal">Grow Together</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
            className="absolute top-[40px] -right-4 bg-lavender px-4 py-2 rounded-2xl shadow-lg z-30"
          >
            <span className="text-sm font-bold text-charcoal">New</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute top-1/3 -left-6 z-30 bg-peach/90 px-3 py-1 rounded-xl shadow-lg"
          >
            <span className="text-sm font-bold text-charcoal">Featured</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-[80px] -right-2 w-8 h-8 bg-mint rounded-full z-30"
          />

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute top-[50px] left-[42%] w-3 h-3 bg-lavender rounded-full z-30"
          />

          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute bottom-[40%] right-[45%] w-2 h-2 bg-soft-blue rounded-full z-30"
          />

          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-[30%] -right-3 w-4 h-4 bg-lavender/50 rounded-full z-30"
          />

          {/* NEW: Additional floating decorative components */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.6 }}
            className="absolute top-[10%] right-[22%] bg-white/90 px-3 py-1 rounded-full shadow-lg z-40"
          >
            <span className="text-sm font-bold text-charcoal">Mentors</span>
          </motion.div>

          {/* <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.2 }}
            className="absolute top-[22%] left-[6%] bg-peach/90 px-3 py-1 rounded-xl shadow-lg z-40"
          >
            <span className="text-sm font-bold text-charcoal">Resources</span>
          </motion.div> */}

          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="absolute bottom-[8%] right-[14%] bg-soft-blue p-2 rounded-full shadow-lg z-40"
          >
            <ArrowRight className="w-4 h-4 text-charcoal" />
          </motion.div>
        </div>
      </div>
    </section>);

}