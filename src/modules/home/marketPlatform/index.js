'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './marketPlatform.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const ScreenImage = '/assets/images/screen-wise.png';
const Mt4Icon = '/assets/icons/mt4.svg';
const Mt5Icon = '/assets/icons/mt5.png';
const WebIcon = '/assets/icons/web.png';
const MobileIcon = '/assets/icons/mobile.png';

export default function MarketPlatform() {
    const { t, isRTL } = useLanguage();

    return (
        <div className={styles.marketPlatform}>
            <div className={styles.leftAlignment}>
                <motion.div
                    className={styles.content}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                        hidden: {}
                    }}
                >
                    <motion.h2 variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}>
                        {t('marketPlatform.titleStart')}<span> {t('marketPlatform.titleSpan')} </span>{t('marketPlatform.titleEnd')}
                    </motion.h2>

                    <motion.p variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}>
                        {t('marketPlatform.desc')}
                    </motion.p>

                    <motion.div className={styles.allIconText} variants={{
                        visible: { transition: { staggerChildren: 0.15 } },
                        hidden: {}
                    }}>
                        {[
                            { img: Mt4Icon, text: t('marketPlatform.mt4'), alt: "Mt4Icon" },
                            { img: Mt5Icon, text: t('marketPlatform.mt5'), alt: "Mt5Icon" },
                            { img: WebIcon, text: t('marketPlatform.web'), alt: "WebIcon" },
                            { img: MobileIcon, text: t('marketPlatform.mobile'), alt: "MobileIcon" }
                        ].map((item, idx) => (
                            <motion.div key={idx} variants={{
                                hidden: { opacity: 0, scale: 0.8, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
                            }}>
                                <div className={styles.iconCenter}>
                                    <img src={item.img} alt={item.alt} />
                                </div>
                                <span>
                                    {item.text.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i === 0 && <br />}
                                        </React.Fragment>
                                    ))}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
                <div className={styles.screenImage}>
                    <motion.div
                        initial={{ opacity: 0, x: isRTL ? -150 : 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        <img src={ScreenImage} alt="ScreenImage" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
