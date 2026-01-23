import React from 'react'
import styles from './blogBanner.module.scss';
const BlogImage = '/assets/images/blog-card.png';
export default function BlogBanner() {
    return (
        <div className={styles.blogBannerSectionlignment}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.mainCard}>
                            <div className={styles.image}>
                                <img src={BlogImage} alt='BlogImage' />
                            </div>
                            <div className={styles.layer}></div>
                            <div className={styles.contentAlignment}>
                                <div className={styles.contentAlignmentSpacing}>
                                    <h3>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </h3>
                                    <div className={styles.textContent}>
                                        <span>
                                            12 January 2026
                                        </span>
                                        <span>|</span>
                                        <span>
                                            By Jon Doe
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.twoColGrid}>
                            {
                                [...Array(3)].map(() => {
                                    return (
                                        <div className={styles.mainCard}>
                                            <div className={styles.image}>
                                                <img src={BlogImage} alt='BlogImage' />
                                            </div>
                                            <div className={styles.layer}></div>
                                            <div className={styles.contentAlignment}>
                                                <div className={styles.contentAlignmentSpacing}>
                                                    <h3>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    </h3>
                                                    <div className={styles.textContent}>
                                                        <span>
                                                            12 January 2026
                                                        </span>
                                                        <span>|</span>
                                                        <span>
                                                            By Jon Doe
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
