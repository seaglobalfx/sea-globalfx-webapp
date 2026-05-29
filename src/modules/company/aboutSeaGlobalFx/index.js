'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './aboutSeaGlobalFx.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const AboutImage = '/assets/images/about.png';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
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

export default function AboutSeaGlobalFx() {
    const { t, isRTL } = useLanguage();
    const paragraphs = t('aboutSeaGlobalFx.paragraphs');

    const imageAnim = {
        hidden: {
            opacity: 0,
            x: isRTL ? 60 : -60,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.9,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className={styles.aboutSeaGlobalFx}>
            <div className="container-sm">
                <motion.div
                    className={styles.grid}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className={styles.griditems}
                        variants={imageAnim}
                    >
                        <div className={styles.image}>
                            <img src={AboutImage} alt="" />
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.griditems}
                        variants={container}
                    >
                        <motion.h2 variants={fadeUp}>
                            {t('aboutSeaGlobalFx.titleStart')}
                            <span>{t('aboutSeaGlobalFx.titleSpan')}</span>
                        </motion.h2>

                        {Array.isArray(paragraphs) &&
                            paragraphs.map((text, index) => (
                                <motion.p key={index} variants={fadeUp}>
                                    {text}
                                </motion.p>
                            ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
