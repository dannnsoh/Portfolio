import Nav from "react-bootstrap/Nav";

interface NavProps {
	name: string;
}

const NavLink = (props: NavProps) => {
	const id = `#${props.name.toLowerCase()}`;

	return (
		<Nav.Link className="navlink" href={id}>
			<div>{props.name.toUpperCase()}</div>
		</Nav.Link>
	);
};

export default NavLink;
