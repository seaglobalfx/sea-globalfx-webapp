'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './waysToReach.module.scss'

const LayerBlack = '/assets/images/layer-black.png'
const EmailIcon = '/assets/icons/email-fill.svg'
const CallIcon = '/assets/icons/call-fill.svg'
const ClockIcon = '/assets/icons/clock-fill.svg'

// variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const cardAnim = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export default function WaysToReach() {
  return (
    <div className={styles.waysToReachSectionAlignment}>
      {/* Background Layer */}
      <motion.div
        className={styles.blacklayer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={LayerBlack} alt="LayerBlack" />
      </motion.div>

      <div className="container-sm">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ways To Reach <span> Us</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className={styles.items}
            variants={cardAnim}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className={styles.iconCenter}>
              <img src={EmailIcon} alt="EmailIcon" />
            </div>
            <a href="mailto:support@seaglobalfx.com">
              support@seaglobalfx.com
            </a>
          </motion.div>

          <motion.div
            className={styles.items}
            variants={cardAnim}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className={styles.iconCenter}>
              <img src={CallIcon} alt="CallIcon" />
            </div>
            <a href="tel:+971582619955">
              +971 58 261 9955
            </a>
          </motion.div>

          <motion.div
            className={styles.items}
            variants={cardAnim}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className={styles.iconCenter}>
              <img src={ClockIcon} alt="ClockIcon" />
            </div>
            <p>
              Monday to Friday – 24 Hours
              <span>(Excluding public holidays)</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
