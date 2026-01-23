'use client'
import React from 'react'
import styles from './pammTrading.module.scss'
import { motion } from 'framer-motion'

const PammImage = '/assets/images/pamm.png'
const LayerBlackImage = '/assets/images/layer-black.png'

export default function PammTrading() {
    return (
        <div className={styles.pammTrading}>
            <div className={styles.layerBlack}>
                <img src={LayerBlackImage} alt="LayerBlackImage" />
            </div>

            <div className="container-xs">
                <div className={styles.grid}>

                    {/* LEFT IMAGE – Infinite animation */}
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
                            <h2>PAMM Trading</h2>
                            <h3>
                                (Percentage Allocation <span> Management </span> Module)
                            </h3>
                            <p>
                                PAMM trading allows investors to allocate their funds to experienced and verified traders who manage trades on a pooled account. Each investor retains ownership of their capital while participating in the trader’s performance. Profits and losses are distributed fairly based on
                                each investor’s contribution
                            </p>
                        </motion.div>

                        {/* CARDS */}
                        <div className={styles.cardGrid}>
                            {[
                                'Hands-free trading managed by professionals',
                                'Transparent performance history and statistics',
                                'No technical trading knowledge required',
                                'Investors maintain full control over funds',
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
