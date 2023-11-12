import "../Components/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { photoData } from "../Components/PhotoData.js";

export default function Home() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className="home-container">
			<div className="photo-carousel"></div>
			<Slider {...settings}>
				{photoData.map((item) => {
					return (
						<div
							key={item.id}
							className="photo-container">
							<img
								src={item.img}
								alt={item.title}
							/>
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
