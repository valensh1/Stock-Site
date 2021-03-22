import React from 'react';
import { Link } from 'react-router-dom';

const HomeIcon = () => {
	return (
		<div>
			<Link to={`/`}>
				<i class="huge teal home icon"></i>
			</Link>
		</div>
	);
};

export default HomeIcon;
