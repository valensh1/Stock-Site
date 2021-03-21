import React from 'react';

const Header = () => {
	return (
		<div className="header-container">
			<img
				className="image"
				id="wall-street-sign"
				src="https://i.imgur.com/jSXvuzP.jpg"
			/>
			<div id="title-image-container">
				<h1 className="text-center" id="title">
					ALL THINGS WALL STREET
				</h1>
				<img id="bull-drawing" src="https://i.imgur.com/MBzbnpg.png"></img>
				<img id="stock-logo" src="https://i.imgur.com/u2Lacve.png"></img>
			</div>
		</div>
	);
};

export default Header;
