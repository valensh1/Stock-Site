import React from 'react';

export const DeleteSymbol = props => {
	const handleDelete = async event => {
		event.stopPropagation(); // Stop the event from bubbling. This line of code might not be necessary and should test to see if actually need this
		console.log('You clicked on the delete button'); // Verification that delete button is hooked up properly
		try {
			// This try block is deleting data from our MongoDb database
			const response = await fetch(`/api/stocks/${props.stockID}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json(); // Recording of response. Probably don't need this line of code
			const response2 = await fetch('/api/stocks'); // New call to our backend controller to fetch data from our MongoDb database with the remaining symbols in our list AFTER DELETION
			const data2 = await response2.json(); // Await the data received back from our MongoDb database to then pass that data to our function below
			props.changeState(data2); //changeState is a prop that was passed from parent and data is being passed back up to parent to alter state at the parent level to re-render stock symbols from MongoDB database. This data from our database AFTER deletion ultimately gets fed to the changeStateAfterDelete function on the Watchlist.js file
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<i
			id="trash-can"
			onClick={handleDelete}
			className="huge red trash icon"
		></i>
	);
};
