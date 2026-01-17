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

export default function IndicesTextContent() {
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
                        <h4>Monday To Friday (Server Time)</h4>
                        <p>
                            Index trading hours may vary by instrument, underlying exchange schedules, public holidays, and daylight
                            saving changes.
                        </p>
                    </motion.div>

                    <motion.div className={styles.items} variants={fadeUp}>
                        <h3>Contract Specs</h3>
                        <p>
                            Each index instrument has clearly defined contract specifications to ensure transparent and consistent trading
                            conditions. Full details are available within the trading platform and individual instrument specification pages.
                        </p>
                    </motion.div>

                    <motion.div className={styles.items} variants={fadeUp}>
                        <h3>What Traders Should Know</h3>
                        <ul>
                            <li>Margin requirements may increase during periods of high volatility
                            </li>
                            <li>Swap rates differ by instrument and may change based on market conditions
                            </li>
                            <li>Tick size determines the minimum price movement for each instrument</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
