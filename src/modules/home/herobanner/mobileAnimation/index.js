'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Card1 = '/assets/images/c1.png';
const Card2 = '/assets/images/c2.png';
const Card3 = '/assets/images/c3.png';
const Card4 = '/assets/images/c4.png';


const Card5 = '/assets/images/c5.png';
const Card6 = '/assets/images/c6.png';
const Card7 = '/assets/images/c7.png';
const Card8 = '/assets/images/c8.png';

const DotLottieReact = dynamic(
    () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
    { ssr: false }
);
import { motion, useTransform, useMotionValue } from 'framer-motion';
import styles from './mobileAnimation.module.scss';

const IphoneImage = '/assets/images/iphone.svg';

const MobileAnimation = ({ scrollYProgress }) => {
    const [mounted, setMounted] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cards = [Card1, Card2, Card3, Card4];
    const cards1 = [Card5, Card6, Card7, Card8];

    useEffect(() => {
        setMounted(true);
        // Autoplay loop for cards
        const timer = setInterval(() => {
            setCurrentCardIndex(prev => (prev + 1) % cards.length);
        }, 3000); // 3 seconds per card
        return () => clearInterval(timer);
    }, [cards.length]);

    // Create a valid fallback MotionValue if scrollYProgress is not passed
    const fallbackScrollY = useMotionValue(0);
    const validScrollYProgress = scrollYProgress || fallbackScrollY;

    // Scroll transforms for smooth fading and color changing
    const screenBg = useTransform(
        validScrollYProgress,
        [0.65, 0.8],
        ['#0b0c10', '#ffffff']
    );

    const lottieOpacity = useTransform(
        validScrollYProgress,
        [0.65, 0.75],
        [1, 0]
    );

    const frameOpacity = useTransform(
        validScrollYProgress,
        [0, 0.65, 0.75],
        [1, 1, 0]
    );

    const sideCardsOpacity = useTransform(
        validScrollYProgress,
        [0.15, 0.35],
        [1, 0]
    );

    const sideCardsY = useTransform(
        validScrollYProgress,
        [0.15, 0.35],
        [0, 30]
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
            <motion.div 
                className={styles.leftside}
                style={{ 
                    opacity: scrollYProgress ? sideCardsOpacity : 1,
                    y: scrollYProgress ? sideCardsY : 0,
                    willChange: "opacity, transform"
                }}
            >
                {cards.map((card, idx) => (
                    <motion.img
                        key={idx}
                        src={card}
                        alt={`Card${idx + 1}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{
                            opacity: currentCardIndex === idx ? 1 : 0,
                            y: currentCardIndex === idx ? 0 : 15,
                            scale: currentCardIndex === idx ? 1 : 0.95
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{
                            position: idx === 0 ? 'relative' : 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            pointerEvents: currentCardIndex === idx ? 'auto' : 'none'
                        }}
                    />
                ))}
            </motion.div>
            <motion.div 
                className={styles.rightside}
                style={{ 
                    opacity: scrollYProgress ? sideCardsOpacity : 1,
                    y: scrollYProgress ? sideCardsY : 0,
                    willChange: "opacity, transform"
                }}
            >
                {cards1.map((card, idx) => (
                    <motion.img
                        key={idx}
                        src={card}
                        alt={`Card${idx + 1}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{
                            opacity: currentCardIndex === idx ? 1 : 0,
                            y: currentCardIndex === idx ? 0 : 15,
                            scale: currentCardIndex === idx ? 1 : 0.95
                        }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        style={{
                            position: idx === 0 ? 'relative' : 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            pointerEvents: currentCardIndex === idx ? 'auto' : 'none'
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default MobileAnimation;
