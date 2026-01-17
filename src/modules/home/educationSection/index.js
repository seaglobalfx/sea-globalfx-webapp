'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './educationSection.module.scss';
import Marquee from 'react-fast-marquee';

const RotateArrow = '/assets/icons/rotate-arrow.svg';
const MarketIcon = '/assets/icons/market.svg';

const scrollUp = {
    animate: {
        y: ['0%', '-50%'],
        transition: {
            duration: 45,
            ease: 'linear',
            repeat: Infinity,
        },
    },
};

const scrollDown = {
    animate: {
        y: ['-50%', '0%'],
        transition: {
            duration: 45,
            ease: 'linear',
            repeat: Infinity,
        },
    },
};

export default function EducationSection() {
    return (
        <div className={styles.educationSection}>
            <div className={styles.grid}>

                {/* Left text */}
                <div className={styles.griditems}>
                    <div className={styles.text}>
                        <h2>
                            <span>Education &</span>
                            Trading Tools
                        </h2>
                        <p>
                            Enhance your trading knowledge and decision-making with our education hub and professional trading
                            tools, designed to support traders at every stage of their journey.
                        </p>
                    </div>
                    <div className={styles.mobileShow}>
                        <Marquee>
                            <div className={styles.allbox}>
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        className={styles.box}
                                        key={i}
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <h3>Know Your Markets</h3>

                                        <div className={styles.icon}>
                                            <img src={RotateArrow} alt="RotateArrow" />
                                        </div>

                                        <div className={styles.bottomIcon}>
                                            <img src={MarketIcon} alt="MarketIcon" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Marquee>
                    </div>
                </div>

                {/* Right infinite columns */}
                <div className={styles.griditems}>

                    {/* Column 1 */}
                    <div className={styles.height}>
                        <motion.div
                            className={styles.allbox}
                            variants={scrollUp}
                            animate="animate"
                            style={{ willChange: 'transform' }}
                        >
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    className={styles.box}
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h3>Know Your Markets</h3>

                                    <div className={styles.icon}>
                                        <img src={RotateArrow} alt="RotateArrow" />
                                    </div>

                                    <div className={styles.bottomIcon}>
                                        <img src={MarketIcon} alt="MarketIcon" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Column 2 */}
                    <div className={styles.height}>
                        <motion.div
                            className={styles.allbox}
                            variants={scrollDown}
                            animate="animate"
                            style={{ willChange: 'transform' }}
                        >
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    className={styles.box}
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h3>Know Your Markets</h3>

                                    <div className={styles.icon}>
                                        <img src={RotateArrow} alt="RotateArrow" />
                                    </div>

                                    <div className={styles.bottomIcon}>
                                        <img src={MarketIcon} alt="MarketIcon" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}
