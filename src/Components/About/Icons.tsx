import Row from "react-bootstrap/Row";
import Icon from "./Icon";
import AppIcons from "./icons/index";
import { useInView } from "react-intersection-observer";
import iconFade from "./iconFade";
import _ from "lodash";

const row1 = _.range(6);
const row2 = _.range(12, 5, -1);

const Icons = () => {
	const [ref, inView] = useInView({
		threshold: 0.9,
		triggerOnce: true
	});

	return (
		<div ref={ref} className="icons-container">
			{inView ? iconFade(row1) : null}
			{inView ? iconFade(row2) : null}
			<Row>
				<Icon name="html" icon={<AppIcons.HTML className="skills-icon" />} />
				<Icon name="css" icon={<AppIcons.CSS className="skills-icon" />} />
				<Icon name="sass" icon={<AppIcons.SASS className="skills-icon" />} />
				<Icon name="javascript" icon={<AppIcons.JS className="skills-icon" />} />
				<Icon
					name="typescript"
					icon={<AppIcons.Typescript className="skills-icon" />}
				/>
				<Icon name="react" icon={<AppIcons.React className="skills-icon" />} />
			</Row>
			<Row>
				<Icon name="git" icon={<AppIcons.Git className="skills-icon" />} />
				<Icon name="mongodb" icon={<AppIcons.Mongo className="skills-icon" />} />
				<Icon name="nodejs" icon={<AppIcons.Node className="skills-icon" />} />
				<Icon
					name="expressjs"
					icon={<AppIcons.Express className="skills-icon" />}
				/>
				<Icon name="python" icon={<AppIcons.Python className="skills-icon" />} />
				<Icon name="django" icon={<AppIcons.Django className="skills-icon" />} />
			</Row>
		</div>
	);
};

export default Icons;
