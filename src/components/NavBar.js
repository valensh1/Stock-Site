import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div>
			<nav className="NavBar">
				<Link to={`/`}>
					<i class="large home icon"></i>
				</Link>
				{props.routes.map(({ key, path }) => (
					<Link key={key} to={path}>
						{key}
					</Link>
				))}
			</nav>
		</div>
	);
};

export default NavBar;
