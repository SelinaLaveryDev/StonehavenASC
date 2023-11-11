import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";

export default function App() {
	return (
		<Router>
			<div className="app">
				<Sidebar />
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
				</Routes>
			</div>
		</Router>
	);
}
