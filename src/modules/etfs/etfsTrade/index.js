import styles from '../../forexMarket/whyTradeForex/whyTradeForex.module.scss';
const LiquidityIcon = '/assets/icons/Liquidity.svg';
const AccessIcon = '/assets/icons/Access.svg';
const VolatilityIcon = '/assets/icons/Volatility.svg';
const MinorIcon = '/assets/icons/Minor.svg';
const RiskIcon = '/assets/icons/Risk.svg';
const ExecutionIcon = '/assets/icons/Execution.svg';

export default function EtfsTrade() {
    return (
        <div className={styles.whyTradeForex}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <h2>
                            Why Trade ETF  with <span>
                                Sea Global
                            </span>
                        </h2>
                        <div className={styles.text}>
                            <p>
                                Exchange-Traded Funds (ETFs) provide diversified exposure to a wide range of markets, sectors, and asset
                                classes through a single instrument. Trading ETFs with Sea Global gives you access to global markets, efficient
                                execution, and the flexibility to trade both rising and falling markets.
                            </p>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.darkbox}>
                            <div className={styles.items}>
                                <div className={styles.content}>
                                    <img src={LiquidityIcon} alt='LiquidityIcon' />
                                    <h3>
                                        Built-In Diversification
                                    </h3>
                                    <p>
                                        ETFs allow you to gain exposure to baskets of assets, helping reduce concentration risk compared to trading individual instruments.
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.content}>
                                    <img src={AccessIcon} alt='AccessIcon' />
                                    <h3>
                                        Broad Market Access
                                    </h3>
                                    <p>
                                        Trade ETFs covering major global markets, regions, and industries, enabling participation in international
                                        economic trends from one platform.
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.content}>
                                    <img src={VolatilityIcon} alt='VolatilityIcon' />
                                    <h3>
                                        Flexible Trading Strategies
                                    </h3>
                                    <p>
                                        ETFs support a variety of trading approaches, from short-term trading to longer-term investment strategies, with
                                        the ability to enter and exit positions during market hours.
                                    </p>
                                </div>
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.content}>
                                    <img src={MinorIcon} alt='MinorIcon' />
                                    <h3>
                                        Wide Range of ETFs
                                    </h3>
                                    <p>
                                        Access a diverse selection of ETFs representing equities, indices, commodities, sectors, and thematic
                                        investments across global markets.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.content}>
                                    <img src={RiskIcon} alt='RiskIcon' />
                                    <h3>
                                        Risk Management Tools
                                    </h3>
                                    <p>
                                        Utilize advanced order types and platform tools to manage risk, set stop losses, and control exposure effectively
                                        in changing market conditions.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.content}>
                                    <img src={ExecutionIcon} alt='ExecutionIcon' />
                                    <h3>
                                        Fast & Reliable Execution
                                    </h3>
                                    <p>
                                        Sea Global’s optimized trading infrastructure delivers low-latency execution, helping ensure efficient order
                                        placement during active market periods.
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
