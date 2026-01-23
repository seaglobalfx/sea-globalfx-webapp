'use client'
import React from 'react'
import styles from './copyTrading.module.scss'
import { motion } from 'framer-motion'

const PammImage = '/assets/images/pamm.png'
const LayerBlackImage = '/assets/images/layer-black.png'

export default function CopyTrading() {
    return (
        <div className={styles.pammTrading}>
            <div className={styles.layerBlack}>
                <img src={LayerBlackImage} alt="LayerBlackImage" />
            </div>

            <div className="container-xs">
                <div className={styles.grid}>

                    {/* LEFT IMAGE – Infinite floating animation */}
                    <div className={styles.griditems}>
                        <motion.div
                            className={styles.image}
                            animate={{ x: [0, -12, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <img src={PammImage} alt="PammImage" />
                        </motion.div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className={styles.griditems}>
                        <motion.div
                            className={styles.text}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <h2>
                                Copy <span>Trading </span>
                            </h2>
                            <p>
                                Copy trading allows users to automatically mirror the trades of selected professional traders in real time. You can analyze trader performance, choose strategies that align with your goals, and copy
                                trades while retaining full control of your account.
                            </p>
                        </motion.div>

                        {/* CARDS */}
                        <div className={styles.cardGrid}>
                            {[
                                'Beginner-friendly and easy to start',
                                'Learn by following experienced traders',
                                'Real-time trade execution',
                                'Ability to stop or modify copying anytime',
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.items}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                        ease: 'easeOut',
                                    }}
                                >
                                    <h3>{text}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
