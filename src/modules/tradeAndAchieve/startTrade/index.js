'use client'
import React from 'react'
import styles from './startTrade.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const EarthImage = '/assets/images/start-trade.png';
const UserIcon = '/assets/icons/user.svg';

export default function StartTrade() {
    const { t } = useLanguage();
    return (
        <div className={styles.startTrading}>
            <div className='container-xs'>
                <div className={styles.box}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3>
                                {t('startTrade.titleLine1')} <br />
                                {t('startTrade.titleLine2Start')}<span>{t('startTrade.titleSpan')}</span>
                            </h3>
                            <h6>
                                {t('startTrade.desc')}
                            </h6>
                            <div className={styles.twoButtonalignment}>
                                <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                    <button className={styles.orange}>
                                        <img src={UserIcon} alt='UserIcon' />
                                        {t('startTrade.openAccount')}
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.image}>
                                <img src={EarthImage} alt='EarthImage' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
