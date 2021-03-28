import React, { useState, useEffect, useRef } from 'react';

const TestFetch = () => {
	const [fullDataFetch, setFullDataFetch] = useState([]);
	const [rolling30DayClosing, setRolling30DayClosing] = useState('');
	let fullAPIFetchArray = [];
	let rolling30DayClosingPrices = [];
	const testAPIKey = '339ab33c2826aa7fcd4a94b1d3a609a2';

	useEffect(() => {
		(async () => {
			const response = await fetch(
				`https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=${testAPIKey}` // API for stock specific historical price information
			);
			const data = await response.json();
			console.log(data);
			fullAPIFetchArray.push(...data.historical); // Complete historical API fetch
			console.log(fullAPIFetchArray);
			fullAPIFetchArray.map((day, i) => {
				i < 30 ? rolling30DayClosingPrices.push(day.close) : '';
			});
			console.log(rolling30DayClosingPrices);
			setRolling30DayClosing([
				...rolling30DayClosing,
				...rolling30DayClosingPrices
			]);
			console.log(rolling30DayClosing);
		})();
	}, []);

	return (
		<div>
			{/* {dataFetch.map(element => {
				return <h5>{element.close}</h5>;
			})} */}
			{rolling30DayClosing.length
				? rolling30DayClosing.map(day => {
						return <h2>{day}</h2>;
				  })
				: null}
		</div>
	);
};

export default TestFetch;
