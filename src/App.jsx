import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonial from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Portfolio from "./components/potfolio/Portfolio";
import { useSelector } from "react-redux";
import Loading from "./Loading";
function App() {
	const userData = useSelector((state) => state.profile.user_data);
	const loading = useSelector((state) => state.profile.loading);

	return (
		<>
			{loading && <Loading />}
			<Header />
			<main className='main'>
				<Hero />
				<About />
				<Services />
				<Skills />
				<Portfolio />
				<Qualification />
				<Testimonial />
				<Contact />
			</main>
			<Footer />
			<ScrollUp />
		</>
	);
}

export default App;
