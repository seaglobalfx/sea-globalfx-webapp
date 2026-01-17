'use client'
import React from 'react'
import styles from './tradeAccount.module.scss';
import { motion } from 'framer-motion';
import StartTrading from '../startTrading';

const Mt4Icon = '/assets/icons/mt4.svg';
const Mt5Icon = '/assets/icons/mt5.png';
const WebIcon = '/assets/icons/web.png';
const MobileIcon = '/assets/icons/mobile.png';
const ThikPadImage = '/assets/images/thinkpad.png';
const StarImage = '/assets/images/star.png';
const MobileImage = '/assets/images/mobile.png';

/* Animations */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

const scaleFade = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};
export default function TradeAccount({ title, size, sizexl }) {
    return (
        <div className={styles.tradeAccount}>
            <motion.div
                className={styles.thinkpadImage}
                variants={scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <img src={ThikPadImage} alt='ThikPadImage' />
            </motion.div>
            <motion.div
                className={styles.mobileImage}
                variants={scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <img src={MobileImage} alt='MobileImage' />
            </motion.div>

            <motion.div
                className={styles.starImage}
                initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                whileInView={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                    transition: { duration: 0.8, ease: 'easeOut' },
                }}
                viewport={{ once: true }}
            >
                <img src={StarImage} alt='StarImage' />
            </motion.div>

            <div className='container-sm'>
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <span>Trade </span> this Market on
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Access this market using Sea Global’s supported trading platforms, built for speed, stability, and flexibility
                    across desktop, web, and mobile environments.
                </motion.p>

                {/* Icons */}
                <motion.div
                    className={styles.iconTextAlignment}
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[Mt4Icon, Mt5Icon, WebIcon, MobileIcon].map((icon, index) => (
                        <motion.div key={index} variants={fadeUp}>
                            <div className={styles.iconCenter}>
                                <img src={icon} alt='platform-icon' />
                            </div>
                            <span>
                                {index === 0 && 'MT4'}
                                {index === 1 && 'MT5'}
                                {index === 2 && <>Web <br /> Platform</>}
                                {index === 3 && <>Mobile <br /> App</>}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <StartTrading subText={title} fullwidth={size} sizexl1={sizexl} />
        </div>
    )
}
