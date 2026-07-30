'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const HeroImage = '/assets/images/forex-banner.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';

/* Animations */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const imageAnim = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

export default function ForexMarketBanner() {
    const { t } = useLanguage();
    return (
        <div className='common-banner'>
            <div className='left-alignment'>
                <div className='grid'>

                    {/* LEFT CONTENT */}
                    <div className='grid-items'>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                className='tag-line'
                                variants={fadeUp}
                            >
                                <button>
                                    {t('forexMarketBanner.tagline')}
                                </button>
                            </motion.div>

                            <motion.h2 variants={fadeUp}>
                                {t('forexMarketBanner.titleStart')}<span>{t('forexMarketBanner.titleSpan')}</span>{t('forexMarketBanner.titleEnd')}
                            </motion.h2>

                            <motion.p variants={fadeUp}>
                                {t('forexMarketBanner.desc')}
                            </motion.p>

                            <motion.div
                                className='two-button-alignment'
                                variants={fadeUp}
                            >
                                <a href='https://trade.seaglobalfx.co/register/' target='_blank'>
                                    <button className='orange'>
                                        <img src={UserIcon} alt='UserIcon' />
                                        {t('hero.openAccount')}
                                    </button>
                                </a>
                                <a target='_blank' href='https://trade.seaglobalfx.co/login/'>
                                    <button className='black'>
                                        <img src={DemoIcon} alt='DemoIcon' />
                                        {t('hero.tryDemo')}
                                    </button>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className='grid-items'>
                        <motion.div
                            className='image'
                            variants={imageAnim}
                            initial="hidden"
                            animate="visible"
                        >
                            <img src={HeroImage} alt='HeroImage' />
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
