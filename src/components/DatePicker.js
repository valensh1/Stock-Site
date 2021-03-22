import React, { useState } from 'react';

const DatePicker = props => {
	const [marketDay, setMarketDate] = useState(
		new Date().toISOString().substr(0, 10) // Sets initial state to today's date
	);
	const handleDate = event => {
		setMarketDate(event.target.value);
		console.log(marketDay);
		props.todayDateChild(event.target.value);
	};

	return (
		<div>
			<input id="date" type="date" value={marketDay} onChange={handleDate} />
		</div>
	);
};

export default DatePicker;
