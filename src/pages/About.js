import React from 'react';
import { Link } from 'react-router-dom';
import StyledNavBar from '../components/StyledNavBar';

const About = () => {
	return (
		<div>
			<StyledNavBar />
			<div className="about-section">
				<h1>About Us Page</h1>
				<p>Some text about who we are and what we do.</p>
				<p>
					Resize the browser window to see that this page is responsive by the
					way.
				</p>
			</div>
			<h2 style={{ textAlign: 'center' }}>Our Team</h2>
			<div className="row">
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://image.cnbcfm.com/api/v1/image/100010144-1600812823440-100010144-guy-adami-silo2.jpg?v=1600812877"
							alt="Jane"
						/>
						<div className="container">
							<h2>Jane Doe</h2>
							<p className="title">CEO & Founder</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>jane@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://image.cnbcfm.com/api/v1/image/102314619-20150106-3010-989.jpg?v=1420839087&w=400&h=300"
							alt="Mike"
						/>
						<div className="container">
							<h2>Mike Ross</h2>
							<p className="title">Chief Operating Officer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>mike@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://image.cnbcfm.com/api/v1/image/104006258-LEE_M_-026.jpg?v=1531137288&w=400&h=300"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://image.cnbcfm.com/api/v1/image/103875926-CRAMER_JIM-264_wht_RGB-1.jpg?v=1546960638&w=400&h=300"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://image.cnbcfm.com/api/v1/image/105434718-1536184473552timseymour_076.jpg?v=1569597637&w=400&h=300"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://image.cnbcfm.com/api/v1/image/105480608-1554381119594karen3.jpg?v=1554381134"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://image.cnbcfm.com/api/v1/image/102306441-20141229-2534-970.jpg?v=1616597866"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="data:image/jpeg;base64,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"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="data:image/jpeg;base64,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"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://image.cnbcfm.com/api/v1/image/104668777-1542218482156deirdre-bosa.jpeg?v=1542218467&w=400&h=300"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://image.cnbcfm.com/api/v1/image/103946540-FABER_D-108_RGB_sat.jpg?v=1531137133&w=400&h=300"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQEhAPDxAQEBAPDxAPDw8PEBAQFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGRAPFi0dHh0tLS0tLS0tLS0rLS0rKy0tLS0tLS0tKy03LS0tLS0tKy0tLS02Ky0rOCstLTcrLS0rOP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwABBAUGBwj/xAA5EAABAwIEAwYEBQQBBQAAAAABAAIRAyEEEjFBBVFhBhMicYGRobHB8DJCUmLRB3Lh8SMUJDOSwv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgIDAQADAQAAAAAAAAABAhEDMRIhQVEiMmEU/9oADAMBAAIRAxEAPwDyxWFUIgrshhNYUsJjEDmprUtqc0oLhG0KAIoQUCoWq0bQgWxqc1qgansFkCQFYamFqgCAIUKtU5wGpA8zCBbksoK+OpN1qN9DPyQNxlM6Pb6mPmidHgKih71v6hewuEaIAqRqiEAFVCIhUUCyFQRlUAggCMBUAjaEBAK4VgI8qBfdoHNWSGqnMQYmVVCyHMQFqBcKijLVRagFRXCiDUgImhQBWAgJoTmhA0JrUBtTWpTU5oQGEYQBECgIBNaEuEbCgMBZDAktTmII5qAiOnVNAWj7V4402Cm2xfqeiJhfEeOMb4WeJ2hMEBvvqtFicVmJLnl07SY9lgsCa+kZAi56qu15NDF/y9ABafiieyBIBF5hx8Q6QhNE5bCI1Mn3jl6Ku7dr6Dr5BQsYJMNuTcxyOtlm4Dihp+F2YtAPWPLlusPuiWg689YHJVlPTT4KNos26jC4ltQS1wPMbjzT8q5hjXUiHNOUxvodLLo8HiBUbO+jhyKvLtSzQy1C4JsKi1SqRlVBqcWqi1BTWo2tVNTmBBQajDEQCJBQaqLUwKQgQWoC1Pc1CUGO4Ki1OISnhAohCjKBBrIRAKoRBAQTWoGhMYEBtCc1LaE1oQWrAUCtAYTWBLaE5gQMa1MYFA1QBAwBef8AGcWa1ZzpJE5WA7NGi72ofC7bwm/ovOaFPM4DmbqMl8YdhaD4loIBtP8ACyKEMNgAQNSIM9J+vsuroYVoptbA0CpvBmPWF5NOqcO2jota/UlvRxAn9xi5+Sy6eBFSD+MgwGtAAAFgA2IPp0XZcF7NUhBd4umy7nh2BpMADaVMcvCFW88+RP8Az2d15hQ7MPqsLjTcBGaSyMm5OtzoP4Wgq4INJEdBLjIHkdBqvoylSaRBAgiCIXlPbHs+cO97xem902+APukz3fatwnxwVWjuJM9RHnoh4XUyVMpMB0jkCTeY2/yty/BktH6oBmBHX6rUvp5KjdAQ8AAjYxoD9VpjWWUbuFcK3IZWzBcJZamtQkIBa1OAQNCa1ATVCorhBAiQoggEoSE4BA9kIFOakVAsgpVRqDHKFMLUOVBq4VgKgESC2pzUtqYxA1qcwJLVkMQFlVhqtWAgtgTqYQMCa0IGAooQtCZCCss29FxHD8NNQjk/T1XdBc5wqmA6tUP5ar2jUbk6KnJfTXim62zW2AWbhKRlaF3EXgy1hI5AG62XDOOjRwyH1C5csa7sMpt2nDRAjmuiwVzpouLw3EvDn/d8FlU+0zmHw03vAiYEyspG2XT0Kk9aLtbR7xmUiRqUvgnH3VvE6nlbtYgrePYys3mCrud5PisLE29tI3/lcljaRFYNNgXWm5Bnp7L03tZw00gTPUHoFw2BwVTFYgU6VN1RzQXCBaN5OgFhqtMKyzn4MhUAsjFYd9NxpvaWPYYc12oKVC63ItoUIVgIoRAGhGAoAogiIKkQQUiCGFCUDAVT3IC5CSgjgluRlA9AlyXKY5BKDUgogUKIIDCY1LCNqBzSnsWOxZDEDQrCoBE0IGtCaxA1Oa1ATQihUrCAgLQtFgaBaKzHEuIrm5uXDK0gn0W9BWKWQ9x/VlI9AB9Fnyz1tvwX3ppcR34khzWSPAAWyDtmkaeSw8RUqhwDyx5MEubEg7zAhdFVw4csOnhml0brm8nX4a97d12L4M2phXF4mbjouT4vVrsqmi3wPGYgm9wSAAPTXqvTuwdGMNH3CLtLwig8sc9jS4GGneFn/rXy9+LleyR4iKbXOYys2D3rMzWPgGxpmwJj8pG2q77hrIEiQDBhwLSPMFafg2EyGGkhvKSV0rjAU737Z5TXrtyn9QHf9uCBLg+BGpkGy1fDuFso4arSD2d86i/vcr/+TvA3Nk5gATZdLxLDiq6mCJDKoeZ0hq50cPArV8YZFAOrPptM+IFpD3zy/GQqW3prxYyW2uMxUjK1xJcylTa8uMnNlkg+Ux6LHlFWqlzi46uJcfMmSlyvSxmpI8rky8srl+mgo2rHY9Oa9SoM2VShc5QIClEECIFAUoXFQqggoqkUKAIBlC5MIQFAhyAprmpUINTCIKlYQECjaUARtQMasikUhiyKYQZDUxoSmJzEDWBMagCIFARVByFxS5QOL0uq7dBmQYg2VOT+rXhv84xsXjYaYWt4dj8hLnNLi5wgj8oRYgzr+HU9Uui9pGoA81zSO2349b7IdpaYwrjlc4tAGVglzjGgHNK7YcSdWoU6tKnUp5Mzy2oIftaPQrnezPdMLXNqU8pHiuAQ+dF2mJxLDSOZzCIN8zYWda9XemH2M422qAZvuuwq1Q7ReU8KpAYltXDEGm97m1WAgtFic7SNrEEdQvQsBXlxH6cvxAP1VTKb9nwJg6aGeS0HbbEilgyxoID3Nojo27nD2bHqt1xJoNN/IMc4wSNATqPJeVcQ4jVrhve1HPyi0wAOdlpw8e8t/jDm5Jjjr7WASqzK3Ja7nnilE0pcImuQOBRJIKNqBoRQqaiQRQKK4QVChKuFIQBCsNRKkAlqAsTHKpQc9CIKKwEFhGAqamNQExqyGBLYnsCA2BPaEtgTQEDGoyhaESBbkslMcEp7UFNCurTkR7eaBphNzJZtMurtpa2kdYKTTwbGj8AdebiVtMVh8xBb+I7fqgE26wD7JFEtBuuXKXGu7DOZRuezbmBwb3NPLIzWMHzC9Po0aWXw0qTSR+Wm0LheztOkTp1su8wjWhszPmsLa6LbqNZhsDToVzlaGgs+J1WVRIa57hufoB9EHFardtVfBcK/EPytkMB8dTYeXMqsm0XKSbrc4Hh//Usex0hj2OY4j9wIsvIsbgHMLgRDqT306jbnK5ji1xHSR7QvoGmxlGnaGsY0kk8hckrxjiWJGIxFWqAMr31DHQkm/uuzimo4OTLyu3JvQrJxlHI6Njdp5hYxW7AJVAqyEKBjSnMWOE5hhBkNCKEsORgoCAUCsK0EUVKSgqFIVhRALgryqiqug59WFQRNQE1MaEDQmtCBjU5iU1PphA6mE9gSmBPagJpQOKIlC54EkkAC5JsIQCQhK1eL460WYM3U6egWoxXE3vsXGOQsPZNp032Ix1Nmrh5C5WrxPHSbMbHU3P8AHzWle8ndDWMDz+Cja0je9k8Q6rxGjmcXR3pM6f8AjfoszjWBNKo5umU26t2Pt8ZQf03wJdiDWIMU2lrTFi51j8J911fafAuqNzsbme0GQNXN3HnuPIrPKbaYZarm+AY2ow8+V121PjNQNDYlztGi5+C47stgXVqpDGkhupgw08j16ar1bs9wRlE5yM1Q/mdqPLksPC2ui8kxneyuDdnKtYipiCWM1FMWcR15LvcFQbTaGMaGtGgGgSKAssbjfF2YWi6q42aLDmdgr44ydMM87l257+pXaEU2DBsPjqeKt+2nsD5n4Lg6rsrYEBsOMSdNo+9wsCtjn16761QnPUMzA30bOw09kuviupjkOcgb7raTTM5jxVOQ3AFtiD57WWJisE5txLm38xHMLCbjCC392Z07xMfRbplUOYIsRckQb+fpKtEWNKSqW1rUGuEkQTuAQT5zbXN7LCxGEc24h7ebdvMbKVdENKNhSwjBRDIhE1CzRMaEDGqQhKIoLhUQoCoEEVBQqggtEChBRIOdBRBLRNKBrUxiS0pwKBrU6mkMKc1BksKaCk09E0ICK5zj2MLn90Pwsgv/AHOO3ougxFQMa5x/K0n2C4suJlxN3Eu8yUq0gCUoppQFVWQD76LHfL3BoEkkNA5k6J9R0D4LZ9jsD3lfvCPDT0/vI+gQd92awraFANkAMaC5x5xc/NcRxztBUxb3gPcyhPgYCWjKLB7416g6T0K6btFWeMK9jJHeOIqP2ZSAl5J66eq4jh1OB3jZJH4bT7jdTImOx/prx1uDr/8AS14azEOAY51u6raQf2usOhA5le1UGj05r5ixOArVXxkJOkC8AaD009Ava/6e8aqvw7aGJzd7TEU3uB/5GDSSfzAa8wJ5quUHoIqgDkvK/wCpfGTVqNoNPhaZeJMTsLbrseNcUNOmY/Fo2bCV45jcQaj31ZzZib302kdRf25KJEHNrACYI10Mz6a/PdYWLxMNEAuBicolvlPohbiJuI2gXvy890tjpM3DWjbl181YYzqxLmmwDZAgCLkm/Nbzh9fwxMxAgcpHJaeoCfFHMkAQAD0WThXwBF99pH397IN4CSImff8AD6o8OT+ESJuNdPuOiwsLWB300k8jG305ptOqJvaNTGXff/XtvKD62GY7UFrv1NGvmNPlutfiMI6mbiW7OFx/grOqVoIJkA8/LmsyliBGUgEXEGdJ3+PuiNNIxyyGLNxXCpl1Ox1yH/5P0WA21jYjXoVKDAERQypmRCyragJUzIDKEqiVWZAYKtAEUoOeVgKkQQE1MaltTGoGsT2pDE5oQZDCmApLUwIMLj9WKBH6i1v1+i5s/dlue0jvCwc3E/IfVaZ6irwshCBsjJhU1QkjEuXcdmcH3VFo0cRnd5u29lxuDo95VaNpk+QXonDoDcxNmguJtsg5/t1xEta3CtMCz6p5n8rfqfRYPC6UUJkNgwJnxP2aBufgBqtPj8UcRWc8z43l3WNh7WXQ8LqXZTabkhpc3QNmcjZ/LaSdT6BWiY7bg+EaPFAk9F1VJjRSLfwwJDm6tcLhw6grQ8NEADktlXxEN/n7+4Vaq57thxN/dim5wNSr4PDIin+dwG06eq5Gq+wHkbGwJ1+Hy6p3E8b3+Ie/UNORn9rd/Uz7rBrH0A103vr/AIRJTugMutAG55BZD2gCJnr+7e/3uk4Y6OMlxs29gbkkjeJ+KZkgRt01m336IAc0ExPKAJJkbhOoiATz1MTbYg+qBp8ibXuL+qa06Te/M+IwJ6gIGMMXvyO1rDVNpmenUi53O/KBqsd1TKN5jkI2Mn5/6QmvDS7lpyA2A63I+yiGca2cwJ1BIAsBvAnU+S3PDmgb2tMkC4J/jXeVo+EtcZLolxbc28voB5LfYXwwLHbfS/8ApSM2lEXJMaaTG2mqweK0QWio0XFnaTGxMdbLNa8WJAmd9o02/j6q8RTD2loMy0gAui5sLHr8kHPAq0sORkqVEKoFUXKpQXKqFYUhATQiDlTVYYg0KsKKICCY1RRAxqc1RRA1iIFWog0vaF12DzPxC1TlFFC86A4qgIHxVqKEtlwOh+bmT7afyug4/ie7wbgPxVMtMR1Pi+EqKKRwwGXzPwC6Ts0wmo07NBv1iLf+w91FFMT8eg4N1lre1HE+7pFoPiqeBsagbn2UUUKuODgGiLRr9lYtS5g6TJ5Re6tRQkdMgnpENGpHr1ufMpjn2iPPmdfdRRANIWna+0G0dPv55LWwLcwTbZWoiCqsAE6NMc/oOhWL3mZwaP7z9J91FES3+Bflt4jyvAkgD6/ALa4eo28QJjSLxr5/7UUUoZlCZkACTINo5adU91Mg+xkeqiigc1imZXuHJx9tksOUUVlEVqKILBRSqUQWCmteoog//9k="
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://pbs.twimg.com/profile_images/2233350183/hastings_reed_abosch.jpg"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://i.pinimg.com/originals/8a/f5/26/8af526b5bd338af8feb079053312defa.jpg"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="data:image/jpeg;base64,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"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/03/tim-cook-profile-photo.png"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://content.fortune.com/wp-content/uploads/2019/02/marc-benioff.jpg"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<img
							className="about-pics"
							src="https://wallpapercave.com/wp/wp2126169.jpg"
							alt="John"
						/>
						<div className="container">
							<h2>John Doe</h2>
							<p className="title">Designer</p>
							<p>Some text that describes me lorem ipsum ipsum lorem.</p>
							<p>john@example.com</p>
							<p>
								<button className="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
