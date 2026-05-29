'use client';

import React from 'react';
import styles from './clientFundProtection.module.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const LayerBlack = '/assets/images/layer-black.png';
const LockImage = '/assets/images/lock.png';

export default function ClientFundProtection() {
    const { t, isRTL } = useLanguage();
    const introParagraphs = t('clientFundProtection.introParagraphs');
    const boxes = t('clientFundProtection.boxes');

    return (
        <motion.div
            className={styles.clientFundProtection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className={styles.blacklayer}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <img src={LayerBlack} alt="" />
            </motion.div>

            <div className="container-sm">
                <div className={styles.grid}>
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <div className={styles.image}>
                            <img src={LockImage} alt="" />
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className={styles.text}>
                            <h2>
                                {t('clientFundProtection.titleStart')}
                                <span>{t('clientFundProtection.titleSpan')}</span>
                            </h2>
                            {Array.isArray(introParagraphs) &&
                                introParagraphs.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                        </div>

                        <motion.div
                            className={styles.boxGrid}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2,
                                    },
                                },
                            }}
                        >
                            {Array.isArray(boxes) &&
                                boxes.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.items}
                                        variants={{
                                            hidden: { opacity: 0, y: 30 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        transition={{ duration: 0.6, ease: 'easeOut' }}
                                    >
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </motion.div>
                                ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
