import React from 'react';

const MarketIndicesChart = () => {
	return (
		<div id="general-indices-chart">
			<iframe
				id="st_6e331a4ef8a644eb807e5a76e42ef670"
				frameBorder="4"
				scrolling="yes"
				src="https://api.stockdio.com/visualization/financial/charts/v1/MarketOverviewChart?app-key=3D7697BDA18F48329B721B0823B7DBBC&includeEquities=false&indices=DJI;SPX;IXIC&includeCommodities=false&includeCurrencies=false&dividends=true&splits=true&motif=Lizard&palette=Financial-Light&title=Market%20Overview&animate=true&onload=st_6e331a4ef8a644eb807e5a76e42ef670"
			></iframe>
		</div>
	);
};

export default MarketIndicesChart;
