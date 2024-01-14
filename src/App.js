import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./Components/Contact";
import Committee from "./Components/Committee";
import Documents from "./Components/Documents";
import Events from "./Components/Events";

export default function App() {
	return (
		<Router>
			<div className="App">
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
							path="/committee"
							element={<Committee />}
						/>
						<Route
							path="/documents"
							element={<Documents />}
						/>

						<Route
							path="/contact"
							element={<Contact />}
						/>


					</Routes>
				</div>
			</div>
		</Router>
	);
}
