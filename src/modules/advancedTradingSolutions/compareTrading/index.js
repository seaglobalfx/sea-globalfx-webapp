import React from 'react'
import styles from './compareTrading.module.scss';
import classNames from 'classnames';
export default function CompareTrading() {
    return (
        <div className={styles.compareTrading}>
            <div className='container-xs'>
                <div className={styles.title}>
                    <h2>
                        Compare Trading <span> Solutions </span>
                    </h2>
                </div>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.allListalignment}>
                            <div className={styles.list}>
                                <span>
                                    Solution
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    Control
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    Experience
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    Experience
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.griditems, styles.secBox)}>
                        <div className={styles.header}>
                            <h3>
                                PAMM Trading
                            </h3>
                        </div>
                        <div className={styles.allListalignment}>
                            <div className={styles.list}>
                                <span>
                                    Low
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    None
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    Passive
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.griditems, styles.secBox)}>
                        <div className={styles.header}>
                            <h3>
                                MAM Trading
                            </h3>
                        </div>
                        <div className={styles.allListalignment}>
                            <div className={styles.list}>
                                <span>
                                    High
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    Advanced
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    Managers
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.griditems, styles.secBox)}>
                        <div className={styles.header}>
                            <h3>
                                Copy Trading
                            </h3>
                        </div>
                        <div className={styles.allListalignment}>
                            <div className={styles.list}>
                                <span>
                                    Medium
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    Beginner
                                </span>
                            </div>
                            <div className={styles.list}>
                                <span>
                                    Learners
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
