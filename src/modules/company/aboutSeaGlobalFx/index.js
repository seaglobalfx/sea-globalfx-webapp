'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './aboutSeaGlobalFx.module.scss'

const AboutImage = '/assets/images/about.png'

// animation variants
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
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

const imageAnim = {
    hidden: {
        opacity: 0,
        x: -60,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: 'easeOut',
        },
    },
}

export default function AboutSeaGlobalFx() {
    return (
        <div className={styles.aboutSeaGlobalFx}>
            <div className="container-sm">
                <motion.div
                    className={styles.grid}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Image */}
                    <motion.div
                        className={styles.griditems}
                        variants={imageAnim}
                    >
                        <div className={styles.image}>
                            <img src={AboutImage} alt="About Sea Global FX" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className={styles.griditems}
                        variants={container}
                    >
                        <motion.h2 variants={fadeUp}>
                            About <span> Sea Global FX </span>
                        </motion.h2>

                        <motion.p variants={fadeUp}>
                            Sea Global FX is a global trading broker focused on delivering a transparent, secure, and professionally managed
                            trading environment.
                        </motion.p>

                        <motion.p variants={fadeUp}>
                            We are committed to maintaining clear operational standards, robust infrastructure, and reliable client support.
                            Our approach is built on trust, responsibility, and long-term relationships with traders across global markets.
                        </motion.p>

                        <motion.p variants={fadeUp}>
                            Every feature, process, and service at Sea Global FX is designed to support fair trading conditions and help clients
                            trade with clarity and confidence.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
