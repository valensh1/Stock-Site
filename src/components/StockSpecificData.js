import React from 'react';

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
						<h1>{stockSpecificAPIData[0].companyName}</h1>
						<h2 id="stock-specific-heading-ticker">{ticker}</h2>
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
						<a href={stockSpecificAPIData[0].website} target="_blank">
							<img src={stockSpecificAPIData[0].image}></img>
						</a>
					</div>
					<div id="stock-specific-nonheading-section">
						<div id="data-leftside-chart">
							<div
								className="stock-specific-data"
								id="stock-specific-company-data"
							>
								<h1 id="company-data-header" className="bg-dark text-info">
									Company Data
								</h1>
								<h4>
									Sector: <span>{stockSpecificAPIData[0].sector}</span>
								</h4>
								<h4>
									Market Cap: <span>{stockSpecificAPIData[1].marketCap}</span>
								</h4>
							</div>
							<div
								className="stock-specific-data"
								id="stock-specific-price-info"
							>
								<h1 id="price-header" className="bg-dark text-info">
									Price Data
								</h1>
								<h4>
									Last Price:{' '}
									<span id="last-price" className="more-spacing">
										${stockSpecificAPIData[1].price.toFixed(2) * 1}
									</span>
								</h4>
								<h4>
									Price Change:{' '}
									<span id="price-change" className="more-spacing">
										${stockSpecificAPIData[1].change.toFixed(2) * 1}
									</span>
								</h4>
								<h4>
									% Change:{' '}
									<span id="percent-change" className="more-spacing">
										{stockSpecificAPIData[1].changesPercentage}%
									</span>
								</h4>
								<h4>
									Day High Price:{' '}
									<span className="more-spacing">
										${stockSpecificAPIData[1].dayHigh.toFixed(2) * 1}
									</span>
								</h4>
								<h4>
									Day Low Price:{' '}
									<span className="more-spacing">
										${stockSpecificAPIData[1].dayLow.toFixed(2) * 1}
									</span>
								</h4>
								<h4>
									52 Week Range:
									<span>
										{`$${stockSpecificAPIData[1].yearHigh.toFixed(2) *
											1}-$${stockSpecificAPIData[1].yearLow.toFixed(2) * 1}`}
									</span>
								</h4>
								<h4>
									50 Day Moving Average:
									<span>
										{' '}
										${stockSpecificAPIData[1].priceAvg50.toFixed(2) * 1}
									</span>
								</h4>
								<h4>
									200 Day Moving Average: $
									<span>
										{stockSpecificAPIData[1].priceAvg200.toFixed(2) * 1}
									</span>
								</h4>
							</div>
						</div>
						<div id="data-rightside-chart">
							<div
								className="stock-specific-data"
								id="stock-specific-volume-info"
							>
								<h1 id="volume-header" className="bg-dark text-info">
									Volume Data
								</h1>
								<h4>
									Volume: <span>{stockSpecificAPIData[1].volume}</span>
								</h4>
								<h4>
									Avg. Volume: <span>{stockSpecificAPIData[1].avgVolume}</span>
								</h4>
							</div>
							<div
								className="stock-specific-data"
								id="stock-specific-ratios-valuation"
							>
								<h1 id="valuation-header" className="bg-dark text-info">
									Valuation
								</h1>
								<h4>
									PE Ratio:{' '}
									<span>
										{stockSpecificAPIData[1].pe !== null
											? stockSpecificAPIData[1].pe.toFixed(2) * 1
											: null}
									</span>
								</h4>
							</div>
						</div>
						<div className="stock-specific-data" id="stock-specific-other-info">
							<h6 id="company-description-header" className="bg-dark text-info">
								Company Description
							</h6>
							<p id="company-description">
								{stockSpecificAPIData[0].description}
							</p>
							<h4 id="earnings-announcement-container">
								Next Earnings Announcement Date:{' '}
								<span id="earnings-announcement">
									{new Date(
										stockSpecificAPIData[1].earningsAnnouncement
									).toLocaleDateString()}
								</span>
							</h4>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default StockSpecificData;
