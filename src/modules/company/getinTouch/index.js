'use client';

import React, { useState } from 'react';
import styles from './getinTouch.module.scss';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useMutation } from '@apollo/client';
import { CreateContactUs } from '@/graphql/query/createContactUs';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function GetinTouch() {
    const { t, isRTL, locale } = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = t('getInTouch.errors.name');
        }
        if (!formData.email.trim()) {
            newErrors.email = t('getInTouch.errors.email');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = t('getInTouch.errors.emailInvalid');
        }
        if (!formData.message.trim()) {
            newErrors.message = t('getInTouch.errors.message');
        }
        if (!formData.agree) {
            newErrors.agree = t('getInTouch.errors.agree');
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const [createUser] = useMutation(CreateContactUs, {
        onCompleted: () => {
            toast.success(t('getInTouch.toastSuccess'));
            setFormData({
                name: '',
                email: '',
                message: '',
                agree: false,
            });
            setLoading(false);
        },
        onError: () => {
            toast.error(t('getInTouch.toastError'));
            setLoading(false);
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
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
            });
        } catch (error) {
            console.error(error);
            toast.error(t('getInTouch.toastErrorGeneric'));
        } finally {
            setLoading(false);
        }
    };

    const categories = t('getInTouch.categories');
    const placeholders = t('getInTouch.placeholders');

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
                    <motion.div
                        className={`${styles.griditems} ${styles.formColumn}`}
                        initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form className={styles.box} onSubmit={handleSubmit} noValidate>
                            <h3>{t('getInTouch.formTitle')}</h3>

                            <motion.div className={styles.input} whileFocusWithin={{ scale: 1.02 }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={placeholders?.name}
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                />
                            </motion.div>
                            {errors.name && <p className={styles.error}>{errors.name}</p>}

                            <motion.div className={styles.input} whileFocusWithin={{ scale: 1.02 }}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={placeholders?.email}
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    dir="ltr"
                                    className={styles.ltrField}
                                />
                            </motion.div>
                            {errors.email && <p className={styles.error}>{errors.email}</p>}

                            <motion.div className={styles.input} whileFocusWithin={{ scale: 1.02 }}>
                                <textarea
                                    name="message"
                                    placeholder={placeholders?.message}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </motion.div>
                            {errors.message && <p className={styles.error}>{errors.message}</p>}

                            <div className={styles.checkboxText}>
                                <input
                                    type="checkbox"
                                    name="agree"
                                    id="get-in-touch-agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                />
                                <label htmlFor="get-in-touch-agree">
                                    {t('getInTouch.agreeBefore')}
                                    <Link href="/privacy-policy">{t('getInTouch.privacyLink')}</Link>
                                    {locale === 'ar' ? t('getInTouch.agreeAfter') : null}
                                </label>
                            </div>
                            {errors.agree && <p className={styles.error}>{errors.agree}</p>}

                            <div className={styles.sendMessage}>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={loading}
                                >
                                    {loading ? t('getInTouch.sending') : t('getInTouch.sendMessage')}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        className={`${styles.griditems} ${styles.infoColumn}`}
                        initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.title}>
                            <h2>
                                {t('getInTouch.titleStart')}
                                <span>{t('getInTouch.titleSpan')}</span>
                            </h2>
                        </div>

                        <div className={styles.listCard}>
                            {Array.isArray(categories) &&
                                categories.map((label, index) => (
                                    <div key={index} className={styles.list}>
                                        <p>{label}</p>
                                    </div>
                                ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
