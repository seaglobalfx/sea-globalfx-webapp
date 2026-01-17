'use client';
import { motion } from 'framer-motion';
import styles from './accountTypes.module.scss';
import LeftRound from '@/icons/leftRound';
import RightRound from '@/icons/rightRound';
const LayerBlack = '/assets/images/layer-black.png';
const BlackArrow = '/assets/icons/white-arrow.svg';
const Arrow = '/assets/icons/arrow-primary.svg';

/* Animations */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
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

const cardAnim = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};
export default function AccountTypes() {
    return (
        <div className={styles.accountTypesAlignment}>
            <div className={styles.blackLayer}>
                <img src={LayerBlack} alt='LayerBlack' />
            </div>
            <div className='container-xs'>
                <div className={styles.title}>
                    <h2>
                        <span>Account </span> Types
                    </h2>
                    <p>
                        Pick an account that matches your trading style and experience level. Our MT5 trading accounts are
                        designed with transparent pricing, competitive spreads, and flexible conditions.
                    </p>
                </div>
                <motion.div
                    className={styles.grid}
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    {[{
                        title: 'Pro',
                        arrow: BlackArrow,
                        description: 'A straightforward account with no separate commission, designed for ease of use and cost transparency.',
                        deposit: '$10',
                        spread: '20 Cents',
                    }, {
                        title: 'Standard',
                        arrow: Arrow,
                        description: 'Built for traders who want tighter spreads and enhanced support while maintaining simple pricing.',
                        deposit: '$100',
                        spread: '25 Cents',
                    }, {
                        title: 'Plus',
                        arrow: Arrow,
                        description: 'Designed for active traders who prioritize pricing efficiency and execution quality. For cost-focused traders using raw pricing',
                        deposit: '$10',
                        spread: '30 Cents',
                    }].map((item, index) => (
                        <motion.div className={styles.griditems} variants={cardAnim} key={index}>
                            <div className={styles.box}>
                                <div className={styles.header}>
                                    <h3>{item.title}</h3>
                                </div>

                                <div className={styles.contnet}>
                                    <div className={styles.details}>
                                        <p>{item.description}</p>
                                    </div>

                                    <div className={styles.allTextStyle}>
                                        <div className={styles.text}><p>Minimum Deposit:</p><span>{item.deposit}</span></div>
                                        <div className={styles.text}><p>Spread:</p><span>{item.spread}</span></div>
                                        <div className={styles.text}><p>Commission:</p><span>$0</span></div>
                                        <div className={styles.text}><p>Leverage:</p><span>50 to 500</span></div>
                                        <div className={styles.text}><p>Currencies</p><span>USD</span></div>
                                    </div>
                                </div>

                                <div className={styles.buttongrid}>
                                    <motion.div className={styles.left} >
                                        <LeftRound />
                                    </motion.div>
                                    <motion.div className={styles.right} >
                                        <RightRound />
                                    </motion.div>
                                    <motion.button  >
                                        <img src={item.arrow} alt='Arrow' />
                                        Trade Now
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </div>
    )
}
