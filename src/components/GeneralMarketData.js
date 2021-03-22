import React, { useEffect } from 'react';

const GeneralMarketData = () => {
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'https://financialmodelingprep.com/api/v3/quote/%5EGSPC,%5EDJI,%5EIXIC?apikey=339ab33c2826aa7fcd4a94b1d3a609a2'
				);
				const data = await response.json();
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return <div>This is the general market data component</div>;
};

export default GeneralMarketData;
