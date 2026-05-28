'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './mobileCardAnimation.module.scss';

const AnalysisIcon = '/assets/icons/Analysis.svg';
const ExecutionIcon = '/assets/icons/Execution.svg';

const MobileCardAnimation = () => {
    return (
        <div className={styles.mobileCardAnimation}>
            <div className="container-md">
                <div className={styles.container}>
                    {/* Header for the section on mobile */}
                    <motion.div 
                        className={styles.header}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Premium Trading <span>Infrastructure</span></h2>
                        <p>Experience institutional grade performance right at your fingertips.</p>
                    </motion.div>

                    <div className={styles.cardsGrid}>
                        {/* LEFT CARD */}
                        <motion.div 
                            className={styles.glassCard}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={styles.iconWrapper}>
                                <img src={AnalysisIcon} alt="AnalysisIcon" />
                            </div>
                            <div className={styles.metric}>0.0 pips</div>
                            <div className={styles.metricLabel}>EUR/USD Spread</div>
                            <h3>Institutional Spreads</h3>
                            <p>
                                Access raw, institutional-grade spreads starting from 0.0 pips. We source deep liquidity directly from top-tier financial institutions to ensure the tightest pricing possible.
                            </p>
                        </motion.div>

                        {/* RIGHT CARD */}
                        <motion.div 
                            className={styles.glassCard}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={styles.iconWrapper}>
                                <img src={ExecutionIcon} alt="ExecutionIcon" />
                            </div>
                            <div className={styles.metric}>&lt; 20ms</div>
                            <div className={styles.metricLabel}>Execution Speed</div>
                            <h3>Lightning Execution</h3>
                            <p>
                                Enjoy high-performance execution speeds averaging under 20 milliseconds. Our advanced fiber-optic network minimizes slippage and guarantees ultra-low latency.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileCardAnimation;
