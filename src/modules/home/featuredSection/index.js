import React from 'react'
import styles from './featuredSection.module.scss';
import Marquee from 'react-fast-marquee';
const Logoipsum = '/assets/icons/logoipsum.svg';
const Logoipsum1 = '/assets/icons/logoipsum1.svg';
export default function FeaturedSection() {
    return (
        <div className={styles.featuredSection}>
            <div className={styles.flexbox}>
                <div className={styles.items}>
                    <div className={styles.text}>
                        <h2>
                            Featured in <br /> <span> Global </span> Media
                        </h2>
                        <p>
                            Our brand and market insights have been featured across leading financial and industry media outlets,
                            reinforcing our reputation as a trusted market participant.
                        </p>
                    </div>
                </div>
                <div className={styles.items}>
                    <Marquee speed={30}>
                        {
                            [...Array(10)].map(() => {
                                return (
                                    <div className={styles.lightbox}>
                                        <img src={Logoipsum} alt='Logoipsum' />
                                    </div>
                                )
                            })
                        }
                    </Marquee>
                    <div className={styles.spacer}></div>
                    <Marquee speed={30} direction='right'>
                        {
                            [...Array(10)].map(() => {
                                return (
                                    <div className={styles.lightbox}>
                                        <img src={Logoipsum1} alt='Logoipsum1' />
                                    </div>
                                )
                            })
                        }
                    </Marquee>
                    <div className={styles.spacer}></div>
                    <Marquee speed={30} >
                        {
                            [...Array(10)].map(() => {
                                return (
                                    <div className={styles.lightbox}>
                                        <img src={Logoipsum} alt='Logoipsum' />
                                    </div>
                                )
                            })
                        }
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
