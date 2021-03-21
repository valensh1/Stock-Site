import React from 'react';
import Header from '../components/Header';
import Products from './Products';
import FeaturedOn from '../components/FeaturedOn';
import Footer from '../components/Footer';

const App = () => {
	return (
		<div>
			<Header />
			<Products />
			<FeaturedOn />
			<Footer />
		</div>
	);
};

export default App;
