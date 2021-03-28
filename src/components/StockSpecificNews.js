import React from 'react';

const StockSpecificNews = props => {
	console.log(props);
	const { tickerNews } = props; // Destructuring the props array so I don't need to keep typing in props
	console.log(tickerNews);
	console.log(tickerNews[1]);

	return (
		<div id="stock-specific-articles-container">
			{console.log(tickerNews)}
			{tickerNews.length
				? tickerNews.map((ticker, index) => {
						return (
							<div id="stock-specific-articles-content">
								<h6>{ticker.site}</h6>
								<h3>{ticker.title}</h3>
								<a href={ticker.url} target="_blank">
									<img src={ticker.image}></img>
								</a>
								<p>{ticker.text}</p>
							</div>
						);
				  })
				: null}
		</div>
	);
};

export default StockSpecificNews;
