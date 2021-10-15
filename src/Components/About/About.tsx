import Card from "react-bootstrap/Card";
import aboutImg from "./me.jpg";

const About = () => {
	return (
		<Card className="aboutCard col-6">
			<Card.Img src={aboutImg} />
			<Card.Body>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nam itaque officia doloribus, voluptates
				sapiente quae, perspiciatis odio quasi ipsum cupiditate veritatis. Laudantium exercitationem repudiandae
				velit alias veniam. Laboriosam, veritatis? Repellat quia aperiam sit a natus laboriosam. Recusandae
				ducimus at vero similique delectus laudantium autem illo doloribus fugiat dolores fuga, explicabo,
				consequuntur laboriosam. Suscipit cum, ipsam vel totam ipsa sunt!
			</Card.Body>
		</Card>
	);
};

export default About;
