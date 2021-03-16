const Watchlist = require('../models/Watchlist');
const express = require('express');
const stockRouter = express.Router();

// CREATE
stockRouter.post('/', async (req, res) => {
	try {
		const newStockPost = await Watchlist.create(req.body);
        console.log(req.body);
		res.status(200).json(newStockPost); // return json of our newly created stock into our database
	} catch (error) {
		res.status(400).json(error);
	}
});

// READ
// Has 2 sub-routes which are INDEX and SHOW

//INDEX ROUTE
stockRouter.get('/', async (req, res) => {
	try {
		const foundStocks = await Watchlist.find({}); 
		res.status(200).json(foundStocks)
	} catch (error) {
		res.status(400).json(error);
	}
});

// DELETE/DESTROY ROUTE -----Added so we can delete straight from the index page
stockRouter.delete('/', async (req, res) => {
	try {
		const foundStocks = await Watchlist.findByIdAndDelete(req.params.id);
		res.status(200).json(foundStocks);
	} catch (error) {
		res.status(400).json(error);
	} 	
});

// SHOW ROUTE
stockRouter.get('/:id', async (req, res) => {
	try {
		const foundStocks = await Watchlist.findById(req.params.id);
		await foundStocks
		res.status(200).json(foundStocks);
	} catch (error) {
		res.status(400).json(error);
	}
});

// DELETE/DESTROY ROUTE
stockRouter.delete('/:id', async (req, res) => {
	try {
		const foundStocks = await Watchlist.findByIdAndDelete(req.params.id);
		res.status(200).json(foundStocks);
	} catch (error) {
		res.status(400).json(error);
	} 	
});

// UPDATE ROUTE
// Put request - something exists and user wants to change it
stockRouter.put('/:id', async (req, res) => {
	try {
		const foundStocks = await Watchlist.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		); // find req.params.id and replaces with req.body and gives us document after its changed is reflected by the new:true
		res.status(200).json(foundStocks);
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = stockRouter;