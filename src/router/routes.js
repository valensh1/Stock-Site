import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import StockNews from '../pages/StockNews';
import WatchList from '../pages/Watchlist';

const routes = [
	// Creation of array of objects used to send to index.js file in the router folder for React Router to send user to correct route based upon user request. Nav Bar Component also uses these routes
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
		Component: StockNews, // SHOW PAGE - MUST BE before INDEX PAGE and this shows one individual stock that user clicked on from the watchlist. This will show user all news and information related to stock from watchlist that they clicked on
		key: 'StockNews',
		path: '/:id'
	},
	{
		Component: WatchList, // This is the WATCHLIST ROUTE - Full CRUD functionality rests with this Component. This route will allow user to create full stock watchlist
		key: 'WatchList',
		path: '/watchlist'
	},
	{
		Component: App, // INDEX/HOME PAGE of site
		key: 'App',
		path: '/'
	}
];

export default routes;
