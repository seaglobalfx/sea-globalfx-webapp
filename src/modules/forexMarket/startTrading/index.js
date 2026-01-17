import React from 'react'
import styles from './startTrading.module.scss';
import classNames from 'classnames';
const EarthImage = '/assets/images/earth.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';
export default function StartTrading({ subText, fullwidth, sizexl1 }) {
    return (
        <div className={styles.startTrading}>
            <div className='container-xs'>
                <div className={styles.box}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3 className={classNames(fullwidth ? styles.fullwidthstyle : "", sizexl1 ? styles.fullwidthstyleLg : "")}>
                                Start Trading <span> {subText} </span> Today
                            </h3>
                            <h6>
                                Trade forex market with Sea Global’s professional trading infrastructure, competitive pricing, and reliable
                                execution—designed to support traders at every level.
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
