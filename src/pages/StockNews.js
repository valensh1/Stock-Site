import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PriceChart from '../components/PriceChart';
import HomeIcon from '../components/Icons/HomeIcon';
import StockSpecificData from '../components/StockSpecificData';
import StockSpecificNews from '../components/StockSpecificNews';
import BackButton from '../components/BackButton';
import StyledNavBar from '../components/StyledNavBar';

export default function StockNews(props) {
	// console.log(props);
	const [ticker, setTicker] = useState('');
	const [stockSpecificAPIData, setStockSpecificAPIData] = useState([]);
	const [dailyClosingPrices, setDailyClosingPrices] = useState([]);
	const [stockSpecificNews, setStockSpecificNews] = useState([]);
	const [symbol, setSymbol] = useState('');

	// INITIAL RENDER - Retrieves ticker symbols from the database
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/stocks/${props.match.params.id}`); // Retrieves stock symbols from user watchlist in our database
				const data = await response.json();
				console.log(data);
				let tickerForSearch = data.symbol.toUpperCase();
				await setTicker(tickerForSearch); // Sets state for user ticker symbols stored in our database

				const APICall4Key = await fetch('/api/stocks/key'); // API Call to backend to retrieve API Key we want hidden from public view on Github
				const APIKeyData = await APICall4Key.json(); // API data sent from backend with our key.
				const APIKey = APIKeyData.key; // API Key

				const response2 = await fetch(
					`https://financialmodelingprep.com/api/v3/profile/${tickerForSearch}?apikey=${APIKey}` // API for stock specific profile information
				);
				const data2 = await response2.json();
				console.log(data2);

				const response3 = await fetch(
					`https://financialmodelingprep.com/api/v3/quote/${tickerForSearch}?apikey=${APIKey}` // API for stock specific quote information which includes closing prices, high, low price for last trading day ONLY
				);
				const data3 = await response3.json();
				console.log(data3);

				const response4 = await fetch(
					`https://financialmodelingprep.com/api/v3/historical-price-full/${tickerForSearch}?apikey=${APIKey}` // API for stock specific historical price information. Could maybe consolidate this and the one above in the future so I only have one fetch since I think they contain mostly the same information
				);
				const data4 = await response4.json();
				console.log(data4);

				const response5 = await fetch(
					`https://financialmodelingprep.com/api/v3/stock_news?tickers=${tickerForSearch}&limit=50&apikey=${APIKey}` // API for stock specific news articles
				);
				const data5 = await response5.json();
				console.log(data5);

				await setDailyClosingPrices([...dailyClosingPrices, data4]);
				await setStockSpecificAPIData([...data2, ...data3]); // sets state for 3 API calls above and ultimately passes this information down to children like the StockSpecificData Component and the PriceChart Component
				await setStockSpecificNews(data5);
				setSymbol(tickerForSearch);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []); // Empty brackets here means this useEffect hook only runs on initial render of screen

	return (
		<div id="stock-news-container">
			<StyledNavBar />
			{console.log(ticker)}
			{console.log(stockSpecificAPIData)}
			{console.log(dailyClosingPrices)}
			<StockSpecificData
				ticker={ticker}
				stockSpecificAPIData={stockSpecificAPIData}
			/>
			<PriceChart ticker={dailyClosingPrices} />
			<StockSpecificNews tickerNews={stockSpecificNews} />
		</div>
	);
}
