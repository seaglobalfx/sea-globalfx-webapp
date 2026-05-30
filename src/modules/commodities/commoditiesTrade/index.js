"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../forexMarket/whyTradeForex/whyTradeForex.module.scss";
import { useLanguage } from "@/context/LanguageContext";

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

export default function CommoditiesTrade() {
  const { t } = useLanguage();

  return (
    <div className={styles.whyTradeForex}>
      <div className="container-xs">
        <div className={styles.grid}>
          {/* LEFT CONTENT */}
          <div className={styles.griditems}>
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {t('whyTradeCommodities.title')}<span> {t('whyTradeCommodities.titleSpan')} </span>
            </motion.h1>

            <motion.div className={styles.text} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p>
                {t('whyTradeCommodities.desc')}
              </p>
            </motion.div>
          </div>

          {/* RIGHT BOX */}
          <div className={styles.griditems}>
            <motion.div className={styles.darkbox} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={LiquidityIcon} alt="LiquidityIcon" />
                  <h3>{t('whyTradeCommodities.cards.supplyDemand.title')}</h3>
                  <p>
                    {t('whyTradeCommodities.cards.supplyDemand.desc')}
                  </p>
                </div>
                <div className={styles.line}></div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={AccessIcon} alt="AccessIcon" />
                  <h3>{t('whyTradeCommodities.cards.opportunities.title')}</h3>
                  <p>
                    {t('whyTradeCommodities.cards.opportunities.desc')}
                  </p>
                </div>
                <div className={styles.line}></div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={VolatilityIcon} alt="VolatilityIcon" />
                  <h3>{t('whyTradeCommodities.cards.volatility.title')}</h3>
                  <p>
                    {t('whyTradeCommodities.cards.volatility.desc')}
                  </p>
                </div>
                <div className={styles.line}></div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={MinorIcon} alt="MinorIcon" />
                  <h3>{t('whyTradeCommodities.cards.major.title')}</h3>
                  <p>
                    {t('whyTradeCommodities.cards.major.desc')}
                  </p>
                </div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={RiskIcon} alt="RiskIcon" />
                  <h3>{t('whyTradeCommodities.cards.risk.title')}</h3>
                  <p>
                    {t('whyTradeCommodities.cards.risk.desc')}
                  </p>
                </div>
              </motion.div>

              <motion.div className={styles.items} variants={cardAnim}>
                <div className={styles.content}>
                  <img src={ExecutionIcon} alt="ExecutionIcon" />
                  <h3>{t('whyTradeCommodities.cards.execution.title')}</h3>
                  <p>
                    {t('whyTradeCommodities.cards.execution.desc')}
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
