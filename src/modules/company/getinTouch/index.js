import React from 'react'
import styles from './getinTouch.module.scss';
const LocationIcon = '/assets/icons/location.svg';
const ContactIcon = '/assets/icons/Contact.svg';
const EmailIcon = '/assets/icons/Email.svg';
const FacebookIcon = '/assets/icons/facebook-outline.svg';
const InstagramIcon = '/assets/icons/instagram-icon.svg';
const TwitterIcon = '/assets/icons/twitter-icon.svg';
export default function GetinTouch() {
    return (
        <div className={styles.getinTouchAlignment}>
            <div className='container-xs6'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.title}>
                            <h2>
                                Get in <span>Touch</span>
                            </h2>
                        </div>
                        <div className={styles.allGridAlignment}>
                            <div className={styles.roundGrid}>
                                <img src={LocationIcon} alt='LocationIcon' />
                                <div>
                                    <p>
                                        Address
                                    </p>
                                    <span>
                                        1st Floor, The Sotheby Building,, Rodney Bay, Gros-Islet, Castries, Saint Lucia – 838
                                    </span>
                                </div>
                            </div>
                            <div className={styles.roundGrid}>
                                <img src={ContactIcon} alt='ContactIcon' />
                                <div>
                                    <p>
                                        Contact  Details
                                    </p>
                                    <span>
                                        +971 58 261 9955
                                    </span>
                                </div>
                            </div>
                            <div className={styles.roundGrid}>
                                <img src={EmailIcon} alt='EmailIcon' />
                                <div>
                                    <p>
                                        Email Us
                                    </p>
                                    <span>
                                        support@seaglobalfx.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.socialMediaAlignment}>
                            <p>
                                Follow Us :
                            </p>
                            <div className={styles.socialIcon}>
                                <img src={FacebookIcon} alt='FacebookIcon' />
                                <img src={InstagramIcon} alt='InstagramIcon' />
                                <img src={TwitterIcon} alt='TwitterIcon' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.box}>
                            <h3>
                                Let’s Connect
                            </h3>
                            <div className={styles.input}>
                                <input type='text' placeholder='Your Name' />
                            </div>
                            <div className={styles.input}>
                                <input type='text' placeholder='Email Address' />
                            </div>
                            <div className={styles.input}>
                                <textarea placeholder='Message'></textarea>
                            </div>
                            <div className={styles.checkboxText}>
                                <input type='checkbox' />
                                <p>
                                    You agree to our friendly <span>
                                        Privacy policy.
                                    </span>
                                </p>
                            </div>
                            <div className={styles.sendMessage}>
                                <button>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
