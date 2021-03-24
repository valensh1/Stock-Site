import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function App(props) {
	const [DBWatchlist, setDBWatchlist] = useState([]);
	useEffect(() => {
		// Immediately Invoked Function Expression needed when use the async function with useEffect hook
		(async () => {
			try {
				const response = await fetch('/api/stocks');
				const data = await response.json();
				let dataToSort = await data;
				await dataToSort.map(stock => {
					stock.symbol = stock.symbol.toLowerCase();
				});
				let sortedList = await dataToSort.sort((a, b) => {
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
				// await sortedList.map(stock => {
				// 	stock.symbol = stock.symbol.toLowerCase();
				// });
				await setDBWatchlist(sortedList);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []); // This useEffect hook pulls data from MongoDB database upon initial rendering of the screen

	return (
		<div>
			{DBWatchlist.map((stock, index) => {
				return <h3>{stock.symbol}</h3>;
			})}
		</div>
	);
}
