import React from 'react';
import '../Components/Documents.css'; // Make sure to create a Documents.css file for styling
import title from "../Assets/SASCtitle 1.png";
import './About.css';


const Documents = () => {
  const links = {
    governingBodies: [
      { name: 'Scottish Swimming', url: 'https://www.scottishswimming.com/' },
      { name: 'SASA North District', url: 'https://www.sasanorth.org.uk/' },
      { name: 'South Aberdeenshire Swimming SAS', url: 'https://www.facebook.com/SouthAberdeenshireSwimming/' },
      { name: 'World Aquatics', url: 'https://www.worldaquatics.com/' },
      { name: 'Live Life Aberdeenshire Learn to Swim', url: 'https://livelifeaberdeenshire.org.uk/' },
    ],
    swimShops: [
      { name: 'Allens of Kingsbury', url: 'https://www.allensswimwear.co.uk/' },
      { name: 'Proswimwear', url: 'https://www.proswimwear.co.uk/' }
    ],
    periodSwimwear: [
      { name: 'Modibodi', url: 'https://www.modibodi.co.uk/' },
      { name: 'Wuka', url: 'https://wuka.co.uk/' },
      { name: 'Funkita Ladies One Pieces', url: 'https://www.funkita.com/223-one-piece-swimsuits' },
      { name: 'Rubylove (American website, delivery to UK available)', url: 'https://www.rubylove.com/' } // Note: specify it's an American site with UK delivery
    ],
    usefulPdfs: [
      { name: 'Scottish Swimming Technical Official Pathway', url: 'https://drive.google.com/file/d/1EsqvK9GyP2DifDw4vZTaJPvFZkNwVGOD/view?usp=sharing' },
      { name: 'SASC Mental Health Signposting Resource', url: 'https://drive.google.com/file/d/1M7qVumENfhHnl8G0k5491Q-zUy9eSzpK/view?usp=sharing' },
      { name: 'SASC Constitution', url: 'https://drive.google.com/file/d/1_VYBQvb9XQIYmD6rLflQleS0aOHPUNbv/view?usp=sharing' },
      { name: 'SASC Code of Conduct Spectators', url: 'https://drive.google.com/file/d/1rEGhe9ms06VqUCe2Ot09w1Fh4oGEtIva/view?usp=sharing' },
      { name: 'SASC Anti-Doping & Clean Sport', url: 'https://drive.google.com/file/d/1AIQDnPAzRSkPMXFyWE-zFO_CdG9e2FBD/view?usp=sharing' }

    ]

  };
  return (
    <>
      <header className='header-block'>
      <img src={title} alt="Welcome to Stonehaven Amateur Swimming Club" width={200}/>	

      </header>
<div className="links">
      <div className="links-container">
        <h2>Links</h2>
        <section>
          <h3>Swimming Partners and Governing Bodies</h3>
          {links.governingBodies.map((link, index) => (
            <a key={index} href={link.url} className="link-item">{link.name}</a>
          ))}
        </section>
        <section>
          <h3>Swim Specific Shops</h3>
          {links.swimShops.map((link, index) => (
            <a key={index} href={link.url} className="link-item">{link.name}</a>
          ))}
        </section>
        <section>
          <h3>Period Swimwear</h3>
          {links.periodSwimwear.map((link, index) => (
            <a key={index} href={link.url} className="link-item">{link.name}</a>
          ))}
        </section>
        <section>
          <h3>Useful PDFs</h3>
          {links.usefulPdfs.map((link, index) => (
            <a key={index} href={link.url} className="link-item">{link.name}</a>
          ))}
        </section>

      </div>
      </div>
    </>
  );
};export default Documents;
