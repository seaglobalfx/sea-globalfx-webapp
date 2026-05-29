'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './missionVision.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const LayerBlack = '/assets/images/layer-black.png';
const MissionImage = '/assets/images/mission.png';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

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
};

export default function MissionVision() {
  const { t, isRTL } = useLanguage();

  const imageAnim = {
    hidden: {
      opacity: 0,
      x: isRTL ? -60 : 60,
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
  };

  const sections = [
    { key: 'vision' },
    { key: 'mission' },
  ];

  return (
    <div className={styles.missionVision}>
      <motion.div
        className={styles.blacklayer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={LayerBlack} alt="" />
      </motion.div>

      <div className="container-sm">
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.griditems} variants={container}>
            <div className={styles.subGrid}>
              {sections.map(({ key }) => (
                <motion.div key={key} variants={fadeUp}>
                  <h3>
                    {t(`missionVision.${key}.titleStart`)}
                    <span>{t(`missionVision.${key}.titleSpan`)}</span>
                  </h3>
                  <div className={styles.items}>
                    <p>{t(`missionVision.${key}.desc`)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.griditems} variants={imageAnim}>
            <div className={styles.image}>
              <img src={MissionImage} alt="" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
