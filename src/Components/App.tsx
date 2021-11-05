import Particles from "react-tsparticles";
import particlesOptions from "./particles/particles.json";
import { ISourceOptions } from "tsparticles";
import { useInView } from "react-intersection-observer";
import Navbar from "./Nav/Navbar";
import Header from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const App = () => {
	const [ ref, inView ] = useInView({
		threshold: 0.5,
		initialInView: true
	});

	return (
		<div>
			<Particles id="particlesHome" options={particlesOptions as ISourceOptions} />
			<Navbar inView={inView} />
			<section id="home" ref={ref}>
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
		</div>
	);
};

export default App;
