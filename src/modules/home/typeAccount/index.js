'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './typeAccount.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const CommonIcon = '/assets/icons/common-icon.svg';

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export default function TypeAccount() {
    const { t } = useLanguage();

    const translatedAccountsData = [
        {
            title: t('typeAccount.cards.pro.title'),
            description: t('typeAccount.cards.pro.desc'),
            minDeposit: t('typeAccount.cards.pro.minDeposit'),
            spread: t('typeAccount.cards.pro.spread'),
            commission: t('typeAccount.cards.pro.commission'),
            leverage: t('typeAccount.cards.pro.leverage'),
            currencies: t('typeAccount.cards.pro.currencies'),
            btnType: "dark"
        },
        {
            title: t('typeAccount.cards.standard.title'),
            description: t('typeAccount.cards.standard.desc'),
            minDeposit: t('typeAccount.cards.standard.minDeposit'),
            spread: t('typeAccount.cards.standard.spread'),
            commission: t('typeAccount.cards.standard.commission'),
            leverage: t('typeAccount.cards.standard.leverage'),
            currencies: t('typeAccount.cards.standard.currencies'),
            btnType: "gold"
        },
        {
            title: t('typeAccount.cards.plus.title'),
            description: t('typeAccount.cards.plus.desc'),
            minDeposit: t('typeAccount.cards.plus.minDeposit'),
            spread: t('typeAccount.cards.plus.spread'),
            commission: t('typeAccount.cards.plus.commission'),
            leverage: t('typeAccount.cards.plus.leverage'),
            currencies: t('typeAccount.cards.plus.currencies'),
            btnType: "dark"
        }
    ];

    return (
        <div className={styles.typeAccount}>
            <div className='container-xs'>
                <motion.div
                    className={styles.text}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                        hidden: {}
                    }}
                >
                    <motion.h2 variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}>
                        {t('typeAccount.title')}
                    </motion.h2>
                    <motion.p variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}>
                        {t('typeAccount.desc')}
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                        hidden: {}
                    }}
                >
                    {translatedAccountsData.map((card, idx) => (
                        <motion.div
                            className={styles.items}
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                            }}
                        >
                            <div className={styles.box}>
                                <div className={styles.topSection}>
                                    <div className={styles.iconWrapper}>
                                        <img src={CommonIcon} alt={card.title} />
                                    </div>
                                    <div className={styles.topContent}>
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                                <div className={styles.divider}></div>
                                <div className={styles.specs}>
                                    <div className={styles.specRow}>
                                        <span className={styles.label}>{t('typeAccount.minDepositLabel')}</span>
                                        <span className={styles.dots}></span>
                                        <span className={styles.value}>{card.minDeposit}</span>
                                    </div>
                                    <div className={styles.specRow}>
                                        <span className={styles.label}>{t('typeAccount.spreadLabel')}</span>
                                        <span className={styles.dots}></span>
                                        <span className={styles.value}>{card.spread}</span>
                                    </div>
                                    <div className={styles.specRow}>
                                        <span className={styles.label}>{t('typeAccount.commissionLabel')}</span>
                                        <span className={styles.dots}></span>
                                        <span className={styles.value}>{card.commission}</span>
                                    </div>
                                    <div className={styles.specRow}>
                                        <span className={styles.label}>{t('typeAccount.leverageLabel')}</span>
                                        <span className={styles.dots}></span>
                                        <span className={styles.value}>{card.leverage}</span>
                                    </div>
                                    <div className={styles.specRow}>
                                        <span className={styles.label}>{t('typeAccount.currenciesLabel')}</span>
                                        <span className={styles.dots}></span>
                                        <span className={styles.value}>{card.currencies}</span>
                                    </div>
                                    <button className={`${styles.actionBtn} ${styles[card.btnType]}`}>
                                        <span className={styles.arrowBox}>
                                            <ArrowIcon />
                                        </span>
                                        <span className={styles.btnText}>{t('typeAccount.openAccountBtn')}</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
