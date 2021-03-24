import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { set } from 'mongoose';

const Watchlist = () => {
	const [DBWatchList, setDBWatchList] = useState([]);
	const [APIData, setAPIData] = useState([]);
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
				console.log(sortedList);
				let stockListing = [];
				sortedList.map(stock => {
					stockListing.push(stock.symbol.toUpperCase());
				});
				stockListing = stockListing.join();
				console.log(stockListing);
				const thirdPartyAPIresponse = await fetch(
					`https://financialmodelingprep.com/api/v3/quote/${stockListing}?apikey=339ab33c2826aa7fcd4a94b1d3a609a2`
				);
				const dataThirdParty = await thirdPartyAPIresponse.json();
				console.log(dataThirdParty);
				setAPIData(dataThirdParty);
				setDBWatchList(sortedList);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []); // This useEffect hook pulls data from MongoDB database upon initial rendering of the screen
	return (
		<div>
			<h1>DB Watchlist</h1>
			<h1>Stock API</h1>
			{DBWatchList.map((stock, index) => {
				console.log(DBWatchList);
				console.log(APIData);
				return (
					<div>
						<h3>{stock.symbol}</h3>
						<h3>{APIData[index].price}</h3>
					</div>
				);
			})}
			{/* {APIData.map((stock, index) => {
				return <h3>{stock.price}</h3>;
			})} */}
		</div>
	);
};

export default Watchlist;
