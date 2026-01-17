'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../forexMarket/whyTradeForex/whyTradeForex.module.scss';

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

export default function CommoditiesTrade() {
    return (
        <div className={styles.whyTradeForex}>
            <div className='container-xs'>
                <div className={styles.grid}>

                    {/* LEFT CONTENT */}
                    <div className={styles.griditems}>
                        <motion.h2
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Why Trade Commodities <br /> with <span>Sea Global</span>
                        </motion.h2>

                        <motion.div
                            className={styles.text}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p>
                                Commodities are essential assets that drive the global economy, offering traders opportunities based on
                                supply, demand, and macroeconomic trends. Trading Commodities with Sea Global provides access to key
                                global markets, reliable execution, and the flexibility to trade across different market conditions.
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
                                    <h3>Exposure to Global Supply & Demand</h3>
                                    <p>
                                        Commodities allow you to trade price movements driven by real-world factors such as production levels,
                                        weather conditions, and geopolitical developments.
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                            </motion.div>

                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={AccessIcon} alt='AccessIcon' />
                                    <h3>Diverse Market Opportunities</h3>
                                    <p>
                                        Trade a wide range of commodities across energy, metals, and agricultural markets, enabling diversification
                                        across different sectors of the global economy.
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                            </motion.div>

                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={VolatilityIcon} alt='VolatilityIcon' />
                                    <h3>High Volatility Potential</h3>
                                    <p>
                                        Commodity markets often experience sharp price movements, creating opportunities for both short-term
                                        traders and longer-term positioning strategies.
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                            </motion.div>

                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={MinorIcon} alt='MinorIcon' />
                                    <h3>Major Global Commodities</h3>
                                    <p>
                                        Access popular commodities including energy products, precious and industrial metals, and key agricultural
                                        assets traded on global markets.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={RiskIcon} alt='RiskIcon' />
                                    <h3>Risk Management Tools</h3>
                                    <p>
                                        Utilize advanced order types and platform tools to manage exposure, apply stop losses, and control risk in
                                        fast-moving commodity markets.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className={styles.items} variants={cardAnim}>
                                <div className={styles.content}>
                                    <img src={ExecutionIcon} alt='ExecutionIcon' />
                                    <h3>Fast Execution</h3>
                                    <p>
                                        Sea Global’s optimized trading infrastructure ensures low-latency execution, helping minimize slippage during periods of increased market volatility.
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
