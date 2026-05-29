'use client'
import React from 'react'
import styles from './tradeWithplatforms.module.scss';
import StartTrading from '@/modules/forexMarket/startTrading';
import { motion } from 'framer-motion';
import StartTradingplatforms from '../startTradingplatforms';
import { useLanguage } from '@/context/LanguageContext';

const Mt4Icon = '/assets/icons/mt4.svg';
const Mt5Icon = '/assets/icons/mt5.png';
const WebIcon = '/assets/icons/web.png';
const MobileIcon = '/assets/icons/mobile.png';
const ThikPadImage = '/assets/images/thinkpad.png';
const StarImage = '/assets/images/star.png';
const MobileImage = '/assets/images/mobile.png';

/* Animations */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

const scaleFade = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};
export default function TradeWithplatforms() {
    const { t } = useLanguage();

    return (
        <div className={styles.tradeAccount}>
            <motion.div
                className={styles.thinkpadImage}
                variants={scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <img src={ThikPadImage} alt='ThikPadImage' />
            </motion.div>
            <motion.div
                className={styles.mobileImage}
                variants={scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <img src={MobileImage} alt='MobileImage' />
            </motion.div>

            <motion.div
                className={styles.starImage}
                initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                whileInView={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                    transition: { duration: 0.8, ease: 'easeOut' },
                }}
                viewport={{ once: true }}
            >
                <img src={StarImage} alt='StarImage' />
            </motion.div>

            <div className='container-sm'>
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <span>{t('tradeAccount.titleStart')}</span>{t('tradeAccount.titleEnd')}
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {t('tradeAccount.desc')}
                </motion.p>

                {/* Icons */}
                <motion.div
                    className={styles.iconTextAlignment}
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[Mt4Icon, Mt5Icon, WebIcon, MobileIcon].map((icon, index) => (
                        <motion.div key={index} variants={fadeUp}>
                            <div className={styles.iconCenter}>
                                <img src={icon} alt='platform-icon' />
                            </div>
                            <span>
                                {(() => {
                                    const text = t(index === 0 ? 'marketPlatform.mt4' : index === 1 ? 'marketPlatform.mt5' : index === 2 ? 'marketPlatform.web' : 'marketPlatform.mobile');
                                    const lines = text.split('\n');
                                    return lines.map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i < lines.length - 1 && <br />}
                                        </React.Fragment>
                                    ));
                                })()}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <StartTradingplatforms />
        </div>
    )
}

