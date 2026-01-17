// TradingViewWidget.jsx
'use client'
import React, { useEffect, useRef, memo } from 'react';

function EtfsDataTable() {
    const container = useRef();

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "colorTheme": "light",
          "dateRange": "12M",
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showFloatingTooltip": false,
          "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
          "plotLineColorFalling": "rgba(41, 98, 255, 1)",
          "gridLineColor": "rgba(240, 243, 250, 0)",
          "scaleFontColor": "#0F0F0F",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
          "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
          "tabs": [
            {
              "title": "ETFs",
              "symbols": [
                {
                  "s": "AMEX:SPY",
                  "d": "",
                  "logoid": "spdr-sandp500-etf-tr",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:QQQ",
                  "d": "",
                  "logoid": "invesco",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:TQQQ",
                  "d": "",
                  "logoid": "proshares",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:SMH",
                  "d": "",
                  "logoid": "vaneck",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:TLT",
                  "d": "",
                  "logoid": "ishares",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:TSLL",
                  "d": "",
                  "logoid": "direxion",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:NVDL",
                  "d": "",
                  "logoid": "graniteshares",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:JEPQ",
                  "d": "",
                  "logoid": "jpmorgan",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:MSTX",
                  "d": "",
                  "logoid": "differential-series-solutions",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:CONL",
                  "d": "",
                  "logoid": "graniteshares",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:TSLQ",
                  "d": "",
                  "logoid": "tradr-tsla-bear-daily-etf",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:SOLT",
                  "d": "",
                  "logoid": "volatility-shares-trust-2x-bitcoin-strategy-etf",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "NASDAQ:GGLL",
                  "d": "",
                  "logoid": "direxion",
                  "currency-logoid": "country/US"
                }
              ]
            }
          ],
          "support_host": "https://www.tradingview.com",
          "width": "100%",
          "height": "649px",
          "showSymbolLogo": true,
          "showChart": true
        }`;
            container.current.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-widget-container w-full-size" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}

export default memo(EtfsDataTable);