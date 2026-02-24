'use client'
import React, { useState } from 'react'
import styles from './tradeAndAchieveList.module.scss';
import CheckIcon from '@/icons/checkIcon';
import { motion, AnimatePresence } from 'framer-motion';
const DownIcon = '/assets/icons/down.svg';
export default function TradeAndAchieveList() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.tradeAndAchieveList}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    {[
                        { title: "Volume-Based", desc: "Rewards tied to a lot of volume." },
                        { title: "All Clients Eligible", desc: "New and existing traders." },
                        { title: "No Limits", desc: "Progress without restriction." },
                        { title: "Closed Trades Only", desc: "Volume from completed trades." },
                        { title: "Transparent Conditions", desc: "Clear pricing. Fast execution." },
                        { title: "Performance Focused", desc: "Built for active traders." },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.griditems}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <CheckIcon />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className={styles.teramBox}>
                    <div className={styles.boxheaderAlignment} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                        <h2>
                            Eligibility & Terms
                        </h2>
                        <motion.img
                            src={DownIcon}
                            alt='DownIcon'
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className={styles.contentStyle}>
                                    <p>
                                        Sea Global FX is offering the “Trade to Win 2026” campaign until 31 March 2026. The campaign may be extended at the sole discretion of Sea Global FX. Participation is open to both new and existing registered clients who hold a live trading account with Sea Global FX.
                                    </p>
                                    <p>
                                        Clients may join the campaign by opening and funding a live trading account. By registering, opening an account, or participating in this campaign, clients acknowledge that they have read, understood, and agreed to these Terms & Conditions as well as the Sea Global FX Client Agreement available on the official website.
                                    </p>
                                    <p>
                                        Participation in the campaign requires trading through a live account only. Only eligible instruments qualify under this offer, and only closed trades will count toward lot volume accumulation. Lot volume must be completed within the campaign period. The calculation of trading volume is based on closed trades and is measured monthly, from the first calendar day to the last calendar day of each month.
                                    </p>
                                    <p>
                                        Clients may claim rewards once they achieve the required milestone lot volume. Each milestone corresponds to a specific reward. Prizes may include items such as a gift pack, headphones, smart watch, tablet, gaming console, smartphone, sports bike, or SUV. If a particular reward becomes unavailable, Sea Global FX reserves the right to substitute it with an alternative item of equal or higher value. In cases where physical shipment is not possible, Sea Global FX may provide a cash equivalent in USD matching the reward’s value.
                                    </p>
                                    <p>
                                        Each traded lot is calculated as 1.0 standard lot for milestone qualification. Clients must complete the full required lot volume to qualify for a reward; partial completion does not qualify. Each milestone can be achieved once per client, and progression to higher milestones requires additional qualifying lot volume. Clients must verify their identity and address before prize delivery.
                                    </p>
                                    <p>
                                        Any misuse, manipulation, or abuse of the campaign is strictly prohibited. This includes, but is not limited to, hedging abuse, arbitrage exploitation, artificial volume generation, coordinated trading across accounts, or any strategy designed solely to exploit the campaign structure. If Sea Global FX determines that a client has abused or attempted to abuse the offer, it reserves the right to void rewards, deduct reward values from trading accounts, suspend or terminate accounts, cancel profits derived from abusive conduct, or take any other appropriate action. All decisions made by Sea Global FX in such matters are final.
                                    </p>
                                    <p>
                                        Participation in this campaign does not eliminate the risks associated with trading. Forex and CFD trading involves significant risk and may result in loss of capital. Sea Global FX shall not be held liable for trading losses, technical issues beyond its control, or any indirect or consequential damages arising from participation in the campaign.
                                    </p>
                                    <p>
                                        Sea Global FX reserves the right to amend, suspend, or terminate the campaign at any time without prior notice. Any updates or changes will be published on the official website.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

