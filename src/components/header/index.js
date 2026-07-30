'use client'
import { motion } from 'framer-motion';
import styles from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Logo = '/assets/logo/logo.svg';
const LogoWhite = '/assets/logo/footer-logo.svg';
const ShareIcon = '/assets/icons/share.svg';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useLanguage } from '@/context/LanguageContext';

const dropdownVariants = {
    hidden: {
        opacity: 0,
        y: 12,
        scale: 0.95,
        pointerEvents: 'none',
        transition: { duration: 0.2, ease: 'easeOut' }
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        pointerEvents: 'auto',
        transition: { duration: 0.2, ease: 'easeOut' }
    }
};
export default function Header() {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [headerOpen, setHeaderOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const { locale, changeLanguage, t } = useLanguage();

    const pathname = usePathname();
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
    return (
        <>
            <header className={styles.header}>
                <div className='container-md'>
                    <div className={styles.headerAlignment}>
                        <div className={styles.logo}>
                            <Link href="/" >
                                <img src={Logo} alt='Logo' />
                            </Link>
                        </div>
                        <div className={styles.menu}>
                            <div className={styles.menuItems}>
                                {/* <Link href="/" className={classNames(styles.menuSpacing, pathname === "/" ? styles.active : "")} aria-label='Platforms'>Home</Link> */}

                                <div
                                    className={styles.dropdownMenu}
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => setOpen(false)}
                                >
                                    <a className={styles.menuSpacing} aria-label="Markets">
                                        {t('nav.markets')}
                                    </a>

                                    <motion.div
                                        className={styles.dropdown}
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate={open ? 'visible' : 'hidden'}
                                    >
                                        <div className={styles.dropdownSpacing}>
                                            <Link className={pathname === "/forex-market" ? styles.active : ""} href="/forex-market" onClick={() => setOpen(false)}>{t('nav.forex')}</Link>
                                            <Link className={pathname === "/indices-market" ? styles.active : ""} href="/indices-market" onClick={() => setOpen(false)}>{t('nav.indices')}</Link>
                                            <Link className={pathname === "/commodities" ? styles.active : ""} href="/commodities" onClick={() => setOpen(false)}>{t('nav.commodities')}</Link>
                                            <Link className={pathname === "/stocks" ? styles.active : ""} href="/stocks" onClick={() => setOpen(false)}>{t('nav.stocks')}</Link>
                                            <Link className={pathname === "/crypto" ? styles.active : ""} href="/crypto" onClick={() => setOpen(false)}>{t('nav.crypto')}</Link>
                                            <Link className={pathname === "/etfs" ? styles.active : ""} href="/etfs" onClick={() => setOpen(false)}>{t('nav.etfs')}</Link>
                                        </div>
                                    </motion.div>
                                </div>
                                <Link className={pathname === "/accounts" ? styles.active : ""} href="/accounts" aria-label='Accounts'>{t('nav.accounts')}</Link>
                                {/* <Link href="/platforms" className={classNames(styles.menuSpacing, pathname === "/platforms" ? styles.active : "")} aria-label='Platforms'>Platforms</Link> */}
                                <div
                                    className={styles.dropdownMenu}
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => setOpen(false)}
                                >
                                    <a className={styles.menuSpacing} aria-label="Trade">
                                        {t('nav.trade')}
                                    </a>

                                    <motion.div
                                        className={classNames(styles.dropdown, styles.dropdownSizeLg)}
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate={open ? 'visible' : 'hidden'}
                                    >
                                        <div className={styles.dropdownSpacing}>
                                            <Link className={pathname === "/platforms" ? styles.active : ""} href="/platforms" onClick={() => setOpen(false)}>{t('nav.platforms')}</Link>
                                            <Link className={pathname === "/advanced-trading-solutions" ? styles.active : ""} href="/advanced-trading-solutions" onClick={() => setOpen(false)}>{t('nav.tradingSolutions')}</Link>
                                            <Link className={pathname === "/trade-to-win" ? styles.active : ""} href="/trade-to-win" onClick={() => setOpen(false)}>{t('nav.tradeAndAchieve')}</Link>

                                        </div>
                                    </motion.div>
                                </div>
                                <Link href="/partners" className={classNames(styles.menuSpacing, pathname === "/partners" ? styles.active : "")} aria-label='partners'>{t('nav.partners')}</Link>
                                <div
                                    className={styles.dropdownMenu}
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => setOpen(false)}
                                >
                                    <a className={styles.menuSpacing} aria-label="Company">
                                        {t('nav.company')}
                                    </a>

                                    <motion.div
                                        className={classNames(styles.dropdown, styles.dropdownSizeLg)}
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate={open ? 'visible' : 'hidden'}
                                    >
                                        <div className={styles.dropdownSpacing}>
                                            <Link className={pathname === "/about-us" ? styles.active : ""} href="/about-us" onClick={() => setOpen(false)}>{t('nav.aboutUs')}</Link>
                                            <Link className={pathname === "/contact-us" ? styles.active : ""} href="/contact-us" onClick={() => setOpen(false)}>{t('nav.contactUs')}</Link>

                                        </div>
                                    </motion.div>
                                </div>
                                <Link href="/blog" className={classNames(styles.menuSpacing, pathname === "/blog" ? styles.active : "")} aria-label='partners'>{t('nav.blogs')}</Link>

                                <Link href="/contact-us" className={classNames(styles.menuSpacing, pathname === "/contact-us" ? styles.active : "")} aria-label='contact-us'>{t('nav.contactUs')}</Link>

                                <div className={styles.langSwitcher}>
                                    <div
                                        className={styles.langDropdown}
                                        onMouseEnter={() => setLangOpen(true)}
                                        onMouseLeave={() => setLangOpen(false)}
                                    >
                                        <button className={styles.langBtn}>
                                            <span>{locale === 'en' ? 'English' : 'العربية'}</span>
                                            <svg className={styles.arrow} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>

                                        <motion.div
                                            className={styles.langMenu}
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate={langOpen ? 'visible' : 'hidden'}
                                        >
                                            <div className={styles.langMenuInner}>
                                                <button
                                                    className={classNames(styles.langItem, locale === 'en' ? styles.active : '')}
                                                    onClick={() => { changeLanguage('en'); setLangOpen(false); }}
                                                >
                                                    English
                                                </button>
                                                <button
                                                    className={classNames(styles.langItem, locale === 'ar' ? styles.active : '')}
                                                    onClick={() => { changeLanguage('ar'); setLangOpen(false); }}
                                                >
                                                    العربية
                                                </button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.button}>
                                <a href='https://trade.seaglobalfx.co/login/' target='_blank'>
                                    <button type="button" className={styles.loginBtn}>
                                        <img src={ShareIcon} alt="" />
                                        <span>{t('common.login')}</span>
                                    </button>
                                </a>
                            </div>
                            <div className={styles.mobileMenu} onClick={() => setHeaderOpen(!headerOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={classNames(styles.mobileHeader, headerOpen ? styles.show : styles.hide)}>
                <div className={styles.smallHeader}>
                    <div className={styles.logo}>
                        <Link href="/" onClick={() => setHeaderOpen(false)}>
                            <img src={LogoWhite} alt='LogoWhite' />
                        </Link>
                    </div>
                    <div className={styles.close} onClick={() => setHeaderOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                        </svg>
                    </div>
                </div>
                <div className={styles.headerBody}>
                    {/* <div className={styles.menuIconAlignment} onClick={() => setHeaderOpen(false)}>
                        <Link className={pathname === "/" ? styles.active : ""} href="/" onClick={() => setHeaderOpen(false)}>
                            Home
                        </Link>
                    </div> */}
                    <div className={styles.menuIconAlignment}>
                        <a>
                            {t('nav.markets')}
                        </a>
                        <div className={classNames(styles.icon, dropdown ? styles.rotate : "")} onClick={() => setDropdown(!dropdown)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                            </svg>
                        </div>
                    </div>
                    <div className={classNames(styles.submenu, dropdown ? styles.show : styles.hide)}>
                        <div className={styles.space}>
                            <Link className={pathname === "/forex-market" ? styles.active : ""} href="/forex-market" onClick={() => setHeaderOpen(false)}>{t('nav.forex')}</Link>
                            <Link className={pathname === "/indices-market" ? styles.active : ""} href="/indices-market" onClick={() => setHeaderOpen(false)}>{t('nav.indices')}</Link>
                            <Link className={pathname === "/commodities" ? styles.active : ""} href="/commodities" onClick={() => setHeaderOpen(false)}>{t('nav.commodities')}</Link>
                            <Link className={pathname === "/stocks" ? styles.active : ""} href="/stocks" onClick={() => setHeaderOpen(false)}>{t('nav.stocks')}</Link>
                            <Link className={pathname === "/crypto" ? styles.active : ""} href="/crypto" onClick={() => setHeaderOpen(false)}>{t('nav.crypto')}</Link>
                            <Link className={pathname === "/etfs" ? styles.active : ""} href="/etfs" onClick={() => setHeaderOpen(false)}>{t('nav.etfs')}</Link>
                        </div>
                    </div>
                    <div className={styles.menuIconAlignment} onClick={() => setHeaderOpen(false)}>
                        <Link href="/accounts">
                            {t('nav.accounts')}
                        </Link>
                    </div>
                    <div className={styles.menuIconAlignment} onClick={() => setHeaderOpen(false)}>
                        <Link href="/platforms">
                            {t('nav.platforms')}
                        </Link>
                    </div>

                    <div className={styles.menuIconAlignment} onClick={() => setHeaderOpen(false)}>
                        <Link href="/blog">
                            {t('nav.blogs')}
                        </Link>
                    </div>
                    <div className={styles.menuIconAlignment} onClick={() => setHeaderOpen(false)}>
                        <Link href="/partners">
                            {t('nav.partners')}
                        </Link>
                    </div>
                    <div className={styles.menuIconAlignment} onClick={() => setHeaderOpen(false)}>
                        <Link href="/about-us">
                            {t('nav.aboutUs')}
                        </Link>
                    </div>
                    <div className={styles.menuIconAlignment} onClick={() => setHeaderOpen(false)}>
                        <Link href="/advanced-trading-solutions">
                            {t('nav.tradingSolutions')}
                        </Link>
                    </div>
                    <div className={styles.menuIconAlignment} onClick={() => setHeaderOpen(false)}>
                        <Link className={pathname === "/trade-to-win" ? styles.active : ""} href="/trade-to-win" onClick={() => setHeaderOpen(false)}>{t('nav.tradeAndAchieve')}</Link>
                    </div>
                    <div className={styles.menuIconAlignment} onClick={() => setHeaderOpen(false)}>
                        <Link href="/contact-us">
                            {t('nav.contactUs')}
                        </Link>
                    </div>

                </div>
                <div className={styles.headerFooter} onClick={() => setHeaderOpen(false)}>
                    <div className={styles.mobileLangSwitcher}>
                        <button
                            className={classNames(styles.mobileLangBtn, locale === 'en' ? styles.active : '')}
                            onClick={() => {
                                changeLanguage('en');
                                setHeaderOpen(false);
                            }}
                        >
                            English
                        </button>
                        <button
                            className={classNames(styles.mobileLangBtn, locale === 'ar' ? styles.active : '')}
                            onClick={() => {
                                changeLanguage('ar');
                                setHeaderOpen(false);
                            }}
                        >
                            العربية
                        </button>
                    </div>
                    <a href='https://trade.seaglobalfx.co/login/' target='_blank'>
                        {t('common.login')}
                    </a>
                </div>

            </div>
        </>
    )
}
