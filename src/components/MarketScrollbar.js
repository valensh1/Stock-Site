import React from 'react';

const MarketScrollbar = () => {
	return (
		<div id="stock-market-scrollbar">
			<iframe
				id="st_27004bc5418e40e7b73b63835741757c"
				frameBorder="4"
				scrolling="no"
				width="100%"
				height="30vh"
				src="https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=3D7697BDA18F48329B721B0823B7DBBC&symbols=ATVI;ADBE;AMD;AAPL;AMZN;AAL;T;BA;BABA;BAC;BBY;CAKE;CAT;CMG;C;COST;DAL;E;DIS;DOCU;DKNG;EA;ETSY;EXPE;FB;FDX;FCX;FND;GOOGL;GS;HD;HON;H;INTC;JBLU;JPM;KSS;LEN;LOW;LVS;LYFT;LULU;LUV;MA;MAR;MTCH;MCD;MGM;MMM;MSFT;NFLX;NKE;NIO;JWN;NUE;NVDA;OKTA;PINS;PLAY;PLNT;PYPL;PINS;BKNG;RH;ROKU;CRM;SHAK;SHOP;SNAP;SWK;SBUX;SQ;TGT;TSLA;TTWO;TWTR;UAA;UBER;ULTA;UPS;V;VZ;W;WFC;WMT;WYNN;ZM;&palette=Financial-Light&backgroundColor=b8bbd1&positiveColor=095e45&onload=st_27004bc5418e40e7b73b63835741757c"
			></iframe>
		</div>
	);
};

export default MarketScrollbar;
