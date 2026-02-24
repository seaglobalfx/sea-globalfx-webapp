'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './achieveRewardsTrade.module.scss';

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

const rewardsArr = [
    { image: GiftPack, title: "50 LOTS", subtitle: "Gift Pack" },
    { image: Headphones, title: "100 LOTS", subtitle: "Headphones" },
    { image: Watch, title: "250 LOTS", subtitle: "Smart watch" },
    { image: Tablet, title: "500 LOTS", subtitle: "Tablet" },
    { image: Gaming, title: "1,000 LOTS", subtitle: "Gaming Console" },
    { image: Smartphone, title: "2,000 LOTS", subtitle: "Smartphone" },
    { image: Sports, title: "5,000 LOTS", subtitle: "Sports Bike" },
    { image: SUV, title: "10,000 LOTS", subtitle: "SUV" },
];

export default function AchieveRewardsTrade() {
    return (
        <div className={styles.achieveRewardsTrade}>
            <div className={styles.layerBlack}>
                <img src={LayerBlackImage} alt='LayerBlackImage' />
            </div>
            <div className='container-xs9'>
                <div className={styles.title}>
                    <h2>
                        Achieve Rewards with  <span> Every </span> Trade
                    </h2>
                    <p>
                        Sea Global FX rewards trading performance. Trade eligible instruments. Accumulate closed lot volume. Unlock
                        milestone achievements.
                    </p>
                </div>
                <div className={styles.grid}>
                    {rewardsArr.map((item, index) => (
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
                                <img src={item.image} alt={item.subtitle} />
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

