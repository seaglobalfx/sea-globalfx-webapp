'use client';

import React from 'react';
import styles from './whyChoose.module.scss';
import { motion } from 'framer-motion';

const DisclosuresIcon = '/assets/icons/disclosures.png';
const SecureIcon = '/assets/icons/Secure.png';
const TransparentIcon = '/assets/icons/Transparent.png';
const ProfessionalIcon = '/assets/icons/Professional.png';
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
                        Why Choose <span> Sea Global FX? </span>
                    </h2>
                    <p>
                        Trade with confidence through Sea Global, a broker committed to global standards,
                        robust compliance, and professional-grade trading infrastructure. Every aspect of
                        our service is designed to protect clients, ensure fairness, and deliver a reliable
                        trading environment.
                    </p>
                </motion.div>

                <motion.div className={styles.grid} variants={containerVariants}>
                    {[
                        { id: 1, text: 'Clear regulatory disclosures', icon: DisclosuresIcon },
                        { id: 2, text: 'Secure handling of client funds and data', icon: SecureIcon },
                        { id: 3, text: 'Transparent trading conditions and pricing', icon: TransparentIcon },
                        { id: 4, text: 'Professional tools and infrastructure', icon: ProfessionalIcon },
                    ].map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.griditems}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        >
                            <div>
                                <div className={styles.counter}>{item.id}</div>
                                <h3>{item.text}</h3>
                            </div>
                            <div className={styles.iconRight}>
                                <img src={item.icon} alt={item.text} />
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
                        href="https://client.seaglobalfx.com/?tab=register"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>
                            <img src={UserIcon} alt="UserIcon" />
                            Open Account
                        </button>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
}
