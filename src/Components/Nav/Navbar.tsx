import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavLink from "./NavLink";

const Header = () => {
	return (
		<Navbar variant="dark">
			<Container fluid>
				<Nav className="mx-auto">
					<NavLink name="Home" />
					<NavLink name="About" />
					<NavLink name="Resume" />
					<NavLink name="Projects" />
					<NavLink name="Contact" />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
