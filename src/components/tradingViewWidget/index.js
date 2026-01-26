'use client';

import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const widgetRef = useRef(null);

    useEffect(() => {
        if (!widgetRef.current) return;

        // ✅ Clear old widget (important)
        widgetRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.src =
            'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
        script.type = 'text/javascript';
        script.async = true;

        script.innerHTML = JSON.stringify({
            market: 'forex',
            showToolbar: true,
            defaultColumn: 'overview',
            defaultScreen: 'general',
            isTransparent: false,
            locale: 'en',
            colorTheme: 'light',
            width: '100%',
            height: 649
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

export default memo(TradingViewWidget);
