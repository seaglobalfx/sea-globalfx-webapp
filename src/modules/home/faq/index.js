'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import styles from './faq.module.scss';

const DownIcon = '/assets/icons/down.svg';

const faqLeft = [
    {
        q: 'How Do I Open an Account with Sea Global FX?',
        a: 'You can open an account by completing our online registration form and verifying your identity. Once approved, you can fund your account and start trading.',
    },
    {
        q: 'Are Funding and Withdrawal Requests Processed Immediately?',
        a: 'Funding is usually instant, while withdrawals are processed as quickly as possible and may take a short time depending on the payment method used.',
    },
    {
        q: 'What Is Forex Trading?',
        a: 'Forex trading involves buying one currency and selling another to profit from changes in their exchange rates. For example, if you believe the Euro will rise against the US Dollar, you buy EUR/USD. If the Euro’s value increases, you can sell it later at a higher price and make a profit.',
    },
    {
        q: 'Is MetaTrader 5 Good for Beginners?',
        a: 'Yes. MetaTrader 5 is user-friendly, widely used, and offers helpful tools for both beginners and experienced traders.',
    },
];

const faqRight = [
    {
        q: 'Why is risk management important?',
        a: 'Risk management helps protect your trading capital by controlling how much you risk on each trade. It involves setting limits like stop-loss orders and proper position sizing, which can reduce losses and support more consistent, disciplined trading decisions over time.',
    },
    {
        q: 'What is the biggest mistake new traders make?',
        a: 'The biggest mistake new traders make is risking too much on a single trade. This often comes from overconfidence or emotional decisions, and it can quickly lead to large losses.',
    },
    {
        q: 'Is trading suitable for everyone?',
        a: 'Trading involves risk and may not be suitable for everyone. It’s important to understand the risks and trade responsibly.',
    },
    {
        q: 'What is trading psychology?',
        a: 'Trading psychology refers to how a trader manages emotions such as fear, greed, and stress. Maintaining emotional control helps traders stay disciplined, follow their strategy, and make rational decisions instead of impulsive ones.',
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
