'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './achieveRewardsTrade.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const LayerBlackImage = '/assets/images/layer-black.png';
const VecIcon = '/assets/images/vec.png';
const GiftPack = '/assets/images/gift-pack.png';
const Headphones = '/assets/images/Headphones.png';
const Watch = '/assets/images/watch.png';
const Tablet = '/assets/images/Tablet.png';
const Gaming = '/assets/images/Gaming.png';
const Smartphone = '/assets/images/Smartphone.png';
const Sports = '/assets/images/Sports.png';
const SUV = '/assets/images/SUV.png';

const rewardImages = [GiftPack, Headphones, Watch, Tablet, Gaming, Smartphone, Sports, SUV];

export default function AchieveRewardsTrade() {
    const { t } = useLanguage();
    const rewards = t('achieveRewardsTrade.rewards');

    return (
        <div className={styles.achieveRewardsTrade}>
            <div className={styles.layerBlack}>
                <img src={LayerBlackImage} alt='LayerBlackImage' />
            </div>
            <div className='container-xs9'>
                <div className={styles.title}>
                    <h2>
                        {t('achieveRewardsTrade.titleStart')}<span>{t('achieveRewardsTrade.titleSpan')}</span>{t('achieveRewardsTrade.titleEnd')}
                    </h2>
                    <p>
                        {t('achieveRewardsTrade.desc')}
                    </p>
                </div>
                <div className={styles.grid}>
                    {rewards.map((item, index) => (
                        <motion.div
                            className={styles.items}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className={styles.topAlignment}>
                                <img src={VecIcon} alt='VecIcon' />
                            </div>
                            <div className={styles.image}>
                                <img src={rewardImages[index]} alt={item.subtitle} />
                            </div>
                            <div className={styles.bottom}>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
