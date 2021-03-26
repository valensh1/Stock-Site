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
					<h4>{stockSpecificAPIData[0].sector}</h4>
					<h4>{stockSpecificAPIData[0].mktCap}</h4>
					<h4>${stockSpecificAPIData[0].price}</h4>
					<h4>${stockSpecificAPIData[0].changes}</h4>
					<h4>{stockSpecificAPIData[0].range}</h4>
				</div>
			) : null}
		</div>
	);
};

export default StockSpecificData;
