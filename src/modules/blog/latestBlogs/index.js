'use client'
import React, { useState } from 'react'
import styles from './latestBlogs.module.scss';
import Pagination from '@/components/pagination';
import classNames from 'classnames';
const DownIcon = '/assets/icons/down-xs.svg';
const BlogImage = '/assets/images/blog-img.png';
export default function LatestBlogs() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className={styles.latestBlogsPageAlignment}>
            <div className='container-xs'>
                <div className={styles.headerAlignment}>
                    <div className={styles.text}>
                        <h2>
                            Latest <span>Blogs</span>
                        </h2>
                    </div>
                    <div className={styles.button}>
                        <button onClick={() => setDropdown(!dropdown)}>
                            All Categories
                            <img src={DownIcon} alt='DownIcon' />
                        </button>
                        <div className={classNames(styles.dropdown, dropdown ? styles.show : styles.hide)}>
                            <div className={styles.sapcing}>
                                <span>Categories One</span>
                                <span>Categories Two</span>
                                <span>Categories Three</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.blogAllCardGrid}>
                    {
                        [...Array(12)].map(() => {
                            return (
                                <div className={styles.card}>
                                    <div className={styles.cardImage}>
                                        <img src={BlogImage} alt='BlogImage' />
                                    </div>
                                    <div className={styles.details}>
                                        <h3>
                                            The Beginner’s Roadmap to Understanding Financial Markets
                                        </h3>
                                        <div className={styles.textAlignment}>
                                            <span>Johnathan Doe</span>
                                            <span>. 19 November 2023</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Pagination />
            </div>
        </div>
    )
}
