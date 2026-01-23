import React from 'react'
import styles from './reliableFunding.module.scss';
const MobileImage = '/assets/images/mobile-banner.png'
export default function ReliableFunding() {
    return (
        <div className={styles.reliableFundingAlignment}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.text}>
                            <h2>
                                Reliable Funding &  <span> Withdrawals </span>
                            </h2>
                            <p>
                                Sea Global is committed to providing a smooth, secure, and transparent funding experience, ensuring
                                clients can deposit and withdraw funds efficiently and with confidence.
                            </p>
                        </div>
                        <div className={styles.cardGrid}>
                            <div className={styles.cardGridItems}>
                                <h3>
                                    Wide Range of Global Payment Methods
                                </h3>
                                <p>
                                    Access multiple deposit and withdrawal options, including cards, bank transfers, and other regionally
                                    supported payment solutions.
                                </p>
                            </div>
                            <div className={styles.cardGridItems}>
                                <h3>
                                    Instant Deposits
                                </h3>
                                <p>
                                    Most deposit methods are processed instantly, allowing traders to fund accounts and access markets
                                    without unnecessary delays.
                                </p>
                            </div>
                            <div className={styles.cardGridItems}>
                                <h3>
                                    Fast & Transparent Withdrawals
                                </h3>
                                <p>
                                    Withdrawal requests are processed promptly, with clear timelines and no hidden charges under normal
                                    conditions.
                                </p>
                            </div>
                            <div className={styles.cardGridItems}>
                                <h3>
                                    Secure Payment Processing
                                </h3>
                                <p>
                                    All transactions are handled through encrypted, secure payment systems to protect client iformation
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.image}>
                            <img src={MobileImage} alt='MobileImage' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
