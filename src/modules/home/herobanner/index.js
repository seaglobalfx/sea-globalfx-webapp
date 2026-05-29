'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './herobanner.module.scss';
import MobileAnimation from './mobileAnimation';

import { useLanguage } from '@/context/LanguageContext';

const HeroImage = '/assets/images/hero-coin.gif';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';
const Video = '/assets/video/video.mp4';

/* Animations */
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const imageAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function Herobanner() {
    const { t } = useLanguage();
    return (
        <div className={styles.spacingRemove}>
        <div className='container-md'>
            <div className={styles.herobanner}>
                <div className={styles.leftAlignment}>
                    <div className={styles.grid}>

                        {/* LEFT CONTENT */}
                        <motion.div
                            className={styles.griditems}
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            <div>
                                <motion.div className={styles.tagline} variants={fadeUp}>
                                    <button>
                                        {t('hero.tagline')}
                                    </button>
                                </motion.div>

                                <motion.h1 variants={fadeUp}>
                                    {t('hero.titleStart')}<span>{t('hero.titleSpan')}</span>{t('hero.titleEnd')}
                                </motion.h1>

                                <motion.p variants={fadeUp}>
                                    {t('hero.desc')}
                                </motion.p>

                                <motion.div
                                    className={styles.twoButtonalignment}
                                    variants={container}
                                >
                                    <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                        <motion.button className={styles.orange} variants={fadeUp}>
                                            <img src={UserIcon} alt='UserIcon' />
                                            {t('hero.openAccount')}
                                        </motion.button>
                                    </a>
                                    <a target='_blank' href='https://client.seaglobalfx.com/'>
                                        <motion.button className={styles.black} variants={fadeUp}>
                                            <img src={DemoIcon} alt='DemoIcon' />
                                            {t('hero.tryDemo')}
                                        </motion.button>
                                    </a>
                                </motion.div>

                            </div>
                        </motion.div>

                        {/* RIGHT IMAGE */}
                        <motion.div
                            className={styles.griditems}
                            variants={imageAnim}
                            initial="hidden"
                            animate="visible"
                        >
                            <MobileAnimation />
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
