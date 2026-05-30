"use client";

import React from 'react'
import styles from './platformsHighlights.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const IpadImage = '/assets/images/ipad.png';

export default function PlatformsHighlights() {
    const { t } = useLanguage();

    const highlightsData = [
        {
            title: t('platformsHighlights.cards.charting.title'),
            desc: t('platformsHighlights.cards.charting.desc'),
        },
        {
            title: t('platformsHighlights.cards.automated.title'),
            desc: t('platformsHighlights.cards.automated.desc'),
        },
        {
            title: t('platformsHighlights.cards.execution.title'),
            desc: t('platformsHighlights.cards.execution.desc'),
        },
        {
            title: t('platformsHighlights.cards.customizable.title'),
            desc: t('platformsHighlights.cards.customizable.desc'),
        },
    ];

    return (
        <div className={styles.platformsHighlights}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.image}>
                            <img src={IpadImage} alt='IpadImage' />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <h2>
                            {t('platformsHighlights.title')}<span>{t('platformsHighlights.titleSpan')}</span>
                        </h2>
                        <div className={styles.boxGrid}>
                            {highlightsData.map((item, index) => (
                                <div key={index} className={styles.items}>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
