'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './missionVision.module.scss'

const LayerBlack = '/assets/images/layer-black.png'
const MissionImage = '/assets/images/mission.png'

// variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
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
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

const imageAnim = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
}

export default function MissionVision() {
  return (
    <div className={styles.missionVision}>
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
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text Content */}
          <motion.div className={styles.griditems} variants={container}>
            <div className={styles.subGrid}>
              <motion.div variants={fadeUp}>
                <h3>
                  Our <span>Vision</span>
                </h3>
                <div className={styles.items}>
                  <p>
                    To build a transparent and secure trading ecosystem where traders operate with confidence, clarity,
                    and trust.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3>
                  Our <span>Mission</span>
                </h3>
                <div className={styles.items}>
                  <p>
                    Our mission is to provide traders with reliable infrastructure, secure fund handling, professional
                    tools, and responsive support — while maintaining high operational discipline and global best
                    practices.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className={styles.griditems}
            variants={imageAnim}
          >
            <div className={styles.image}>
              <img src={MissionImage} alt="MissionImage" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
