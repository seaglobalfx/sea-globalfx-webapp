'use client'
import { motion } from 'framer-motion';
import styles from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Logo = '/assets/logo/logo.svg';
const ShareIcon = '/assets/icons/share.svg';
import { useEffect, useState } from 'react';
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

    const pathname = usePathname();
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
    return (
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
                            <div
                                className={styles.dropdownMenu}
                                onMouseEnter={() => setOpen(true)}
                                onMouseLeave={() => setOpen(false)}
                            >
                                <a className={styles.menuSpacing} aria-label="Markets">
                                    Markets
                                </a>

                                <motion.div
                                    className={styles.dropdown}
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate={open ? 'visible' : 'hidden'}
                                >
                                    <div className={styles.dropdownSpacing}>
                                        <Link className={pathname === "/forex-market" ? styles.active : ""} href="/forex-market" onClick={() => setOpen(false)}>Forex</Link>
                                        <Link className={pathname === "/indices-market" ? styles.active : ""} href="/indices-market" onClick={() => setOpen(false)}>Indices</Link>
                                        <Link className={pathname === "/commodities" ? styles.active : ""} href="/commodities" onClick={() => setOpen(false)}>Commodities</Link>
                                        <Link className={pathname === "/stocks" ? styles.active : ""} href="/stocks" onClick={() => setOpen(false)}>Stocks</Link>
                                        <Link className={pathname === "/crypto" ? styles.active : ""} href="/crypto" onClick={() => setOpen(false)}>Crypto</Link>
                                        <Link className={pathname === "/etfs" ? styles.active : ""} href="/etfs" onClick={() => setOpen(false)}>ETFs</Link>
                                    </div>
                                </motion.div>
                            </div>
                            <Link className={pathname === "/accounts" ? styles.active : ""} href="/accounts" aria-label='Accounts'>Accounts</Link>
                            <a className={styles.menuSpacing} aria-label='Platforms'>Platforms</a>
                            <a className={styles.menuSpacing} aria-label='Blogs'>Blogs</a>
                            <a className={styles.menuSpacing} aria-label='Company'>Company</a>
                        </div>
                        <div className={styles.button}>
                            <a href='https://client.seaglobalfx.com/' target='_blank'>
                                <button>
                                    <img src={ShareIcon} alt='ShareIcon' />
                                    <span>
                                        Login
                                    </span>
                                </button>
                            </a>
                        </div>
                        <div className={styles.mobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
