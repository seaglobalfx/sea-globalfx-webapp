'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = '/assets/images/etfs-banner.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};


export default function AccountsBanner() {
  return (
    <div className='common-banner'>
      <div className='left-alignment'>
        <div className='grid'>

          {/* LEFT CONTENT */}
          <div className='grid-items'>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className='tag-line'>
                <button>
                  Transparent pricing • Flexible conditions
                </button>
              </div>

              <h1 className="full-width-xl">
                Find the Best Account for Your <span>Goals</span>
              </h1>

              <p>
                Choose an account that matches your experience level, trading strategy, and cost preferences. Sea Global
                offers clearly defined account types with transparent pricing and flexible trading conditions, so you can select
                what’s right for you with confidence.
              </p>

              <div className='two-button-alignment'>
                <motion.button
                  className='orange'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img src={UserIcon} alt='UserIcon' />
                  Open Account
                </motion.button>

                <motion.button
                  className='black'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <img src={DemoIcon} alt='DemoIcon' />
                  Try Demo
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className='grid-items'>
            <motion.div
              className='image'
              variants={imageAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={HeroImage} alt='HeroImage' />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}
