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
                        <div className={styles.listCard}>
                            <div className={styles.list}>
                                <p>
                                    General Enquiries
                                </p>
                            </div>
                            <div className={styles.list}>
                                <p>
                                    Technical Support
                                </p>
                            </div>
                            <div className={styles.list}>
                                <p>
                                    Complaints
                                </p>
                            </div>
                            <div className={styles.list}>
                                <p>
                                    Partnerships / IB
                                </p>
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
