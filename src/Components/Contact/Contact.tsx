import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
	const [formInput, setFormInput] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [ref, inView] = useInView({
		threshold: 0.5,
		triggerOnce: true
	});

	const handleInput = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setFormInput(prev => {
			return { ...prev, [name]: value };
		});
	};

	return (
		<Container
			className="contact-container"
			fluid
			ref={ref}
			style={
				inView
					? { animation: "fadeIn", animationDuration: "1.5s" }
					: { visibility: "hidden" }
			}
		>
			<Row className="text-center">
				<h1 className="section-title">Contact Me</h1>
			</Row>
			<Row className="justify-content-center">
				<form
					action={`mailto:danielsoh123@gmail.com?subject=Get%20In%20Touch&body=${formInput.message}`}
					method="post"
					className="input-area"
					encType="text/plain"
					autoComplete="off"
				>
					<div className="input-area-heading">
						<span>
							Have a question or want to work together? Let's get in
							touch!👋
						</span>
					</div>
					<input
						onChange={handleInput}
						name="name"
						type="text"
						placeholder="Name"
						value={formInput.name}
					/>
					<input
						onChange={handleInput}
						name="email"
						type="email"
						placeholder="Email"
						value={formInput.email}
					/>
					<textarea
						onChange={handleInput}
						name="message"
						rows={8}
						placeholder="Type a message!"
						value={formInput.message}
					/>
					<button className="submit-contact" type="submit">
						Submit
					</button>
				</form>
			</Row>
			<Row>
				<Footer />
			</Row>
		</Container>
	);
};

export default Contact;
