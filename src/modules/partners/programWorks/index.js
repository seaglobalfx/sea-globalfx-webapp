'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './programWorks.module.scss';

const RegisterIcon = '/assets/icons/Register.svg';
const ReferIcon = '/assets/icons/Refer.svg';
const ClientsIcon = '/assets/icons/Clients.svg';
const EarnIcon = '/assets/icons/Earn.svg';
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

export default function ProgramWorks() {
    return (
        <div className={styles.programWorks}>
            <div className='container-xs'>
                <motion.div
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2>
                        How the Sea Global FX IB Program  <span>Works</span>
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
                        <div className={styles.counter}>1</div>
                        <h3>Register as a Partner</h3>
                        <p>Complete the online IB registration form.</p>
                        <div className={styles.iconRight}>
                            <img src={RegisterIcon} alt='RegisterIcon' />
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
                        <h3>Refer Clients</h3>
                        <p>Share your unique IB referral link or code.</p>
                        <div className={styles.iconRight}>
                            <img src={ReferIcon} alt='ReferIcon' />
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
                        <h3>Clients Start Trading</h3>
                        <p>Referred clients trade forex and CFDs on Seaglobal FX.</p>
                        <div className={styles.iconRight}>
                            <img src={ClientsIcon} alt='ClientsIcon' />
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
                        <h3>Earn Commissions</h3>
                        <p>Receive commissions based on client trading activity and rebate structure.</p>
                        <div className={styles.iconRight}>
                            <img src={EarnIcon} alt='EarnIcon' />
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
