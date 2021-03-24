import React from 'react';

export const DeleteSymbol = props => {
	const handleDelete = async event => {
		event.stopPropagation();
		console.log('You clicked on the delete button');
		try {
			const response = await fetch(`/api/stocks/${props.stockID}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			const response2 = await fetch('/api/stocks');
			const data2 = await response2.json();
			props.changeState(data2); //changeState is a prop that was passed from parent and data is being passed back up to parent to alter state at the parent level to re-render stock symbols from MongoDB database.
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
