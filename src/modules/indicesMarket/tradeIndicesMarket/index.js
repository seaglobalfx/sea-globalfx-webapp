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

export default function TradeIndicesMarket() {
  return (
    <div className={styles.whyTradeForex}>
      <div className="container-xs">
        <div className={styles.grid}>
          {/* LEFT CONTENT */}
          <div className={styles.griditems}>
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Why Trade Indices with <span> Sea Global</span>
            </motion.h1>

            <motion.div className={styles.text} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p>
                Global stock indices reflect the performance of leading economies and sectors, offering traders exposure to broad market movements
                through a single instrument. Trading the Indices Trading Market with Sea Global provides access to major global indices, fast
                execution, and the flexibility to trade during key market sessions worldwide. By following overall market performance rather than
                individual stocks, traders can take advantage of global economic trends, volatility, and macro-driven opportunities with greater
                efficiency.
              </p>
            </motion.div>
          </div>

          {/* RIGHT BOX */}
          <div className={styles.griditems}>
            <motion.div className={styles.darkbox} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={LiquidityIcon} alt="LiquidityIcon" />
                  <h3>Broad Market Exposure</h3>
                  <p>
                    Indices allow you to trade the overall performance of a country or region’s stock market without the need to analyze individual
                    shares.
                  </p>
                </div>
                <div className={styles.line}></div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={AccessIcon} alt="AccessIcon" />
                  <h3>Global Market Access</h3>
                  <p>
                    Trade major global indices across US, European, and Asian sessions, aligning your strategy with international market activity.
                  </p>
                </div>
                <div className={styles.line}></div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={VolatilityIcon} alt="VolatilityIcon" />
                  <h3>High Volatility Opportunities</h3>
                  <p>Index markets often experience strong price movements driven by economic data, earnings reports etc.</p>
                </div>
                <div className={styles.line}></div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={MinorIcon} alt="MinorIcon" />
                  <h3>Major Global Indices</h3>
                  <p>Access a wide range of leading indices, including major US, European, and Asian benchmarks representing top global economies.</p>
                </div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={RiskIcon} alt="RiskIcon" />
                  <h3>Risk Management Tools</h3>
                  <p>
                    Utilize advanced order types and platform features to manage risk, set stop losses, and protect your capital in fast-moving
                    markets.
                  </p>
                </div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={ExecutionIcon} alt="ExecutionIcon" />
                  <h3>Fast & Reliable Execution</h3>
                  <p>
                    Sea Global’s optimized trading infrastructure delivers low-latency execution, helping reduce slippage during periods of high
                    market volatility.
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
