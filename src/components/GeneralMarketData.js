import React, { useEffect, useState } from 'react';

const GeneralMarketData = () => {
	const [APIData, setAPIData] = useState('0'); // Might need to adjust beginning state. This could cause below not to render.
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'https://financialmodelingprep.com/api/v3/quote/%5EGSPC,%5EDJI,%5EIXIC?apikey=339ab33c2826aa7fcd4a94b1d3a609a2'
				);
				const data = await response.json();
				console.log(data);
				console.log(data[0].price);
				await setAPIData(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [APIData]);

	return (
		<div>
			<h1>{APIData[0].price}</h1>
		</div>
	);
};

export default GeneralMarketData;
