'use client';
import React from 'react'
import styles from './startTrading.module.scss';
import classNames from 'classnames';
import { useLanguage } from '@/context/LanguageContext';

const EarthImage = '/assets/images/earth.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';

export default function StartTrading({ subText, fullwidth, sizexl1 }) {
    const { t } = useLanguage();

    const getMarketName = (text) => {
        const lower = text ? text.toLowerCase() : '';
        if (lower.includes('forex')) return t('nav.forex');
        if (lower.includes('commodity') || lower.includes('commodities')) return t('nav.commodities');
        if (lower.includes('stock')) return t('nav.stocks');
        if (lower.includes('indices') || lower.includes('index')) return t('nav.indices');
        if (lower.includes('crypto')) return t('nav.crypto');
        if (lower.includes('etf')) return t('nav.etfs');
        return text;
    };

    const marketName = getMarketName(subText);

    return (
        <div className={styles.startTrading}>
            <div className='container-xs'>
                <div className={styles.box}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3 className={classNames(fullwidth ? styles.fullwidthstyle : "", sizexl1 ? styles.fullwidthstyleLg : "")}>
                                {t('tradeAccount.startTradingTitleStart')}<span> {marketName} </span>{t('tradeAccount.startTradingTitleEnd')}
                            </h3>
                            <h6>
                                {t('tradeAccount.startTradingDesc').replace('{market}', marketName)}
                            </h6>
                            <div
                                className={styles.twoButtonalignment}
                            >
                                <a href='https://trade.seaglobalfx.co/register/' target='_blank'>
                                    <button className={styles.orange} >
                                        <img src={UserIcon} alt='UserIcon' />
                                        {t('hero.openAccount')}
                                    </button>
                                </a>
                                <a target='_blank' href='https://trade.seaglobalfx.co/login/'>
                                    <button className={styles.black} >
                                        <img src={DemoIcon} alt='DemoIcon' />
                                        {t('hero.tryDemo')}
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
