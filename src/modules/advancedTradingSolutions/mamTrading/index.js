'use client'
import React from 'react'
import styles from './mamTrading.module.scss'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const PammImage = '/assets/images/mam-trading.png'
const LayerBlackImage = '/assets/images/layer-black.png'

export default function MamTrading() {
    const { t, isRTL } = useLanguage();

    return (
        <div className={styles.mamTrading}>
            <div className={styles.layerBlack}>
                <img src={LayerBlackImage} alt="LayerBlackImage" />
            </div>

            <div className="container-xs">
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <motion.div
                            className={styles.text}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <h2>{t('mamTrading.title')}</h2>
                            <h3>{t('mamTrading.subtitle')}</h3>
                            <p>
                                {t('mamTrading.desc')}
                            </p>
                        </motion.div>

                        <div className={styles.cardGrid}>
                            {[
                                t('mamTrading.cards.individual'),
                                t('mamTrading.cards.custom'),
                                t('mamTrading.cards.faster'),
                                t('mamTrading.cards.ideal'),
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.items}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <h3>{text}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE – Infinite animation */}
                    <div className={styles.griditems}>
                        <motion.div
                            className={styles.image}
                            animate={{ x: isRTL ? [0, 14, 0] : [0, -14, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <img src={PammImage} alt="PammImage" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}
