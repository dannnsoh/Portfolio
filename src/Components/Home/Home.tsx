import Container from "react-bootstrap/Container";

const Home = () => {
	return (
		<Container className="header">
			<div className="heading animate__animated animate__fadeInLeft animate__slow">
				Hello, I'm <span>Daniel</span>.
			</div>
			<div className="heading animate__animated animate__fadeInRight animate__slow">
				I'm a web developer.
			</div>
			<a href="#about" className="header-button animated-button">
				<span>More</span>
			</a>
		</Container>
	);
};

export default Home;
