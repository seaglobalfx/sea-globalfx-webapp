'use client'
import React from 'react'
import styles from './mobileViewSection.module.scss';
import { useLanguage } from '@/context/LanguageContext';
const LowSpeed = '/assets/icons/low-speed.svg';

export default function MobileViewSection() {
    const { t, isRTL } = useLanguage();
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
    return (
        <div className={styles.mobileViewSection}>
            <div className={styles.cardBanner}>
                <div className='container-md'>
                    <div className={styles.cardgrid}>
                        {
                            [...Array(4)].map(() => {
                                return (
                                    <div className={styles.cardItems}>
                                        <img src={LowSpeed} alt="LowSpeed" />
                                        <h3>
                                            {t('hero.features.lowSpreadsTitle')}
                                        </h3>
                                        <p>
                                            {t('hero.features.lowSpreadsDesc')}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            <div className={styles.mobileMarket} dir={isRTL ? 'rtl' : 'ltr'}>
                <div className={styles.title}>
                    <h2>
                        {t('hero.marketsOverview.titleStart')}<span>{t('hero.marketsOverview.titleSpan')}</span>
                    </h2>
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
    )
}
