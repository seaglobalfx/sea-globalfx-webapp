'use client'
import React from 'react'
import styles from './availableInstruments.module.scss';
import TradingViewWidget from '@/components/tradingViewWidget';
import IndicesMarketData from '@/modules/indicesMarket/indicesMarketData';
import CommoditiesTableData from '@/modules/commodities/commoditiesTableData';
import StocksDataTable from '@/modules/stocks/stocksDataTable';
import CryptoDataTable from '@/modules/crypto/cryptoDataTable';
import EtfsDataTable from '@/modules/etfs/etfsDataTable';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const stagger = {
    visible: {
        transition: { staggerChildren: 0.12 }
    }
};


export default function AvailableInstruments({ details, title }) {
    function scriptlod() {
        switch (title) {
            case 'forex-market':
                return (
                    <TradingViewWidget />
                )

            case 'indices-market':
                return (
                    <IndicesMarketData />
                )

            case 'commodities':
                return (
                    <CommoditiesTableData />
                )
            case 'stocks':
                return (
                    <StocksDataTable />
                )
            case 'crypto':
                return (
                    <CryptoDataTable />
                )

            case 'etfs':
                return (
                    <EtfsDataTable />
                )
            default:
                break;
        }
    }
    return (
        <div className={styles.availableInstruments}>
            <div className='container-xs2'>
                <motion.div
                    className={styles.title}
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2 variants={fadeUp}>
                        Available <span>Instruments</span>
                    </motion.h2>

                    <motion.p variants={fadeUp}>
                        {details}
                    </motion.p>
                </motion.div>
                {scriptlod()}
            </div>
        </div>
    )
}
