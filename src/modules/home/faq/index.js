'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import styles from './faq.module.scss';

const DownIcon = '/assets/icons/down.svg';

const faqLeft = [
    {
        q: 'Is this broker regulated?',
        a: 'Sea Global is incorporated under the laws of [Jurisdiction] with the registration number listed above.',
    },
    {
        q: 'How secure are my funds?',
        a: 'Client funds are kept in segregated accounts with top-tier banks.',
    },
    {
        q: 'What platforms do you support?',
        a: 'We support Web, Android, iOS, and desktop trading platforms.',
    },
    {
        q: 'Is customer support available?',
        a: 'Yes, 24/7 multilingual customer support is available.',
    },
];

const faqRight = [
    {
        q: 'Are there any hidden fees?',
        a: 'No hidden fees. All charges are clearly disclosed.',
    },
    {
        q: 'How fast are withdrawals?',
        a: 'Withdrawals are processed within 24–48 hours.',
    },
    {
        q: 'Do you offer demo accounts?',
        a: 'Yes, free demo accounts are available for practice.',
    },
    {
        q: 'Which countries are supported?',
        a: 'We support traders from most countries worldwide.',
    },
];

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
    const [activeIndex, setActiveIndex] = useState(null);

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
                        Frequently Asked <span>Questions</span>
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
