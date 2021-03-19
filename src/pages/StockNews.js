import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PriceChart from '../components/PriceChart';
import App from './App';

const PolygonAPIKey = 'lb5t4CfGCkFI2pFpkTrfsZlaswHw8xIC';
const AlphaVantageAPIKey = process.env.ALPHA_VANTAGE_API_KEY;

export default function StockNews(props) {
	console.log(props);
	const [ticker, setTicker] = useState({
		symbol: '',
		lastPrice: 0
	});
	const [APINews, setAPINews] = useState([]);
	const tickerUpdate = useRef(null);
	const [closing, setClosing] = useState([]);
	const closingPrices = [];

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/stocks/${props.match.params.id}`);
				const data = await response.json();
				await setTicker(data);
				//console.log(data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			try {
				console.log(ticker);
				const response = await fetch(
					`https://api.polygon.io/v1/meta/symbols/${ticker.symbol}/news?perpage=50&page=1&apiKey=${PolygonAPIKey}`
				);
				console.log(response);
				const data = await response.json();
				console.log(data);
				console.log(data[0].title);
				await setAPINews(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [ticker]);

	useEffect(() => {
		(async () => {
			try {
				console.log(ticker.symbol);
				const response = await fetch(
					`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker.symbol.toUpperCase()}&outputsize=full&apikey=${AlphaVantageAPIKey}`
				);
				console.log(
					`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker.symbol.toUpperCase()}&apikey=${AlphaVantageAPIKey}`
				);
				//console.log(response);
				const data = await response.json();
				console.log(data);
				closingPrices.push(
					data['Time Series (Daily)']['2020-04-30']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2020-05-29']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2020-06-30']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2020-07-31']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2020-08-31']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2020-09-30']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2020-10-30']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2020-11-30']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2020-12-31']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2021-01-29']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2021-02-26']['5. adjusted close']
				);
				closingPrices.push(
					data['Time Series (Daily)']['2021-03-17']['5. adjusted close']
				);
				console.log(closingPrices);
				setClosing([...closing, closingPrices]);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [ticker]);

	const handleUpdate = () => {
		console.log('You clicked to update');
		const inputFieldtoModify = document.getElementById('ticker-update-input');
		const labelFieldToHide = document.getElementById('ticker-update-label');
		const buttonToHide = document.getElementById('ticker-update-button');
		inputFieldtoModify.style.visibility = 'visible';
		labelFieldToHide.style.visibility = 'visible';
		buttonToHide.style.visibility = 'visible';
	};

	const handleUpdateSubmit = async event => {
		console.log('You clicked to submit your update');
		try {
			const response = await fetch(`/api/stocks/${props.match.params.id}`, {
				method: 'PUT', //making a put request to database
				headers: {
					'Content-Type': 'application/json' // telling database we are going to send it json data
				},
				body: JSON.stringify({
					// this is converting the Javascript data we are sending to be updated to json data so our database understands it and can use it to update our database
					symbol: tickerUpdate.current.value, //useRef from input field to update original entry
					lastPrice: ticker.lastPrice //useRef from input field to update original entry
				})
			});
			const data = await response.json(); //json method here converts json to javascript
			setTicker(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<a href="/">
				<button>BACK</button>
			</a>
			<h1 className="stock-news-headers">
				<span>{ticker.symbol.toUpperCase()}</span> News
			</h1>
			<h4>${ticker.lastPrice}</h4>
			<PriceChart closing={closing} />
			<Link to={`/${ticker._id}/edit`}>
				<button onClick={handleUpdate}>Update Post</button>
			</Link>
			<br />
			<label id="ticker-update-label" htmlFor="ticker-update">
				Update Ticker
			</label>
			<input
				type="text"
				id="ticker-update-input"
				ref={tickerUpdate}
				defaultValue={ticker.symbol}
			></input>
			<button id="ticker-update-button" onClick={handleUpdateSubmit}>
				Send Update
			</button>
			<br />
			<br />
			<br />
			<br />
			<h1 className="text-success">Stock News</h1>
			{APINews.map(article => {
				return (
					<div className="stock-news-container">
						<div className="article-title">
							<a href={article.url} target="_blank">
								<h6>{article.title}</h6>
							</a>
						</div>
						<div className="article-image">
							<a href={article.url} target="_blank">
								<img src={article.image} />
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}
