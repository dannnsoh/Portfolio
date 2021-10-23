import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as TelegramIcon } from "../icons/telegram.svg";
import { ReactComponent as EmailIcon } from "../icons/email.svg";

const Footer = () => {
	return (
		<Container className="footer" fluid>
			<Button className="footer-button">
				<a href="#home">
					<i className="fas fa-angle-double-up fa-3x" />
				</a>
			</Button>
			<div className="footer-links">
				<a href="https://github.com/dannnsoh">
					<GithubIcon className="footer-icon" />
				</a>
				<a href="https://telegram.me/dannnsoh">
					<TelegramIcon className="footer-icon" />
				</a>
				<a href="mailto:danielsoh123@gmail.com">
					<EmailIcon className="footer-icon" />
				</a>
				<a href="https://www.linkedin.com/in/daniel-s-61a6bb110/">
					<LinkedInIcon className="footer-icon" />
				</a>
			</div>
			<span className="footer-text">Daniel Soh ©2021</span>
		</Container>
	);
};

export default Footer;
