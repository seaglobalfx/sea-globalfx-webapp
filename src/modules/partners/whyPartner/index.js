'use client'
import React from 'react'
import styles from './whyPartner.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const LayerBlack = '/assets/images/layer-black.png';
const icons = [
    '/assets/icons/Competitive.svg',
    '/assets/icons/Transparent.svg',
    '/assets/icons/Global.svg',
    '/assets/icons/Support.svg',
];

export default function WhyPartner() {
    const { t } = useLanguage();
    const items = t('whyPartner.items');

    return (
        <div className={styles.whyPartner}>
            <div className={styles.blacklayer}>
                <img src={LayerBlack} alt='LayerBlack' />
            </div>
            <div className='container-xs'>
                <div className={styles.title}>
                    <h2>
                        {t('whyPartner.titleStart')}<span>{t('whyPartner.titleSpan')}</span>
                    </h2>
                </div>
                <div className={styles.grid}>
                    {items.map((label, index) => (
                        <div key={index} className={styles.griditems}>
                            <div className={styles.iconCenter}>
                                <img src={icons[index]} alt={label} />
                            </div>
                            <p>{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
