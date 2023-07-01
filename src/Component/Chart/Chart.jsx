// TradingViewWidget.jsx

import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom'

let tvScriptLoadingPromise;

const Chart = () => {
  const onLoadScriptRef = useRef();

  const [getPair, getPairFunc] = useState()

  const location = useLocation()

  useEffect(
    () => {
      if(location.state){
        let Fpair = location.state.id
        let pair = Fpair.replace('/','')
        getPairFunc(pair)
      }else{
        let pair = 'GBPUSD'
        getPairFunc(pair)
      }
      
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_a4e05') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: `FX:${ getPair? getPair : 'GBPUSD'}`,
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_a4e05"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_a4e05'  style={{height: "500px"}} />
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
}

export default Chart