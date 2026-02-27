'use client'
import React, { useState } from 'react'
import styles from './getinTouch.module.scss'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { useMutation } from '@apollo/client'
import { CreateContactUs } from '@/graphql/query/createContactUs'
import Link from 'next/link'

export default function GetinTouch() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        agree: false,
    })

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        })
        setErrors({
            ...errors,
            [name]: '',
        })
    }

    const validate = () => {
        let newErrors = {}
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Enter a valid email address'
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }
        if (!formData.agree) {
            newErrors.agree = 'You must accept the privacy policy'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const [createUser] = useMutation(CreateContactUs, {
        onCompleted: (res) => {
            toast.success('Thanks for reaching out! Your message has been sent.')
            setFormData({
                name: '',
                email: '',
                message: '',
                agree: false,
            })
            setLoading(false)
        },
        onError: (error) => {
            toast.error('Failed to send message. Please try again.')
            setLoading(false)
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return
        setLoading(true)
        try {
            await createUser({
                variables: {
                    data: {
                        userName: formData.name,
                        email: formData.email,
                        message: formData.message,
                        publishedAt: new Date().toISOString(),
                    },
                },
            })
        } catch (error) {
            console.error(error)
            toast.error('Something went wrong. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

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
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.title}>
                            <h2>Get in <span>Touch</span></h2>
                        </div>

                        <div className={styles.listCard}>
                            <div className={styles.list}><p>General Enquiries</p></div>
                            <div className={styles.list}><p>Technical Support</p></div>
                            <div className={styles.list}><p>Complaints</p></div>
                            <div className={styles.list}><p>Partnerships / IB</p></div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        className={styles.griditems}
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form className={styles.box} onSubmit={handleSubmit}>
                            <h3>Let’s Connect</h3>

                            {/* Name */}
                            <motion.div className={styles.input} whileFocusWithin={{ scale: 1.02 }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </motion.div>
                            {errors.name && <p className={styles.error}>{errors.name}</p>}

                            {/* Email */}
                            <motion.div className={styles.input} whileFocusWithin={{ scale: 1.02 }}>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </motion.div>
                            {errors.email && <p className={styles.error}>{errors.email}</p>}

                            {/* Message */}
                            <motion.div className={styles.input} whileFocusWithin={{ scale: 1.02 }}>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </motion.div>
                            {errors.message && <p className={styles.error}>{errors.message}</p>}

                            {/* Checkbox */}
                            <div className={styles.checkboxText}>
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                />
                                <p>
                                    You agree to our friendly <Link href="/privacy-policy">Privacy policy.</Link>
                                </p>
                            </div>
                            {errors.agree && <p className={styles.error}>{errors.agree}</p>}

                            <div className={styles.sendMessage}>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
