'use client';

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

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

export default function CryptoTrade() {
    return (
        <div className={styles.whyTradeForex}>
            <div className='container-xs'>
                <div className={styles.grid}>

                    {/* LEFT CONTENT */}
                    <motion.div
                        className={styles.griditems}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2>
                            Why Trade Crypto with <span>Sea Global</span>
                        </h2>

                        <div className={styles.text}>
                            <p>
                                Cryptocurrencies represent a rapidly evolving digital asset class driven by technology, market sentiment, and
                                global adoption. Trading Cryptocurrencies with Sea Global provides access to leading digital assets, efficient
                                execution, and the flexibility to trade in dynamic, fast-moving market conditions.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT FEATURES */}
                    <motion.div
                        className={styles.griditems}
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className={styles.darkbox}>

                            {[
                                {
                                    icon: LiquidityIcon,
                                    title: 'Exposure to Digital Assets Market',
                                    text: 'Cryptocurrencies allow you to trade price movements of blockchain-based assets influenced by innovation, adoption, and market demand.'
                                },
                                {
                                    icon: AccessIcon,
                                    title: '24/7 Market Access',
                                    text: 'Trade cryptocurrency markets around the clock, enabling continuous participation without the limitations of traditional market hours.'
                                },
                                {
                                    icon: VolatilityIcon,
                                    title: 'High Volatility Opportunities',
                                    text: 'Crypto markets are known for strong price fluctuations, creating frequent opportunities for both short-term trading and longer-term strategies.'
                                },
                                {
                                    icon: MinorIcon,
                                    title: 'Major Cryptocurrencies',
                                    text: 'Access a selection of leading digital assets, including widely traded cryptocurrencies representing the broader crypto market.'
                                },
                                {
                                    icon: RiskIcon,
                                    title: 'Risk Management Tools',
                                    text: 'Utilize advanced order types and platform features to manage exposure, set stop losses, and control risk in volatile crypto markets.'
                                },
                                {
                                    icon: ExecutionIcon,
                                    title: 'Fast & Reliable Execution',
                                    text: 'Sea Global’s optimized trading infrastructure delivers low-latency execution, helping reduce slippage during periods of high market activity.'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.items}
                                    variants={fadeUp}
                                >
                                    <div className={styles.content}>
                                        <img src={item.icon} alt={item.title} />
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>

                                    {index < 2 && <div className={styles.line}></div>}
                                </motion.div>
                            ))}

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
