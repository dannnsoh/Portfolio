import Container from "react-bootstrap/Container";

const Header = () => {
	return (
		<Container className="header">
			<div>
				Hello, I'm <span>Daniel</span>.
			</div>
			<div>I'm a web developer.</div>
			<button className="headerBtn">
				<i className="fas fa-chevron-down fa-2x" />
			</button>
		</Container>
	);
};

export default Header;
