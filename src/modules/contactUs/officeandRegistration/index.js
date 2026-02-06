'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './officeandRegistration.module.scss'

const BilldingImage = '/assets/images/billding.png'
const OutlineImage = '/assets/images/outline-vec.png'

// variants
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
}

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: 'easeOut',
        },
    },
}

const imageRight = {
    hidden: {
        opacity: 0,
        x: 80,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
}

export default function OfficeandRegistration() {
    return (
        <div className={styles.officeandRegistration}>
            <div className="container-sm">
                <motion.div
                    className={styles.text}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Heading */}
                    <motion.h2 variants={fadeUp}>
                        Office and Registration <span> Details </span>
                    </motion.h2>

                    {/* Address Blocks */}
                    <motion.div
                        className={styles.allTextAlignment}
                        variants={container}
                    >
                        <motion.div className={styles.text} variants={fadeUp}>
                            <h3>Registered Address</h3>
                            <p>
                                1st Floor, The Sotheby Building, Rodney Bay, Gros-
                                Islet, Castries, Saint Lucia – 838
                            </p>
                        </motion.div>

                        <motion.div className={styles.text} variants={fadeUp}>
                            <h3>Physical Address</h3>
                            <p>
                                1st Floor, The Sotheby Building, Rodney Bay, Gros-Islet,
                                Castries, Saint Lucia – 838
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Outline Image */}
                    <motion.div
                        className={styles.outlineImage}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <img src={OutlineImage} alt="OutlineImage" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Right Building Image */}
            <motion.div
                className={styles.rightImage}
                variants={imageRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <img src={BilldingImage} alt="BilldingImage" />
            </motion.div>
        </div>
    )
}
