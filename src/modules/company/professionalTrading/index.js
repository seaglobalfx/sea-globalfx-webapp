'use client'
import React from 'react'
import styles from './professionalTrading.module.scss'
import { motion } from 'framer-motion'

const ChartImage = '/assets/images/chart-line.png'

export default function ProfessionalTrading() {
    return (
        <motion.div
            className={styles.professionalTrading}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container-xs">
                <div className={styles.grid}>

                    {/* Left Image */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            className={styles.image}
                            animate={{
                                y: [0, -12, 0],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 4,
                                ease: 'easeInOut',
                                repeat: Infinity,
                            }}
                            style={{ willChange: 'transform' }}
                        >
                            <img src={ChartImage} alt="ChartImage" />
                        </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className={styles.text}>
                            <h2>
                                Professional Trading <span> Tools </span>
                            </h2>
                            <p>
                                Sea Global provides a suite of professional-grade trading tools designed to support informed
                                decision-making, precise execution, and effective risk management across global markets.
                            </p>
                        </div>

                        {/* Cards */}
                        <motion.div
                            className={styles.cardGrid}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15,
                                    },
                                },
                            }}
                        >
                            {[
                                {
                                    title: 'Advanced Charting & Indicators',
                                    desc: 'Access interactive charts with multiple timeframes, technical indicators, and drawing tools to analyze market movements in detail.',
                                },
                                {
                                    title: 'Technical Analysis & Market Insights',
                                    desc: 'Benefit from regularly updated market analysis covering key price levels, trends, and macroeconomic factors across asset classes.',
                                },
                                {
                                    title: 'Trading Central & Research Tools',
                                    desc: 'Utilize integrated third-party research tools such as Trading Central to access technical setups, forecasts, and analytical insights.',
                                },
                                {
                                    title: 'Risk Management Features',
                                    desc: 'Apply risk controls including stop-loss, take-profit, and advanced order types to help manage exposure and protect trading capital.',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.cardGridItems}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    whileHover={{
                                        y: -8,
                                        rotateX: 6,
                                        rotateY: -6,
                                        scale: 1.03,
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        perspective: 1000,
                                    }}
                                >
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}
