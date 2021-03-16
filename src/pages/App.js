import React, { useState, useEffect } from 'react';
import AddSymbol from '../components/AddSymbol';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { DeleteSymbol } from '../components/DeleteSymbol';

const AlphaVantageAPIKey = process.env.ALPHA_VANTAGE_API_KEY;

export default function App(props) {
	const [DBWatchlist, setDBWatchlist] = useState([]);
	const [showDatabase, setShowDatabase] = useState('');
	let typedSymbol = '';
	let tickerSymbol = '';
	let cumulativeAPIData = {};

	useEffect(() => {
		// Immediately Invoked Function Expression needed when use the async function with useEffect hook
		(async () => {
			try {
				const response = await fetch('/api/stocks');
				const data = await response.json();
				console.log(data);
				setDBWatchlist(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []); // This useEffect hook pulls data from MongoDB database upon initial rendering of the screen

	useEffect(() => {
		// Immediately Invoked Function Expression needed when use the async function with useEffect hook
		(async () => {
			try {
				const response = await fetch('/api/stocks');
				const data = await response.json();
				console.log(data);
				setDBWatchlist(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [showDatabase]); // This useEffect hook pulls data from MongoDB database upon every change to showDatabase which is updated after user enters ticker symbol in input field and then submits.

	const handleChange = event => {
		typedSymbol = event.target.value;
		console.log(typedSymbol);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log('You clicked submit');
		tickerSymbol = typedSymbol;
		console.log(typedSymbol, tickerSymbol);
		APIDataPull();
		document.getElementById('symbol-input').reset(); // Resets the form & leaves input field blank after user sumbmits the ticker symbol entered
	};

	const APIDataPull = async () => {
		try {
			const response = await fetch(
				`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${tickerSymbol.toUpperCase()}&apikey=${AlphaVantageAPIKey}`
			);
			const data = await response.json(); //Parses json object returned into a Javascript object
			console.log(data);
			cumulativeAPIData[tickerSymbol] = {
				historical: data
			};
			console.log(cumulativeAPIData);
			sendToDB(data);
		} catch (error) {
			console.error(error);
		}
	};

	const sendToDB = async data => {
		const watchlistData = {
			symbol: tickerSymbol,
			lastPrice: data['Time Series (Daily)']['2021-02-26']['5. adjusted close']
		};
		try {
			const response = await axios.post('api/stocks', watchlistData);
		} catch (error) {
			console.error(error);
		} finally {
			setShowDatabase(tickerSymbol);
		}
	};

	const changeStateAfterDelete = data => {
		setShowDatabase(data);
	};

	return (
		<div className="watchlist-container">
			<AddSymbol
				tickerSymbol={typedSymbol}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			<div className="watchlist-header-container">
				<div className="watchlist-headers">
					<h6 id="symbol-header">Symbol</h6>
					<h6 id="last-price-header">Last Price</h6>
				</div>
				<div className="stock-list-container">
					{DBWatchlist.map((stock, index) => {
						return (
							<ul
								className={stock.symbol}
								className="stock-symbol-container"
								key={stock._id}
							>
								<li className="symbol">{stock.symbol}</li>
								<li className="last-price">${stock.lastPrice}</li>
								<DeleteSymbol
									stockID={stock._id}
									changeState={changeStateAfterDelete}
								/>
							</ul>
						);
					})}
				</div>
			</div>
		</div>
	);
}
