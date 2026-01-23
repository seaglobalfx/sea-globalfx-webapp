'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './howMamTrading.module.scss';

const SystemIcon = '/assets/icons/single.png';
const KycIcon = '/assets/icons/replicated.png';
const FundIcon = '/assets/icons/risk.png';
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
export default function HowMamTrading() {
    return (
        <div className={styles.howPammTrading}>
            <div className='container-xs7'>
                <motion.div
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2>
                        How MAM Trading <span>Works</span>
                    </h2>

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
                        <div>
                            <div className={styles.counter}>1</div>
                            <h3>Manager places a single trade</h3>
                        </div>

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
                        <div>
                            <div className={styles.counter}>2</div>
                            <h3>Trade is replicated across linked accounts</h3>
                        </div>
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
                        <div>
                            <div className={styles.counter}>3</div>
                            <h3>Risk is adjusted per account</h3>
                        </div>
                        <div className={styles.iconRight}>
                            <img src={FundIcon} alt='FundIcon' />
                        </div>
                    </motion.div>
                </motion.div>
                <div className={styles.buttonCenter}>
                    <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                        <button>
                            <img src={UserIcon} alt='UserIcon' />
                            Open Account
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

