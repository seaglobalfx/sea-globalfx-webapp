'use client'
import React from 'react'
import styles from './ourForexPartner.module.scss';
import LeftRound from '@/icons/leftRound';
import RightRound from '@/icons/rightRound';
import { useLanguage } from '@/context/LanguageContext';

const BlackArrow = '/assets/icons/black-arrow.svg';
const LeftLayer = '/assets/images/left-layer.png';
const RightLayer = '/assets/images/right-layer.svg';

export default function OurForexPartner() {
    const { t, isRTL } = useLanguage();
    const suitableItems = t('ourForexPartner.suitableItems');
    const benefitItems = t('ourForexPartner.benefitItems');

    return (
        <div className={`${styles.ourForexPartner} ${isRTL ? styles.rtl : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
            <div className={styles.leftlayer}>
                <img src={LeftLayer} alt='LeftLayer' />
            </div>
            <div className={styles.rightLayer}>
                <img src={RightLayer} alt='RightLayer' />
            </div>
            <div className='container-xs8'>
                <div className={styles.title}>
                    <h2>
                        {t('ourForexPartner.titleStart')}<span>{t('ourForexPartner.titleSpan')}</span>
                    </h2>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxheader}>
                        <h3>
                            {t('ourForexPartner.boxTitle')}
                        </h3>
                    </div>
                    <div className={styles.boxBody}>
                        <div className={styles.content}>
                            <div>
                                <p>{t('ourForexPartner.suitableFor')}</p>
                                <ul>
                                    {suitableItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.line}></div>
                            <div>
                                <p>{t('ourForexPartner.keyBenefits')}</p>
                                <ul>
                                    {benefitItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.buttongrid}>
                            <div className={styles.left}>
                                <LeftRound />
                            </div>
                            <div className={styles.right}>
                                <RightRound />
                            </div>
                            <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                <button>
                                    <img src={BlackArrow} alt='Arrow' />
                                    {t('ourForexPartner.openAccount')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
