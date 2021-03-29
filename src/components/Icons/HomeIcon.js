import React from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = () => {
	return (
		<div id="home-icon-container">
			<Link to={`/`}>
				<i id="home-icon" className="huge teal home icon"></i>
			</Link>
		</div>
	);
};

export default HomeIcon;
