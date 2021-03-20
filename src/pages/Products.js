import React, { useState } from 'react';

export default function About(props) {
	return (
		<div className="about-container">
			<div className="card" style={{ width: '25%' }}>
				<img
					className="card-img-top"
					src="https://www.thestreet.com/.image/t_share/MTY4NTE3Mjg2MzYwOTgzMzE4/chart-professor-3-things-you-need-to-know-about-every-stock-chart.jpg"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Charts</h5>
					<p className="card-text">
						We have several different charts and technical indicators to perform
						all types of analysis to pick your next winning stock!
					</p>
					{/* <a href="#" className="btn btn-primary">
						Go somewhere
					</a> */}
				</div>
			</div>

			<div className="card" style={{ width: '25%' }}>
				<img
					className="card-img-top"
					src="https://i.imgur.com/N8Pws66.png"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Custom Watchlists</h5>
					<p className="card-text">
						Create your own custom watchlists to keep an eye on your favorite
						stocks for good entry points
					</p>
					{/* <a href="#" className="btn btn-primary">
						Go somewhere
					</a> */}
				</div>
			</div>

			<div className="card" style={{ width: '25%' }}>
				<img
					className="card-img-top"
					src="https://image.cnbcfm.com/api/v1/image/106806397-16070927321607092730-12776782834-1080pnbcnews.jpg?w=1910&amp;h=1000"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Stock News</h5>
					<p className="card-text">
						Get the latest breaking news stories and videos about all your
						favorite stocks
					</p>
					{/* <a href="#" className="btn btn-primary">
						Go somewhere
					</a> */}
				</div>
			</div>

			<div className="card financial-advice-card" style={{ width: '25%' }}>
				<img
					className="card-img-top"
					src="https://images.pexels.com/photos/5715850/pexels-photo-5715850.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Financial Advice</h5>
					<p className="card-text">
						Looking for financial advice??? We have a large network of financial
						advisors we partner with that we can connect you with.
					</p>
					{/* <a href="#" className="btn btn-primary">
						Go somewhere
					</a> */}
				</div>
			</div>

			<div className="card need-name-image" style={{ width: '25%' }}>
				<img
					className="card-img-top"
					// src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwY291cnNlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JNGMfSRQ5dw7Y28k9vfJqDBCxKZslO8d1A&usqp=CAU"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Online Trading Tutorials</h5>
					<p className="card-text">
						Various stock trading tutorials to help you get the most out of your
						trading.
					</p>
					{/* <a href="#" className="btn btn-primary">
						Go somewhere
					</a> */}
				</div>
			</div>
		</div>
	);
}
