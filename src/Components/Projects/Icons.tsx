import Col from "react-bootstrap/Col";
import Icon from "./Icon";
import AppIcons from "./icons/index";
import { useInView } from "react-intersection-observer";
import iconFade from "./iconFade";

const Icons = () => {
	const [ ref, inView ] = useInView({
		threshold: 0.9,
		triggerOnce: true
	});

	return (
		<div ref={ref} className="skills-container">
			{inView ? iconFade() : ""}
			<Col>
				<Icon name="html" icon={<AppIcons.HTML className="skills-icon" />} />
				<Icon name="css" icon={<AppIcons.CSS className="skills-icon" />} />
				<Icon name="javascript" icon={<AppIcons.JS className="skills-icon" />} />
			</Col>
			<Col>
				<Icon name="git" icon={<AppIcons.Git className="skills-icon" />} />
				<Icon name="mongodb" icon={<AppIcons.Mongo className="skills-icon" />} />
				<Icon name="react" icon={<AppIcons.React className="skills-icon" />} />
				<Icon name="nodejs" icon={<AppIcons.Node className="skills-icon" />} />
			</Col>
			<Col>
				<Icon name="expressjs" icon={<AppIcons.Express className="skills-icon" />} />
				<Icon name="typescript" icon={<AppIcons.Typescript className="skills-icon" />} />
				<Icon name="sass" icon={<AppIcons.SASS className="skills-icon" />} />
			</Col>
		</div>
	);
};

export default Icons;
