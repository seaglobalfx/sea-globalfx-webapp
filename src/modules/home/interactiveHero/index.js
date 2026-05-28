'use client';
import CountUp from "react-countup";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './interactiveHero.module.scss';
import Herobanner from '../herobanner';
import MobileCardAnimation from '../mobileCardAnimation';
import MobileAnimation from '../herobanner/mobileAnimation';

const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';
const AnalysisIcon = '/assets/icons/Analysis.svg';
const ExecutionIcon = '/assets/icons/Execution.svg';
const LowSpeed = '/assets/icons/low-speed.svg';
const SupportIcon = '/assets/icons/Support.svg';

const MARKET_CARDS = [
    {
        title: "FOREX",
        description: "Access major, minor, and selected exotic currency pairs with deep liquidity and competitive spreads.",
        image: "/assets/images/forex-card.png"
    },
    {
        title: "Indices",
        description: "Trade leading global indices representing major economies, with broader market exposure.",
        image: "/assets/images/indices-card.png"
    },
    {
        title: "Commodities",
        description: "Speculate on key commodities, enabling portfolio diversification and inflation-hedging strategies.",
        image: "/assets/images/commodities-card.png"
    },
    {
        title: "Stocks",
        description: "Trade shares of well-known global companies, gaining exposure to equity markets across sectors.",
        image: "/assets/images/stocks-card.png"
    },
    {
        title: "Crypto",
        description: "Participate in the digital asset market with cryptocurrencies, available for trading in real-time.",
        image: "/assets/images/crypto-card.png"
    },
    {
        title: "ETFs",
        description: "Gain diversified exposure through Exchange-Traded Funds, combining multiple assets.",
        image: "/assets/images/etfs-card.png"
    }
];

