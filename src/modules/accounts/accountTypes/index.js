'use client';
import { motion } from 'framer-motion';
import styles from './accountTypes.module.scss';
import LeftRound from '@/icons/leftRound';
import RightRound from '@/icons/rightRound';
import { useLanguage } from '@/context/LanguageContext';

const LayerBlack = '/assets/images/layer-black.png';
const BlackArrow = '/assets/icons/white-arrow.svg';
const Arrow = '/assets/icons/arrow-primary.svg';

/* Animations */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
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

const cardAnim = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};
export default function AccountTypes() {
    const { t } = useLanguage();

    const accountsData = [
        {
            title: t('accountTypes.cards.pro.title'),
            arrow: BlackArrow,
            description: t('accountTypes.cards.pro.desc'),
            deposit: t('accountTypes.cards.pro.deposit'),
            spread: t('accountTypes.cards.pro.spread'),
            leverage: t('accountTypes.cards.pro.leverage'),
        },
        {
            title: t('accountTypes.cards.standard.title'),
            arrow: Arrow,
            description: t('accountTypes.cards.standard.desc'),
            deposit: t('accountTypes.cards.standard.deposit'),
            spread: t('accountTypes.cards.standard.spread'),
            leverage: t('accountTypes.cards.standard.leverage'),
        },
        {
            title: t('accountTypes.cards.plus.title'),
            arrow: Arrow,
            description: t('accountTypes.cards.plus.desc'),
            deposit: t('accountTypes.cards.plus.deposit'),
            spread: t('accountTypes.cards.plus.spread'),
            leverage: t('accountTypes.cards.plus.leverage'),
        }
    ];

    return (
        <div className={styles.accountTypesAlignment}>
            <div className={styles.blackLayer}>
                <img src={LayerBlack} alt='LayerBlack' />
            </div>
            <div className='container-xs'>
                <div className={styles.title}>
                    <h2>
                        <span>{t('accountTypes.title')}</span>{t('accountTypes.titleSpan')}
                    </h2>
                    <p>
                        {t('accountTypes.desc')}
                    </p>
                </div>
                <motion.div
                    className={styles.grid}
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    {accountsData.map((item, index) => (
                        <motion.div className={styles.griditems}
                            onMouseMove={(e) => {
                                const card = e.currentTarget;
                                const image = card.querySelector(`.${styles.header}`);
                                const rect = card.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                const xPos = x / rect.width;
                                const yPos = y / rect.height;
                                const rotateY = (xPos - 0.5) * 20;
                                const rotateX = (0.5 - yPos) * 20;

                                // Card tilt
                                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                                card.style.boxShadow = 'none';

                                // Image parallax movement
                                if (image) {
                                    const translateX = (xPos - 0.5) * 20; // adjust strength
                                    const translateY = (yPos - 0.5) * 20;
                                    image.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
                                }
                            }}
                            onMouseLeave={(e) => {
                                const card = e.currentTarget;
                                const image = card.querySelector(`.${styles.header}`);

                                // Reset card
                                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                                card.style.boxShadow = 'none';

                                // Reset image
                                if (image) {
                                    image.style.transform = 'translate(0px, 0px) scale(1)';
                                }
                            }}
                            variants={cardAnim} key={index}>
                            <div className={styles.box}>
                                <div className={styles.header}>
                                    <h3>{item.title}</h3>
                                </div>

                                <div className={styles.contnet}>
                                    <div className={styles.details}>
                                        <p>{item.description}</p>
                                    </div>

                                    <div className={styles.allTextStyle}>
                                        <div className={styles.text}><p>{t('accountTypes.labels.minDeposit')}</p><span>{item.deposit}</span></div>
                                        <div className={styles.text}><p>{t('accountTypes.labels.commission')}</p><span>$0</span></div>
                                        <div className={styles.text}><p>{t('accountTypes.labels.spread')}</p><span>{item.spread}</span></div>
                                        <div className={styles.text}><p>{t('accountTypes.labels.leverage')}</p><span>{item.leverage}</span></div>
                                        <div className={styles.text}><p>{t('accountTypes.labels.currencies')}</p><span>USD</span></div>
                                    </div>
                                </div>

                                <div className={styles.buttongrid}>
                                    <motion.div className={styles.left} >
                                        <LeftRound />
                                    </motion.div>
                                    <motion.div className={styles.right} >
                                        <RightRound />
                                    </motion.div>
                                    <a href='https://client.seaglobalfx.com/?tab=register' target='_blank'>
                                        <motion.button  >
                                            <img src={item.arrow} alt='Arrow' />
                                            {t('accountTypes.openAccountBtn')}
                                        </motion.button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </div>
    )
}
