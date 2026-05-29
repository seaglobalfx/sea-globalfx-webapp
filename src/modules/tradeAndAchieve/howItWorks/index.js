'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './howItWorks.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const SystemIcon = '/assets/icons/account.png';
const KycIcon = '/assets/icons/trade.png';
const FundIcon = '/assets/icons/system-pc.png';
const TradingIcon = '/assets/icons/reward.png';
const UserIcon = '/assets/icons/user-light.svg';

const stepIcons = [SystemIcon, KycIcon, FundIcon, TradingIcon];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const tiltHandlers = {
    onMouseMove: (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = (x / rect.width - 0.5) * 20;
        const rotateX = (0.5 - y / rect.height) * 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.boxShadow = 'none';
    },
    onMouseLeave: (e) => {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        card.style.boxShadow = 'none';
    },
};

export default function HowItWorks() {
    const { t } = useLanguage();
    const steps = t('howItWorks.steps');

    return (
        <div className={styles.howPammTrading}>
            <div className='container-xs'>
                <motion.div
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2>
                        {t('howItWorks.titleStart')}<span>{t('howItWorks.titleSpan')}</span>
                    </h2>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            {...tiltHandlers}
                            className={styles.griditems}
                            variants={itemVariants}
                        >
                            <div>
                                <div className={styles.counter}>{index + 1}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                            <div className={styles.iconRight}>
                                <img src={stepIcons[index]} alt={step.title} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className={styles.buttonCenter}>
                    <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                        <button>
                            <img src={UserIcon} alt='UserIcon' />
                            {t('howItWorks.openAccount')}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
