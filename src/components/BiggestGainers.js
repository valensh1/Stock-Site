import React, { useState, useEffect } from 'react';

const BiggestGainers = () => {
	const [topGainers, setTopGainers] = useState('');
	useEffect(() => {
		(async () => {
			const APICall4Key = await fetch('/api/stocks/key'); // API Call to backend to retrieve API Key we want hidden from public view on Github
			const APIKeyData = await APICall4Key.json(); // API data sent from backend with our key.
			const APIKey = APIKeyData.key; // API Key
			const response = await fetch(
				`https://financialmodelingprep.com/api/v3/gainers?apikey=${APIKey}`
			);
			const data = await response.json();
			setTopGainers(data);
		})();
	}, []);

	return (
		<div className="top-gainers-container">
			<h1 id="top-gainer-header">Today's Top Gainers</h1>
			<table>
				<thead>
					<tr>
						{/* <th>Company</th> */}
						<th>Ticker</th>
						<th>Price</th>
						<th>$ Change</th>
						<th>% Change</th>
					</tr>
				</thead>
				{topGainers.length
					? topGainers.map((stock, index) => {
							return (
								<tr>
									{/* <td>{stock.companyName}</td> */}
									<td>{stock.ticker}</td>
									<td>${(stock.price * 1).toFixed(2) * 1}</td>
									<td>${(stock.changes * 1).toFixed(2) * 1}</td>
									<td>{stock.changesPercentage}</td>
								</tr>
							);
					  })
					: null}
			</table>
		</div>
	);
};

export default BiggestGainers;
