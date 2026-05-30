'use client'
import React from 'react'
import styles from './professionalTrading.module.scss'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const ChartImage = '/assets/images/chart-line.png'

export default function ProfessionalTrading() {
    const { t } = useLanguage();

    const cardsData = [
        {
            title: t('professionalTrading.cards.charting.title'),
            desc: t('professionalTrading.cards.charting.desc'),
        },
        {
            title: t('professionalTrading.cards.analysis.title'),
            desc: t('professionalTrading.cards.analysis.desc'),
        },
        {
            title: t('professionalTrading.cards.central.title'),
            desc: t('professionalTrading.cards.central.desc'),
        },
        {
            title: t('professionalTrading.cards.risk.title'),
            desc: t('professionalTrading.cards.risk.desc'),
        },
    ];

    return (
        <motion.div
            className={styles.professionalTrading}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container-xs">
                <div className={styles.grid}>

                    {/* Left Image */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            className={styles.image}
                            animate={{
                                y: [0, -12, 0],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 4,
                                ease: 'easeInOut',
                                repeat: Infinity,
                            }}
                            style={{ willChange: 'transform' }}
                        >
                            <img src={ChartImage} alt="ChartImage" />
                        </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className={styles.text}>
                            <h2>
                                {t('professionalTrading.title')}<span> {t('professionalTrading.titleSpan')} </span>
                            </h2>
                            <p>
                                {t('professionalTrading.desc')}
                            </p>
                        </div>

                        {/* Cards */}
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
                            {cardsData.map((item, index) => (
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
                                        rotateY: -6,
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

                </div>
            </div>
        </motion.div>
    )
}
