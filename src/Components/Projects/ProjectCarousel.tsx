import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProjectSlide from "./ProjectSlide";
import projects from "./projectData";

const ProjectCarousel = () => {
	const [ slide, setSlide ] = useState(0);

	const handleSelect = (selectedSlide: number) => {
		setSlide(selectedSlide);
	};

	return (
		<Carousel keyboard pause="hover" activeIndex={slide} onSelect={handleSelect}>
			{projects.map((project) => {
				return (
					<Carousel.Item key={project.title}>
						<ProjectSlide
							title={project.title}
							description={project.description}
							image={project.image}
							link={project.link}
						/>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default ProjectCarousel;
