import React from 'react'
import styles from './smarterToday.module.scss';
import classNames from 'classnames';
const EarthImage = '/assets/images/chart-view.png';
const UserIcon = '/assets/icons/user.svg';
const DemoIcon = '/assets/icons/demo.svg';
export default function SmarterToday() {
    return (
        <div className={styles.smarterToday}>
            <div className='container-xs'>

                <div className={styles.box}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3 >
                                Start Trading <span>  Smarter </span> Today
                            </h3>
                            <h6>
                                Whether you’re investing passively or trading actively, Sea Global FX has a solution designed for your goals.
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
