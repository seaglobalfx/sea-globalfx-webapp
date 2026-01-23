import React from 'react'
import styles from './professionalTrading.module.scss';
const ChartImage = '/assets/images/chart-line.png'
export default function ProfessionalTrading() {
    return (
        <div className={styles.professionalTrading}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.image}>
                            <img src={ChartImage} alt='ChartImage' />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.text}>
                            <h2>
                                Professional Trading  <span> Tools </span>
                            </h2>
                            <p>
                                Sea Global provides a suite of professional-grade trading tools designed to support informed
                                decision-making, precise execution, and effective risk management across global markets.
                            </p>
                        </div>
                        <div className={styles.cardGrid}>
                            <div className={styles.cardGridItems}>
                                <h3>
                                    Advanced Charting & Indicators
                                </h3>
                                <p>
                                    Access interactive charts with multiple timeframes, technical indicators, and drawing tools to analyze
                                    market movements in detail.
                                </p>
                            </div>
                            <div className={styles.cardGridItems}>
                                <h3>
                                    Technical Analysis & Market Insights
                                </h3>
                                <p>
                                    Benefit from regularly updated market analysis covering key price levels, trends, and macroeconomic
                                    factors across asset classes.
                                </p>
                            </div>
                            <div className={styles.cardGridItems}>
                                <h3>
                                    Trading Central & Research Tools
                                </h3>
                                <p>
                                    Utilize integrated third-party research tools such as Trading Central to access technical setups,
                                    forecasts, and analytical insights.
                                </p>
                            </div>
                            <div className={styles.cardGridItems}>
                                <h3>
                                    Risk Management Features
                                </h3>
                                <p>
                                    Apply risk controls including stop-loss, take-profit, and advanced order types to help manage exposure
                                    and protect trading capital.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
