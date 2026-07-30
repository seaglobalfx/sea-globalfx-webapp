"use client";

import React from 'react'
import styles from './startTradingplatforms.module.scss';
import classNames from 'classnames';
import { useLanguage } from '@/context/LanguageContext';

const EarthImage = '/assets/images/home.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';

export default function StartTradingplatforms() {
    const { t } = useLanguage();

    return (
        <div className={styles.startTrading}>
            <div className='container-xs'>
                <div className={styles.box}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3 >
                                {t('startTradingPlatforms.titleStart')}<br /> <span>{t('startTradingPlatforms.titleSpan')}</span>{t('startTradingPlatforms.titleEnd')}
                            </h3>
                            <h6>
                                {t('startTradingPlatforms.desc')}
                            </h6>
                            <div
                                className={styles.twoButtonalignment}
                            >
                                <a href='https://trade.seaglobalfx.co/register/' target='_blank'>
                                    <button className={styles.orange} >
                                        <img src={UserIcon} alt='UserIcon' />
                                        {t('startTradingPlatforms.openAccount')}
                                    </button>
                                </a>
                                <a target='_blank' href='https://trade.seaglobalfx.co/login/'>
                                    <button className={styles.black} >
                                        <img src={DemoIcon} alt='DemoIcon' />
                                        {t('startTradingPlatforms.tryDemo')}
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
        </div >
    )
}
