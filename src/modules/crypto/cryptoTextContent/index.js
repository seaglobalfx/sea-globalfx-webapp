'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../forexMarket/textContent/textContent.module.scss';
import { useLanguage } from '@/context/LanguageContext';

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
    const { t } = useLanguage();

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
                        <h3>{t('textContent.tradingHours')}</h3>
                        <h4>{t('textContent.twentyFourSeven')}</h4>
                        <p>
                            {t('textContent.crypto.tradingHoursDesc')}
                        </p>
                    </motion.div>

                    <motion.div className={styles.items} variants={fadeUp}>
                        <h3>{t('textContent.contractSpecs')}</h3>
                        <p>
                            {t('textContent.crypto.contractSpecsDesc')}
                        </p>
                    </motion.div>

                    <motion.div className={styles.items} variants={fadeUp}>
                        <h3>{t('textContent.whatTradersShouldKnow')}</h3>
                        <ul>
                            <li>
                                {t('textContent.crypto.tradersShouldKnow1')}
                            </li>
                            <li>
                                {t('textContent.crypto.tradersShouldKnow2')}
                            </li>
                            <li>
                                {t('textContent.crypto.tradersShouldKnow3')}
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
