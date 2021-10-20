import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import sample from "./images/planets.jpg";

const ProjectCard = () => {
	return (
		<Col>
			<Card className="projects-card">
				<Card.Img src={sample} />
				<Card.Body>
					<Card.Title>Project Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</Card.Text>
					<Card.Subtitle>Language used</Card.Subtitle>
					<Card.Subtitle>Language used</Card.Subtitle>
					<Card.Subtitle>Language used</Card.Subtitle>
					<Card.Link href="#">Button Link</Card.Link>
					<Card.Link href="#">Button Link</Card.Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default ProjectCard;
