import React from 'react'
import styles from './ourForexPartner.module.scss';
import LeftRound from '@/icons/leftRound';
import RightRound from '@/icons/rightRound';
const BlackArrow = '/assets/icons/black-arrow.svg';
const LeftLayer = '/assets/images/left-layer.png';
const RightLayer = '/assets/images/right-layer.svg';

export default function OurForexPartner() {
    return (
        <div className={styles.ourForexPartner}>
            <div className={styles.leftlayer}>
                <img src={LeftLayer} alt='LeftLayer' />
            </div>
            <div className={styles.rightLayer}>
                <img src={RightLayer} alt='RightLayer' />
            </div>
            <div className='container-xs8'>
                <div className={styles.title}>
                    <h2>
                        Our Forex Partner  <span> Program </span>
                    </h2>
                </div>
                <div className={styles.box}>
                    <div className={styles.boxheader}>
                        <h3>
                            Introducing Broker (IB) Program
                        </h3>
                    </div>
                    <div className={styles.boxBody}>
                        <div className={styles.content}>
                            <div>
                                <p>Suitable for:</p>
                                <ul>
                                    <li>Trading educators</li>
                                    <li>Signal providers</li>
                                    <li>Trading communities</li>
                                    <li>Professional marketers with trader audiences</li>
                                </ul>
                            </div>
                            <div className={styles.line}></div>
                            <div>
                                <p>Key Benefits:</p>
                                <ul>
                                    <li>Earn commissions based on client trading activity</li>
                                    <li>Flexible rebate structures</li>
                                    <li>Dedicated IB account manager</li>
                                    <li>Long-term partnership model</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.buttongrid}>
                            <div className={styles.left} >
                                <LeftRound />
                            </div>
                            <div className={styles.right} >
                                <RightRound />
                            </div>
                            <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                <button  >
                                    <img src={BlackArrow} alt='Arrow' />
                                    Open Account
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
