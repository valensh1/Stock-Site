import React from 'react';
import PhoneIcon from './Icons/PhoneIcon';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="locations-container-footer">
				<h1>Locations</h1>
				<div className="footer-item">
					<h4>Los Angeles</h4>
				</div>
				<div className="footer-item">
					<h4>Chicago</h4>
				</div>
				<div className="footer-item">
					<h4>New York</h4>
				</div>
			</div>
			<div className="about-container-footer">
				<h1>About</h1>
				<div className="footer-item">
					<h4>Careers</h4>
				</div>
				<div className="footer-item">
					<h4>Investors</h4>
				</div>
				<div className="footer-item">
					<h4>Our Team</h4>
				</div>
				<div className="footer-item">
					<h4>Contact Us</h4>
				</div>
			</div>
			<div className="products-container-footer">
				<h1>Products</h1>
				<div className="footer-item">
					<h4>Charts</h4>
				</div>
				<div className="footer-item">
					<h4>Watchlists</h4>
				</div>
				<div className="footer-item">
					<h4>Stock News</h4>
				</div>
				<div className="footer-item">
					<h4>Financial Advisory</h4>
				</div>
				<div className="footer-item">
					<h4>Educational Tutorials</h4>
				</div>
			</div>
			<div className="social-media-icons">
				<h5>Follow Us</h5>
				<a href="https://www.facebook.com">
					<i className="huge facebook icon"></i>
				</a>
				<a href="https://www.instagram.com">
					<i className="huge instagram icon"></i>
				</a>
				<a href="https://www.twitter.com">
					<i className="huge twitter icon"></i>
				</a>
				<a href="https://www.snapchat.com">
					<i className="huge snapchat icon"></i>
				</a>
				<a href="https://www.youtube.com">
					<i className="huge youtube icon"></i>
				</a>
			</div>
			<PhoneIcon id="phone-icon-homePage" />
		</div>
	);
};

export default Footer;
