'use client'
import React from 'react'
import styles from './smarterToday.module.scss';
import { useLanguage } from '@/context/LanguageContext';
const EarthImage = '/assets/images/chart-view.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';
export default function SmarterToday() {
    const { t } = useLanguage();
    return (
        <div className={styles.smarterToday}>
            <div className='container-xs'>

                <div className={styles.box}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3 >
                                {t('smarterToday.titleStart')}<span>{t('smarterToday.titleSpan')}</span>{t('smarterToday.titleEnd')}
                            </h3>
                            <h6>
                                {t('smarterToday.desc')}
                            </h6>
                            <div
                                className={styles.twoButtonalignment}
                            >
                                <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                    <button className={styles.orange} >
                                        <img src={UserIcon} alt='UserIcon' />
                                        {t('smarterToday.openAccount')}
                                    </button>
                                </a>
                                <a target='_blank' href='https://client.seaglobalfx.com/'>
                                    <button className={styles.black} >
                                        <img src={DemoIcon} alt='DemoIcon' />
                                        {t('smarterToday.tryDemo')}
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
