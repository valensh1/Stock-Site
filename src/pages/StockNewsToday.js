import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PriceChart from '../components/PriceChart';
import HomeIcon from '../components/HomeIcon';
import StockSpecificData from '../components/StockSpecificData';
import TestFetch from '../components/TestFetch';

const PolygonAPIKey = 'lb5t4CfGCkFI2pFpkTrfsZlaswHw8xIC';
const AlphaVantageAPIKey = process.env.ALPHA_VANTAGE_API_KEY;
const FinancialModelingAPIKey = '339ab33c2826aa7fcd4a94b1d3a609a2';

export default function StockNews(props) {
	// console.log(props);
	const [ticker, setTicker] = useState('');
	const [stockSpecificAPIData, setStockSpecificAPIData] = useState([]);
	const [dailyClosingPrices, setDailyClosingPrices] = useState([]);
	const [symbol, setSymbol] = useState('');
	// const dailyClosingPrices = [];

	// INITIAL RENDER - Retrieves ticker symbols from the database
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/stocks/${props.match.params.id}`); // Retrieves stock symbols from user watchlist in our database
				const data = await response.json();
				console.log(data);
				let tickerForSearch = data.symbol.toUpperCase();
				await setTicker(tickerForSearch); // Sets state for user ticker symbols stored in our database
				const response2 = await fetch(
					`https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=${FinancialModelingAPIKey}` // API for stock specific profile information
				);
				const data2 = await response2.json();
				console.log(data2);
				const response3 = await fetch(
					`https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${FinancialModelingAPIKey}` // API for stock specific quote information
				);
				const data3 = await response3.json();
				console.log(data3);
				const response4 = await fetch(
					`https://financialmodelingprep.com/api/v3/historical-price-full/${tickerForSearch}?apikey=${FinancialModelingAPIKey}` // API for stock specific historical price information
				);
				const data4 = await response4.json();
				console.log(data4);
				await setDailyClosingPrices([...dailyClosingPrices, data4]);
				await setStockSpecificAPIData([...data2, ...data3]); // sets state for 3 API calls above and ultimately passes this information down to children like the StockSpecificData Component and the PriceChart Component
				setSymbol(tickerForSearch);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []); // Empty brackets here means this useEffect hook only runs on initial render of screen

	return (
		<div id="stock-news-container">
			<HomeIcon />
			{console.log(ticker)}
			{console.log(stockSpecificAPIData)}
			{console.log(dailyClosingPrices)}
			<StockSpecificData
				ticker={ticker}
				stockSpecificAPIData={stockSpecificAPIData}
			/>
			{/* <PriceChart dailyClosingPrices={dailyClosingPrices} /> */}
			<TestFetch ticker={'GOOGL'} />
		</div>
	);
}
