'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const HeroImage = '/assets/images/contact-banner.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const imageAnim = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function ContactBanner() {
    const { t } = useLanguage();

    return (
        <div className='common-banner'>
            <div className='left-alignment'>
                <div className='grid'>
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
                                <button type="button">
                                    {t('contactBanner.tagLine')}
                                </button>
                            </motion.div>

                            <motion.h1
                                className="full-width"
                                variants={fadeUp}
                            >
                                {t('contactBanner.titleLine1')} <br />
                                {t('contactBanner.titleLine2')}
                                <span>{t('contactBanner.titleSpan')}</span>
                                {t('contactBanner.titleEnd')}
                            </motion.h1>

                            <motion.p variants={fadeUp}>
                                {t('contactBanner.desc')}
                            </motion.p>

                            <motion.div
                                className='two-button-alignment'
                                variants={fadeUp}
                            >
                                <a href='https://trade.seaglobalfx.co/register/' target='_blank' rel='noreferrer'>
                                    <button type="button" className='orange'>
                                        <img src={UserIcon} alt='' />
                                        {t('hero.openAccount')}
                                    </button>
                                </a>
                                <a target='_blank' rel='noreferrer' href='https://trade.seaglobalfx.co/login/'>
                                    <button type="button" className='black'>
                                        <img src={DemoIcon} alt='' />
                                        {t('hero.tryDemo')}
                                    </button>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className='grid-items'>
                        <motion.div
                            className='image'
                            variants={imageAnim}
                            initial="hidden"
                            animate="visible"
                        >
                            <img src={HeroImage} alt='' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
