import React, { useState, useEffect } from 'react';
import AddSymbol from '../components/AddSymbol';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { DeleteSymbol } from '../components/DeleteSymbol';
import HomeIcon from '../components/HomeIcon';
import GeneralMarketData from '../components/GeneralMarketData';
import DatePicker from '../components/DatePicker';

const AlphaVantageAPIKey = process.env.ALPHA_VANTAGE_API_KEY;
const FinancialModelingAPI = process.env.FINANCIAL_MODELING_PREP_API_KEY;

export default function App(props) {
	const [DBWatchlist, setDBWatchlist] = useState([]);
	const [showDatabase, setShowDatabase] = useState('');
	let typedSymbol = '';
	let tickerSymbol = '';
	let cumulativeAPIData = {};
	const [dateFrmChild, setDateFrmChild] = useState(
		new Date().toISOString().substr(0, 10)
	); // Sets initial state to today's date);

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
		// Purpose of this function is that it takes an event as its argument which is the ticker symbol that the user types in the search bar and saves this ticker symbol in a variable called typedSymbol. This function is passed to the AddSymbol Component to capture the user's ticker symbol input
		typedSymbol = event.target.value; // event.target.value is the ticker symbol input by the user
		console.log(typedSymbol);
	};

	const handleSubmit = event => {
		// Purpose of this function is to sumbmit the user's ticker symbol input to the API to retrieve stock data and then store in the MongoDB database. This function is passed to the AddSymbol Component to submit the user's ticker symbol input.
		event.preventDefault(); // prevent the default form submission when user clicks ENTER or button to search for ticker symbol.
		console.log('You clicked submit'); // Verification that handleSubmit is working properly
		tickerSymbol = typedSymbol; // Creation of a new variable called tickerSymbol which is the same thing as typedSymbol
		console.log(typedSymbol, tickerSymbol); // Verification that typedSymbol and tickerSymbol are the same
		APIDataPull(); // invoke APIDataPull function which is a function that takes user's ticker symbol input and uses that input to fetch stock data about that particular ticker symbol
		document.getElementById('symbol-input').reset(); // Resets the form & leaves input field blank after user sumbmits the ticker symbol entered
	};

	const APIDataPull = async () => {
		// Once user submits their ticker symbol input this function is invoked. Function fetches stock data from Alpha Vantage API.
		try {
			const response = await fetch(
				// Fetches stock data from Alpha Vantage API and stores the API data it receives in a variable called response.
				`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${tickerSymbol.toUpperCase()}&apikey=${AlphaVantageAPIKey}`
			);
			const data = await response.json(); //Parses json object returned into a Javascript object and saved to a variable called data.
			console.log(data); // logs stock data received back from Alpha Vantage API
			cumulativeAPIData[tickerSymbol] = {
				/////// NEED TO ADD COMMENT HERE FOR WHAT THIS DOES!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				historical: data
			};
			console.log(cumulativeAPIData);
			sendToDB(data); // Invokes sendToDB function and passes data variable (data variable - is the stock data received from the Alpha Vantage API after its been converted from a JSON object into a valid Javascript object); sendToDB function takes the data object and sends it to be stored in our MongoDB database.
		} catch (error) {
			// If an error is caught in this process log the error message to user
			console.error(error);
		}
	};

	const sendToDB = async data => {
		// Once user submits form and stock API data is retrieved this function is invoked to send the relevant data we received from the Alpha Vantage API to our MongoDB database for storage.
		const watchlistData = {
			// Creation of a variable watchlistData which is an object that contains the ticker symbol and last stock price received from the Alpha Vantage API to be send to MongoDB database for storage.
			symbol: tickerSymbol,
			lastPrice: data['Time Series (Daily)'][dateFrmChild]['5. adjusted close'] // WOULD NEED TO ADJUST DATE HERE IF SOMETHING WRONG WITH DATE FOR SENDING TO DATABASE
		};
		try {
			const response = await axios.post('api/stocks', watchlistData); // Sending of user ticker symbol to MongoDB database for posting/creation of a new ticker symbol into our database for storage.
		} catch (error) {
			// If an error is caught in this process log the error message to user
			console.error(error);
		} finally {
			setShowDatabase(tickerSymbol); // Calling of useState hook setShowDatabase which updates the state for the brand new ticker symbol the user entered and because now the state has changed it forces React to re-render which will force our screen to render all the elements from our database including the newly entered symbol by the user.
		}
	};

	const changeStateAfterDelete = data => {
		setShowDatabase(data);
	};

	const stockFetches = async () => {
		let stockListing = [];
		DBWatchlist.map(stock => {
			stockListing.push(stock.symbol.toUpperCase());
		});
		stockListing = stockListing.join();
		console.log(stockListing);
		console.log(FinancialModelingAPI);
		const response = await fetch(
			`https://financialmodelingprep.com/api/v3/quote/${stockListing}?apikey=339ab33c2826aa7fcd4a94b1d3a609a2`
		);
		const data = await response.json();
		console.log(data);
	};
	stockFetches();

	let stockPrices = {
		amzn: 1000,
		aapl: 125,
		fb: 195
	};

	return (
		<div>
			<HomeIcon />
			<GeneralMarketData />
			<img id="bull-logo" src="https://i.imgur.com/MBzbnpg.png"></img>
			<div className="watchlist-overallContainer">
				<DatePicker todayDateChild={date => setDateFrmChild(date)} />
				<div id="stock-search-bar">
					<AddSymbol
						tickerSymbol={typedSymbol}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
				</div>
				<div className="watchlist-xSearchbar-container">
					<div className="watchlist-headers">
						<h6 id="symbol-header">Symbol</h6>
						<h6 id="last-price-header">Last Price</h6>
					</div>
					<div className="stock-list-container">
						{DBWatchlist.map((stock, index) => {
							return (
								<div
									className={stock.symbol}
									className="stock-symbol-container"
									key={stock._id}
								>
									{/* Passing of props such as stock.symbol to StockNews page */}
									<Link to={`/${stock._id}`} symbol={stock.symbol}>
										<h4 className="symbol">{stock.symbol}</h4>
										<h4 className="last-price" id="lastPrice">
											${stock.lastPrice}
										</h4>
										<h6>{stockPrices[stock.symbol]}</h6>
									</Link>
									<DeleteSymbol
										stockID={stock._id}
										changeState={changeStateAfterDelete}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
