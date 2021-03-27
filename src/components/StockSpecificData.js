import { color } from 'd3-color';
import React from 'react';
import StockNews from '../pages/StockNews';

const StockSpecificData = props => {
	console.log(props);
	const { ticker, stockSpecificAPIData } = props; // Destructuring of the props object so I don't need to use props in JSX tree below

	return (
		<div id="stock-specific-data-container">
			{stockSpecificAPIData.length ? (
				<div>
					<div
						className="stock-specific-data"
						id="stock-specific-company-heading"
					>
						<h1>
							<span>{stockSpecificAPIData[0].companyName}</span>
						</h1>
						<h2>
							<span id="stock-specific-heading-ticker">{ticker}</span>
						</h2>
						<div id="stock-specific-heading-price">
							<h3>${stockSpecificAPIData[1].price}</h3>
							<h4
								style={
									stockSpecificAPIData[1].change > 0
										? { color: 'green' }
										: { color: 'red' }
								}
							>
								${stockSpecificAPIData[1].change}
							</h4>
							<h4
								style={
									stockSpecificAPIData[1].change > 0
										? { color: 'green' }
										: { color: 'red' }
								}
							>
								{stockSpecificAPIData[1].changesPercentage}%
							</h4>
						</div>
						<img src={stockSpecificAPIData[0].image}></img>
					</div>
					<div id="stock-specific-nonheading-section">
						<div id="data-leftside-chart">
							<div
								className="stock-specific-data"
								id="stock-specific-company-data"
							>
								<h2 id="company-data-header">Company Data</h2>
								<h4>Sector:{stockSpecificAPIData[0].sector}</h4>
								<h4>Market Cap: {stockSpecificAPIData[1].marketCap}</h4>
							</div>
							<div
								className="stock-specific-data"
								id="stock-specific-price-info"
							>
								<h2 id="price-header">Price Data</h2>
								<h4>Last Price: ${stockSpecificAPIData[1].price}</h4>
								<h4>Price Change: ${stockSpecificAPIData[1].change}</h4>
								<h4>% Change: {stockSpecificAPIData[1].changesPercentage}%</h4>
								<h4>Day High Price: ${stockSpecificAPIData[1].dayHigh}</h4>
								<h4>Day Low Price: ${stockSpecificAPIData[1].dayLow}</h4>
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
							</div>
						</div>
						<div id="data-rightside-chart">
							<div
								className="stock-specific-data"
								id="stock-specific-volume-info"
							>
								<h2 id="volume-header">Volume Data</h2>
								<h4>Volume: {stockSpecificAPIData[1].volume}</h4>
								<h4>Avg. Volume: {stockSpecificAPIData[1].avgVolume}</h4>
							</div>
							<div
								className="stock-specific-data"
								id="stock-specific-ratios-valuation"
							>
								<h2 id="valuation-header">Valuation</h2>
								<h4>
									PE Ratio:{' '}
									{stockSpecificAPIData[1].pe !== null
										? stockSpecificAPIData[1].pe.toFixed(2) * 1
										: null}
								</h4>
							</div>
						</div>
						<div className="stock-specific-data" id="stock-specific-other-info">
							<h4>
								Next Earnings Announcement Date:{' '}
								{new Date(
									stockSpecificAPIData[1].earningsAnnouncement
								).toLocaleDateString()}
							</h4>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default StockSpecificData;
