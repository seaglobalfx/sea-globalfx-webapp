'use client'
import React from 'react'
import styles from './reliableFunding.module.scss'
import { motion } from 'framer-motion'

const MobileImage = '/assets/images/mobile-banner.png'

export default function ReliableFunding() {
    return (
        <motion.div
            className={styles.reliableFundingAlignment}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container-xs">
                <div className={styles.grid}>

                    {/* Left Content */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className={styles.text}>
                            <h2>
                                Reliable Funding & <span> Withdrawals </span>
                            </h2>
                            <p>
                                Sea Global is committed to providing a smooth, secure, and transparent funding experience, ensuring
                                clients can deposit and withdraw funds efficiently and with confidence.
                            </p>
                        </div>

                        {/* Cards */}
                        <motion.div
                            className={styles.cardGrid}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15
                                    }
                                }
                            }}
                        >
                            {[
                                {
                                    title: 'Wide Range of Global Payment Methods',
                                    desc: 'Access multiple deposit and withdrawal options, including cards, bank transfers, and other regionally supported payment solutions.'
                                },
                                {
                                    title: 'Instant Deposits',
                                    desc: 'Most deposit methods are processed instantly, allowing traders to fund accounts and access markets without unnecessary delays.'
                                },
                                {
                                    title: 'Fast & Transparent Withdrawals',
                                    desc: 'Withdrawal requests are processed promptly, with clear timelines and no hidden charges under normal conditions.'
                                },
                                {
                                    title: 'Secure Payment Processing',
                                    desc: 'All transactions are handled through encrypted, secure payment systems to protect client iformation.'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.cardGridItems}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    whileHover={{
                                        y: -8,
                                        rotateX: 6,
                                        rotateY: -6,
                                        scale: 1.03,
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        perspective: 1000,
                                    }}
                                >
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: 60, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            className={styles.image}
                            animate={{ y: [0, -14, 0] }}
                            transition={{
                                duration: 4,
                                ease: 'easeInOut',
                                repeat: Infinity,
                            }}
                            style={{ willChange: 'transform' }}
                        >
                            <img src={MobileImage} alt="MobileImage" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}
