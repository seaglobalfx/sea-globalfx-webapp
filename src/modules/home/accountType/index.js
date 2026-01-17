'use client';
import { motion } from 'framer-motion';

import React from 'react';
import styles from './accountType.module.scss';
import LeftRound from '@/icons/leftRound';
import RightRound from '@/icons/rightRound';
import EducationSection from '../educationSection';
import TrustedbyTraders from '../trustedbyTraders';
import FeaturedSection from '../featuredSection';

const BlackArrow = '/assets/icons/black-arrow.svg';
const Arrow = '/assets/icons/arrow-primary.svg';

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function AccountType() {
  return (
    <div className={styles.accountType}>
      <div className='container-xs'>

        {/* Title */}
        <motion.div
          className={styles.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>
            <span>Account </span> Types
          </h2>
          <p>
            Pick an account that matches your trading style and experience level. Our MT5 trading accounts are
            designed with transparent pricing, competitive spreads, and flexible conditions.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {[{
            title: 'Pro',
            arrow: BlackArrow,
            description: 'A straightforward account with no separate commission, designed for ease of use and cost transparency.',
            deposit: '$10',
            spread: '20 Cents',
            leverage: '50 to 500',
          }, {
            title: 'Standard',
            arrow: Arrow,
            description: 'Built for traders who want tighter spreads and enhanced support while maintaining simple pricing.',
            deposit: '$500',
            spread: '25 Cents',
            leverage: '1000',

          }, {
            title: 'Plus',
            arrow: Arrow,
            description: 'Designed for active traders who prioritize pricing efficiency and execution quality. For cost-focused traders using raw pricing',
            deposit: '$1000',
            spread: '30 Cents',
            leverage: '2000',

          }].map((item, index) => (
            <motion.div className={styles.griditems}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const image = card.querySelector(`.${styles.header}`);
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xPos = x / rect.width;
                const yPos = y / rect.height;
                const rotateY = (xPos - 0.5) * 20;
                const rotateX = (0.5 - yPos) * 20;

                // Card tilt
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                card.style.boxShadow = 'none';

                // Image parallax movement
                if (image) {
                  const translateX = (xPos - 0.5) * 20; // adjust strength
                  const translateY = (yPos - 0.5) * 20;
                  image.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
                }
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                const image = card.querySelector(`.${styles.header}`);

                // Reset card
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                card.style.boxShadow = 'none';

                // Reset image
                if (image) {
                  image.style.transform = 'translate(0px, 0px) scale(1)';
                }
              }}
              variants={cardAnim} key={index}>
              <div className={styles.box}>
                <div className={styles.header}>
                  <h3>{item.title}</h3>
                </div>

                <div className={styles.contnet}>
                  <div className={styles.details}>
                    <p>{item.description}</p>
                  </div>

                  <div className={styles.allTextStyle}>
                    <div className={styles.text}><p>Minimum Deposit:</p><span>{item.deposit}</span></div>
                    <div className={styles.text}><p>Spread:</p><span>{item.spread}</span></div>
                    <div className={styles.text}><p>Commission:</p><span>$0</span></div>
                    <div className={styles.text}><p>Leverage:</p><span>{item.leverage}</span></div>
                    <div className={styles.text}><p>Currencies</p><span>USD</span></div>
                  </div>
                </div>

                <div className={styles.buttongrid}>
                  <motion.div className={styles.left} >
                    <LeftRound />
                  </motion.div>
                  <motion.div className={styles.right} >
                    <RightRound />
                  </motion.div>
                  <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                    <motion.button  >
                      <img src={item.arrow} alt='Arrow' />
                      Open Account
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>

        <EducationSection />
      </div>

      <TrustedbyTraders />
      <FeaturedSection />
    </div>
  );
}
