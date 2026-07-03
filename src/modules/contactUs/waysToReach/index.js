'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './waysToReach.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const LayerBlack = '/assets/images/layer-black.png';
const EmailIcon = '/assets/icons/email-fill.svg';
const CallIcon = '/assets/icons/call-fill.svg';
const ClockIcon = '/assets/icons/clock-fill.svg';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

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
};

export default function WaysToReach() {
  const { t } = useLanguage();

  const cards = [
    {
      key: 'email',
      icon: EmailIcon,
      content: (
        <a href={`mailto:${t('waysToReach.email')}`} className={styles.ltrContent} dir="ltr">
          {t('waysToReach.email')}
        </a>
      ),
    },
    // {
    //   key: 'phone',
    //   icon: CallIcon,
    //   content: (
    //     <a href="tel:+971582619955" className={styles.ltrContent} dir="ltr">
    //       {t('waysToReach.phone')}
    //     </a>
    //   ),
    // },
    {
      key: 'hours',
      icon: ClockIcon,
      content: (
        <p>
          {t('waysToReach.hoursLine1')}
          <span>{t('waysToReach.hoursLine2')}</span>
        </p>
      ),
    },
  ];

  return (
    <div className={styles.waysToReachSectionAlignment}>
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
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t('waysToReach.titleStart')}
          <span>{t('waysToReach.titleSpan')}</span>
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map(({ key, icon, content }) => (
            <motion.div
              key={key}
              className={styles.items}
              variants={cardAnim}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className={styles.iconCenter}>
                <img src={icon} alt="" />
              </div>
              {content}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
