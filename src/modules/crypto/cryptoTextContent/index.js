'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../forexMarket/textContent/textContent.module.scss';
/* Animations */
const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};


export default function CryptoTextContent() {
    return (
        <div className={styles.textContent}>
            <div className='container-xs'>
                <motion.div
                    className={styles.grid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className={styles.items} variants={fadeUp}>
                        <h3>Trading Hours</h3>
                        <h4>24/7</h4>
                        <p>
                            Cryptocurrency markets operate continuously, allowing traders to access the market without interruption. Trade
                            cryptocurrencies 24 hours a day, 7 days a week, including weekends and public holidays.
                        </p>
                    </motion.div>

                    <motion.div className={styles.items} variants={fadeUp}>
                        <h3>Contract Specs</h3>
                        <p>
                            Each cryptocurrency instrument has defined contract specifications to provide transparency and consistent
                            trading conditions. Full details are available within the trading platform and instrument specification pages.
                        </p>
                    </motion.div>

                    <motion.div className={styles.items} variants={fadeUp}>
                        <h3>What Traders Should Know</h3>
                        <ul>
                            <li>Margin requirements may increase during periods of high market volatility
                            </li>
                            <li>Swap or financing fees may apply and can vary by instrument and market conditions
                            </li>
                            <li>Tick size determines the minimum price movement for each cryptocurrency instrument</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
