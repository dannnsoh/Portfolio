import Figure from "react-bootstrap/Figure";

interface IconProps {
	name: string;
	icon: React.ReactElement;
}

const Icon = (props: IconProps) => {
	return (
		<Figure>
			{props.icon}
			<Figure.Caption>{props.name.toUpperCase()}</Figure.Caption>
		</Figure>
	);
};

export default Icon;
