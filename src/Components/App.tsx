import Particles from "react-tsparticles";
import particlesHomeOptions from "./particles/particlesHome.json";
import particlesBodyOptions from "./particles/particlesBody.json";
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
			<Particles id="particlesHome" options={particlesHomeOptions as ISourceOptions} />
			<Navbar inView={inView} />
			<section id="home" ref={ref}>
				<Header />
			</section>
			<div>
				<Particles id="particlesBody" options={particlesBodyOptions as ISourceOptions} />
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
		</div>
	);
};

export default App;