export default function InteractiveHero() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll tracking for sticky desktop animation
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 1. Base Hero text and buttons opacity & translation
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

    // 2. Ticker Tape opacity & translation
    const tickerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const tickerY = useTransform(scrollYProgress, [0, 0.2], [0, 40]);

    // 3. Dark background transition overlay
    const bgOverlayOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.7, 0.85], [0, 1, 1, 0]);

    // 4. Mobile Phone Animation (Positioning, Scale & Opacity)
    // Starts aligned with the right side of the hero, then shifts to exact center
    const phoneX = useTransform(scrollYProgress, [0, 0.35], ["22vw", "0vw"]);
    const phoneY = useTransform(scrollYProgress, [0, 0.35], ["0dvh", "0dvh"]);
    const phoneScale = useTransform(scrollYProgress, [0, 0.35, 0.7, 0.95], [0.95, 1.25, 1.25, 10]);
    const phoneOpacity = useTransform(scrollYProgress, [0, 0.7, 0.85], [1, 1, 0.95]);

    // 5. Card Entrance animations (Slide in from Left & Right)
    // Left card
    const leftCardX = useTransform(scrollYProgress, [0.38, 0.65], ["-120%", "0%"]);
    const leftCardOpacity = useTransform(scrollYProgress, [0.38, 0.52, 0.68, 0.78], [0, 1, 1, 0]);

    // Right card
    const rightCardX = useTransform(scrollYProgress, [0.38, 0.65], ["120%", "0%"]);
    const rightCardOpacity = useTransform(scrollYProgress, [0.38, 0.52, 0.68, 0.78], [0, 1, 1, 0]);

    // 6. Next Section Reveal
    const nextSectionOpacity = useTransform(scrollYProgress, [0.75, 0.92], [0, 1]);
    const nextSectionY = useTransform(scrollYProgress, [0.75, 0.92], [40, 0]);

    // Hydration check to prevent SSR-mismatch issues
    if (!mounted) {
        return (
            <div ref={containerRef} style={{ minHeight: '100vh', background: '#fbfbfb' }} />
        );
    }

    if (!isDesktop) {
        // Fallback for Mobile and Tablet (sequential layout with basic entry anims)
        return (
            <div className={styles.relative} ref={containerRef}>
                <Herobanner />
                <div className='bottom-alignment tagline-remove'>
                    <tv-ticker-tape
                        symbols="FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD"
                        theme="dark"
                    />
                </div>
                <MobileCardAnimation />
            </div>
        );
    }


    // High-end Desktop Sticky Scroll Animation
    return (
        <div ref={containerRef} className={styles.scrollContainer}>
            <div className={styles.stickyWrapper}>
                {/* Background transition layers */}
                <div className={styles.bgBase} />
                <motion.div className={styles.bgOverlay} style={{ opacity: bgOverlayOpacity }} />
                <div className="container-md h-full w-full-size">
                    <div className={styles.contentContainer}>
                        {/* HERO LEFT SIDE CONTENT */}
                        <motion.div
                            className={styles.grid}
                            style={{ opacity: heroOpacity, y: heroY }}
                        >
                            <div className={styles.leftCol}>
                                <div className={styles.tagline}>
                                    <button>
                                        Low spreads • Fast execution • Regulated
                                    </button>
                                </div>

                                <h1>
                                    Institutional-Grade Trading for <span> Global </span> Markets
                                </h1>

                                <p>
                                    Experience tight spreads with high-speed execution. Trade in a secure, fully
                                    regulated trading environment.
                                </p>

                                <div className={styles.twoButtonalignment}>
                                    <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                        <button className={styles.orange}>
                                            <img src={UserIcon} alt='UserIcon' />
                                            Open Account
                                        </button>
                                    </a>
                                    <a target='_blank' href='https://client.seaglobalfx.com/'>
                                        <button className={styles.black}>
                                            <img src={DemoIcon} alt='DemoIcon' />
                                            Try Demo
                                        </button>
                                    </a>
                                </div>
                                <div className={styles.counterSection}>
                                    <div>

                                        <h5>
                                            <CountUp
                                                start={0}
                                                end={4.8}
                                                decimals={1}
                                                duration={2}
                                                enableScrollSpy={true}
                                                scrollSpyOnce={true}
                                            />
                                            /5
                                        </h5>
                                        <h6>
                                            Rating
                                        </h6>
                                    </div>
                                    <div>
                                        <h5>

                                            <CountUp
                                                start={0}
                                                end={120}
                                                duration={2}
                                                enableScrollSpy={true}
                                                scrollSpyOnce={true}
                                            />
                                            +

                                        </h5>
                                        <h6>
                                            Countries
                                        </h6>
                                    </div>
                                    <div>

                                        <h5>
                                            <CountUp
                                                start={0}
                                                end={500}
                                                duration={2}
                                                enableScrollSpy={true}
                                                scrollSpyOnce={true}
                                            />
                                            M +
                                        </h5>
                                        <h6>
                                            Total Trades
                                        </h6>
                                    </div>
                                    <div>
                                        <h5>
                                            {`<`}
                                            <CountUp
                                                start={0}
                                                end={15}
                                                duration={2}
                                                enableScrollSpy={true}
                                                scrollSpyOnce={true}
                                            />
                                            MS
                                        </h5>
                                        <h6>
                                            Execution
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div /> {/* Right column is empty to maintain grid layout */}
                        </motion.div>

                        {/* STICKY CENTERING MOBILE PHONE */}
                        <div className={styles.phoneContainer}>
                            <motion.div
                                style={{
                                    x: phoneX,
                                    y: phoneY,
                                    scale: phoneScale,
                                    opacity: phoneOpacity,
                                    willChange: "transform, opacity",
                                }}
                            >
                                <MobileAnimation scrollYProgress={scrollYProgress} />
                            </motion.div>
                        </div>

                        {/* FOUR CARDS - 2 LEFT, 2 RIGHT */}
                        <div className={styles.cardsContainer}>
                            {/* LEFT COLUMN */}
                            <motion.div
                                className={styles.cardColumn}
                                style={{
                                    x: leftCardX,
                                    opacity: leftCardOpacity,
                                    pointerEvents: leftCardOpacity.get() > 0.1 ? 'auto' : 'none',
                                    willChange: "transform, opacity"
                                }}
                            >
                                <div className={styles.glassCard}>
                                    <img src={LowSpeed} alt="LowSpeed" />
                                    <h3>Low Spreads</h3>
                                    <p>
                                        Trade with tight, competitive spreads across major Forex pairs, indices, commodities, and crypto—designed to reduce trading costs and improve efficiency.
                                    </p>
                                </div>
                                <div className={styles.glassCard}>
                                    <img src={LowSpeed} alt="LowSpeed" />
                                    <h3>Global Access</h3>
                                    <p>
                                        Access a wide range of global financial markets from a single platform, with deep liquidity and reliable pricing.
                                    </p>
                                </div>
                            </motion.div>

                            {/* RIGHT COLUMN */}
                            <motion.div
                                className={styles.cardColumn}
                                style={{
                                    x: rightCardX,
                                    opacity: rightCardOpacity,
                                    pointerEvents: rightCardOpacity.get() > 0.1 ? 'auto' : 'none',
                                    willChange: "transform, opacity"
                                }}
                            >
                                <div className={styles.glassCard}>
                                    <img src={LowSpeed} alt="LowSpeed" />
                                    <h3>Fast Execution</h3>
                                    <p>
                                        Experience low-latency order execution powered by institutional-grade infrastructure, helping minimize slippage in fast-moving markets.
                                    </p>
                                </div>
                                <div className={styles.glassCard}>
                                    <img src={LowSpeed} alt="LowSpeed" />
                                    <h3>24/7 Support</h3>
                                    <p>
                                        Our dedicated support team is available 24 hours a day, 7 days a week, ensuring help is always within reach when you need it.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>

                {/* NEXT SECTION REVEAL */}
                <motion.div
                    className={styles.nextSectionReveal}
                    style={{
                        opacity: nextSectionOpacity,
                        y: nextSectionY,
                        pointerEvents: nextSectionOpacity.get() > 0.5 ? 'auto' : 'none',
                        willChange: "transform, opacity"
                    }}
                >
                    <div className={styles.marketsOverview}>
                        <div className={styles.leftContentAlignment}>
                            <div className={styles.title}>
                                <h2>Markets <span>Overview</span></h2>
                                <p>
                                    Explore global financial markets from a single trading platform. Trade Forex, Crypto, ETFs, Stocks, Commodities, and Indices with fast execution, deep liquidity, and real-time market access
                                </p>
                            </div>
                            <div className={styles.cardsGridWrapper}>
                                <div className={styles.cardsGrid}>
                                    {[...MARKET_CARDS, ...MARKET_CARDS].map((card, index) => (
                                        <div className={styles.items} key={index}>
                                            <img src={card.image} alt={card.title} />
                                            <div className={styles.content}>
                                                <div className={styles.contentSpacing}>
                                                    <h3>
                                                        {card.title}
                                                    </h3>
                                                    <p>
                                                        {card.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
