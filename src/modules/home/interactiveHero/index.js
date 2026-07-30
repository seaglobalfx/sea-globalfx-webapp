'use client';
import CountUp from "react-countup";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './interactiveHero.module.scss';
import Herobanner from '../herobanner';
import MobileCardAnimation from '../mobileCardAnimation';
import MobileAnimation from '../herobanner/mobileAnimation';
import { useLanguage } from '@/context/LanguageContext';

const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';
const AnalysisIcon = '/assets/icons/Analysis.svg';
const ExecutionIcon = '/assets/icons/Execution.svg';
const LowSpeed = '/assets/icons/low-speed.svg';
const SupportIcon = '/assets/icons/Support.svg';

export default function InteractiveHero() {
    const [isDesktop, setIsDesktop] = useState(true);
    const { t, locale, isRTL } = useLanguage();

    const translatedMarketCards = [
        {
            title: t('hero.marketsOverview.cards.forex.title'),
            description: t('hero.marketsOverview.cards.forex.desc'),
            image: "/assets/images/forex-card.png"
        },
        {
            title: t('hero.marketsOverview.cards.indices.title'),
            description: t('hero.marketsOverview.cards.indices.desc'),
            image: "/assets/images/indices-card.png"
        },
        {
            title: t('hero.marketsOverview.cards.commodities.title'),
            description: t('hero.marketsOverview.cards.commodities.desc'),
            image: "/assets/images/commodities-card.png"
        },
        {
            title: t('hero.marketsOverview.cards.stocks.title'),
            description: t('hero.marketsOverview.cards.stocks.desc'),
            image: "/assets/images/stocks-card.png"
        },
        {
            title: t('hero.marketsOverview.cards.crypto.title'),
            description: t('hero.marketsOverview.cards.crypto.desc'),
            image: "/assets/images/crypto-card.png"
        },
        {
            title: t('hero.marketsOverview.cards.etfs.title'),
            description: t('hero.marketsOverview.cards.etfs.desc'),
            image: "/assets/images/etfs-card.png"
        }
    ];

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
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
    const phoneX = useTransform(scrollYProgress, (progress) => {
        const startX = isRTL ? -22 : 22;
        if (progress <= 0) return `${startX}vw`;
        if (progress >= 0.35) return "0vw";
        const currentX = startX * (1 - progress / 0.35);
        return `${currentX}vw`;
    });
    const phoneY = useTransform(scrollYProgress, [0, 0.35], ["0dvh", "0dvh"]);
    const phoneScale = useTransform(scrollYProgress, [0, 0.35, 0.7, 0.95], [0.95, 1.25, 1.25, 10]);
    const phoneOpacity = useTransform(scrollYProgress, [0, 0.7, 0.85], [1, 1, 0.95]);

    // 5. Card Entrance animations (Slide in from Left & Right)
    // Left card
    const leftCardX = useTransform(scrollYProgress, (progress) => {
        const startX = isRTL ? 120 : -120;
        if (progress <= 0.38) return `${startX}%`;
        if (progress >= 0.65) return "0%";
        const ratio = (progress - 0.38) / (0.65 - 0.38);
        const currentX = startX * (1 - ratio);
        return `${currentX}%`;
    });
    const leftCardOpacity = useTransform(scrollYProgress, [0.38, 0.52, 0.68, 0.78], [0, 1, 1, 0]);

    // Right card
    const rightCardX = useTransform(scrollYProgress, (progress) => {
        const startX = isRTL ? -120 : 120;
        if (progress <= 0.38) return `${startX}%`;
        if (progress >= 0.65) return "0%";
        const ratio = (progress - 0.38) / (0.65 - 0.38);
        const currentX = startX * (1 - ratio);
        return `${currentX}%`;
    });
    const rightCardOpacity = useTransform(scrollYProgress, [0.38, 0.52, 0.68, 0.78], [0, 1, 1, 0]);

    // 6. Next Section Reveal
    const nextSectionOpacity = useTransform(scrollYProgress, [0.75, 0.92], [0, 1]);
    const nextSectionY = useTransform(scrollYProgress, [0.75, 0.92], [40, 0]);

    // 7. Derived pointer events (to avoid .get() during SSR)
    const leftCardPointerEvents = useTransform(leftCardOpacity, opacity => opacity > 0.1 ? 'auto' : 'none');
    const rightCardPointerEvents = useTransform(rightCardOpacity, opacity => opacity > 0.1 ? 'auto' : 'none');
    const nextSectionPointerEvents = useTransform(nextSectionOpacity, opacity => opacity > 0.5 ? 'auto' : 'none');

    return (
        <>
            {/* MOBILE / TABLET VIEW */}
            <div className={`${styles.relative} ${styles.mobileOnly}`}>
                {!isDesktop && (
                    <>
                        <Herobanner />
                        <div className='bottom-alignment tagline-remove'>
                            <tv-ticker-tape
                                symbols="FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD,OANDA:EURUSD,OANDA:GBPUSD,OANDA:USDJPY,OANDA:GBPJPY,OANDA:AUDUSD,OANDA:USDCAD"
                                theme="dark"
                            />
                        </div>
                        <MobileCardAnimation />
                    </>
                )}
            </div>

            {/* DESKTOP VIEW */}
            <div ref={containerRef} className={`${styles.scrollContainer} ${styles.desktopOnly}`}>
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
                                            {t('hero.tagline')}
                                        </button>
                                    </div>

                                    <h1>
                                        {t('hero.titleStart')}<span>{t('hero.titleSpan')}</span>{t('hero.titleEnd')}
                                    </h1>

                                    <p>
                                        {t('hero.desc')}
                                    </p>

                                    <div className={styles.twoButtonalignment}>
                                        <a href='https://trade.seaglobalfx.co/register/' target='_blank'>
                                            <button className={styles.orange}>
                                                <img src={UserIcon} alt='UserIcon' />
                                                {t('hero.openAccount')}
                                            </button>
                                        </a>
                                        <a target='_blank' href='https://trade.seaglobalfx.co/login/'>
                                            <button className={styles.black}>
                                                <img src={DemoIcon} alt='DemoIcon' />
                                                {t('hero.tryDemo')}
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
                                                {t('hero.rating')}
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
                                                {t('hero.countries')}
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
                                                {t('hero.totalTrades')}
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
                                                {t('hero.execution')}
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
                                        pointerEvents: leftCardPointerEvents,
                                        willChange: "transform, opacity"
                                    }}
                                >
                                    <div className={styles.glassCard}>
                                        <img src={LowSpeed} alt="LowSpeed" />
                                        <h3>{t('hero.features.lowSpreadsTitle')}</h3>
                                        <p>
                                            {t('hero.features.lowSpreadsDesc')}
                                        </p>
                                    </div>
                                    <div className={styles.glassCard}>
                                        <img src={LowSpeed} alt="LowSpeed" />
                                        <h3>{t('hero.features.globalAccessTitle')}</h3>
                                        <p>
                                            {t('hero.features.globalAccessDesc')}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* RIGHT COLUMN */}
                                <motion.div
                                    className={styles.cardColumn}
                                    style={{
                                        x: rightCardX,
                                        opacity: rightCardOpacity,
                                        pointerEvents: rightCardPointerEvents,
                                        willChange: "transform, opacity"
                                    }}
                                >
                                    <div className={styles.glassCard}>
                                        <img src={LowSpeed} alt="LowSpeed" />
                                        <h3>{t('hero.features.fastExecutionTitle')}</h3>
                                        <p>
                                            {t('hero.features.fastExecutionDesc')}
                                        </p>
                                    </div>
                                    <div className={styles.glassCard}>
                                        <img src={LowSpeed} alt="LowSpeed" />
                                        <h3>{t('hero.features.supportTitle')}</h3>
                                        <p>
                                            {t('hero.features.supportDesc')}
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
                            pointerEvents: nextSectionPointerEvents,
                            willChange: "transform, opacity"
                        }}
                    >
                        <div className={styles.marketsOverview}>
                            <div className={styles.leftContentAlignment}>
                                <div className={styles.title}>
                                    <h2>{t('hero.marketsOverview.titleStart')}<span>{t('hero.marketsOverview.titleSpan')}</span></h2>
                                    <p>
                                        {t('hero.marketsOverview.desc')}
                                    </p>
                                </div>
                                <div className={styles.cardsGridWrapper}>
                                    <div className={styles.cardsGrid}>
                                        {[...translatedMarketCards, ...translatedMarketCards].map((card, index) => (
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
        </>
    );
}
