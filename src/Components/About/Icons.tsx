import Col from "react-bootstrap/Col";
import Icon from "./Icon";
import { ReactComponent as HTMLIcon } from "./icons/html.svg";
import { ReactComponent as CSSIcon } from "./icons/css.svg";
import { ReactComponent as JSIcon } from "./icons/javascript.svg";
import { ReactComponent as MongoIcon } from "./icons/mongodb.svg";
import { ReactComponent as ExpressIcon } from "./icons/express.svg";
import { ReactComponent as GitIcon } from "./icons/git.svg";
import { ReactComponent as NodeIcon } from "./icons/nodejs.svg";
import { ReactComponent as ReactIcon } from "./icons/react.svg";
import { ReactComponent as TypescriptIcon } from "./icons/typescript.svg";
import { ReactComponent as PythonIcon } from "./icons/python.svg";

const Icons = () => {
	return (
		<div className="about-skills-container">
			<Col>
				<Icon name="html" icon={<HTMLIcon className="about-icon" />} />
				<Icon name="css" icon={<CSSIcon className="about-icon" />} />
				<Icon name="javascript" icon={<JSIcon className="about-icon" />} />
			</Col>
			<Col>
				<Icon name="git" icon={<GitIcon className="about-icon" />} />
				<Icon name="mongodb" icon={<MongoIcon className="about-icon" />} />
				<Icon name="react" icon={<ReactIcon className="about-icon" />} />
				<Icon name="node.js" icon={<NodeIcon className="about-icon" />} />
			</Col>
			<Col>
				<Icon name="express.js" icon={<ExpressIcon className="about-icon" />} />
				<Icon name="typescript" icon={<TypescriptIcon className="about-icon" />} />
				<Icon name="python" icon={<PythonIcon className="about-icon" />} />
			</Col>
		</div>
	);
};

export default Icons;
