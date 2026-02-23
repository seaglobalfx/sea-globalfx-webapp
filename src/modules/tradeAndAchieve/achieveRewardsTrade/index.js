import React from 'react'
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
                    <div className={styles.items}>
                        <div className={styles.topAlignment}>
                            <img src={VecIcon} alt='VecIcon' />
                        </div>
                        <div className={styles.image}>
                            <img src={GiftPack} alt='GiftPack' />
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <h3>
                                    50 LOTS
                                </h3>
                                <p>
                                    Gift Pack
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.topAlignment}>
                            <img src={VecIcon} alt='VecIcon' />
                        </div>
                        <div className={styles.image}>
                            <img src={Headphones} alt='Headphones' />
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <h3>
                                    100 LOTS
                                </h3>
                                <p>
                                    Headphones
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.topAlignment}>
                            <img src={VecIcon} alt='VecIcon' />
                        </div>
                        <div className={styles.image}>
                            <img src={Watch} alt='Watch' />
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <h3>
                                    250 LOTS
                                </h3>
                                <p>
                                    Smart watch
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.topAlignment}>
                            <img src={VecIcon} alt='VecIcon' />
                        </div>
                        <div className={styles.image}>
                            <img src={Tablet} alt='Tablet' />
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <h3>
                                    500 LOTS
                                </h3>
                                <p>
                                    Smart watch
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.topAlignment}>
                            <img src={VecIcon} alt='VecIcon' />
                        </div>
                        <div className={styles.image}>
                            <img src={Gaming} alt='Gaming' />
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <h3>
                                    1,000 LOTS
                                </h3>
                                <p>
                                    Gaming Console
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.topAlignment}>
                            <img src={VecIcon} alt='VecIcon' />
                        </div>
                        <div className={styles.image}>
                            <img src={Smartphone} alt='Smartphone' />
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <h3>
                                    2,000 LOTS
                                </h3>
                                <p>
                                    Smartphone
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.topAlignment}>
                            <img src={VecIcon} alt='VecIcon' />
                        </div>
                        <div className={styles.image}>
                            <img src={Sports} alt='Sports' />
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <h3>
                                    5,000 LOTS
                                </h3>
                                <p>
                                    Sports Bike
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.topAlignment}>
                            <img src={VecIcon} alt='VecIcon' />
                        </div>
                        <div className={styles.image}>
                            <img src={SUV} alt='SUV' />
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                <h3>
                                    10,000 LOTS
                                </h3>
                                <p>
                                    SUV
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
