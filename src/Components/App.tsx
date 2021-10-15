import Navbar from "./Nav/Navbar";
import Header from "./Header";
import About from "./About/About";

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
		</div>
	);
};

export default App;
