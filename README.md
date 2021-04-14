# ALL THINGS WALL STREET

# WEBSITE LINK -
https://stock-watchlist-final.herokuapp.com/


## About
The idea of this project is to design a full-fledged one stop shop for everything Wall Street which includes personalized watchlists, charts, financial advice, educational videos, stock news relevant to your portfolio, etc. Why do you need to go to cnbc.com when you can be fully emerged in Wall Street right here on one site! I am passionate about the stock market and coding so why not combine the two together and make this a fun project!


## Technologies Used:
* HTML
* CSS
* Javascript
* React
* React-Router-Dom
* MongoDB
* Express
* Node.js
* Bootstrap
* SASS
* Chart.js
* Utilizes the MERN stack



## Main Concepts Used in Building Out Application:
* API calls - API calls were made to third party website to retrieve necessary stock information.
     * Usage of async await Javascript functions combined with React useEffect hook on loading of page to retrieve necessary stock information when user lands on page.  
* Frontend - React library used for front-end and for rendering necessary content retrieved from back-end to display to the user.
    * Utilizes setState, useEffect React hooks.
    * Utilizes conditional rendering and map methods to render data to user
    * Graphs - utilizes Chart.js charting library to create a line chart of stock closing prices based on data retrieved from making the API calls above.
* Backend - Creation of backend utilizing Express to handle routes for various pages.
* Database - Establishment of MongoDB database to store user ticker symbols for user watchlist.


## Overall Navigation of Site:
Currently the functioning aspects of the website include the following (as mentioned below this is an ongoing project and more functionality will roll out over time):
 1. Home Page
 2. About Page - displays page full of pictures of team with their title and contact information (fake team members of course! Hopefully one day this will be filled with real team members contributing to the site) 
 3. Custom Watchlist Page
    * From Home Page click on Custom Watchlist card in middle of page and it will take you to a new page in which user enters ticker symbols of stocks they would like to follow/watch.
        * This Watchlist page can also be found by navigating to footer of Home Page and clicking on the Watchlist link on the far right list under Products (2dd link under Products in footer).
 4. Stock News Page - This page displays relevant price and other stats related to the ticker symbol user clicks along with ability to scroll various news articles related to that company.


## How to use the Watchlist and corresponding charts/tables:
1. Enter a valid ticker symbol of your choice.
    * Will let you know if ticker symbol entered is invalid
2. If ticker symbol entered by user is valid the ticker symbol along with its last price and $Change will be added to the watchlist in alphabetical order.
3. Hit the red trash can icon if you would like to delete the ticker symbol from your watchlist.
4. Click anywhere on the row of the specific ticker symbol of choice and the site will take you to the Stock News page for that ticker symbol.
5. On the Stock News page for a particular symbol the user will be presented with company stats and price information along with a line chart which is a chart of rolling 30 day closing prices.
6. Scroll the various stock news articles below the company chart, stats and price information to find a news article to read. Click on news article and it will open up a new browswer window to the site in which article is published. 
### OTHER NOTABLE THINGS ON WATCHLIST PAGE:
1. Stock Market Banner that scrolls screen horizontally which includes some of the biggest market cap stocks and their latest prices. Click on any ticker symbol and it will direct user to stock specific news and stats about that particular stock.
2. General Market Indice prices and chart. Click anywhere on chart to get different time frames for chart or click on the indice to get taken to a page with indice stats and general market news.
3. Today's Top Gainers Table - Table displays the top gainers by percentage change for the latest trading day.
4. Ads such as Amazon Business can be displayed throughout site (hint - revenue source for future if this thing takes off!)






## Project Status:
This will be an ongoing project for me. I love Wall Street and always had ambitions to create my own stock website where I have everything from planning my next trade by looking at some charts, reading general market news along with news related to the stocks I follow, educational trading videos, and even offering financial advice and integrating the site with various trading platforms such as E-Trade.










