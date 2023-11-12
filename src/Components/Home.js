import RedBanner from "../Assets/RedBanner.png";
import SASCfullTitle from "../Assets/SASCfullTitle.png";
import FrontCrawl from "../Assets/Photos/website-photos/FrontCrawl.png";
import WelcomeSASC from "../Assets/WelcomeSASC.png";
import "../Components/Home.css";

export default function Home() {
	return (
		<div className="home-container">
			<img
				className="welcome-banner"
				src={RedBanner}
				alt="welcome banner"
			/>
			<img
				className="sasc-title"
				src={SASCfullTitle}
				alt="Stonehaven Amateur Swimming Club"
			/>
			<img
				className="front-crawl"
				src={FrontCrawl}
				alt="Swimmer doing front crawl"
			/>
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
