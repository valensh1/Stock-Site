import React from 'react';

export const DeleteSymbol = props => {
	const handleDelete = async () => {
		console.log('You clicked on the delete button');
		try {
			const response = await fetch(`/api/stocks/${props.stockID}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			const response = await fetch('/api/stocks');
			const data = await response.json();
			props.changeState(data); //changeState is a prop that was passed from parent and data is being passed back up to parent to alter state at the parent level to re-render stock symbols from MongoDB database.
		}
	};
	return (
		<i
			id="trash-can"
			onClick={handleDelete}
			className="large red trash icon"
		></i>
	);
};
