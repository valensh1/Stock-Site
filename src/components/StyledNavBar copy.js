import React from 'react';
import { Link } from 'react-router-dom';

const StyledNavBar = () => {
	return (
		<nav className="navbar-container">
			<img id="bull-drawing" src="https://i.imgur.com/MBzbnpg.png"></img>
			<h1>ATWS</h1>
			<ul>
				<li>
					<Link to={'./'}>
						<i id="home-icon" className="large teal home icon"></i>
					</Link>
				</li>
				<li>
					<Link to={'./about'}>
						<a>About</a>
					</Link>
				</li>
				<li>
					<a>Services</a>
				</li>
				<li>
					<a>Contact Us</a>
				</li>
			</ul>
		</nav>
	);
};

export default StyledNavBar;
