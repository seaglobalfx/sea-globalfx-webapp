'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './marketOverview.module.scss';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const ForexImage = '/assets/images/forex.png';
const IndicesImage = '/assets/images/Indices.png';
const CommoditiesImage = '/assets/images/Commodities.png';
const StocksImage = '/assets/images/Stocks.png';
const CryptoImage = '/assets/images/Crypto.png';
const ETFsImage = '/assets/images/ETFs.png';
const DolorImage = '/assets/icons/dolor.png';

/* Animations */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const staggerGrid = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const scaleFade = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function MarketOverview() {
    const { t } = useLanguage();

    return (
        <div className={styles.marketOverview}>
            <div className='container-xs'>
                <motion.div
                    className={styles.grid}
                    variants={staggerGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Title */}
                    <motion.div className={styles.items} variants={fadeUp}>
                        <h2>
                            <span>{t('hero.marketsOverview.titleStart')}</span> {t('hero.marketsOverview.titleSpan')}
                        </h2>
                    </motion.div>

                    {/* Cards */}
                    {[
                        { img: ForexImage, link: '/forex-market', title: t('hero.marketsOverview.cards.forex.title'), text: t('hero.marketsOverview.cards.forex.desc') },
                        { img: IndicesImage, link: '/indices-market', title: t('hero.marketsOverview.cards.indices.title'), text: t('hero.marketsOverview.cards.indices.desc') },
                        { img: CommoditiesImage, link: '/commodities', title: t('hero.marketsOverview.cards.commodities.title'), text: t('hero.marketsOverview.cards.commodities.desc') },
                        { img: StocksImage, link: '/stocks', title: t('hero.marketsOverview.cards.stocks.title'), text: t('hero.marketsOverview.cards.stocks.desc') },
                        { img: CryptoImage, link: '/crypto', title: t('hero.marketsOverview.cards.crypto.title'), text: t('hero.marketsOverview.cards.crypto.desc') },
                        { img: ETFsImage, link: '/crypto', title: t('hero.marketsOverview.cards.etfs.title'), text: t('hero.marketsOverview.cards.etfs.desc') },
                    ].map((item, index) => (
                        <motion.div className={styles.griditems}
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const image = card.querySelector(`.${styles.image}`);
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const xPos = x / rect.width;
                                const yPos = y / rect.height;
                                const rotateY = (xPos - 0.5) * 20;
                                const rotateX = (0.5 - yPos) * 20;

                                // Card tilt
                                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                                card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';

                                // Image parallax movement
                                if (image) {
                                    const translateX = (xPos - 0.5) * 20; // adjust strength
                                    const translateY = (yPos - 0.5) * 20;
                                    image.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
                                }
                            }}
                            onMouseLeave={(e) => {
                                const card = e.currentTarget;
                                const image = card.querySelector(`.${styles.image}`);

                                // Reset card
                                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                                card.style.boxShadow = 'none';

                                // Reset image
                                if (image) {
                                    image.style.transform = 'translate(0px, 0px) scale(1)';
                                }
                            }}

                            variants={fadeUp} key={index}>
                            <Link href={item.link}>
                                <div className={styles.image}>
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className={styles.details}>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div></Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative floating icon */}
            <motion.div
                className={styles.dolorImage}
                variants={scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <img src={DolorImage} alt='DolorImage' />
            </motion.div>
        </div>
    );
}
