'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './whySeaGlobal.module.scss';

const SeaGlobalImage = '/assets/images/sea.png';
const CoinImage = '/assets/images/coin.png';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

export default function WhySeaGlobal() {
    return (
        <motion.div
            className={styles.whySeaGlobal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container-sm">
                <div className={styles.grid}>

                    {/* Image */}
                    <motion.div
                        className={styles.griditems}
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <div className={styles.widthBox}>
                            <div className={styles.mainImage}>
                                <div
                                    className={styles.image}
                                >
                                    <img src={SeaGlobalImage} alt="SeaGlobalImage" />
                                </div>

                                <motion.div
                                    className={styles.coinImage}

                                >
                                    <motion.img
                                        animate={{
                                            y: [0, -20, 0],
                                            x: [0, 10, 0],
                                        }}
                                        transition={{
                                            duration: 5,
                                            ease: 'linear',
                                            repeat: Infinity,
                                        }}
                                        style={{ transformStyle: 'preserve-3d' }}
                                        src={CoinImage} alt="CoinImage" />
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className={styles.griditems}
                        variants={stagger}
                    >
                        <motion.h2
                            variants={fadeUp}
                            transition={{ duration: 0.5 }}
                        >
                            Why <span>Sea Global?</span>
                        </motion.h2>

                        <motion.div
                            className={styles.boxGrid}
                            variants={stagger}
                        >
                            {[
                                {
                                    title: 'Low Spreads',
                                    desc: 'Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.'
                                },
                                {
                                    title: 'Fast Execution',
                                    desc: 'Experience low-latency order execution powered by institutional-grade infrastructure, helping minimize slippage in fast-moving markets.'
                                },
                                {
                                    title: 'Regulation',
                                    desc: 'We operate under strict regulatory standards and employ advanced security protocols to safeguard client funds and data.'
                                },
                                {
                                    title: 'Global Access',
                                    desc: 'Access a wide range of global financial markets from a single platform, with deep liquidity and reliable pricing.'
                                },
                                {
                                    title: '24/7 Support',
                                    desc: 'Our dedicated support team is available 24 hours a day, 7 days a week, ensuring help is always within reach when you need it.'
                                }
                            ].map((item, index) => (
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
                                        card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        const card = e.currentTarget;
                                        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                                        card.style.boxShadow = 'none';
                                    }}
                                    key={index}
                                    className={styles.items}
                                    variants={fadeUp}
                                    transition={{ duration: 0.45 }}
                                >
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
