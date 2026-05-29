'use client';

import React from 'react';
import styles from './readypartners.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const EarthImage = '/assets/images/stemp.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';

export default function Readypartners() {
    const { t } = useLanguage();

    return (
        <div className={styles.startTrading}>
            <div className='container-xs'>
                <div className={styles.box}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3>
                                {t('readyPartners.titleLine1')} <br />
                                <span>{t('readyPartners.titleSpan')}</span> {t('readyPartners.titleEnd')}
                            </h3>
                            <h6>
                                {t('readyPartners.desc')}
                            </h6>
                            <div className={styles.twoButtonalignment}>
                                <a href='https://client.seaglobalfx.com/?tab=register' target='_blank' rel='noreferrer'>
                                    <button type='button' className={styles.orange}>
                                        <img src={UserIcon} alt='' />
                                        {t('hero.openAccount')}
                                    </button>
                                </a>
                                <a target='_blank' rel='noreferrer' href='https://client.seaglobalfx.com/'>
                                    <button type='button' className={styles.black}>
                                        <img src={DemoIcon} alt='' />
                                        {t('hero.tryDemo')}
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.image}>
                                <img src={EarthImage} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
