import React, { useEffect, useState } from 'react';

const AlphaVantageAPIKey = process.env.ALPHA_VANTAGE_API_KEY;
const sp500 = 'SPY';
const dowJones = 'DIA';
const nasdaq = 'QQQ';
let sp500IntradayPrices = [];
let dowJonesIntradayPrices = [];
let nasdaqIntradayPrices = [];
let businessDay = 'true';
let dayOfWeek = new Date().getDay(); // Day of Week; Returns a number. Sunday = 0, Monday =1, Tuesday =2, etc.
if (dayOfWeek === 0 || dayOfWeek === 6) {
	businessDay = !businessDay;
	console.log(businessDay);
}

const GeneralMarketData = () => {
	const [sp500APIData, setsp500APIData] = useState('0');
	// const [APIData, setAPIData] = useState('0'); // Might need to adjust beginning state. This could cause below not to render.
	// API FETCH TO FINANCIAL MODELING PREP
	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const response = await fetch(
	// 				'https://financialmodelingprep.com/api/v3/quote/%5EGSPC,%5EDJI,%5EIXIC?apikey=339ab33c2826aa7fcd4a94b1d3a609a2'
	// 			);
	// 			const data = await response.json();
	// 			console.log(data);
	// 			console.log(data[0].price);
	// 			await setAPIData(data);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	})();
	// }, [APIData]);

	// API FETCH TO Alpha Vantage for SPY Market Data
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sp500.toUpperCase()}&interval=60min&apikey=${AlphaVantageAPIKey}`
				);
				console.log(
					`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sp500.toUpperCase()}&interval=60min&apikey=${AlphaVantageAPIKey}`
				);
				const data = await response.json();
				console.log(data);
				console.log(data['Time Series (60min)']['2021-03-19 20:00:00']);
				if (businessDay) {
				}

				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2020-04-30']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2020-05-29']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2020-06-30']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2020-07-31']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2020-08-31']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2020-09-30']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2020-10-30']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2020-11-30']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2020-12-31']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2021-01-29']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2021-02-26']['5. adjusted close']
				// );
				// sp500IntradayPrices.push(
				// 	data['Time Series (Daily)']['2021-03-17']['5. adjusted close']
				// );
				// console.log(sp500IntradayPrices);
				// setClosing([...closing, sp500IntradayPrices]);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return <div>{/* <h1>{APIData[0].price}</h1> */}</div>;
};

export default GeneralMarketData;
