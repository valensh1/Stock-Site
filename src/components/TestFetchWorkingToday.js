import React, { useState, useEffect, useRef } from 'react';
import { Line, defaults } from 'react-chartjs-2'; // Importing the Bar Chart type from the 'react-chartjs-2' library which essentially tells Charts.js that this is a bar chart. Need to import defaults as well if you are going to change defaults such as the position of the legend as in code below.
import StockNews from '../pages/StockNews';

const TestFetch = props => {
	console.log(props);
	const [rolling30DayClosing, setRolling30DayClosing] = useState([]);
	const [rolling30DayClosingDates, setRolling30DayClosingLabels] = useState([]);
	let fullAPIFetchArray = [];
	let rolling30DayClosingPrices = [];
	let datesFor30DayRollingClosingPrices = [];

	const testAPIKey = '339ab33c2826aa7fcd4a94b1d3a609a2';

	useEffect(() => {
		(async () => {
			console.log(
				`https://financialmodelingprep.com/api/v3/historical-price-full/${props.ticker}?apikey=${testAPIKey}`
			);
			const response = await fetch(
				`https://financialmodelingprep.com/api/v3/historical-price-full/${props.ticker}?apikey=${testAPIKey}` // API for stock specific historical price information
			);
			const data = await response.json();
			console.log(data);
			fullAPIFetchArray.push(...data.historical); // Complete historical API fetch
			console.log(fullAPIFetchArray);
			fullAPIFetchArray.map((day, i) => {
				if (i < 30) {
					rolling30DayClosingPrices.push(day.close);
					datesFor30DayRollingClosingPrices.push(day.date);
				}
			});

			console.log(rolling30DayClosingPrices);
			setRolling30DayClosing([
				...rolling30DayClosing,
				...rolling30DayClosingPrices
			]);
			setRolling30DayClosingLabels([
				...rolling30DayClosingDates,
				...datesFor30DayRollingClosingPrices
			]);
			console.log(rolling30DayClosing);
		})();
	}, []);

	// const historicalClosingPrices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	// const months = ['Jan', 'Feb', 'Mar', 'Apr'];
	const monthsForLabels = ['Mar', 'Mar'];

	return (
		<div>
			{rolling30DayClosing.length ? (
				<div id="line-chart">
					<Line // Per documentation you are supposed to have a key value pair here such as type: 'bar'; However, because we imported { Bar }  in code above from the 'react-chartjs-2' library we only need to create the <Bar Component here and close it at the end after we input all the lines of code between it. This is how it works with React.
						data={{
							labels: rolling30DayClosingDates, // Sets the x-axis labels that goes horizontally across screen. Place '' in the spot of the array where you don't want to show the label.
							datasets: [
								{
									label: 'Rolling 12 Month - Closing Stock Prices', // Label at top of bar chart that shows what each bar represents
									data: rolling30DayClosing, // Data set that is mapped out in bars
									backgroundColor: 'blue', // This is the actual color of the bars on the chart. If you do not use an array here it will make all the bars the same color; Example (backgroundColor: 'purple') will make all bars purple. If you make an array however with various colors each different bar will be a different color
									borderColor: 'blue', // This is the border you can put around a bar and you can have borders with different colors than the actuals bars themselves
									borderWidth: 10, // This is the border width or how big you want the borders around the bars to look. The bigger the number the thicker the border
									fill: false,
									borderWidth: 3,
									hoverBackgroundColor: 'rgba(153, 102, 255, 1)',
									pointRadius: 1,
									lineTension: 0
								}
							]
						}}
						// height={400} // Sets height of chart. Increase # to make chart bigger
						// width={600} // Sets width of chart.
						options={{
							// responsive: false,
							maintainAspectRatio: false, // This allows chart to appear on page without having to scroll to see entire chart. If you didn't have this you would have to scroll webpage to see bottom of chart and scroll back up to see the top. This allows entire chart to be on view of screen with no scrolling.
							scales: {
								yAxes: [
									{
										ticks: {
											beginAtZero: false // Changing yAxes to start at 0 so that you can see some chart data that barely has any data more closely otherwise no bar even really shows on
										}
									}
								]
							},
							legend: {
								// This is the 2nd key/value pair within options
								labels: {
									fontSize: 15 // This adjusts the label size font. The higher the number the bigger the text
								}
							}
						}}
					/>
				</div>
			) : null}
		</div>
	);
};

export default TestFetch;
