
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = '/assets/images/crypto-banner.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';

/* Animations */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const imageAnim = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: 'easeOut' }
    }
};

export default function CryptoBanner() {
    return (
        <div className='common-banner'>
            <div className='left-alignment'>
                <div className='grid'>

                    {/* LEFT CONTENT */}
                    <div className='grid-items'>
                        <div>
                            <motion.div
                                className='tag-line'
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <button>
                                    Tight spreads • Fast execution • Deep liquidity
                                </button>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                Trade Digital Assets <br />
                                Across Global <span>Crypto</span> Markets
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                Access global crypto markets through Sea Global’s secure trading infrastructure, offering
                                transparent pricing, fast execution, and reliable liquidity across market conditions.
                            </motion.p>

                            <motion.div
                                className='two-button-alignment'
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className='orange'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <img src={UserIcon} alt='UserIcon' />
                                    Open Account
                                </motion.button>

                                <motion.button
                                    className='black'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <img src={DemoIcon} alt='DemoIcon' />
                                    Try Demo
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className='grid-items'>
                        <motion.div
                            className='image'
                            variants={imageAnim}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <img src={HeroImage} alt='HeroImage' />
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
