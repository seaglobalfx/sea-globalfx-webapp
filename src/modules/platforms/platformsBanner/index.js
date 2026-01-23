'use client'
import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = '/assets/images/platforms-banner.png';
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

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const imageAnim = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

export default function PlatformsBanner() {
    return (
        <div className='common-banner'>
            <div className='left-alignment'>
                <div className='grid'>

                    {/* LEFT CONTENT */}
                    <div className='grid-items'>
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                className='tag-line'
                                variants={fadeUp}
                            >
                                <button>
                                    Desktop • Web • Mobile
                                </button>
                            </motion.div>

                            <motion.h1
                                className="full-width"
                                variants={fadeUp}
                            >
                                Trade Your Way with Powerful,  Flexible Trading <span>Platforms</span>
                            </motion.h1>

                            <motion.p variants={fadeUp}>
                                Trade your way with Sea Global’s powerful and flexible trading platforms, designed to support different trading styles, experience levels, and market strategies—whether you trade from desktop, web, or mobile.
                            </motion.p>

                            <motion.div
                                className='two-button-alignment'
                                variants={fadeUp}
                            >
                                <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                    <button className='orange'>
                                        <img src={UserIcon} alt='UserIcon' />
                                        Open Account
                                    </button>
                                </a>
                                <a target='_blank' href='https://client.seaglobalfx.com/'>
                                    <button className='black'>
                                        <img src={DemoIcon} alt='DemoIcon' />
                                        Try Demo
                                    </button>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className='grid-items'>
                        <motion.div
                            className='image'
                            variants={imageAnim}
                            initial="hidden"
                            animate="visible"
                        >
                            <img src={HeroImage} alt='HeroImage' />
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}
