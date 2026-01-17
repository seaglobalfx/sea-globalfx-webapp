'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './easySteps.module.scss';

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
                        Open Your Account in 4 <span>Easy Steps</span>
                    </h2>
                    <p>
                        Start trading with confidence through a fast, secure, and fully guided onboarding process—designed to get
                        you from signup to your first trade with minimal friction.
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
                        <h3>SignUp</h3>
                        <p>Create your account in minutes</p>
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
                        <h3>KYC Verification</h3>
                        <p>Fast & secure identity verification</p>
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
                        <h3>Fund Account</h3>
                        <p>Add funds securely to start trading</p>
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
                        <h3>Start Trading</h3>
                        <p>Access global markets instantly</p>
                        <div className={styles.iconRight}>
                            <img src={TradingIcon} alt='TradingIcon' />
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
