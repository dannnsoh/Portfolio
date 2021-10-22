import Col from "react-bootstrap/Col";
import Icon from "./Icon";
import AppIcons from "./icons/index";
import { useInView } from "react-intersection-observer";
import fadeRandom from "./fadeRandom";

const Icons = () => {
	const [ ref, inView ] = useInView({
		threshold: 0.9,
		triggerOnce: true
	});

	return (
		<div ref={ref} className="about-skills-container">
			{inView ? fadeRandom() : ""}
			<Col>
				<Icon name="html" icon={<AppIcons.HTML className="about-icon" />} />
				<Icon name="css" icon={<AppIcons.CSS className="about-icon" />} />
				<Icon name="javascript" icon={<AppIcons.JS className="about-icon" />} />
			</Col>
			<Col>
				<Icon name="git" icon={<AppIcons.Git className="about-icon" />} />
				<Icon name="mongodb" icon={<AppIcons.Mongo className="about-icon" />} />
				<Icon name="react" icon={<AppIcons.React className="about-icon" />} />
				<Icon name="node.js" icon={<AppIcons.Node className="about-icon" />} />
			</Col>
			<Col>
				<Icon name="express.js" icon={<AppIcons.Express className="about-icon" />} />
				<Icon name="typescript" icon={<AppIcons.Typescript className="about-icon" />} />
				<Icon name="python" icon={<AppIcons.Python className="about-icon" />} />
			</Col>
		</div>
	);
};

export default Icons;
