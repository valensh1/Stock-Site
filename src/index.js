import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import 'bootstrap/scss/bootstrap.scss';

const app = document.getElementById('app');

ReactDOM.render(<AppRouter />, app); // Takes AppRouter Component from Index.js file under the Router folder and injects that Component into the <div> with the id="app" in the index.html file
