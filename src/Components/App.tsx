import Navbar from "./Navbar";
import Header from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<section id="home">
				<Header />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="contact">
				<Contact />
			</section>
			<Footer />
		</div>
	);
};

export default App;
