import React from 'react'
import styles from './startTradingplatforms.module.scss';
import classNames from 'classnames';
const EarthImage = '/assets/images/home.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';
export default function StartTradingplatforms() {
    return (
        <div className={styles.startTrading}>
            <div className='container-xs'>
                <div className={styles.box}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3 >
                                Start Trading on a <br /> <span>Platform </span> That Fits You
                            </h3>
                            <h6>
                                Choose the trading platform that matches your experience level and strategy, and access global markets with Sea Global’s reliable trading infrastructure.
                            </h6>
                            <div
                                className={styles.twoButtonalignment}
                            >
                                <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                    <button className={styles.orange} >
                                        <img src={UserIcon} alt='UserIcon' />
                                        Open Account
                                    </button>
                                </a>
                                <a target='_blank' href='https://client.seaglobalfx.com/'>
                                    <button className={styles.black} >
                                        <img src={DemoIcon} alt='DemoIcon' />
                                        Try Demo
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
