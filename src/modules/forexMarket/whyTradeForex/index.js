'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './whyTradeForex.module.scss';

const LiquidityIcon = '/assets/icons/Liquidity.svg';
const AccessIcon = '/assets/icons/Access.svg';
const VolatilityIcon = '/assets/icons/Volatility.svg';
const MinorIcon = '/assets/icons/Minor.svg';
const RiskIcon = '/assets/icons/Risk.svg';
const ExecutionIcon = '/assets/icons/Execution.svg';

/* Animations */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};

const cardAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

export default function WhyTradeForex() {
    return (
        <div className={styles.whyTradeForex}>
            <div className='container-xs'>
                <div className={styles.grid}>

                    {/* LEFT CONTENT */}
                    <div className={styles.griditems}>
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Why Trade Forex with <span> Sea Global</span>
                        </motion.h1>

                        <motion.div
                            className={styles.text}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p>
                                The foreign exchange market offers continuous opportunities driven by global economic activity. Trading Forex
                                with Sea Global gives you access to deep liquidity, efficient execution, and the flexibility required to operate
                                across different market conditions.
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT BOX */}
                    <div className={styles.griditems}>
                        <motion.div
                            className={styles.darkbox}
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={LiquidityIcon} alt='LiquidityIcon' />
                                    <h3>High Liquidity</h3>
                                    <p>
                                        Forex is the most liquid financial market in the world, allowing for smoother price movement and efficient trades.
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                            </motion.div>

                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={AccessIcon} alt='AccessIcon' />
                                    <h3>24/5 Market Access</h3>
                                    <p>
                                        Trade currency markets around the clock during the trading week, enabling participation across major global
                                        sessions.
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                            </motion.div>

                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={VolatilityIcon} alt='VolatilityIcon' />
                                    <h3>Market Volatility</h3>
                                    <p>
                                        Currency price movements create frequent trading opportunities for both short-term and longer-term strategies.
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                            </motion.div>

                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={MinorIcon} alt='MinorIcon' />
                                    <h3>Major & Minor Pairs</h3>
                                    <p>
                                        Access a wide range of currency pairs, including major, minor, and selected exotic pairs tied to global
                                        economies.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={RiskIcon} alt='RiskIcon' />
                                    <h3>Risk Management Tools</h3>
                                    <p>
                                        Utilize advanced order types and platform tools to manage exposure and control risk effectively.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={ExecutionIcon} alt='ExecutionIcon' />
                                    <h3>Fast Execution</h3>
                                    <p>
                                        Sea Global’s trading infrastructure is optimized for low-latency execution, helping reduce slippage during volatile
                                        conditions.
                                    </p>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
