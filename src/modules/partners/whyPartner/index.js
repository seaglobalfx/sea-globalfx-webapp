import React from 'react'
import styles from './whyPartner.module.scss';
const LayerBlack = '/assets/images/layer-black.png'
const CompetitiveIcon = '/assets/icons/Competitive.svg';
const TransparentIcon = '/assets/icons/Transparent.svg';
const GlobalIcon = '/assets/icons/Global.svg';
const SupportIcon = '/assets/icons/Support.svg';

export default function WhyPartner() {
    return (
        <div className={styles.whyPartner}>
            <div className={styles.blacklayer}>
                <img src={LayerBlack} alt='LayerBlack' />
            </div>
            <div className='container-xs'>
                <div className={styles.title}>
                    <h2>
                        Why Partner With <span> Sea Global FX? </span>
                    </h2>
                </div>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.iconCenter}>
                            <img src={CompetitiveIcon} alt='CompetitiveIcon' />
                        </div>
                        <p>
                            Competitive IB Commissions
                        </p>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.iconCenter}>
                            <img src={TransparentIcon} alt='TransparentIcon' />
                        </div>
                        <p>
                            Transparent Reporting
                        </p>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.iconCenter}>
                            <img src={GlobalIcon} alt='GlobalIcon' />
                        </div>
                        <p>
                            Global Client Reach
                        </p>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.iconCenter}>
                            <img src={SupportIcon} alt='SupportIcon' />
                        </div>
                        <p>
                            Dedicated Partner Support
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
