'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { useLanguage } from '@/context/LanguageContext';
import styles from './faq.module.scss';

const DownIcon = '/assets/icons/down.svg';

const bodyVariants = {
    hidden: {
        height: 0,
        opacity: 0,
    },
    visible: {
        height: 'auto',
        opacity: 1,
        transition: {
            height: { duration: 0.35 },
            opacity: { duration: 0.25, delay: 0.1 },
        },
    },
};

export default function Faq() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(null);

    const faqLeft = [
        {
            q: t('faq.q1'),
            a: t('faq.a1'),
        },
        {
            q: t('faq.q2'),
            a: t('faq.a2'),
        },
        {
            q: t('faq.q3'),
            a: t('faq.a3'),
        },
        {
            q: t('faq.q4'),
            a: t('faq.a4'),
        },
    ];

    const faqRight = [
        {
            q: t('faq.q5'),
            a: t('faq.a5'),
        },
        {
            q: t('faq.q6'),
            a: t('faq.a6'),
        },
        {
            q: t('faq.q7'),
            a: t('faq.a7'),
        },
        {
            q: t('faq.q8'),
            a: t('faq.a8'),
        },
    ];

    const renderFaq = (item, index) => {
        const isOpen = activeIndex === index;

        return (
            <div className={styles.items} key={index}>
                <div className={styles.mainFaq}>
                    <div className={styles.faqHeader}>
                        <h3>{item.q}</h3>

                        <motion.div
                            className={styles.icon}
                            onClick={() => setActiveIndex(isOpen ? null : index)}
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <img src={DownIcon} alt="DownIcon" />
                        </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                        {isOpen && (
                            <motion.div
                                className={styles.faqBody}
                                variants={bodyVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                <div className={styles.spacing}>
                                    <p>{item.a}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.faqSection}>
            <div className="container-xs2">
                <div className={styles.title}>
                    <h2>
                        {t('faq.titleStart')}<span>{t('faq.titleSpan')}</span>
                    </h2>
                </div>

                <div className={styles.twoCol}>
                    <div>
                        {faqLeft.map((item, i) => renderFaq(item, i))}
                    </div>

                    <div>
                        {faqRight.map((item, i) =>
                            renderFaq(item, i + faqLeft.length)
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
