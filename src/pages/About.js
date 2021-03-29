import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const About = () => {
	return (
		<div id="about-page-container">
			<Link to={'/'}>
				<BackButton />
			</Link>
			<div class="container">
				<h2 id="about-header">About Us</h2>
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
					{/* <!-- Indicators --> */}
					<ol class="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
					</ol>

					{/* <!-- Wrapper for slides - BOOTSTRAP CAROUSEL W3SCHOOLS --> */}
					<div class="carousel-inner">
						<div class="item active">
							<img
								src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbSUyQm9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
								alt="Los Angeles"
								style={{ width: '100%' }}
							/>
							<div class="carousel-caption">
								<h3>Chicago</h3>
								<p>Thank you, Chicago!</p>
							</div>
						</div>

						<div class="item">
							<img
								src="https://images.unsplash.com/photo-1558403194-611308249627?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyQm9mZmljZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
								alt="Chicago"
								style={{ width: '100%' }}
							/>
							<div class="carousel-caption">
								<h3>Chicago</h3>
								<p>Thank you, Chicago!</p>
							</div>
						</div>

						<div class="item">
							<img
								src="https://images.unsplash.com/photo-1542404937-2132aa1fa6fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMGJ1aWxkaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
								alt="New york"
								style={{ width: '100%' }}
							/>
							<div class="carousel-caption">
								<h3>Chicago</h3>
								<p>Thank you, Chicago!</p>
							</div>
						</div>
					</div>

					{/* <!-- Left and right controls --> */}
					<a class="left carousel-control" href="#myCarousel" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a
						class="right carousel-control"
						href="#myCarousel"
						data-slide="next"
					>
						<span class="glyphicon glyphicon-chevron-right"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
