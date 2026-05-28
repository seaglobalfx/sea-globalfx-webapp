'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './mobileCardAnimation.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const AnalysisIcon = '/assets/icons/Analysis.svg';
const ExecutionIcon = '/assets/icons/Execution.svg';

const MobileCardAnimation = () => {
    const { t } = useLanguage();

    return (
        <div className={styles.mobileCardAnimation}>
            <div className="container-md">
                <div className={styles.container}>
                    {/* Header for the section on mobile */}
                    <motion.div 
                        className={styles.header}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>{t('hero.mobilePremium.titleStart')}<span>{t('hero.mobilePremium.titleSpan')}</span></h2>
                        <p>{t('hero.mobilePremium.desc')}</p>
                    </motion.div>

                    <div className={styles.cardsGrid}>
                        {/* LEFT CARD */}
                        <motion.div 
                            className={styles.glassCard}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={styles.iconWrapper}>
                                <img src={AnalysisIcon} alt="AnalysisIcon" />
                            </div>
                            <div className={styles.metric}>{t('hero.mobilePremium.spreads.metric')}</div>
                            <div className={styles.metricLabel}>{t('hero.mobilePremium.spreads.label')}</div>
                            <h3>{t('hero.mobilePremium.spreads.title')}</h3>
                            <p>
                                {t('hero.mobilePremium.spreads.desc')}
                            </p>
                        </motion.div>

                        {/* RIGHT CARD */}
                        <motion.div 
                            className={styles.glassCard}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={styles.iconWrapper}>
                                <img src={ExecutionIcon} alt="ExecutionIcon" />
                            </div>
                            <div className={styles.metric}>{t('hero.mobilePremium.execution.metric')}</div>
                            <div className={styles.metricLabel}>{t('hero.mobilePremium.execution.label')}</div>
                            <h3>{t('hero.mobilePremium.execution.title')}</h3>
                            <p>
                                {t('hero.mobilePremium.execution.desc')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileCardAnimation;
