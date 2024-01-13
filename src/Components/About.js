import React from "react";
import "../Components/About.css";

export default function About() {
  return (
    <>
      <header className='header-block'>
      </header>

      <div className="about-container">
        <div className="about-column">
          <h2>About Us</h2>
          <p>Stonehaven Amateur Swimming Club (SASC) provides competitive swimming opportunities within the Stonehaven and Mearns Community. The Club is based out of Stonehaven Leisure Centre, although some training for the senior squads is undertaken at Aberdeen Sports Village (ASV) and Portlethen Swimming Pool.</p>
          <p>SASC is an active member of South Aberdeenshire Swimming (SAS); a joint initiative involving local swimming clubs, Aberdeenshire Council, and the Scottish Amateur Swimming Association to develop swimming talent in South Aberdeenshire.</p>
          <h3>Squads</h3>
          <p>We have a number of squads which swimmers will progress through during their time at SASC:</p>
          <ul>
            <li>Junior Bronze 1</li>
            <li>Junior Bronze 2</li>
            <li>Bronze</li>
            <li>Silver</li>
            <li>Gold</li>
            <li>Platinum</li>
          </ul>
          <p>Swimmers in Silver, Gold and Platinum Squad may be offered the opportunity to train with SAS squads on occasion, to further develop their swimming. These sessions take place in Westhill.</p>
          {/* More content */}
        </div>
        <div className="about-column">
          <h2>Get Involved</h2>
          <p>Volunteers are the lifeblood of any club, and SASC is no different. We are run by volunteers who do everything to make the club run smoothly.</p>
          <p>The club Committee meets regularly and would be delighted to see some new faces at their meetings - it’s a great way to be involved in the decisions that impact your swimmer.</p>
          <p>By signing your child up to join SASC, you are also making a commitment to get involved in the running of the club.</p>
		  <h3>Code of Conduct</h3>
      <p>Swimmers and parent members are asked to sign a Code of Conduct to help ensure the safety and enjoyment of all swimmers and volunteers.</p>
      <h3>Welcome</h3>
      <p>We look forward to welcoming you and your swimmer to SASC and to getting to know you and your family. If you have any questions, please contact our Membership Secretary at sascnews@hotmail.com</p>
      {/* More content */}
    </div>
    <div className="about-column">
      <h2>South Aberdeenshire Swimming (SAS)</h2>
      <p>SASC is one of the 4 participating clubs in SAS:</p>
      <ul>
        <li>Banchory ASC</li>
        <li>Stonehaven ASC</li>
        <li>Westhill District ASC</li>
        <li>Upper Deeside ASC</li>
      </ul>
      <p>SASC swimmers are automatically members of SAS and may be invited to represent South Aberdeenshire at appropriate events. In fact, the first gala that many of our younger swimmers attend will be the SAS Mini Meet.</p>
      <h3>Take Your Marks...</h3>
      <p>SASC is a competitive swimming club and as such it is expected that swimmers attend competitions throughout the year. The Coaching team will advise on which galas would be best suited to your swimmer.</p>
      {/* You may want to add links or buttons for contacting the committee or viewing the Code of Conduct */}
    </div>
  </div>    
</>
  )}