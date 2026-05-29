'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './officeandRegistration.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const BilldingImage = '/assets/images/billding.png';
const OutlineImage = '/assets/images/outline-vec.png';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: 'easeOut',
        },
    },
};

export default function OfficeandRegistration() {
    const { t, isRTL } = useLanguage();

    const imageAnim = {
        hidden: {
            opacity: 0,
            x: isRTL ? -80 : 80,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    const addressSections = [
        { key: 'registeredAddress' },
        { key: 'physicalAddress' },
    ];

    return (
        <div className={styles.officeandRegistration}>
            <div className="container-sm">
                <div className={styles.grid}>
                    <motion.div
                        className={styles.content}
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h2 variants={fadeUp}>
                            {t('officeAndRegistration.titleStart')}
                            <span>{t('officeAndRegistration.titleSpan')}</span>
                        </motion.h2>

                        <motion.div
                            className={styles.addresses}
                            variants={container}
                        >
                            {addressSections.map(({ key }) => (
                                <motion.div
                                    key={key}
                                    className={styles.addressBlock}
                                    variants={fadeUp}
                                >
                                    <h3>{t(`officeAndRegistration.${key}`)}</h3>
                                    <p>{t('officeAndRegistration.address')}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className={styles.outlineImage}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            aria-hidden
                        >
                            <img src={OutlineImage} alt="" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={styles.buildingImage}
                        variants={imageAnim}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <img src={BilldingImage} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
