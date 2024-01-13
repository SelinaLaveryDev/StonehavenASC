import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./Components/Contact";

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
							path="/contact"
							element={<Contact />}
						/>

					</Routes>
				</div>
			</div>
		</Router>
	);
}
