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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function CryptoTrade() {
  const { t } = useLanguage();

  return (
    <div className={styles.whyTradeForex}>
      <div className="container-xs">
        <div className={styles.grid}>
          {/* LEFT CONTENT */}
          <motion.div className={styles.griditems} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1>
              {t("whyTradeCrypto.title")}<span>{t("whyTradeCrypto.titleSpan")}</span>
            </h1>

            <div className={styles.text}>
              <p>
                {t("whyTradeCrypto.desc")}
              </p>
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div className={styles.griditems} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className={styles.darkbox}>
              {[
                {
                  icon: LiquidityIcon,
                  title: t("whyTradeCrypto.cards.exposure.title"),
                  text: t("whyTradeCrypto.cards.exposure.desc"),
                },
                {
                  icon: AccessIcon,
                  title: t("whyTradeCrypto.cards.access.title"),
                  text: t("whyTradeCrypto.cards.access.desc"),
                },
                {
                  icon: VolatilityIcon,
                  title: t("whyTradeCrypto.cards.volatility.title"),
                  text: t("whyTradeCrypto.cards.volatility.desc"),
                },
                {
                  icon: MinorIcon,
                  title: t("whyTradeCrypto.cards.major.title"),
                  text: t("whyTradeCrypto.cards.major.desc"),
                },
                {
                  icon: RiskIcon,
                  title: t("whyTradeCrypto.cards.risk.title"),
                  text: t("whyTradeCrypto.cards.risk.desc"),
                },
                {
                  icon: ExecutionIcon,
                  title: t("whyTradeCrypto.cards.execution.title"),
                  text: t("whyTradeCrypto.cards.execution.desc"),
                },
              ].map((item, index) => (
                <motion.div key={index} className={styles.items} variants={fadeUp}>
                  <div className={styles.content}>
                     <img src={item.icon} alt={item.title} />
                     <h3>{item.title}</h3>
                     <p>{item.text}</p>
                  </div>

                  {index < 3 && <div className={styles.line}></div>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
