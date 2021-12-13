import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavLink from "./NavLink";

interface NavProps {
	inView: boolean;
}

const Header = (props: NavProps) => {
	return (
		<Navbar
			style={
				props.inView
					? {}
					: { boxShadow: "0 1px 6px 3px #0a0a0a93", backgroundColor: "#1a1a1a" }
			}
			fixed="top"
			variant="dark"
		>
			<Container fluid>
				<Nav activeKey={""}>
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
