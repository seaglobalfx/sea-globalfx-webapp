import React from 'react'
import styles from './footer.module.scss';
const FooterLogo = '/assets/logo/footer-logo.svg';
const FacebookIcon = '/assets/icons/facebook.svg';
const TwitterIcon = '/assets/icons/twitter.svg';
const InstagramIcon = '/assets/icons/instagram.svg';
const LinkdinIcon = '/assets/icons/linkdin.svg';
export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className='container-xs'>
                    <div className={styles.footerGrid}>
                        <div className={styles.left}>
                            <div className={styles.footerLogo}>
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
                                    [Insert Registered Address],
                                    [City, Country]
                                </p>
                                <p>
                                    Physical Address:
                                    [Insert Office Address],
                                    [City, Country]
                                </p>
                                <p>
                                    Registration Number:
                                    [Insert Registration Number]
                                </p>
                                <p>
                                    Email:
                                    support@seaglobal.com
                                </p>
                                <p>
                                    Phone: <br />
                                    [Insert Contact Number]
                                </p>

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
                            Legal Notice: <br />Sea Global is incorporated under the laws of [Jurisdiction] with the registration number listed above.
                            Company details and legal documentation are available upon request.
                        </p>
                        <p>
                            Risk Warning <br />
                            Trading Forex, CFDs, and other leveraged financial instruments involves a high level of risk and may not be suitable for all investors. You may lose more than your initial investment. Before engaging in trading
                            activities, ensure you fully understand the risks involved and consider your financial situation and risk
                            tolerance.
                        </p>
                        <p>
                            Legal Disclaimer <br />
                            The information provided on this website is for general informational purposes only and does not constitute
                            financial, investment, or legal advice. Sea Global does not guarantee the accuracy, completeness, or
                            timeliness of the information provided and shall not be held liable for any losses arising from reliance on this
                            content. Please review our Terms & Conditions and Risk Disclosure before using our services.
                        </p>
                        <p>
                            Restricted Jurisdictions <br />
                            Sea Global does not offer services to residents or citizens of certain jurisdictions due to local laws and
                            regulatory restrictions. These may include, but are not limited to, the United States, sanctioned countries,
                            and other restricted regions. Users are responsible for ensuring compliance with local regulations before
                            opening an account.
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
