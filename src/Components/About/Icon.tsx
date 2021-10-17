import Figure from "react-bootstrap/Figure";

interface IconProps {
	name: string;
	icon: React.ReactElement;
}

const Icon = (props: IconProps) => {
	return (
		<Figure>
			<div className="ext-border-effect">
				<div className="int-border-effect">
					{props.icon}
					<Figure.Caption>{props.name.toUpperCase()}</Figure.Caption>
				</div>
			</div>
		</Figure>
	);
};

export default Icon;
