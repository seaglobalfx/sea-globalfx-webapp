'use client';

import React from 'react';
import styles from './reliableFunding.module.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const MobileImage = '/assets/images/mobile-banner.png';

export default function ReliableFunding() {
    const { t, isRTL } = useLanguage();
    const cards = t('reliableFunding.cards');

    return (
        <motion.div
            className={styles.reliableFundingAlignment}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container-xs">
                <div className={styles.grid}>
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className={styles.text}>
                            <h2>
                                {t('reliableFunding.titleStart')}
                                <span>{t('reliableFunding.titleSpan')}</span>
                            </h2>
                            <p>{t('reliableFunding.desc')}</p>
                        </div>

                        <motion.div
                            className={styles.cardGrid}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15,
                                    },
                                },
                            }}
                        >
                            {Array.isArray(cards) &&
                                cards.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.cardGridItems}
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.6, ease: 'easeOut' }}
                                        whileHover={{
                                            y: -8,
                                            rotateX: 6,
                                            rotateY: isRTL ? 6 : -6,
                                            scale: 1.03,
                                        }}
                                        whileTap={{ scale: 0.97 }}
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            perspective: 1000,
                                        }}
                                    >
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </motion.div>
                                ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: isRTL ? -60 : 60, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            className={styles.image}
                            animate={{ y: [0, -14, 0] }}
                            transition={{
                                duration: 4,
                                ease: 'easeInOut',
                                repeat: Infinity,
                            }}
                            style={{ willChange: 'transform' }}
                        >
                            <img src={MobileImage} alt="" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
