'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './easySteps.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const SystemIcon = '/assets/icons/system.png';
const KycIcon = '/assets/icons/kyc.png';
const FundIcon = '/assets/icons/fund.png';
const TradingIcon = '/assets/icons/trading.png';
const UserIcon = '/assets/icons/user-light.svg';

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export default function EasySteps() {
    const { t } = useLanguage();

    return (
        <div className={styles.easySteps}>
            <div className='container-xs'>
                <motion.div
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2>
                        {t('easySteps.title')}<span>{t('easySteps.titleSpan')}</span>
                    </h2>
                    <p>
                        {t('easySteps.desc')}
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.div
                        onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const xPos = x / rect.width;
                            const yPos = y / rect.height;
                            const rotateY = (xPos - 0.5) * 20;
                            const rotateX = (0.5 - yPos) * 20;

                            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                            card.style.boxShadow = 'none';
                        }}
                        onMouseLeave={(e) => {
                            const card = e.currentTarget;
                            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                            card.style.boxShadow = 'none';
                        }}
                        className={styles.griditems} variants={itemVariants}>
                        <div className={styles.counter}>1</div>
                        <h3>{t('easySteps.cards.step1.title')}</h3>
                        <p>{t('easySteps.cards.step1.desc')}</p>
                        <div className={styles.iconRight}>
                            <img src={SystemIcon} alt='SystemIcon' />
                        </div>
                    </motion.div>

                    <motion.div
                        onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const xPos = x / rect.width;
                            const yPos = y / rect.height;
                            const rotateY = (xPos - 0.5) * 20;
                            const rotateX = (0.5 - yPos) * 20;

                            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                            card.style.boxShadow = 'none';
                        }}
                        onMouseLeave={(e) => {
                            const card = e.currentTarget;
                            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                            card.style.boxShadow = 'none';
                        }}
                        className={styles.griditems} variants={itemVariants}>
                        <div className={styles.counter}>2</div>
                        <h3>{t('easySteps.cards.step2.title')}</h3>
                        <p>{t('easySteps.cards.step2.desc')}</p>
                        <div className={styles.iconRight}>
                            <img src={KycIcon} alt='KycIcon' />
                        </div>
                    </motion.div>

                    <motion.div
                        onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const xPos = x / rect.width;
                            const yPos = y / rect.height;
                            const rotateY = (xPos - 0.5) * 20;
                            const rotateX = (0.5 - yPos) * 20;

                            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                            card.style.boxShadow = 'none';
                        }}
                        onMouseLeave={(e) => {
                            const card = e.currentTarget;
                            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                            card.style.boxShadow = 'none';
                        }}
                        className={styles.griditems} variants={itemVariants}>
                        <div className={styles.counter}>3</div>
                        <h3>{t('easySteps.cards.step3.title')}</h3>
                        <p>{t('easySteps.cards.step3.desc')}</p>
                        <div className={styles.iconRight}>
                            <img src={FundIcon} alt='FundIcon' />
                        </div>
                    </motion.div>

                    <motion.div
                        onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const xPos = x / rect.width;
                            const yPos = y / rect.height;
                            const rotateY = (xPos - 0.5) * 20;
                            const rotateX = (0.5 - yPos) * 20;

                            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                            card.style.boxShadow = 'none';
                        }}
                        onMouseLeave={(e) => {
                            const card = e.currentTarget;
                            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                            card.style.boxShadow = 'none';
                        }}
                        className={styles.griditems} variants={itemVariants}>
                        <div className={styles.counter}>4</div>
                        <h3>{t('easySteps.cards.step4.title')}</h3>
                        <p>{t('easySteps.cards.step4.desc')}</p>
                        <div className={styles.iconRight}>
                            <img src={TradingIcon} alt='TradingIcon' />
                        </div>
                    </motion.div>
                </motion.div>
                <div className={styles.buttonCenter}>
                    <a href='https://trade.seaglobalfx.co/register/' target='_blank'>
                        <button>
                            <img src={UserIcon} alt='UserIcon' />
                            {t('easySteps.openAccount')}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
