'use client';

import React from 'react';
import styles from './whyChoose.module.scss';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const icons = [
    '/assets/icons/disclosures.png',
    '/assets/icons/Secure.png',
    '/assets/icons/Transparent.png',
    '/assets/icons/Professional.png',
];
const UserIcon = '/assets/icons/user-light.svg';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export default function WhyChoose() {
    const { t } = useLanguage();
    const items = t('companyWhyChoose.items');

    return (
        <motion.div
            className={styles.whyChooseAlignment}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="container-xs">
                <motion.div className={styles.title} variants={itemVariants}>
                    <h2>
                        {t('companyWhyChoose.titleStart')}
                        <span>{t('companyWhyChoose.titleSpan')}</span>
                    </h2>
                    <p>{t('companyWhyChoose.desc')}</p>
                </motion.div>

                <motion.div className={styles.grid} variants={containerVariants}>
                    {Array.isArray(items) &&
                        items.map((text, index) => (
                            <motion.div
                                key={index}
                                className={styles.griditems}
                                variants={itemVariants}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                            >
                                <div>
                                    <div className={styles.counter}>{index + 1}</div>
                                    <h3>{text}</h3>
                                </div>
                                <div className={styles.iconRight}>
                                    <img src={icons[index]} alt="" />
                                </div>
                            </motion.div>
                        ))}
                </motion.div>

                <motion.div
                    className={styles.buttonCenter}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a
                        href="https://trade.seaglobalfx.co/register/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button type="button">
                            <img src={UserIcon} alt="" />
                            {t('hero.openAccount')}
                        </button>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
}
