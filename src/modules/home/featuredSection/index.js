import React from 'react'
import styles from './featuredSection.module.scss';
import Marquee from 'react-fast-marquee';
const Logoipsum = '/assets/icons/logoipsum.svg';
const Logoipsum1 = '/assets/icons/logoipsum1.svg';
const Yahoo = '/assets/icons/Yahoo.svg';
const Fox = '/assets/icons/Fox.svg';
const CNN = '/assets/icons/CNN.svg';
const Google = '/assets/icons/google.svg';
const Abc = '/assets/icons/abc.svg';
const Scranton = '/assets/icons/scranton.webp';
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
                        <div className={styles.lightbox}>
                            <img src={Yahoo} alt='Yahoo' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Fox} alt='Fox' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={CNN} alt='CNN' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Google} alt='Google' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Scranton} alt='Scranton' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Abc} alt='Abc' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Yahoo} alt='Yahoo' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Fox} alt='Fox' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={CNN} alt='CNN' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Google} alt='Google' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Scranton} alt='Scranton' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Abc} alt='Abc' />
                        </div>
                    </Marquee>
                    <div className={styles.spacer}></div>
                    <Marquee speed={30} direction='right'>
                        <div className={styles.lightbox}>
                            <img src={Yahoo} alt='Yahoo' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Fox} alt='Fox' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={CNN} alt='CNN' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Google} alt='Google' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Scranton} alt='Scranton' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Abc} alt='Abc' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Yahoo} alt='Yahoo' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Fox} alt='Fox' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={CNN} alt='CNN' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Google} alt='Google' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Scranton} alt='Scranton' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Abc} alt='Abc' />
                        </div>
                    </Marquee>
                    <div className={styles.spacer}></div>
                    <Marquee speed={30} >
                        <div className={styles.lightbox}>
                            <img src={Yahoo} alt='Yahoo' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Fox} alt='Fox' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={CNN} alt='CNN' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Google} alt='Google' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Scranton} alt='Scranton' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Abc} alt='Abc' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Yahoo} alt='Yahoo' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Fox} alt='Fox' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={CNN} alt='CNN' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Google} alt='Google' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Scranton} alt='Scranton' />
                        </div>
                        <div className={styles.lightbox}>
                            <img src={Abc} alt='Abc' />
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
