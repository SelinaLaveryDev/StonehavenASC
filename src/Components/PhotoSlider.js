import "../Components/PhotoSlider.css"
import ArenaGoggles from "../Assets/Photos/website-photos/ArenaGoggles.png";
import Butterfly from "../Assets/Photos/website-photos/Butterflypng.png";
import ChampionshipPool from "../Assets/Photos/website-photos/ChampoinshipPool.png";
import FrontCrawl from "../Assets/Photos/website-photos/FrontCrawl.png";
import JumpingInPool from "../Assets/Photos/website-photos/JumpingInPool.png";
import Swimmer from "../Assets/Photos/website-photos/Swimmer.png";


export default function PhotoSlider() {
  return (
    <div className='photos slider'>
        <div className='tile'>
            <img src={ArenaGoggles} />
        </div>  
        <div className='tile'>
        <img src={Butterfly} />

        </div>  
        <div className='tile'>
        <img src={ChampionshipPool} />

        </div>  
        <div className='tile'>
        <img src={FrontCrawl} />

        </div>  
        <div className='tile'>
        <img src={JumpingInPool} />

        </div>  
        <div className='tile'>
        <img src={Swimmer} />

        </div>  

    </div>
  )
}
