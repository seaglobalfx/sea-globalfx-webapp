import React from 'react'
import styles from './platformsHighlights.module.scss';
const IpadImage = '/assets/images/ipad.png';
export default function PlatformsHighlights() {
    return (
        <div className={styles.platformsHighlights}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.image}>
                            <img src={IpadImage} alt='IpadImage' />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <h2>
                            Platform  <span>
                                Highlights
                            </span>
                        </h2>
                        <div className={styles.boxGrid}>
                            <div className={styles.items}>
                                <h3>
                                    Advanced Charting & Indicators
                                </h3>
                                <p>
                                    Analyze markets using multiple chart types, timeframes, and a wide
                                    range of technical indicators for informed decision-making.
                                </p>
                            </div>
                            <div className={styles.items}>
                                <h3>
                                    Automated Trading (EAs / Scripts)
                                </h3>
                                <p>
                                    Deploy automated strategies and custom scripts to execute trades systematically and reduce emotional bias.
                                </p>
                            </div>
                            <div className={styles.items}>
                                <h3>
                                    Real-Time Execution
                                </h3>
                                <p>
                                    Trade with live pricing and fast order execution designed to perform reliably during active and volatile market conditions
                                </p>
                            </div>
                            <div className={styles.items}>
                                <h3>
                                    Customizable Interface
                                </h3>
                                <p>
                                    Personalize layouts, charts, and tools to match your trading style and workflow
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
