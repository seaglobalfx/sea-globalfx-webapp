'use client'
import Link from 'next/link';
import styles from './footer.module.scss';
import { useLanguage } from '@/context/LanguageContext';

const FooterLogo = '/assets/logo/footer-logo.svg';
const FacebookIcon = '/assets/icons/facebook.svg';
const TwitterIcon = '/assets/icons/twitter.svg';
const InstagramIcon = '/assets/icons/instagram.svg';
const LinkdinIcon = '/assets/icons/linkdin.svg';

export default function Footer() {
    const { t } = useLanguage();
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
                                {t('footer.desc')}
                            </p>
                            <div className={styles.social}>
                                <a href='https://www.facebook.com/profile.php?id=61586171626639' target='_blank'>
                                    <div className={styles.round}>
                                        <img src={FacebookIcon} alt='FacebookIcon' />
                                    </div>
                                </a>
                                <a href='https://x.com/seaglobalfx' target='_blank'>
                                    <div className={styles.round}>
                                        <img src={TwitterIcon} alt='TwitterIcon' />
                                    </div>
                                </a>
                                <a target='_blank' href='https://www.instagram.com/seaglobalfxofficial/'>
                                    <div className={styles.round}>
                                        <img src={InstagramIcon} alt='InstagramIcon' />
                                    </div>
                                </a>
                                {/* <div className={styles.round}>
                                    <img src={LinkdinIcon} alt='LinkdinIcon' />
                                </div> */}
                            </div>
                        </div>
                        <div className={styles.footerMenu}>
                            <div>
                                <h3>
                                    {t('footer.companyInfo')}
                                </h3>
                                <div className={styles.line}></div>
                                <p>
                                    {t('footer.registeredAddress')}<br />
                                    1st Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Castries, Saint Lucia – 838
                                </p>
                                <p>
                                    {t('footer.physicalAddress')}<br />
                                    1st Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Castries, Saint Lucia – 838
                                </p>
                                <p>
                                    {t('footer.registrationNumber')} 2025-00352
                                </p>
                                <a href='mailto:support@seaglobalfx.com'>
                                    {t('footer.email')} support@seaglobalfx.com
                                </a>
                                <a href='callto:+971 58 261 9955'>
                                    {t('footer.phone')} +971 58 261 9955
                                </a>

                            </div>
                            <div>
                                <h3>{t('footer.quickLinks')}</h3>
                                <div className={styles.line}></div>
                                <Link href="/accounts">{t('nav.accounts')}</Link>
                                <Link href="/platforms">{t('nav.platforms')}</Link>
                                <Link href="/blog">{t('nav.blogs')}</Link>
                                <Link href="/about-us">{t('nav.aboutUs')}</Link>
                                <Link href="/advanced-trading-solutions">{t('nav.tradingSolutions')}</Link>
                            </div>
                            <div>
                                <h3>{t('footer.support')}</h3>
                                <div className={styles.line}></div>
                                <Link href="/terms-and-conditions">{t('footer.terms')}</Link>
                                <Link href="/privacy-policy">{t('footer.privacy')}</Link>
                                <a>{t('footer.telegram')}</a>
                                <a>{t('footer.refund')}</a>

                            </div>
                        </div>
                        <div className={styles.right}>
                            <h5>
                                {t('common.newsletterTitle')}
                            </h5>
                            <p>
                                {t('common.newsletterSub')}
                            </p>
                            <div className={styles.inputRelative}>
                                <input type='text' placeholder={t('common.emailPlaceholder')} />
                                <div className={styles.buttonAlignment}>
                                    <button>
                                        {t('common.submit')}
                                    </button>
                                </div>
                            </div>
                            <div className={styles.checkboxText}>
                                <input type='checkbox' />
                                <span>
                                    {t('common.newsletterAgree')}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textstyle}>
                        <p>
                            {t('common.riskWarningTitle')} <br />
                            {t('common.riskWarning')}
                        </p>
                        <p>
                            {t('common.restrictedCountriesTitle')}
                            <br />
                            {t('common.restrictedCountries')}
                        </p>
                        <p>
                            {t('common.disclaimerTitle')} <br />
                            {t('common.disclaimer')}
                        </p>
                    </div>
                </div>
            </footer>
            <div className={styles.copyright}>
                <p>
                    {t('common.copyright')}
                </p>
            </div>
        </>
    )
}
