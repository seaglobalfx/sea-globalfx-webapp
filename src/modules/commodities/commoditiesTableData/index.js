'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, memo } from 'react';

function CommoditiesTableData() {
  const pathname = usePathname();
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    // ✅ Clear previous widget (important on route change)
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
          title: 'Commodities',
          symbols: [
            {
              s: 'TVC:GOLD',
              logoid: 'metal/gold',
              'currency-logoid': 'country/US'
            },
            {
              s: 'TVC:SILVER',
              logoid: 'metal/silver',
              'currency-logoid': 'country/US'
            }
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
  }, [pathname]); // ✅ reload safely on route change

  return (
    <div className="tradingview-widget-container w-full">
      <div
        ref={widgetRef}
        className="tradingview-widget-container__widget"
      />
    </div>
  );
}

export default memo(CommoditiesTableData);
