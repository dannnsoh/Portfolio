import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as TelegramIcon } from "./icons/telegram.svg";
import { ReactComponent as EmailIcon } from "./icons/email.svg";

const Footer = () => {
	return (
		<Container className="footer" fluid>
			<Button className="footer-button">
				<a href="#home">
					<i className="fas fa-angle-double-up fa-2x" />
				</a>
			</Button>
			<div className="footer-links">
				<a href="https://github.com/dannnsoh">
					<GithubIcon className="footer-icon" />
				</a>
				<a href="#">
					<TelegramIcon className="footer-icon" />
				</a>
				<a href="#">
					<EmailIcon className="footer-icon" />
				</a>
				<a href="#">
					<LinkedInIcon className="footer-icon" />
				</a>
			</div>
			<span className="footer-text">Daniel Soh @ 2021</span>
		</Container>
	);
};

export default Footer;
