import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function App(props) {
	const [DBWatchlist, setDBWatchlist] = useState([]);
	const [APIData, setAPIData] = useState([]);
	const [showDatabase, setShowDatabase] = useState('');

	useEffect(() => {
		// Immediately Invoked Function Expression needed when use the async function with useEffect hook
		(async () => {
			try {
				const response = await fetch('/api/stocks');
				const data = await response.json();
				let dataToSort = await data;
				dataToSort.map(stock => {
					stock.symbol = stock.symbol.toLowerCase();
				});
				let sortedList = dataToSort.sort((a, b) => {
					let tickerA = a.symbol;
					let tickerB = b.symbol;
					if (tickerA < tickerB) {
						return -1;
					}
					if (tickerA > tickerB) {
						return 1;
					}
					return 0;
				});
				setDBWatchlist(sortedList);
				stockAPIPull(sortedList);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []); // This useEffect hook pulls data from MongoDB database upon initial rendering of the screen

	// THIRD PARTY API CALL FOR LATEST STOCK PRICES TO FILL WATCHLIST
	const stockAPIPull = async list => {
		try {
			console.log(list);
			let stockListing = [];
			list.map(stock => {
				stockListing.push(stock.symbol.toUpperCase());
			});
			stockListing = stockListing.join();
			console.log(stockListing);
			const thirdPartyAPIresponse = await fetch(
				`https://financialmodelingprep.com/api/v3/quote/${stockListing}?apikey=339ab33c2826aa7fcd4a94b1d3a609a2`
			);
			const dataThirdParty = await thirdPartyAPIresponse.json();
			console.log(dataThirdParty);
			await setAPIData(dataThirdParty);
		} catch (error) {
			console.error(error);
		}
	};

	// useEffect(() => {
	// 	// Immediately Invoked Function Expression needed when use the async function with useEffect hook
	// 	(async () => {
	// 		try {
	// 			const response = await fetch('/api/stocks');
	// 			const data = await response.json();
	// 			let dataToSort = await data;
	// 			await dataToSort.map(stock => {
	// 				stock.symbol = stock.symbol.toLowerCase();
	// 			});
	// 			let sortedList = await dataToSort.sort((a, b) => {
	// 				let tickerA = a.symbol;
	// 				let tickerB = b.symbol;
	// 				if (tickerA < tickerB) {
	// 					return -1;
	// 				}
	// 				if (tickerA > tickerB) {
	// 					return 1;
	// 				}
	// 				return 0;
	// 			});
	// 			await setDBWatchlist(sortedList);
	// 			console.log('THIS EFFECT IS RUNNING');
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	})();
	// }, [showDatabase]); // This useEffect hook pulls data from MongoDB database upon every change to showDatabase which is updated after user enters ticker symbol in input field and then submits.

	return (
		<div>
			{DBWatchlist.map((stock, index) => {
				return <h3>{stock.symbol}</h3>;
			})}
		</div>
	);
}
