'use client'
import React from 'react'
import styles from './getinTouch.module.scss'
import { motion } from 'framer-motion'

const LocationIcon = '/assets/icons/location.svg'
const ContactIcon = '/assets/icons/Contact.svg'
const EmailIcon = '/assets/icons/Email.svg'
const FacebookIcon = '/assets/icons/facebook-outline.svg'
const InstagramIcon = '/assets/icons/instagram-icon.svg'
const TwitterIcon = '/assets/icons/twitter-icon.svg'

export default function GetinTouch() {
    return (
        <motion.div
            className={styles.getinTouchAlignment}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container-xs6">
                <div className={styles.grid}>

                    {/* Left Info */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className={styles.title}>
                            <h2>
                                Get in <span>Touch</span>
                            </h2>
                        </div>

                        <motion.div
                            className={styles.allGridAlignment}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.15 }
                                }
                            }}
                        >
                            {[
                                {
                                    icon: LocationIcon,
                                    title: 'Address',
                                    value: '1st Floor, The Sotheby Building,, Rodney Bay, Gros-Islet, Castries, Saint Lucia – 838'
                                },
                                {
                                    icon: ContactIcon,
                                    title: 'Contact Details',
                                    value: '+971 58 261 9955'
                                },
                                {
                                    icon: EmailIcon,
                                    title: 'Email Us',
                                    value: 'support@seaglobalfx.com'
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.roundGrid}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                >
                                    <img src={item.icon} alt={item.title} />
                                    <div>
                                        <p>{item.title}</p>
                                        <span>{item.value}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Social Icons */}
                        <div className={styles.socialMediaAlignment}>
                            <p>Follow Us :</p>
                            <div className={styles.socialIcon}>
                                {[
                                    { icon: FacebookIcon, link: 'https://www.facebook.com/people/Sea-Global-FX/61586171626639/' },
                                    { icon: InstagramIcon, link: 'https://www.instagram.com' },
                                    { icon: TwitterIcon, link: 'https://x.com/seaglobalfx' },
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <motion.img
                                            src={item.icon}
                                            alt="social"
                                            whileHover={{ y: -4, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className={styles.box}>
                            <h3>Let’s Connect</h3>

                            <motion.div
                                className={styles.input}
                                whileFocusWithin={{ scale: 1.02 }}
                            >
                                <input type="text" placeholder="Your Name" />
                            </motion.div>

                            <motion.div
                                className={styles.input}
                                whileFocusWithin={{ scale: 1.02 }}
                            >
                                <input type="text" placeholder="Email Address" />
                            </motion.div>

                            <motion.div
                                className={styles.input}
                                whileFocusWithin={{ scale: 1.02 }}
                            >
                                <textarea placeholder="Message"></textarea>
                            </motion.div>

                            <div className={styles.checkboxText}>
                                <input type="checkbox" />
                                <p>
                                    You agree to our friendly <span>Privacy policy.</span>
                                </p>
                            </div>

                            <div className={styles.sendMessage}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}
