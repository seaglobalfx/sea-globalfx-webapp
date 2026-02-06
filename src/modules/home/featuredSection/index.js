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
const SilogoNew = '/assets/images/silogo-new.png';
const ApImage = '/assets/images/ap-icon.png';
const MaeketWatch = '/assets/images/market-watch.svg';
const MarketsInsider = '/assets/images/markets-insider.svg';
const TechBullionLogo = '/assets/images/TechBullionLogo.webp';
const ManilaLogo = '/assets/images/manila-logo-main.png';
const DigitalJournal = '/assets/images/Digital-Journal.webp';
const FconImage = '/assets/images/fcon.svg';
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
                        <a target='_blank' aria-label='https://www.streetinsider.com/' href="https://www.streetinsider.com/">
                            <div className={styles.lightbox}>
                                <img src={SilogoNew} alt='SilogoNew' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://apnews.com/' href="https://apnews.com/">
                            <div className={styles.lightbox}>
                                <img src={ApImage} alt='ApImage' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.marketwatch.com/' href="https://www.marketwatch.com/">
                            <div className={styles.lightbox}>
                                <img src={MaeketWatch} alt='MaeketWatch' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://markets.businessinsider.com/' href="https://markets.businessinsider.com/">
                            <div className={styles.lightbox}>
                                <img src={MarketsInsider} alt='MarketsInsider' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://techbullion.com/' href="https://techbullion.com/">
                            <div className={styles.lightbox}>
                                <img style={{ filter: 'brightness(0.5)' }} src={TechBullionLogo} alt='TechBullionLogo' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.manilatimes.net/' href="https://www.manilatimes.net/">
                            <div className={styles.lightbox}>
                                <img src={ManilaLogo} alt='ManilaLogo' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.digitaljournal.com/' href="https://www.digitaljournal.com/">
                            <div className={styles.lightbox}>
                                <img style={{ filter: 'brightness(0.5)' }} src={DigitalJournal} alt='DigitalJournal' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.financialcontent.com/' href="https://www.financialcontent.com/">
                            <div className={styles.lightbox}>
                                <img style={{ filter: 'brightness(0.5)' }} src={FconImage} alt='FconImage' />
                            </div>
                        </a>
                    </Marquee>
                    <div className={styles.spacer}></div>
                    <Marquee speed={30} direction='right'>

                        <a target='_blank' aria-label='https://apnews.com/' href="https://apnews.com/">
                            <div className={styles.lightbox}>
                                <img src={ApImage} alt='ApImage' />
                            </div>
                        </a>

                        <a target='_blank' aria-label='https://markets.businessinsider.com/' href="https://markets.businessinsider.com/">
                            <div className={styles.lightbox}>
                                <img src={MarketsInsider} alt='MarketsInsider' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.streetinsider.com/' href="https://www.streetinsider.com/">
                            <div className={styles.lightbox}>
                                <img src={SilogoNew} alt='SilogoNew' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://techbullion.com/' href="https://techbullion.com/">
                            <div className={styles.lightbox}>
                                <img style={{ filter: 'brightness(0.5)' }} src={TechBullionLogo} alt='TechBullionLogo' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.financialcontent.com/' href="https://www.financialcontent.com/">
                            <div className={styles.lightbox}>
                                <img style={{ filter: 'brightness(0.5)' }} src={FconImage} alt='FconImage' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.manilatimes.net/' href="https://www.manilatimes.net/">
                            <div className={styles.lightbox}>
                                <img src={ManilaLogo} alt='ManilaLogo' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.marketwatch.com/' href="https://www.marketwatch.com/">
                            <div className={styles.lightbox}>
                                <img src={MaeketWatch} alt='MaeketWatch' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.digitaljournal.com/' href="https://www.digitaljournal.com/">
                            <div className={styles.lightbox}>
                                <img style={{ filter: 'brightness(0.5)' }} src={DigitalJournal} alt='DigitalJournal' />
                            </div>
                        </a>

                    </Marquee>
                    <div className={styles.spacer}></div>
                    <Marquee speed={30} >
                        <a target='_blank' aria-label='https://www.manilatimes.net/' href="https://www.manilatimes.net/">
                            <div className={styles.lightbox}>
                                <img src={ManilaLogo} alt='ManilaLogo' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.digitaljournal.com/' href="https://www.digitaljournal.com/">
                            <div className={styles.lightbox}>
                                <img style={{ filter: 'brightness(0.5)' }} src={DigitalJournal} alt='DigitalJournal' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.financialcontent.com/' href="https://www.financialcontent.com/">
                            <div className={styles.lightbox}>
                                <img style={{ filter: 'brightness(0.5)' }} src={FconImage} alt='FconImage' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://www.streetinsider.com/' href="https://www.streetinsider.com/">
                            <div className={styles.lightbox}>
                                <img src={SilogoNew} alt='SilogoNew' />
                            </div>
                        </a>

                        <a target='_blank' aria-label='https://www.marketwatch.com/' href="https://www.marketwatch.com/">
                            <div className={styles.lightbox}>
                                <img src={MaeketWatch} alt='MaeketWatch' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://markets.businessinsider.com/' href="https://markets.businessinsider.com/">
                            <div className={styles.lightbox}>
                                <img src={MarketsInsider} alt='MarketsInsider' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://techbullion.com/' href="https://techbullion.com/">
                            <div className={styles.lightbox}>
                                <img style={{ filter: 'brightness(0.5)' }} src={TechBullionLogo} alt='TechBullionLogo' />
                            </div>
                        </a>
                        <a target='_blank' aria-label='https://apnews.com/' href="https://apnews.com/">
                            <div className={styles.lightbox}>
                                <img src={ApImage} alt='ApImage' />
                            </div>
                        </a>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
