import Container from "react-bootstrap/Container";

const Home = () => {
	return (
		<Container className="header">
			<div className="animate__animated animate__fadeInLeft animate__slow">
				Hello, I'm <span>Daniel</span>.
			</div>
			<div className="animate__animated animate__fadeInRight animate__slow">I'm a web developer.</div>
			<button className="header-button">
				<a href="#about">
					<i className="fas fa-angle-double-down fa-2x" />
				</a>
			</button>
		</Container>
	);
};

export default Home;
