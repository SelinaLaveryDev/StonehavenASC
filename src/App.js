import { Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
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
import Supporters from "./Components/Supporters";
import { SiteHeader } from "./Components/SiteHeader";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="App">
      <TopNav />
      <Sidebar />
      <SiteHeader />
      <div className={isHomePage ? "content content--Home" : "content"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />

          <Route path="/people" element={<People />} />
          <Route path="/supporters" element={<Supporters />} />
          <Route path="/links" element={<Documents />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
