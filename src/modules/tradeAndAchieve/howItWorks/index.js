'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './howItWorks.module.scss';
const SystemIcon = '/assets/icons/account.png';
const KycIcon = '/assets/icons/trade.png';
const FundIcon = '/assets/icons/system-pc.png';
const TradingIcon = '/assets/icons/reward.png';
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
export default function HowItWorks() {
    return (
        <div className={styles.howPammTrading}>
            <div className='container-xs'>
                <motion.div
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2>
                        How It <span>Works</span>
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
                            <h3>Open Your Live Account</h3>
                            <p>
                                Register and activate your trading account.
                            </p>
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
                            <h3>Trade Eligible Instruments
                            </h3>
                            <p>Forex & CFD instruments qualify.</p>
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
                            <h3>Close Trades</h3>
                            <p>
                                Only closed trades count toward lot volume.
                            </p>
                        </div>
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
                        <div>
                            <div className={styles.counter}>4</div>
                            <h3>Unlock Your Reward</h3>
                            <p>
                                Complete required lots and submit your claim.
                            </p>
                        </div>
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
