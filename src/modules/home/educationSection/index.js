'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './educationSection.module.scss';
import Marquee from 'react-fast-marquee';
import classNames from 'classnames';

const RotateArrow = '/assets/icons/rotate-arrow.svg';
const MarketIcon = '/assets/icons/market.svg';
const CalculatorsIcon = '/assets/icons/Calculators.svg';
const AnalysisIcon = '/assets/icons/Analysis.svg';
const EconomicIcon = '/assets/icons/Economic.svg';

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
                        <div className={styles.allbox}>
                            <motion.div
                                className={styles.box}
                            >
                                <h3>Know Your Markets</h3>

                                <div className={styles.icon}>
                                    <img src={RotateArrow} alt="RotateArrow" />
                                </div>

                                <div className={styles.bottomIcon}>
                                    <img src={MarketIcon} alt="MarketIcon" />
                                </div>
                            </motion.div>
                            <motion.div
                                className={styles.box}

                            >
                                <h3>Trading Calculators</h3>

                                <div className={styles.icon}>
                                    <img src={RotateArrow} alt="RotateArrow" />
                                </div>

                                <div className={styles.bottomIcon}>
                                    <img src={CalculatorsIcon} alt="CalculatorsIcon" />
                                </div>
                            </motion.div>
                            <motion.div
                                className={styles.box}
                            >
                                <h3>Market Analysis</h3>

                                <div className={styles.icon}>
                                    <img src={RotateArrow} alt="RotateArrow" />
                                </div>

                                <div className={styles.bottomIcon}>
                                    <img src={AnalysisIcon} alt="AnalysisIcon" />
                                </div>
                            </motion.div>
                            <motion.div
                                className={styles.box}
                            >
                                <h3>Economic
                                    Calendar</h3>

                                <div className={styles.icon}>
                                    <img src={RotateArrow} alt="RotateArrow" />
                                </div>

                                <div className={styles.bottomIcon}>
                                    <img src={EconomicIcon} alt="EconomicIcon" />
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>

                {/* Right infinite columns */}
                <div className={styles.griditems}>

                    {/* Column 1 */}
                    <div className={styles.height}>
                        <motion.div
                            className={classNames(styles.allbox, styles.topSection)}
                        >
                            <motion.div
                                className={styles.box}
                            >
                            </motion.div>
                            <motion.div
                                className={styles.box}
                            >
                                <h3>Know Your Markets</h3>

                                <div className={styles.icon}>
                                    <img src={RotateArrow} alt="RotateArrow" />
                                </div>

                                <div className={styles.bottomIcon}>
                                    <img src={MarketIcon} alt="MarketIcon" />
                                </div>
                            </motion.div>
                            <motion.div
                                className={styles.box}

                            >
                                <h3>Trading Calculators</h3>

                                <div className={styles.icon}>
                                    <img src={RotateArrow} alt="RotateArrow" />
                                </div>

                                <div className={styles.bottomIcon}>
                                    <img src={CalculatorsIcon} alt="CalculatorsIcon" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Column 2 */}
                    <div className={styles.height}>
                        <motion.div
                            className={classNames(styles.allbox, styles.secAligment)}

                        >
                            <motion.div
                                className={styles.box}
                            >
                                <h3>Market Analysis</h3>

                                <div className={styles.icon}>
                                    <img src={RotateArrow} alt="RotateArrow" />
                                </div>

                                <div className={styles.bottomIcon}>
                                    <img src={AnalysisIcon} alt="AnalysisIcon" />
                                </div>
                            </motion.div>
                            <motion.div
                                className={styles.box}
                            >
                                <h3>Economic
                                    Calendar</h3>

                                <div className={styles.icon}>
                                    <img src={RotateArrow} alt="RotateArrow" />
                                </div>

                                <div className={styles.bottomIcon}>
                                    <img src={EconomicIcon} alt="EconomicIcon" />
                                </div>
                            </motion.div>
                            <motion.div
                                className={styles.box}
                            >

                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}
