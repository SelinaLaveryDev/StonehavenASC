import FrontCrawl from "../Assets/Photos/website-photos/FrontCrawl.png";
import WelcomeSASC from "../Assets/WelcomeSASC.png";
import "../Components/Home.css";
import PhotoSlider from "./PhotoSlider";

export default function Home() {
	return (
		<div className="home-container">
			<div className="welcome-banner">
				<div className="flex-container">
					<div
						className="sasc-title"
						alt="Stonehaven Amateur Swimming Club">
					</div>
					<PhotoSlider />
				</div>
			</div>
			
			<div className="welcome-section">
				<img
					src={WelcomeSASC}
					alt="Welcome to Stonehaven Amateur Swimming Club"
				/>
				<p>
					Stonehaven Amateur Swimming Club (SASC) is a competitive swimming club
					based in Stonehaven, Aberdeenshire. We are a small, friendly club with
					a focus on developing swimmers to their full potential. We welcome
					swimmers of all ages and abilities, from those who have just learned
					to swim to those who compete at national level.
				</p>
			</div>
		</div>
	);
}
