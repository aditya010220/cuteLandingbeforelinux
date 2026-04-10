import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
export function Footer() {
  const [email, setEmail] = useState('');

  const handleJoin = () => {
    if (!email.trim()) {
      alert('Please fill the email');
      return;
    }
    alert('Thanks for joining the Gurukul');
  };

  return (
    <footer id="footer" className="bg-white pt-20 pb-10 px-6 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="bg-lavender/30 rounded-3xl p-10 md:p-16 text-center mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-mint rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-peach rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 relative z-10">
            Ready to Join Our Garden?
          </h2>
          <p className="text-xl text-charcoal/70 mb-8 max-w-2xl mx-auto relative z-10">
            Plant your seeds of knowledge today and watch them grow with us.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto relative z-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full border-2 border-white bg-white/80 focus:outline-none focus:border-lavender flex-1"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleJoin}
              className="bg-charcoal text-white px-8 py-3 rounded-full font-bold hover:bg-charcoal/90"
            >
              Join Now
            </motion.button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-charcoal/5 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
            src="/images/logo.png"
            alt="GurukulX Logo"
            className="w-10 h-10 rounded-full group-hover:rotate-12 transition-transform duration-300"
          />
              <span className="text-xl font-bold text-charcoal">GurukulX</span>
            </div>
            <p className="text-charcoal/60 hover:text-charcoal">
              Cultivating knowledge, one connection at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-4">Platform</h4>
            <ul className="space-y-2 text-charcoal/60">
              <li>
                <a href="#" className="hover:text-charcoal">
                  Browse Skills
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal">
                  Mentors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-4">Company</h4>
            <ul className="space-y-2 text-charcoal/60">
              <li>
                <a href="#" className="hover:text-charcoal">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-charcoal">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-soft-blue flex items-center justify-center text-charcoal hover:bg-soft-blue/80 transition-colors">

                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="www.instagram.com" target='blank'
                className="w-10 h-10 rounded-full bg-peach flex items-center justify-center text-charcoal hover:bg-peach/80 transition-colors">

                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-lavender flex items-center justify-center text-charcoal hover:bg-lavender/80 transition-colors">

                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-charcoal/40">
          <p className='hover:text-charcoal'>© 2025
            
            
             GurukulX. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-charcoal">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-charcoal">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}