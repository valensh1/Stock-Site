import React from 'react';

const AddSymbol = props => {
	return (
		<form id="symbol-input">
			<div className="ui icon input">
				<input
					id="symbol-search"
					type="text"
					placeholder="Symbol"
					value={props.typedSymbol}
					onChange={props.handleChange}
				/>
				<button onClick={props.handleSubmit}>
					<i className="inverted large circular search link icon"></i>
				</button>
			</div>
		</form>
	);
};

export default AddSymbol;
