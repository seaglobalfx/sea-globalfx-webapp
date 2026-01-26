'use client';

import React, { useEffect, useRef, memo } from 'react';

function IndicesMarketData() {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    // 🔥 Clear previous widget (important for Next.js strict mode)
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
          title: 'Indices',
          symbols: [
            { s: 'FOREXCOM:SPXUSD', d: 'S&P 500 Index' },
            { s: 'FOREXCOM:NSXUSD', d: 'US 100 Cash CFD' },
            { s: 'FOREXCOM:DJI', d: 'Dow Jones Industrial Average Index' },
            { s: 'INDEX:NKY', d: 'Japan 225' },
            { s: 'INDEX:DEU40', d: 'DAX Index' },
            { s: 'FOREXCOM:UKXGBP', d: 'FTSE 100 Index' }
          ],
          originalTitle: 'Indices'
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

export default memo(IndicesMarketData);
