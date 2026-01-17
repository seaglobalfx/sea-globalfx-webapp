'use client'
import { usePathname } from 'next/navigation';
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function CommoditiesTableData() {
  const pathname = usePathname();
  console.log("saplspas", pathname)
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
              "title": "Commodities",
              "symbols": [
                {
                  "s": "TVC:GOLD",
                  "d": "",
                  "logoid": "metal/gold",
                  "currency-logoid": "country/US"
                },
                {
                  "s": "TVC:SILVER",
                  "d": "",
                  "logoid": "metal/silver",
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
    [pathname]
  );

  return (
    <div className="tradingview-widget-container w-full-size" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(CommoditiesTableData);