'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from localStorage on mount to prevent SSR mismatch
    const savedLocale = localStorage.getItem('language');
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'ar')) {
      setLocale(savedLocale);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Persist language choice
    localStorage.setItem('language', locale);

    // Apply document direction and lang attributes
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
  }, [locale, mounted]);

  const changeLanguage = (lang) => {
    if (lang === 'en' || lang === 'ar') {
      setLocale(lang);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to English
        let fallback = translations['en'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            fallback = key;
            break;
          }
        }
        return fallback;
      }
    }
    return value;
  };

  const value = {
    locale,
    changeLanguage,
    t,
    isRTL: locale === 'ar',
    mounted
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
