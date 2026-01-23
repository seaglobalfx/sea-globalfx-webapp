import React from 'react'
import styles from './clientFundProtection.module.scss';
const LayerBlack = '/assets/images/layer-black.png';
const LockImage = '/assets/images/lock.png';
export default function ClientFundProtection() {
    return (
        <div className={styles.clientFundProtection}>
            <div className={styles.blacklayer}>
                <img src={LayerBlack} alt='LayerBlack' />
            </div>
            <div className='container-sm'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.image}>
                            <img src={LockImage} alt='LockImage' />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.text}>
                            <h2>
                                Client Fund  <span> Protection</span>
                            </h2>
                            <p>
                                Protecting client funds is a core priority at Sea Global. Our fund-handling framework is designed to promote
                            </p>
                            <p>
                                security, transparency, and responsible risk management across all regulated entities.
                            </p>
                        </div>
                        <div className={styles.boxGrid}>
                            <div className={styles.items}>
                                <h3>
                                    Segregated Client Accounts
                                </h3>
                                <p>
                                    Client funds are held separately from company operating funds in accordance with applicable regulatory
                                    requirements.
                                </p>
                            </div>
                            <div className={styles.items}>
                                <h3>
                                    Funds Held with Tier-1 Banks
                                </h3>
                                <p>
                                    Client funds are maintained with reputable, well-capitalized financial institutions to support fund security and
                                    stability.
                                </p>
                            </div>
                            <div className={styles.items}>
                                <h3>
                                    Strict Internal Risk Controls
                                </h3>
                                <p>
                                    Robust internal policies and monitoring systems are in place to manage financial, operational, and counterparty
                                    risk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
