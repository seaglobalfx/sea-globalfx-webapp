'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './clientSection.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const CommonProfile = '/assets/images/common-profile.png';

const QuoteIcon = () => (
    <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 28V14.3252C0 10.9596 0.868126 8.06532 2.60438 5.64242C4.37894 3.18182 6.91638 1.47542 10.2172 0.523232L12.5067 3.91717C9.96927 4.82222 7.96544 6.18451 6.49626 8.00404C5.02709 9.78586 4.29251 11.6882 4.29251 13.7152H12.5916V28H0ZM21.4084 28V14.3252C21.4084 10.9596 22.2765 8.06532 24.0128 5.64242C25.7873 3.18182 28.3248 1.47542 31.6256 0.523232L33.9152 3.91717C31.3777 4.82222 29.3739 6.18451 27.9047 8.00404C26.4355 9.78586 25.7009 11.6882 25.7009 13.7152H34V28H21.4084Z" fill="#D4A320" />
    </svg>
)

const ReviewCard = ({ review }) => (
    <div className={styles.card}>
        <div className={styles.quoteIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32" fill="none">
                <path d="M1.44444 18.5263L13 0H19.3333L11.8889 16.0561C14.9259 17.6281 16.4444 20.1357 16.4444 23.5789C16.4444 25.8246 15.6296 27.8082 14 29.5298C12.3704 31.1766 10.4444 32 8.22222 32C5.85185 32 3.88889 31.1766 2.33333 29.5298C0.777778 27.883 0 25.8994 0 23.5789C0 21.7076 0.481481 20.0234 1.44444 18.5263ZM22.1111 18.5263L33.6667 0H40L32.5556 16.0561C35.5926 17.6281 37.1111 20.1357 37.1111 23.5789C37.1111 25.8246 36.2963 27.8082 34.6667 29.5298C33.037 31.1766 31.1111 32 28.8889 32C26.5185 32 24.5556 31.1766 23 29.5298C21.4444 27.883 20.6667 25.8994 20.6667 23.5789C20.6667 21.7076 21.1481 20.0234 22.1111 18.5263Z" fill="url(#paint0_linear_5842_36162)" />
                <defs>
                    <linearGradient id="paint0_linear_5842_36162" x1="0" y1="16" x2="40" y2="16" gradientUnits="userSpaceOnUse">
                        <stop offset="0.1" stop-color="#E8BC33" />
                        <stop offset="1" stop-color="#B07A09" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <p>{review.text}</p>
        <div className={styles.divider}></div>
        <div className={styles.profile}>
            <img src={CommonProfile} alt={review.name} />
            <div className={styles.info}>
                <h4>{review.name}</h4>
                <span>{review.location}</span>
            </div>
        </div>
    </div>
);

const COLUMN_COUNT = 4;

function getColumnReviews(reviews, columnIndex) {
    return reviews.filter((_, index) => index % COLUMN_COUNT === columnIndex);
}

function buildMarqueeData(reviews) {
    return [...reviews, ...reviews];
}

export default function ClientSection() {
    const { t } = useLanguage();

    const reviews = t('clientSection.reviews');
    const columnDataSets = Array.from({ length: COLUMN_COUNT }, (_, columnIndex) =>
        buildMarqueeData(getColumnReviews(reviews, columnIndex))
    );

    return (
        <div className={styles.clientSection}>
            <div className='container-xs'>
                <div className={styles.title}>
                    <h2>
                        {t('clientSection.titleStart')}<span>{t('clientSection.titleSpan')}</span>
                    </h2>
                    <p>
                        {t('clientSection.desc')}
                    </p>
                </div>

                <div className={styles.marqueeContainer}>
                    {/* Column 1: Scrolls Up (Bottom to Top) */}
                    <motion.div
                        className={styles.column}
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        <div className={styles.innerColumn}>
                            {columnDataSets[0].map((review, idx) => (
                                <ReviewCard key={`col1-a-${idx}`} review={review} />
                            ))}
                        </div>
                        <div className={styles.innerColumn}>
                            {columnDataSets[0].map((review, idx) => (
                                <ReviewCard key={`col1-b-${idx}`} review={review} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 2: Scrolls Down (Top to Bottom) */}
                    <motion.div
                        className={styles.column}
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        <div className={styles.innerColumn}>
                            {columnDataSets[1].map((review, idx) => (
                                <ReviewCard key={`col2-a-${idx}`} review={review} />
                            ))}
                        </div>
                        <div className={styles.innerColumn}>
                            {columnDataSets[1].map((review, idx) => (
                                <ReviewCard key={`col2-b-${idx}`} review={review} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 3: Scrolls Up (Bottom to Top) */}
                    <motion.div
                        className={styles.column}
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        <div className={styles.innerColumn}>
                            {columnDataSets[2].map((review, idx) => (
                                <ReviewCard key={`col3-a-${idx}`} review={review} />
                            ))}
                        </div>
                        <div className={styles.innerColumn}>
                            {columnDataSets[2].map((review, idx) => (
                                <ReviewCard key={`col3-b-${idx}`} review={review} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 4: Scrolls Down (Top to Bottom) */}
                    <motion.div
                        className={styles.column}
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        <div className={styles.innerColumn}>
                            {columnDataSets[3].map((review, idx) => (
                                <ReviewCard key={`col4-a-${idx}`} review={review} />
                            ))}
                        </div>
                        <div className={styles.innerColumn}>
                            {columnDataSets[3].map((review, idx) => (
                                <ReviewCard key={`col4-b-${idx}`} review={review} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
