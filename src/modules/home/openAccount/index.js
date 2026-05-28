import React from 'react'
import styles from './openAccount.module.scss';
const BitCoin = '/assets/images/bitcoin.png';
const Signup = '/assets/icons/signup.svg';
const Verification = '/assets/icons/Verification.svg';
const Funds = '/assets/icons/Funds.svg';
const Trading = '/assets/icons/Trading.svg';
export default function OpenAccount() {
    return (
        <div className={styles.openAccount}>
            <div className='container-xs'>
                <div className={styles.grid}>
                    <div className={styles.items}>
                        <div className={styles.stickySection}>
                            <h2>
                                Open Your Account in 4 <span> easy</span> steps
                            </h2>
                            <p>
                                Start trading with confidence through a fast, secure, and fully guided onboarding process—designed to get
                                you from signup to your first trade with minimal friction.
                            </p>
                            <div className={styles.image}>
                                <img src={BitCoin} alt="BitCoin" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.card}>
                            <img src={Signup} alt="Signup" />
                            <h3>
                                Sign UP
                            </h3>
                            <p>
                                Create your trading account in just a few simple steps and get instant
                                access to global financial markets.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <img src={Verification} alt="Verification" />
                            <h3>
                                KYC Verification
                            </h3>
                            <p>
                                Verify your identity securely with a fast
                                and seamless KYC process to activate your trading account.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <img src={Funds} alt="Funds" />
                            <h3>
                                Add Funds
                            </h3>
                            <p>
                                Deposit funds quickly using secure payment methods and prepare your account
                                for live trading.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <img src={Trading} alt="Trading" />
                            <h3>
                                Start Trading
                            </h3>
                            <p>
                                Access forex, crypto, commodities, and more with
                                real-time market execution and powerful trading tools.
                            </p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
