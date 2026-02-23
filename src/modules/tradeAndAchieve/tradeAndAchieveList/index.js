import React from 'react'
import styles from './tradeAndAchieveList.module.scss';
import CheckIcon from '@/icons/checkIcon';
const DownIcon = '/assets/icons/down.svg';
export default function TradeAndAchieveList() {
    return (
        <div className={styles.tradeAndAchieveList}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <CheckIcon />
                        <h3>
                            Volume-Based
                        </h3>
                        <p>
                            Rewards tied to a lot of volume.
                        </p>
                    </div>
                    <div className={styles.griditems}>
                        <CheckIcon />
                        <h3>
                            All Clients Eligible
                        </h3>
                        <p>
                            New and existing traders.
                        </p>
                    </div>
                    <div className={styles.griditems}>
                        <CheckIcon />
                        <h3>
                            No Limits
                        </h3>
                        <p>
                            Progress without restriction.
                        </p>
                    </div>
                    <div className={styles.griditems}>
                        <CheckIcon />
                        <h3>
                            Closed Trades Only
                        </h3>
                        <p>
                            Volume from completed trades.
                        </p>
                    </div>
                    <div className={styles.griditems}>
                        <CheckIcon />
                        <h3>
                            Transparent Conditions
                        </h3>
                        <p>
                            Clear pricing. Fast execution.
                        </p>
                    </div>
                    <div className={styles.griditems}>
                        <CheckIcon />
                        <h3>
                            Performance Focused
                        </h3>
                        <p>
                            Built for active traders.
                        </p>
                    </div>
                </div>
                <div className={styles.teramBox}>
                    <h2>
                        Eligibility & Terms
                    </h2>
                    <img src={DownIcon} alt='DownIcon' />
                </div>
            </div>
        </div>
    )
}
