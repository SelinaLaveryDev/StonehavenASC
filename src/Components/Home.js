import aquamark from "../Assets/Copy of SSW_AQM1_Pos_Logo.png";
import "../Components/Home.css";
import PhotoSlider from "./PhotoSlider";

export default function Home() {
  return (
    <div className="home-container">
      <div className="welcome-banner">
        <div className="flex-container">
          <PhotoSlider />
        </div>
      </div>

      <div className="welcome-section">
        <div className="logo-row">
          <h1 className="welcome-title">
            Welcome to Stonehaven Amateur Swimming Club
          </h1>
          <img
            className="aquamark-img"
            src={aquamark}
            alt="Welcome to Stonehaven Amateur Swimming Club"
            width={100}
          />
        </div>
        <p>
          Stonehaven Amateur Swimming Club (SASC) is a competitive swimming club
          based in Stonehaven, serving the Stonehaven, Mearns and South
          Aberdeenshire area. We are a small friendly club, with a focus on
          developing swimmers to their full potential. We welcome swimmers of
          all ages and abilities, from those who have just learned to swim, to
          those who compete at a national level.
        </p>
        <br></br>
        <p>
          <a
            href="https://www.members.stonehavenasc.co.uk/page/home"
            target="_blank"
            rel="noreferrer"
          >
            Visit SASC Members Website
          </a>
        </p>
      </div>
    </div>
  );
}
