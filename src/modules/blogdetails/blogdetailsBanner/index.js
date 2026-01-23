import React from 'react'
import styles from './blogdetailsBanner.module.scss';
const BlogBannerImage = '/assets/images/blog-frame.png';
export default function BlogdetailsBanner() {
    return (
        <div className={styles.blogdetailsBanner}>
            <div className='container-xs'>
                <div className={styles.image}>
                    <img src={BlogBannerImage} alt='BlogBannerImage' />
                </div>
                <div className={styles.mainDetails}>
                    <h1>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h1>
                    <div className={styles.subtextAlignment}>
                        <span>12 January 2026</span>
                        <span>|</span>
                        <span>By Jonathan Doe</span>
                    </div>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}
