import React, { useState, useEffect } from 'react';
import AddSymbol from '../components/AddSymbol';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { DeleteSymbol } from '../components/DeleteSymbol';
import HomeIcon from '../components/HomeIcon';

export default function App(props) {
	const [DBWatchlist, setDBWatchlist] = useState([]);
	const [APIData, setAPIData] = useState(['AAPL']);
	const [newTickerSymbol, setNewTickerSymbol] = useState('');
	const [refreshedList, setRefreshedList] = useState(false);
	let typedSymbol = '';
	let newSymbolAdded = 'false'; // Flag to not let useEffect below which fetches API Data from Database to be a continuous re-rendering loop

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
	}, [newTickerSymbol, refreshedList]); // This useEffect hook pulls data from MongoDB database upon initial rendering of the screen

	useEffect(() => {
		(async () => {
			try {
				console.log(APIData);
				console.log(APIData[0]);
				console.log(APIData[0].price);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [APIData]);

	const sortDBWatchListAlphabetical = data => {
		data.map(stock => {
			stock.symbol = stock.symbol.toLowerCase();
		});
		let sortedList = data.sort((a, b) => {
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
		setRefreshedList(true);
	};

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
			console.log(dataThirdParty[0].price);
			await setAPIData(dataThirdParty); // might need to get rid of await here
			// console.log(APIData);
			// console.log(APIData[0].price);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = event => {
		// Purpose of this function is that it takes an event as its argument which is the ticker symbol that the user types in the search bar and saves this ticker symbol in a variable called typedSymbol. This function is passed to the AddSymbol Component to capture the user's ticker symbol input
		typedSymbol = event.target.value; // event.target.value is the ticker symbol input by the user
		console.log(typedSymbol);
	};

	const handleSubmit = event => {
		// Purpose of this function is to sumbmit the user's ticker symbol input to the API to retrieve stock data and then store in the MongoDB database. This function is passed to the AddSymbol Component to submit the user's ticker symbol input.
		event.preventDefault(); // prevent the default form submission when user clicks ENTER or button to search for ticker symbol.
		console.log('You clicked submit'); // Verification that handleSubmit is working properly
		console.log(typedSymbol); // Verification of variable typedSymbol
		prepareData4Database(); // invoke parepareData4Database function which is a function that takes user's ticker symbol input and uses that input to send to database
		document.getElementById('symbol-input').reset(); // Resets the form & leaves input field blank after user sumbmits the ticker symbol entered
	};

	const prepareData4Database = () => {
		// Once user submits their ticker symbol input this function is invoked. Function prepares data by converting data into a javascript object to then send to sendToDB function which ultimately sends data to the database
		const newSymbol = {
			symbol: typedSymbol,
			lastPrice: 0
		};
		sendToDB(newSymbol); // Invokes sendToDB function and passes newSymbol variable to sendToDB function which takes the newSymbol object and sends it to be stored in our MongoDB database.
	};

	const sendToDB = async newSymbol => {
		// Once user submits form and user input of ticker symbol is prepared and converted into a Javascript object this function is invoked to send the relevant data to our MongoDB database for storage.
		try {
			const response = await axios.post('api/stocks', newSymbol); // Sending of user ticker symbol to MongoDB database for posting/creation of a new ticker symbol into our database for storage.
		} catch (error) {
			// If an error is caught in this process log the error message to user
			console.error(error);
		} finally {
			setDBWatchlist([...DBWatchlist, newSymbol]); // Calling of useState hook setShowDatabase which updates the state for the brand new ticker symbol the user entered and because now the state has changed it forces React to re-render which will force our screen to render all the elements from our database including the newly entered symbol by the user.
			setNewTickerSymbol(newSymbol);
		}
	};

	const changeStateAfterDelete = data => {
		sortDBWatchListAlphabetical(data);
		console.log(data);
	};

	return (
		<div>
			<HomeIcon />
			<img id="bull-logo" src="https://i.imgur.com/MBzbnpg.png"></img>
			<div className="watchlist-overallContainer">
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
											${APIData[0]['price']}
										</h4>
										{/* {APIData.map((el, i) => {
											return (
												<div key={stock._id}>
													<h4>{el[0]['price']}</h4>
												</div>
											);
										})} */}
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
