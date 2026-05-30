'use client'
import React from 'react'
import styles from './partnerTools.module.scss';
import CheckIcon from '@/icons/checkIcon';
import { useLanguage } from '@/context/LanguageContext';

const LayerBlack = '/assets/images/layer-black.png';
const ToolsImage = '/assets/images/tools.png';

export default function PartnerTools() {
    const { t } = useLanguage();
    const items = t('partnerTools.items');

    return (
        <div className={styles.partnerTools}>
            <div className={styles.blacklayer}>
                <img src={LayerBlack} alt='LayerBlack' />
            </div>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.image}>
                            <img src={ToolsImage} alt='ToolsImage' />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.text}>
                            <h2>
                                {t('partnerTools.titleStart')}<span>{t('partnerTools.titleSpan')}</span>{t('partnerTools.titleEnd')}
                            </h2>
                            <div className={styles.boxGrid}>
                                {items.map((item, index) => (
                                    <div key={index} className={styles.items}>
                                        <CheckIcon />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
