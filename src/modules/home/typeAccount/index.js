'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './typeAccount.module.scss';

const CommonIcon = '/assets/icons/common-icon.svg';

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const ACCOUNTS_DATA = [
    {
        title: "PRO",
        description: "A straightforward account with no separate commission, designed for ease of use and cost transparency.",
        minDeposit: "$10",
        spread: "20 CENTS",
        commission: "$0",
        leverage: "50 TO 500",
        currencies: "USD",
        btnType: "dark"
    },
    {
        title: "STANDARD",
        description: "Built for traders who want tighter spreads and enhanced support while maintaining simple pricing.",
        minDeposit: "$500",
        spread: "25 CENTS",
        commission: "$0",
        leverage: "1000",
        currencies: "USD",
        btnType: "gold"
    },
    {
        title: "PLUS",
        description: "Designed for active traders who prioritize pricing efficiency and execution quality.",
        minDeposit: "$1,000",
        spread: "30 CENTS",
        commission: "$0",
        leverage: "2000",
        currencies: "USD",
        btnType: "dark"
    }
];

export default function TypeAccount() {
    return (
        <div className={styles.typeAccount}>
            <div className='container-xs'>
                <motion.div
                    className={styles.text}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                        hidden: {}
                    }}
                >
                    <motion.h2 variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}>
                        Account Types
                    </motion.h2>
                    <motion.p variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}>
                        Pick an account that matches your trading style and experience level. Our MT5 trading accounts are
                        designed with transparent pricing, competitive spreads, and flexible conditions.
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                        hidden: {}
                    }}
                >
                    {ACCOUNTS_DATA.map((card, idx) => (
                        <motion.div
                            className={styles.items}
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                            }}
                        >
                            <div className={styles.box}>
                                <div className={styles.topSection}>
                                    <div className={styles.iconWrapper}>
                                        <img src={CommonIcon} alt={card.title} />
                                    </div>
                                    <div className={styles.topContent}>
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                                <div className={styles.divider}></div>
                                <div className={styles.specs}>
                                    <div className={styles.specRow}>
                                        <span className={styles.label}>MINIMUM DEPOSIT:</span>
                                        <span className={styles.dots}></span>
                                        <span className={styles.value}>{card.minDeposit}</span>
                                    </div>
                                    <div className={styles.specRow}>
                                        <span className={styles.label}>SPREAD:</span>
                                        <span className={styles.dots}></span>
                                        <span className={styles.value}>{card.spread}</span>
                                    </div>
                                    <div className={styles.specRow}>
                                        <span className={styles.label}>COMMISSION:</span>
                                        <span className={styles.dots}></span>
                                        <span className={styles.value}>{card.commission}</span>
                                    </div>
                                    <div className={styles.specRow}>
                                        <span className={styles.label}>LEVERAGE:</span>
                                        <span className={styles.dots}></span>
                                        <span className={styles.value}>{card.leverage}</span>
                                    </div>
                                    <div className={styles.specRow}>
                                        <span className={styles.label}>CURRENCIES</span>
                                        <span className={styles.dots}></span>
                                        <span className={styles.value}>{card.currencies}</span>
                                    </div>
                                    <button className={`${styles.actionBtn} ${styles[card.btnType]}`}>
                                        <span className={styles.arrowBox}>
                                            <ArrowIcon />
                                        </span>
                                        <span className={styles.btnText}>Open Account</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
