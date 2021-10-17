import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavLink from "./NavLink";

const Header = () => {
	const [ active, setActive ] = useState("");

	return (
		<Navbar fixed="top" variant="dark">
			<Container fluid>
				<Nav activeKey={active} onSelect={(selectedKey) => setActive(selectedKey ? selectedKey : "")}>
					<NavLink name="Home" />
					<NavLink name="About" />
					<NavLink name="Projects" />
					<NavLink name="Contact" />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
