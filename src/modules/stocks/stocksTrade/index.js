"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../forexMarket/whyTradeForex/whyTradeForex.module.scss";

const LiquidityIcon = "/assets/icons/Liquidity.svg";
const AccessIcon = "/assets/icons/Access.svg";
const VolatilityIcon = "/assets/icons/Volatility.svg";
const MinorIcon = "/assets/icons/Minor.svg";
const RiskIcon = "/assets/icons/Risk.svg";
const ExecutionIcon = "/assets/icons/Execution.svg";

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function StocksTrade() {
  return (
    <div className={styles.whyTradeForex}>
      <div className="container-xs">
        <div className={styles.grid}>
          {/* LEFT CONTENT */}
          <div className={styles.griditems}>
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Stocks <span>Trading Market</span>
            </motion.h1>

            <motion.div className={styles.text} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p>
                Stocks CFDs allow traders to speculate on the price movements of individual company shares without owning the underlying assets.
                Trading the Stocks Trading Market with Sea Global provides access to leading global companies, efficient execution, and the
                flexibility to trade both rising and falling markets. By using CFDs, traders can respond to company earnings, economic data, and
                market news while gaining exposure to major global equities across multiple sectors and regions.
              </p>
            </motion.div>
          </div>

          {/* RIGHT BOX */}
          <div className={styles.griditems}>
            <motion.div className={styles.darkbox} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={LiquidityIcon} alt="LiquidityIcon" />
                  <h3>Trade Global Companies</h3>
                  <p>
                    Gain access to a wide range of shares from major global exchanges, allows you to trade well-known companies across industries and
                    regions.
                  </p>
                </div>
                <div className={styles.line}></div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={AccessIcon} alt="AccessIcon" />
                  <h3>Flexible Trading Opportunities</h3>
                  <p>Stocks CFDs enable you to trade both long and short, giving you opportunities in both bullish and bearish market conditions.</p>
                </div>
                <div className={styles.line}></div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={VolatilityIcon} alt="VolatilityIcon" />
                  <h3>Market-Driven Volatility</h3>
                  <p>
                    Share prices are influenced by earnings reports, economic data, and company-specific news, creating frequent trading
                    opportunities.
                  </p>
                </div>
                <div className={styles.line}></div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={MinorIcon} alt="MinorIcon" />
                  <h3>Major Global Stocks</h3>
                  <p>Trade CFDs on leading global companies from US, European, and Asian markets, representing key sectors of the global economy.</p>
                </div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={RiskIcon} alt="RiskIcon" />
                  <h3>Risk Management Tools</h3>
                  <p>
                    Utilize advanced order types and platform features to manage exposure, set stop losses, and control risk when trading individual
                    stocks.
                  </p>
                </div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={ExecutionIcon} alt="ExecutionIcon" />
                  <h3>Fast & Reliable Execution</h3>
                  <p>
                    Sea Global’s optimized trading infrastructure delivers low-latency execution, helping reduce slippage during periods of high
                    market activity.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
