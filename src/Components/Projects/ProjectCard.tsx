import Card from "react-bootstrap/Card";

interface ProjectProps {
	title: string;
	description: string;
	image: string;
	link: string | undefined;
}

const ProjectCard = (props: ProjectProps) => {
	return (
		<Card className="card-item">
			<Card.Img
				className="card-image"
				variant="top"
				src={props.image}
				alt={`${props.title} project`}
			/>
			<Card.Body>
				<div className="card-caption">
					<Card.Title className="card-title">{props.title}</Card.Title>
					<Card.Text className="card-description">
						{props.description}
					</Card.Text>
				</div>
				<button className="card-link">
					{props.link ? <a href={props.link}>Live App</a> : null}
				</button>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
