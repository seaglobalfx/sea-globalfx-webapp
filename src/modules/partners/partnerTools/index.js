import React from 'react'
import styles from './partnerTools.module.scss';
import CheckIcon from '@/icons/checkIcon';
const LayerBlack = '/assets/images/layer-black.png'
const ToolsImage = '/assets/images/tools.png'

export default function PartnerTools() {
    return (
        <div className={styles.partnerTools}>
            <div className={styles.blacklayer}>
                <img src={LayerBlack} alt='LayerBlack' />
            </div>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.image}>
                            <img src={ToolsImage} alt='ToolsImage' />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.text}>
                            <h2>
                                Partner <span> Tools </span> & Dedicated Support
                            </h2>
                            <div className={styles.boxGrid}>
                                <div className={styles.items}>
                                    <CheckIcon />
                                    <p>
                                        Advanced performance analytics
                                    </p>
                                </div>
                                <div className={styles.items}>
                                    <CheckIcon />
                                    <p>
                                        Real-time commission tracking
                                    </p>
                                </div>
                                <div className={styles.items}>
                                    <CheckIcon />
                                    <p>
                                        Custom IB referral links
                                    </p>
                                </div>
                                <div className={styles.items}>
                                    <CheckIcon />
                                    <p>
                                        Dedicated partner manager
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
