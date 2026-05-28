
'use client'
import React from 'react'
import styles from './openAccount.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const BitCoin = '/assets/images/bitcoin.png';
const Signup = '/assets/icons/signup.svg';
const Verification = '/assets/icons/Verification.svg';
const Funds = '/assets/icons/Funds.svg';
const Trading = '/assets/icons/Trading.svg';

export default function OpenAccount() {
    const { t } = useLanguage();

    return (
        <div className={styles.openAccount}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        <div className={styles.stickySection}>
                            <h2>
                                {t('openAccount.titleStart')}<span>{t('openAccount.titleSpan')}</span>{t('openAccount.titleEnd')}
                            </h2>
                            <p>
                                {t('openAccount.desc')}
                            </p>
                            <div className={styles.image}>
                                <img src={BitCoin} alt="BitCoin" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.card}>
                            <img src={Signup} alt="Signup" />
                            <h3>
                                {t('openAccount.signupTitle')}
                            </h3>
                            <p>
                                {t('openAccount.signupDesc')}
                            </p>
                        </div>
                        <div className={styles.card}>
                            <img src={Verification} alt="Verification" />
                            <h3>
                                {t('openAccount.verificationTitle')}
                            </h3>
                            <p>
                                {t('openAccount.verificationDesc')}
                            </p>
                        </div>
                        <div className={styles.card}>
                            <img src={Funds} alt="Funds" />
                            <h3>
                                {t('openAccount.fundsTitle')}
                            </h3>
                            <p>
                                {t('openAccount.fundsDesc')}
                            </p>
                        </div>
                        <div className={styles.card}>
                            <img src={Trading} alt="Trading" />
                            <h3>
                                {t('openAccount.tradingTitle')}
                            </h3>
                            <p>
                                {t('openAccount.tradingDesc')}
                            </p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
