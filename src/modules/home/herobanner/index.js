'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './herobanner.module.scss';
import MobileAnimation from './mobileAnimation';

import { useLanguage } from '@/context/LanguageContext';
import CountUp from 'react-countup';

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
                                        <a href='https://trade.seaglobalfx.co/register/' target='_blank'>
                                            <motion.button className={styles.orange} variants={fadeUp}>
                                                <img src={UserIcon} alt='UserIcon' />
                                                {t('hero.openAccount')}
                                            </motion.button>
                                        </a>
                                        <a target='_blank' href='https://trade.seaglobalfx.co/login/'>
                                            <motion.button className={styles.black} variants={fadeUp}>
                                                <img src={DemoIcon} alt='DemoIcon' />
                                                {t('hero.tryDemo')}
                                            </motion.button>
                                        </a>
                                    </motion.div>
                                    <div className={styles.counterSection}>
                                        <div>

                                            <h5>
                                                <CountUp
                                                    start={0}
                                                    end={4.8}
                                                    decimals={1}
                                                    duration={2}
                                                    enableScrollSpy={true}
                                                    scrollSpyOnce={true}
                                                />
                                                /5
                                            </h5>
                                            <h6>
                                                {t('hero.rating')}
                                            </h6>
                                        </div>
                                        <div>
                                            <h5>

                                                <CountUp
                                                    start={0}
                                                    end={120}
                                                    duration={2}
                                                    enableScrollSpy={true}
                                                    scrollSpyOnce={true}
                                                />
                                                +

                                            </h5>
                                            <h6>
                                                {t('hero.countries')}
                                            </h6>
                                        </div>
                                        <div>

                                            <h5>
                                                <CountUp
                                                    start={0}
                                                    end={500}
                                                    duration={2}
                                                    enableScrollSpy={true}
                                                    scrollSpyOnce={true}
                                                />
                                                M +
                                            </h5>
                                            <h6>
                                                {t('hero.totalTrades')}
                                            </h6>
                                        </div>
                                        <div>
                                            <h5>
                                                {`<`}
                                                <CountUp
                                                    start={0}
                                                    end={15}
                                                    duration={2}
                                                    enableScrollSpy={true}
                                                    scrollSpyOnce={true}
                                                />
                                                MS
                                            </h5>
                                            <h6>
                                                {t('hero.execution')}
                                            </h6>
                                        </div>
                                    </div>

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
