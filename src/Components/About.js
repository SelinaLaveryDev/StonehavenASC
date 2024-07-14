import React from "react";
import "../Components/About.css";
import screenshot from "../Assets/Screenshot 2024-05-05 at 15.27 1.png";
import portlethen from "../Assets/Portlethen Swimming Pool 1.png";
import title from "../Assets/SASCtitle 1.png";

export default function About() {
  return (
    <>
      <header className='header-block'>
      <img src={title} alt="Welcome to Stonehaven Amateur Swimming Club" width={200}/>	

      </header>

      <main className="about-container">
        <section className="about-column">
          <h2>OUR VISION</h2>
          <p>Stonehaven ASC aims to encourage the development of competitive swimming in the Stonehaven and Mearns area by coaching and motivating swimmers to achieve their goals and full potential.</p>
          <h3>MISSION STATEMENT</h3>
          <p>“We are committed to the promotion of excellence in swimming and the fostering of a sense of individual and team achievement within a competitive, stimulating and supportive environment. We provide the opportunity for members to pursue their goals and aspirations to the best of their ability within a safe, fun and fair environment.</p>
          <p>Our team of enthusiastic coaches, officials and Committee members are unpaid parent volunteers. We are all valued and encouraged to work together to achieve the Club and individual goals.</p>
          <p>As members of South Aberdeenshire Swimming we follow their structured coaching and training ethos.</p>
          <p>Our swimmers compete at local (North District) events, National events and sometimes even International level. Our coaching philosophy applies the appropriate training, competing and recovery levels throughout our young swimmers’ career, allowing them to grow and develop mentally and physically as young athletes. We strive to promote long lasting friendships within the Club, the sport and beyond.”</p>
        </section>
        
        <section className="about-column">
          <h2>WELLBEING</h2>
          <p>Volunteers are the lifeblood of any club, and SASC is no different. We are run by volunteers who do everything to make the club run smoothly.</p>
          <h3>SQUAD STRUCTURE</h3>
          <p>Stonehaven Amateur Swimming Club has 5 main squads, which swimmers will aim to progress through during their time with the club. Most swimmers will enter Junior Bronze when they join, and will progress through Bronze, Silver, Gold and Platinum.</p>
          <p>Platinum is a competitive squad and places are at a premium. Swimmers are expected to be swimming at North District level and beyond to be accepted in this squad.</p>
          <div className="badge-container">
            <div className="badge junior-bronze">Junior Bronze</div>
            <div className="badge bronze">Bronze</div>
            <div className="badge silver">Silver</div>
            <div className="badge gold">Gold</div>
            <div className="badge platinum">Platinum</div>
            
          </div>
          <div className="screenshot-container">
          <img src={screenshot} alt="The pathway to success isn't linear" width={400} />
          </div>
        </section>
        
        <section className="training-column">
  <div className="training-content">
    <div className="training-text">
    <h2>TRAINING FACILITIES</h2>

      <p>Stonehaven Amateur Swimming Club’s ‘home pool’ is Stonehaven Leisure Centre, and our Gold and Platinum squads attend a weekly session at Portlethen Swimming Pool and weekly long course training at Aberdeen Sports Village.<br /><br />
      Stonehaven Leisure Centre is currently undergoing a £1.1 million refurbishment. While this work is ongoing we have increased our sessions at Portlethen Swimming Pool, Aberdeen Sports Village and have secured pool time on loan from other local clubs, allowing us sessions at Westhill Swimming Pool and Lochside Academy.<br /><br />
      Our Gold and Platinum swimmers are also offered monthly Yoga sessions at The Haven and regular Land Training sessions at Stonehaven Community Centre.</p>
    </div>
    <div className="training-image">
      <img src={portlethen} alt="Portlethen Swimming Pool" width={300}/>
    </div>
  </div>
</section>
<section className="about-column">
          <h2>PARTNERSHIPS</h2>
          <p>SASC is an active member of South Aberdeenshire Swimming (SAS); a joint initiative involving local swimming clubs, Aberdeenshire Council, and the Scottish Amateur Swimming Association to develop swimming talent in South Aberdeenshire.<br /><br />

SASC is one of the 4 participating clubs in SAS:
<ul>

<li>Banchory ASC</li>
<li>Stonehaven ASC</li>
<li>Westhill District ASC</li>
<li>Upper Deeside ASC</li>

</ul>
SASC swimmers are automatically members of SAS and may be invited to represent South Aberdeenshire at appropriate events.  In fact, the first gala that many of our younger swimmers’ attend will be the SAS Mini Meet.<br /><br />


Our coaching team work hard to develop relationships with other clubs throughout Scotland which enables us to have a collaborative approach, sharing ideas, knowledge and expertise, which is invaluable to the development of our swimmers.
</p>
        </section>
        <section className="about-column">
          <h2>SWIM WITH US</h2>
          <p>We aim to hold trial sessions a minimum of once a year, depending on the number of spaces available.  We have developed links with the Live Life Aberdeenshire (LLA) Learn to Swim Programme and any upcoming trials will be advertised to appropriate level swimmers by LLA, typically level 5 or 6 of their program (or equivalent from any Learn to Swim program).  Trials will also be advertised on our website and facebook page.  If you wish to be notified of our next trial session, please contact our Membership Secretary, who will be in contact when the next trial date is confirmed.<br /><br />


If you are looking to transfer to Stonehaven Amateur Swimming Club from another club, please contact the Membership Secretary, providing details of your swimmer’s current club, age and level, and they will discuss with the Head Coach.<br /><br />


<a href="mailto:headcoachasc@gmail.com">sascmembershipsecretary@gmail.com</a>
</p>
        </section>


      </main></>
  )}