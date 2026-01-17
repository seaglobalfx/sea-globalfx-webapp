'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './herobanner.module.scss';

const HeroImage = '/assets/images/hero-img.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';
const Video = '/assets/video/video.mp4';

/* Animations */
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const imageAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function Herobanner() {
    return (
        <div className={styles.herobanner}>
            <div className={styles.leftAlignment}>
                <div className={styles.grid}>

                    {/* LEFT CONTENT */}
                    <motion.div
                        className={styles.griditems}
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <div>
                            <motion.div className={styles.tagline} variants={fadeUp}>
                                <button>
                                    Low spreads • Fast execution • Regulated
                                </button>
                            </motion.div>

                            <motion.h1 variants={fadeUp}>
                                Institutional-Grade Trading for <span> Global </span> Markets
                            </motion.h1>

                            <motion.p variants={fadeUp}>
                                Experience tight spreads with high-speed execution. Trade in a secure, fully
                                regulated trading environment.
                            </motion.p>

                            <motion.div
                                className={styles.twoButtonalignment}
                                variants={container}
                            >
                                <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                    <motion.button className={styles.orange} variants={fadeUp}>
                                        <img src={UserIcon} alt='UserIcon' />
                                        Open Account
                                    </motion.button>
                                </a>
                                <a target='_blank' href='https://client.seaglobalfx.com/'>
                                    <motion.button className={styles.black} variants={fadeUp}>
                                        <img src={DemoIcon} alt='DemoIcon' />
                                        Try Demo
                                    </motion.button>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        className={styles.griditems}
                        variants={imageAnim}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className={styles.image}>
                            {/* <img src={HeroImage} alt='HeroImage' /> */}
                            <video src={Video} alt="Video" loop muted autoPlay playsInline></video>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
