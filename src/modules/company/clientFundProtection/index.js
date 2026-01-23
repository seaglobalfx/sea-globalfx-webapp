'use client'
import React from 'react'
import styles from './clientFundProtection.module.scss'
import { motion } from 'framer-motion'

const LayerBlack = '/assets/images/layer-black.png'
const LockImage = '/assets/images/lock.png'

export default function ClientFundProtection() {
    return (
        <motion.div
            className={styles.clientFundProtection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className={styles.blacklayer}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <img src={LayerBlack} alt="LayerBlack" />
            </motion.div>

            <div className="container-sm">
                <div className={styles.grid}>

                    {/* Image */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <div className={styles.image}>
                            <img src={LockImage} alt="LockImage" />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className={styles.text}>
                            <h2>
                                Client Fund <span> Protection</span>
                            </h2>
                            <p>
                                Protecting client funds is a core priority at Sea Global. Our fund-handling framework is designed to promote
                            </p>
                            <p>
                                security, transparency, and responsible risk management across all regulated entities.
                            </p>
                        </div>

                        {/* Boxes */}
                        <motion.div
                            className={styles.boxGrid}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {[
                                {
                                    title: 'Segregated Client Accounts',
                                    desc: 'Client funds are held separately from company operating funds in accordance with applicable regulatory requirements.'
                                },
                                {
                                    title: 'Funds Held with Tier-1 Banks',
                                    desc: 'Client funds are maintained with reputable, well-capitalized financial institutions to support fund security and stability.'
                                },
                                {
                                    title: 'Strict Internal Risk Controls',
                                    desc: 'Robust internal policies and monitoring systems are in place to manage financial, operational, and counterparty risk.'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.items}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
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
    )
}
