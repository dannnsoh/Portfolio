import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import React from "react";
import axios from "axios";

// interface FormElements extends HTMLFormControlsCollection {
// 	name: HTMLInputElement;
// 	email: HTMLInputElement;
// 	message: HTMLTextAreaElement;
// }

// interface ContactFormElements extends HTMLFormElement {
// 	elements: FormElements;
// }

const Contact = () => {
	const [ formInput, setFormInput ] = useState({
		name: "",
		email: "",
		message: ""
	});

	const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setFormInput((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// const name = event.currentTarget.elements.name.value;
		// const email = event.currentTarget.elements.email.value;
		// const message = event.currentTarget.elements.message.value;

		// axios.post("https://www.google.com", formInput, {
		// 	headers: { "Access-Control-Allow-Credentials": "*" }
		// });

		// axios({
		// 	method: "POST",
		// 	url: "http://localhost:3002/send",
		// 	data: this.state
		// }).then((response) => {
		// 	if (response.data.status === "success") {
		// 		alert("Message Sent.");
		// 		this.resetForm();
		// 	} else if (response.data.status === "fail") {
		// 		alert("Message failed to send.");
		// 	}
		// });
	};

	return (
		<Container className="contact-container" fluid>
			<Row className="text-center">
				<h1 className="section-title">Contact Me</h1>
			</Row>
			<Row>
				<form onSubmit={handleSubmit} method="get" className="input-area">
					<div className="input-area-heading">
						<span>Have a question or want to work together? Let's get in touch!👋</span>
					</div>
					<input onChange={handleInput} name="name" type="text" placeholder="Name" value={formInput.name} />
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
