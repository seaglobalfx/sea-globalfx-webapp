'use client'
import React, { useState } from 'react'
import styles from './tradeAndAchieveList.module.scss';
import CheckIcon from '@/icons/checkIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const DownIcon = '/assets/icons/down.svg';

export default function TradeAndAchieveList() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();
    const features = t('tradeAndAchieveList.features');
    const terms = t('tradeAndAchieveList.terms');

    return (
        <div className={styles.tradeAndAchieveList}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.griditems}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <CheckIcon />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className={styles.teramBox}>
                    <div className={styles.boxheaderAlignment} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                        <h2>
                            {t('tradeAndAchieveList.termsTitle')}
                        </h2>
                        <motion.img
                            src={DownIcon}
                            alt='DownIcon'
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className={styles.contentStyle}>
                                    {terms.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
