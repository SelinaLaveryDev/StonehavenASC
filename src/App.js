import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./Components/Contact";
import People from "./Components/People";
import Documents from "./Components/Documents";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import TopNav from "./Components/TopNav";

export default function App() {
	return (
		<Router>
			<div className="App">
				<TopNav />
				<Sidebar />
				<div className="content">
					<Routes>
						<Route
							exact
							path="/"
							element={<Home />}
						/>
						<Route
							path="/about"
							element={<About />}
						/>
						<Route
							path="/events"
							element={<Events />}
						/>

						<Route
							path="/people"
							element={<People />}
						/>
						<Route
							path="/links"
							element={<Documents />}
						/>

						<Route
							path="/contact"
							element={<Contact />}
						/>


					</Routes>
				</div>
				<Footer />
			</div>

		</Router>
	);
}
