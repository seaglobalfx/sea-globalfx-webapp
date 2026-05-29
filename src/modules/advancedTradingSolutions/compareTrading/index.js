'use client'
import React from 'react'
import styles from './compareTrading.module.scss';
import classNames from 'classnames';
import { useLanguage } from '@/context/LanguageContext';

export default function CompareTrading() {
    const { t } = useLanguage();

    return (
        <div className={styles.compareTrading}>
            <div className='container-xs'>
                <div className={styles.title}>
                    <h2>
                        {t('compareTrading.titleStart')}<span>{t('compareTrading.titleSpan')}</span>
                    </h2>
                </div>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.allListalignment}>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.headers.solution')}
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.headers.control')}
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.headers.experience1')}
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.headers.experience2')}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.griditems, styles.secBox)}>
                        <div className={styles.header}>
                            <h3>
                                {t('compareTrading.headers.pamm')}
                            </h3>
                        </div>
                        <div className={styles.allListalignment}>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.pamm.control')}
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.pamm.experience')}
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.pamm.role')}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.griditems, styles.secBox)}>
                        <div className={styles.header}>
                            <h3>
                                {t('compareTrading.headers.mam')}
                            </h3>
                        </div>
                        <div className={styles.allListalignment}>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.mam.control')}
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.mam.experience')}
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.mam.role')}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.griditems, styles.secBox)}>
                        <div className={styles.header}>
                            <h3>
                                {t('compareTrading.headers.copy')}
                            </h3>
                        </div>
                        <div className={styles.allListalignment}>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.copy.control')}
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.copy.experience')}
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    {t('compareTrading.copy.role')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
