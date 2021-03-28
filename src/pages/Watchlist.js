import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Used axios to make a POST request to database to add a new ticker symbol. To install axios just go to Terminal and type in npm i axios.
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomeIcon from '../components/HomeIcon'; // This is to import the home icon Component so user can click on this and go back to Home Page.
import AddSymbol from '../components/AddSymbol'; // This is to import the search bar Component which allows user add a new stock to their watchlist.
import { DeleteSymbol } from '../components/DeleteSymbol'; // This is to import the trash can icon so user can delete a symbol from their watchlist.

const Watchlist = () => {
	const [DBWatchList, setDBWatchList] = useState([]);
	const [APIData, setAPIData] = useState([]);
	const [refreshedList, setRefreshedList] = useState('false');
	let typedSymbol = '';
	const APIKey = '339ab33c2826aa7fcd4a94b1d3a609a2';

	// This useEffect is run immediately upon initial rendering of screen; Immediately Invoked Function Expression needed when use the async function with useEffect hook which is the parenthesis before async and the opening and closing parenthesis () at end.
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/stocks'); // Fetches stock symbols from our database; Makes a call to our back-end controller which then sends us the data from our MongoDB database to our React front-end
				const data = await response.json(); // Awaiting the response of data retrieval from our database and then taking the returned json object and converting it to a Javascript object by using the .json() method.
				let dataToSort = await data; // Creation of a variable dataToSort as we want to sort the data received from our database in alphabetical order by ticker symbol.

				// Loop/Map through our database listing and convert all ticker symbols to lowercase letters so they are sorted properly. Uppercase letters would be sorted differently such as Ab might not be placed next to ab because capital and lowercase are sorted differently.
				dataToSort.map(stock => {
					stock.symbol = stock.symbol.toLowerCase(); // Conversion of database list of our stocks to lowercase so sort works properly. As mentioned in comment directly above sorting behaves differently between capital and lowercase letters so therefore if you ensure all items are lowercased you ensure sorting as you would expect.
				});

				// code to sort list
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
				console.log(sortedList); // Verification of sorted list

				let stockListing = []; // Emtpy array to push stock symbols into for modification to ultimately get into a format to feed to the Financial Modeling Prep API for retrieval of stock information. Needs to be in a format such as FB,AAPL,AMZN,NFLX,GOOGL along with API keys etc.

				// Loop/Map through our database listing and convert all ticker symbols to uupercase letters so they are sorted properly. Uppercase letters would be sorted differently such as Ab might not be placed next to ab because capital and lowercase are sorted differently.
				sortedList.map(stock => {
					stockListing.push(stock.symbol.toUpperCase()); // Pushing of stock symbols retrieved from our database (converted to capitalized letters) into the empty StockListing array above to get into a format (batch format)for retrieval from Financial Modeling Prep API so we can get stock information for those particular ticker symbols.
				});
				stockListing = stockListing.join(); // Take the StockListing array of symbols that were pushed from our database (they are all capitalized) and use join method to get them out of the array and into a batch format to send with API request (format such as FB,AAPL,AMZN,NFLX,GOOGL)
				console.log(stockListing); // Verification of what stockListing variable looks like prior to send for API call

				// Making the API request to Financial Modeling Prep to retrieve information about ticker symbols retrieved from our database that are on our watchlist.
				const thirdPartyAPIresponse = await fetch(
					`https://financialmodelingprep.com/api/v3/quote/${stockListing}?apikey=${APIKey}`
				);
				const dataThirdParty = await thirdPartyAPIresponse.json(); // Awaiting the response from Financial Modeling Prep API and converting the json object sent back into a Javascript object through use of the .json() method so that we can use this to get data from about our stocks.
				console.log(dataThirdParty); // Verification of data sent back from the Financial Modeling Prep API
				await setAPIData(dataThirdParty); // Setting state of API data received back; Needed to insert this first because this took longer to process and if we didn't place this first we would have a race issue which was causing a render issue where there wasn't any data and it was returning my JSX below as undefined. By placing this first and awaiting this it waits till API data is set before going to next line of code which is setting our new Watchlist state for our database.
				setDBWatchList(sortedList); // Setting of state for the ticker symbols in our watchlist which is the symbols we retrieve straight from our MongoDB database. This is the main state which causes our list to re-render with the relevant information because everything is dependent on this list being set before we can fetch API calls for the ticker symbols in that list.
			} catch (error) {
				console.error(error); // If there is an error print the error
			}
		})();
	}, []); // This useEffect hook pulls data from MongoDB database upon initial rendering of the screen

	/*
Purpose of this useEffect is to run this code everytime a new ticker symbol gets added to the watchlist (refreshedList state changing triggers this code); 
Everytime a new symbol gets added we have to add the symbol to database then fetch all the symbols from our database (which will include the new symbol)
and then make a corresponding API call to Financial Modeling Prep API to re-fetch all the stock related information for all those symbols (including the new symbol just added) 
Immediately Invoked Function Expression needed when use the async function with useEffect hook
*/
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/stocks'); // Fetches stock symbols from our database; Makes a call to our back-end controller which then sends us the data from our MongoDB database to our React front-end
				const data = await response.json(); // Awaiting the response of data retrieval from our database and then taking the returned json object and converting it to a Javascript object by using the .json() method. No lines of code will run after this until this process is complete (await keyword causes other lines of code to wait)
				let dataToSort = await data; // Creation of a variable dataToSort as we want to sort the data received from our database in alphabetical order by ticker symbol.

				// Loop/Map through our database listing and convert all ticker symbols to lowercase letters so they are sorted properly. Uppercase letters would be sorted differently such as Ab might not be placed next to ab because capital and lowercase are sorted differently.
				dataToSort.map(stock => {
					stock.symbol = stock.symbol.toLowerCase(); // Conversion of database list of our stocks to lowercase so sort works properly. As mentioned in comment directly above sorting behaves differently between capital and lowercase letters so therefore if you ensure all items are lowercased you ensure sorting as you would expect.
				});

				// code to sort list
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
				console.log(sortedList); // Verification of sorted list

				let stockListing = []; // Emtpy array to push stock symbols into for modification to ultimately get into a format to feed to the Financial Modeling Prep API for retrieval of stock information. Needs to be in a format such as FB,AAPL,AMZN,NFLX,GOOGL along with API keys etc.

				// Loop/Map through our database listing and convert all ticker symbols to uupercase letters so they are sorted properly. Uppercase letters would be sorted differently such as Ab might not be placed next to ab because capital and lowercase are sorted differently.
				sortedList.map(stock => {
					stockListing.push(stock.symbol.toUpperCase()); // Pushing of stock symbols retrieved from our database (converted to capitalized letters) into the empty StockListing array above to get into a format (batch format)for retrieval from Financial Modeling Prep API so we can get stock information for those particular ticker symbols.
				});
				stockListing = stockListing.join(); // Take the StockListing array of symbols that were pushed from our database (they are all capitalized) and use join method to get them out of the array and into a batch format to send with API request (format such as FB,AAPL,AMZN,NFLX,GOOGL)
				console.log(stockListing); // Verification of what stockListing variable looks like prior to send for API call

				// Making the API request to Financial Modeling Prep to retrieve information about ticker symbols retrieved from our database that are on our watchlist. Main reason we are doing this is because we have to capture the new ticker symbol that was added.
				const thirdPartyAPIresponse = await fetch(
					`https://financialmodelingprep.com/api/v3/quote/${stockListing}?apikey=${APIKey}`
				);
				const dataThirdParty = await thirdPartyAPIresponse.json(); // Awaiting the response from Financial Modeling Prep API and converting the json object sent back into a Javascript object through use of the .json() method so that we can use this to get data from about our stocks.
				console.log(dataThirdParty); // Verification of data sent back from the Financial Modeling Prep API
				await setAPIData(dataThirdParty); // Setting state of API data received back; Needed to insert this first because this took longer to process and if we didn't place this first we would have a race issue which was causing a render issue where there wasn't any data and it was returning my JSX below as undefined. By placing this first and awaiting this it waits till API data is set before going to next line of code which is setting our new Watchlist state for our database.
				setDBWatchList(sortedList); // Setting of state for the ticker symbols in our watchlist which is the symbols we retrieve straight from our MongoDB database. This is the main state which causes our list to re-render with the relevant information because everything is dependent on this list being set before we can fetch API calls for the ticker symbols in that list.
			} catch (error) {
				console.error(error); // If there is an error print the error
			}
		})();
	}, [refreshedList]); // This useEffect hook causes code above to run every time their is a change to the refreshedList state

	// Purpose of this function is that it takes an event as its argument which is the ticker symbol that the user types in the search bar and saves this ticker symbol in a variable called typedSymbol. This function is passed to the AddSymbol Component to capture the user's ticker symbol input
	const handleChange = event => {
		typedSymbol = event.target.value; // event.target.value is the ticker symbol input by the user
		console.log(typedSymbol); // Verification of symbol typed in
	};

	// Purpose of this function is to sumbmit the user's ticker symbol input to our backend controller to then be POSTED to the MongoDB database which then triggers an API call to Financial Modeling Prep to receive the stock data for our symbols in our watchlist that reside in our database.
	const handleSubmit = event => {
		event.preventDefault(); // prevent the default form submission when user hits ENTER or clicks the hour glass button to search for ticker symbol.
		console.log('You clicked submit'); // Verification that handleSubmit is working properly
		console.log(typedSymbol); // Verification of variable typedSymbol before sending to database
		prepareData4Database(); // invoke parepareData4Database function which is a function that takes user's ticker symbol input and uses that input to send to database
		document.getElementById('symbol-input').reset(); // Resets the form & leaves input field blank after user sumbmits the ticker symbol entered
	};

	// Purpose of this function is once user submits their ticker symbol input this function is invoked. Function prepares data by converting data into a javascript object to then send to sendToDB function which ultimately sends data to the database
	const prepareData4Database = () => {
		const newSymbol = {
			// Object that MUST match our MongoDb schema
			symbol: typedSymbol,
			lastPrice: 0
		};
		sendToDB(newSymbol); // Invokes sendToDB function and passes newSymbol variable (which is the new symbol user wants to add to watchlist) to sendToDB function which takes the newSymbol object and sends it to be stored in our MongoDB database.
	};

	// Purpose of this function is once user submits form and user input of ticker symbol is prepared and converted into a Javascript object that matches our MongoDb schema this function is invoked to send the relevant data to our MongoDB database for storage.
	const sendToDB = async newSymbol => {
		try {
			let response = await axios.post('api/stocks', newSymbol); // Sending of user ticker symbol to MongoDB database for posting/creation of a new ticker symbol into our database for storage.
			response = await fetch('/api/stocks'); // Fetches stock symbols from our database; Makes a call to our back-end controller which then sends us the data from our MongoDB database to our React front-end
			const data = await response.json(); // Awaiting the response of data retrieval from our database and then taking the returned json object and converting it to a Javascript object by using the .json() method. No lines of code will run after this until this process is complete (await keyword causes other lines of code to wait)
			let dataToSort = await data; // Creation of a new variable dataToSort so we can sort data

			// Loop/Map through our database listing and convert all ticker symbols to lowercase letters so they are sorted properly. Uppercase letters would be sorted differently such as Ab might not be placed next to ab because capital and lowercase are sorted differently.
			dataToSort.map(stock => {
				stock.symbol = stock.symbol.toLowerCase(); // Conversion of database list of our stocks to lowercase so sort works properly. As mentioned in comment directly above sorting behaves differently between capital and lowercase letters so therefore if you ensure all items are lowercased you ensure sorting as you would expect.
			});

			// code to sort list
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
			console.log(sortedList); // Verification of sorted list

			let stockListing = []; // Emtpy array to push stock symbols into for modification to ultimately get into a format to feed to the Financial Modeling Prep API for retrieval of stock information. Needs to be in a format such as FB,AAPL,AMZN,NFLX,GOOGL along with API keys etc.

			// Loop/Map through our database listing and convert all ticker symbols to uppercase letters so they are sorted properly. Uppercase letters would be sorted differently such as Ab might not be placed next to ab because capital and lowercase are sorted differently.
			sortedList.map(stock => {
				stockListing.push(stock.symbol.toUpperCase());
			});
			stockListing = stockListing.join(); // Take the StockListing array of symbols that were pushed from our database (they are all capitalized) and use join method to get them out of the array and into a batch format to send with API request (format such as FB,AAPL,AMZN,NFLX,GOOGL)
			console.log(stockListing); // Verification of what stockListing variable looks like prior to send for API call

			// Making the API request to Financial Modeling Prep to retrieve information about ticker symbols retrieved from our database that are on our watchlist. Main reason we are doing this is because we have to capture the new ticker symbol that was added.
			const thirdPartyAPIresponse = await fetch(
				`https://financialmodelingprep.com/api/v3/quote/${stockListing}?apikey=${APIKey}`
			);
			const dataThirdParty = await thirdPartyAPIresponse.json(); // Awaiting the response from Financial Modeling Prep API and converting the json object sent back into a Javascript object through use of the .json() method so that we can use this to get data from about our stocks.
			console.log(dataThirdParty); // Verification of data sent back from the Financial Modeling Prep API
			await setAPIData(dataThirdParty); // Setting state of API data received back; Needed to insert this first because this took longer to process and if we didn't place this first we would have a race issue which was causing a render issue where there wasn't any data and it was returning my JSX below as undefined. By placing this first and awaiting this it waits till API data is set before going to next line of code which is setting our new Watchlist state for our database.
			setDBWatchList(sortedList); // Setting of state for the ticker symbols in our watchlist which is the symbols we retrieve straight from our MongoDB database. This is the main state which causes our list to re-render with the relevant information because everything is dependent on this list being set before we can fetch API calls for the ticker symbols in that list.
		} catch (error) {
			// If an error is caught in this process log the error message to user
			console.error(error);
		}
	};

	// Purpose of this method is to take the data passed in as argument from the DeleteSymbol Component (props.changeState(data2)) - changeState is the name given to the prop passed from below over to the DeleteSymbol Component. The DeleteSymbol component gets the listing of our ticker symbols in our database AFTER deletion and sends data back and passes that data ultimately back to this function
	const changeStateAfterDelete = data => {
		console.log(data); // Verification of data being passed into function
		sortDBWatchListAlphabetical(data); // Passing of ticker symbol listing received back from our database AFTER DELETION over to the sortDBWatchListAlphabetical function as an argument for this data to be sorted
	};

	// Purpose of this function is to sort the data received back from the database AFTER DELETION of a ticker symbol to ultimately be sorted again and into a format to be fed to the stock API from Financial Modeling Prep so that we can pull the stock API data for the remaining symbols AFTER DELETION
	const sortDBWatchListAlphabetical = async data => {
		try {
			// Loop/Map through our database listing and convert all ticker symbols to lowercase letters so they are sorted properly. Uppercase letters would be sorted differently such as Ab might not be placed next to ab because capital and lowercase are sorted differently.
			data.map(stock => {
				stock.symbol = stock.symbol.toLowerCase(); // Conversion of database list of our stocks to lowercase so sort works properly. As mentioned in comment directly above sorting behaves differently between capital and lowercase letters so therefore if you ensure all items are lowercased you ensure sorting as you would expect.
			});

			// code to sort list
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

			let stockListing = []; // Emtpy array to push stock symbols into for modification to ultimately get into a format to feed to the Financial Modeling Prep API for retrieval of stock information. Needs to be in a format such as FB,AAPL,AMZN,NFLX,GOOGL along with API keys etc.

			// Loop/Map through our database listing and convert all ticker symbols to uppercase letters so they are sorted properly. Uppercase letters would be sorted differently such as Ab might not be placed next to ab because capital and lowercase are sorted differently.
			sortedList.map(stock => {
				stockListing.push(stock.symbol.toUpperCase());
			});
			stockListing = stockListing.join(); // Take the StockListing array of symbols that were pushed from our database (they are all capitalized) and use join method to get them out of the array and into a batch format to send with API request (format such as FB,AAPL,AMZN,NFLX,GOOGL)
			console.log(stockListing); // Verification of what stockListing variable looks like prior to send for API call

			// Making the API request to Financial Modeling Prep to retrieve information about ticker symbols retrieved from our database that are on our watchlist. Main reason we are doing this is because we have to capture the new ticker symbol that was added.
			const thirdPartyAPIresponse = await fetch(
				`https://financialmodelingprep.com/api/v3/quote/${stockListing}?apikey=${APIKey}`
			);
			const dataThirdParty = await thirdPartyAPIresponse.json(); // Awaiting the response from Financial Modeling Prep API and converting the json object sent back into a Javascript object through use of the .json() method so that we can use this to get data from about our stocks.
			console.log(dataThirdParty); // Verification of data sent back from the Financial Modeling Prep API
			setRefreshedList(!refreshedList); // setRefreshedList state; This extra state was needed to cause a re-render of the duplicate stock information that occurs in next line of code in our APIData state which is then attached to a useEffect hook that runs each time this refreshedList state changes and all that useEffect hook does is it performs a fresh pull of symbols from our database along with a fresh API call from Financial Modeling Prep for our stock information to display all our symbols and correct last prices AFTER DELETION of a symbol occurs therefore fixing any duplicate issues that could arise
			/* 
This line of code (directly below) solved my issue of when deleting code it would give me an error because it was saying price could not be defined because somehow it was rendering DBWatchlist first 
and had APIData with no data in it so it was throwing an error of price undefined. By setting APIData to spreading what was in there before and then taking the new sorted list and 
combining them solved the problem of the APIData not having anything in there at time of render. Even though the state is being doubled up with duplicate data it is fixed with a subsequent 
useEffect hook which basically does a fresh pull of ticker symbols from the database and then does a fresh pull from the Financial Modeling Prep API to get the relevent stock information. 
Need to put this before the setDBWatchList since it has a race condition and also needed to await this so setDBWatchlist doesn't run until this is complete.		
*/
			await setAPIData([...APIData, dataThirdParty]); // Line of code that caused me problems mentioned in big comment above
			setDBWatchList(sortedList); // Setting of state for the ticker symbols in our watchlist which is the symbols we retrieve straight from our MongoDB database. This is the main state which causes our list to re-render with the relevant information because everything is dependent on this list being set before we can fetch API calls for the ticker symbols in that list.
		} catch (error) {
			console.error(error); // If an error is caught in this process log the error message to user
		}
	};

	return (
		<div>
			<HomeIcon />
			<img id="bull-logo" src="https://i.imgur.com/MBzbnpg.png" />
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
						{DBWatchList.map((stock, index) => {
							// console.log(DBWatchList);
							// console.log(APIData);
							return (
								<div
									className={stock.symbol}
									className="stock-symbol-container"
									key={stock._id}
								>
									<Link to={`/${stock._id}`} symbol={stock.symbol}>
										<h4 className="symbol">{stock.symbol}</h4>
										<h4 className="last-price" id="lastPrice">
											${APIData[index].price.toFixed(2) * 1}
										</h4>
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
};

export default Watchlist;
