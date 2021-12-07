interface ProjectProps {
	title: string;
	description: string;
	image: string;
	link: string | undefined;
}

const ProjectSlide = (props: ProjectProps) => {
	return (
		<div>
			<img
				className="carousel-image"
				src={props.image}
				alt={`${props.title} project`}
			/>
			<div className="carousel-caption">
				<span className="carousel-title">{props.title}</span>
				<p className="carousel-description">{props.description}</p>
			</div>
			<div className="text-center">
				<button className="carousel-link">
					{props.link ? <a href={props.link}>Live App</a> : null}
				</button>
			</div>
		</div>
	);
};

export default ProjectSlide;
