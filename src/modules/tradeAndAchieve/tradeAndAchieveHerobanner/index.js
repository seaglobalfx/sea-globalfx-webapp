'use client'
import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = '/assets/images/tradeAndAchieveHerobanner.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/win.svg';

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};


export default function TradeAndAchieveHerobanner() {
    return (
        <div>
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
                                        Seaglobal FX IB Partners Program
                                    </button>
                                </motion.div>

                                <motion.h2 variants={fadeUp}>
                                    Trade with <span> discipline. </span>
                                    Accumulate volume.
                                    Unlock milestone <span>rewards.</span>
                                </motion.h2>

                                <motion.p variants={fadeUp}>
                                    Designed for active traders who aim higher
                                </motion.p>

                                <motion.div
                                    className='two-button-alignment'
                                    variants={fadeUp}
                                >
                                    <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                        <button className='orange'>
                                            <img src={UserIcon} alt='UserIcon' />
                                            Get Started Now
                                        </button>
                                    </a>
                                    <a target='_blank' href='https://client.seaglobalfx.com/'>
                                        <button className='black'>
                                            <img src={DemoIcon} alt='DemoIcon' />
                                            View Milestones
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
        </div>
    )
}
