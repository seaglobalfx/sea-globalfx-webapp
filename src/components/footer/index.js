'use client'
import styles from './footer.module.scss';
const FooterLogo = '/assets/logo/footer-logo.svg';
const FacebookIcon = '/assets/icons/facebook.svg';
const TwitterIcon = '/assets/icons/twitter.svg';
const InstagramIcon = '/assets/icons/instagram.svg';
const LinkdinIcon = '/assets/icons/linkdin.svg';
export default function Footer() {
    const scrollup = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <>
            <footer className={styles.footer}>
                <div className='container-xs'>
                    <div className={styles.footerGrid}>
                        <div className={styles.left}>
                            <div className={styles.footerLogo} onClick={scrollup}>
                                <img src={FooterLogo} alt='FooterLogo' />
                            </div>
                            <p>
                                Sea Global – Delivering advanced trading solutions across Forex, Commodities, Indices, and Digital
                                Assets, supported by secure infrastructure and transparent trading conditions.
                            </p>
                            <div className={styles.social}>
                                <a href='https://www.facebook.com/people/Sea-Global-FX/61586171626639/' target='_blank'>
                                    <div className={styles.round}>
                                        <img src={FacebookIcon} alt='FacebookIcon' />
                                    </div>
                                </a>
                                <a href='https://x.com/seaglobalfx' target='_blank'>
                                    <div className={styles.round}>
                                        <img src={TwitterIcon} alt='TwitterIcon' />
                                    </div>
                                </a>
                                <a target='_blank' href='https://www.instagram.com/seaglobalfx/'>
                                    <div className={styles.round}>
                                        <img src={InstagramIcon} alt='InstagramIcon' />
                                    </div>
                                </a>
                                <div className={styles.round}>
                                    <img src={LinkdinIcon} alt='LinkdinIcon' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.footerMenu}>
                            <div>
                                <h3>
                                    Company Information
                                </h3>
                                <div className={styles.line}></div>
                                <p>
                                    Registered Address:
                                    1st Floor, The Sotheby Building,, Rodney Bay, Gros-Islet, Castries, Saint Lucia – 838
                                </p>
                                <p>
                                    Physical Address:<br />
                                    1st Floor, The Sotheby Building,, Rodney Bay, Gros-Islet, Castries, Saint Lucia – 838
                                </p>
                                <p>
                                    Registration Number:
                                    2025- 00352
                                </p>
                                <a href='mailto:support@seaglobalfx.com'>
                                    Email:
                                    support@seaglobalfx.com
                                </a>
                                <a href='callto:+971 58 261 9955'>
                                    Phone: <br />
                                    +971 58 261 9955
                                </a>

                            </div>
                            <div>
                                <h3>Quick Links</h3>
                                <div className={styles.line}></div>
                                <a>Markets</a>
                                <a>Platforms</a>
                                <a>Pricing</a>
                                <a>Education</a>
                                <a>Company</a>
                            </div>
                            <div>
                                <h3>Support</h3>
                                <div className={styles.line}></div>
                                <a>Terms of Service</a>
                                <a>Privacy Policy</a>
                                <a>Telegram Group</a>
                                <a>Refund Policy</a>

                            </div>
                        </div>
                        <div className={styles.right}>
                            <h5>
                                Subscribe to Newsletter
                            </h5>
                            <p>
                                Get Monthly insights from founders around the globe. No
                                spam   promise.
                            </p>
                            <div className={styles.inputRelative}>
                                <input type='text' placeholder='Enter your Email' />
                                <div className={styles.buttonAlignment}>
                                    <button>
                                        Submit
                                    </button>
                                </div>
                            </div>
                            <div className={styles.checkboxText}>
                                <input type='checkbox' />
                                <span>
                                    I agree to the Privacy Policy
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textstyle}>
                        <p>
                            Risk warning <br />
                            Trading in Foreign Exchange and Contracts for Difference carries a high level of risk to your capital and unexpected price movements. A key risk of leveraged trading is that if a market moves against your position, you can incur additional liabilities far in excess of your initial margin deposit. Only speculate with money you can afford to lose. The products listed on this website may not be suitable for all customers; therefore, ensure you fully understand the risks involved and seek independent financial advice if necessary.
                        </p>
                        <p>
                            Restricted Countries
                            <br />
                            Sea Global Ltd. does not provide services to residents of the United States, Canada, North Korea, and Cuba, or any other sanctioned jurisdiction where such services would be contrary to local law or regulation.
                        </p>
                        <p>
                            Disclaimer <br />
                            Sea Global Ltd. operates solely as an execution service and does not offer advisory services. Occasionally, Sea Global Ltd. may release general market insights; however, such communications should not be interpreted as advice, an invitation, or an endorsement for any financial instrument. Sea Global Ltd. bears no liability for the application of this content or any outcomes thereof. The completeness of this information is not guaranteed, and reliance upon it is at the sole discretion and risk of the user.
                        </p>
                    </div>
                </div>
            </footer>
            <div className={styles.copyright}>
                <p>
                    © 2025 Sea Global. All rights reserved.
                </p>
            </div>
        </>
    )
}
