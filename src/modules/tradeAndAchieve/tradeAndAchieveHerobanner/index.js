'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const HeroImage = '/assets/images/tradeAndAchieveHerobanner.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/win.svg';

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


export default function TradeAndAchieveHerobanner() {
    const { t } = useLanguage();
    return (
        <div>
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
                                        {t('tradeAndAchieveHerobanner.tagLine')}
                                    </button>
                                </motion.div>

                                <motion.h2 variants={fadeUp}>
                                    {t('tradeAndAchieveHerobanner.titleStart')}<span>{t('tradeAndAchieveHerobanner.titleSpan')}</span>
                                </motion.h2>

                                <motion.p variants={fadeUp}>
                                    {t('tradeAndAchieveHerobanner.desc')}
                                </motion.p>

                                <motion.div
                                    className='two-button-alignment'
                                    variants={fadeUp}
                                >
                                    <a href='https://trade.seaglobalfx.co/register/' target='_blank'>
                                        <button className='orange'>
                                            <img src={UserIcon} alt='UserIcon' />
                                            {t('tradeAndAchieveHerobanner.getStarted')}
                                        </button>
                                    </a>
                                    <a target='_blank' href='https://trade.seaglobalfx.co/login/'>
                                        <button className='black'>
                                            <img src={DemoIcon} alt='DemoIcon' />
                                            {t('tradeAndAchieveHerobanner.viewMilestones')}
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
        </div>
    )
}
