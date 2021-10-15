import Nav from "react-bootstrap/Nav";

interface NavProps {
	name: string;
}

const NavLink = (props: NavProps) => {
	return (
		<Nav.Link className="navlink" href={`#${props.name.toLowerCase()}`}>
			{props.name.toUpperCase()}
		</Nav.Link>
	);
};

export default NavLink;
