'use client';

import React, { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useTransform } from 'framer-motion';
import styles from './mobileAnimation.module.scss';

const IphoneImage = '/assets/images/iphone.svg';

const MobileAnimation = ({ scrollYProgress }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Scroll transforms for smooth fading and color changing
    const screenBg = useTransform(
        scrollYProgress || { onChange: () => { } },
        [0.65, 0.8],
        ['#0b0c10', '#ffffff']
    );

    const lottieOpacity = useTransform(
        scrollYProgress || { onChange: () => { } },
        [0.65, 0.75],
        [1, 0]
    );

    const frameOpacity = useTransform(
        scrollYProgress || { onChange: () => { } },
        [0.65, 0.8],
        [1, 0]
    );

    return (
        <div className={styles.mobileAnimation}>
            <div className={styles.mobileFramer}>
                <motion.img
                    src={IphoneImage}
                    alt="IphoneImage"
                    style={{
                        opacity: scrollYProgress ? frameOpacity : 1,
                        willChange: "opacity"
                    }}
                />
                <motion.div
                    className={styles.screenContent}
                    style={{
                        backgroundColor: scrollYProgress ? screenBg : '#fff',
                        willChange: "background-color"
                    }}
                >
                    <motion.div
                        className={styles.dynamicIsland}
                        style={{
                            opacity: scrollYProgress ? lottieOpacity : 1,
                            willChange: "opacity"
                        }}
                    ></motion.div>
                    {mounted && (
                        <motion.div
                            style={{
                                width: '100%',
                                height: '100%',
                                opacity: scrollYProgress ? lottieOpacity : 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                willChange: "opacity"
                            }}
                        >
                            <DotLottieReact
                                src="/assets/json/Chart-Final.lottie"
                                loop
                                autoplay
                                className={styles.lottiePlayer}
                            />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default MobileAnimation;
