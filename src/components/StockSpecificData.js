import React from 'react';
import StockNews from '../pages/StockNews';

const StockSpecificData = props => {
	console.log(props);
	const { ticker, stockSpecificAPIData } = props; // Destructuring of the props object so I don't need to use props in JSX tree below

	return (
		<div>
			{stockSpecificAPIData.length ? (
				<div>
					<h1>{stockSpecificAPIData[0].companyName}</h1>
					<h2>{ticker}</h2>
					<img src={stockSpecificAPIData[0].image}></img>
					<h4>Sector:{stockSpecificAPIData[0].sector}</h4>
					<h4>Market Cap: {stockSpecificAPIData[1].marketCap}</h4>
					<h4>Last Price: ${stockSpecificAPIData[1].price}</h4>
					<h4>Price Change: ${stockSpecificAPIData[1].change}</h4>
					<h4>% Change: {stockSpecificAPIData[1].changesPercentage}%</h4>
					<h4>Day High Price: ${stockSpecificAPIData[1].dayHigh}</h4>
					<h4>Day Low Price: ${stockSpecificAPIData[1].dayLow}</h4>
					<h4>Volume: {stockSpecificAPIData[1].volume}</h4>
					<h4>Avg. Volume: {stockSpecificAPIData[1].avgVolume}</h4>
					<h4>
						52 Week Range:{' '}
						{`$${stockSpecificAPIData[1].yearHigh}-$${stockSpecificAPIData[1].yearLow}`}
					</h4>
					<h4>
						50 Day Moving Average: $
						{stockSpecificAPIData[1].priceAvg50.toFixed(2) * 1}
					</h4>
					<h4>
						200 Day Moving Average: $
						{stockSpecificAPIData[1].priceAvg200.toFixed(2) * 1}
					</h4>
					<h4>PE Ratio: {stockSpecificAPIData[1].pe.toFixed(2) * 1}</h4>
					<h4>
						Next Earnings Announcement Date:{' '}
						{new Date(
							stockSpecificAPIData[1].earningsAnnouncement
						).toLocaleDateString()}
					</h4>
				</div>
			) : null}
		</div>
	);
};

export default StockSpecificData;
