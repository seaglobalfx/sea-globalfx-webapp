'use client';

import React, { useEffect, useRef, memo } from 'react';

function EtfsDataTable() {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    // ✅ Clear previous widget
    widgetRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.type = 'text/javascript';
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: 'light',
      dateRange: '12M',
      locale: 'en',
      largeChartUrl: '',
      isTransparent: false,
      showFloatingTooltip: false,
      plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
      plotLineColorFalling: 'rgba(41, 98, 255, 1)',
      gridLineColor: 'rgba(240, 243, 250, 0)',
      scaleFontColor: '#0F0F0F',
      belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
      belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
      belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
      belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
      symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
      tabs: [
        {
          title: 'ETFs',
          symbols: [
            { s: 'AMEX:SPY', logoid: 'spdr-sandp500-etf-tr', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:QQQ', logoid: 'invesco', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:TQQQ', logoid: 'proshares', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:SMH', logoid: 'vaneck', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:TLT', logoid: 'ishares', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:TSLL', logoid: 'direxion', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:NVDL', logoid: 'graniteshares', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:JEPQ', logoid: 'jpmorgan', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:MSTX', logoid: 'differential-series-solutions', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:CONL', logoid: 'graniteshares', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:TSLQ', logoid: 'tradr-tsla-bear-daily-etf', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:SOLT', logoid: 'volatility-shares-trust-2x-bitcoin-strategy-etf', 'currency-logoid': 'country/US' },
            { s: 'NASDAQ:GGLL', logoid: 'direxion', 'currency-logoid': 'country/US' }
          ]
        }
      ],
      support_host: 'https://www.tradingview.com',
      width: '100%',
      height: 649,
      showSymbolLogo: true,
      showChart: true
    });

    widgetRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container w-full">
      <div
        ref={widgetRef}
        className="tradingview-widget-container__widget"
      />
    </div>
  );
}

export default memo(EtfsDataTable);
