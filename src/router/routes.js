import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Products from '../pages/Products';
// import Home from '../pages/Home';
import Contact from '../pages/Contact';
import StockNews from '../pages/StockNews';

const routes = [
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Products,
		key: 'Products',
		path: '/products'
	},
	{
		Component: StockNews, // Show page MUST BE before index page and this shows one individual stock that user clicked on from index page
		key: 'StockNews',
		path: '/:id'
	},
	{
		Component: App, // Index page which shows all stocks on your watchlist
		key: 'App',
		path: '/'
	}
];

export default routes;
