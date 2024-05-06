import React from "react";
import "../Components/People.css"; // Ensure this CSS file is created
import coachingChart from "../Assets/Screenshot 2024-05-05 at 16.31 1.png";
import peopleChart from "../Assets/Screenshot 2024-05-05 at 17.24 1.png";
import title from "../Assets/SASCtitle 1.png";
import './About.css';


function People() {
  return (
    <>
              <header className='header-block'>
              <img src={title} alt="Welcome to Stonehaven Amateur Swimming Club" width={200}/>	

      </header>

    <div className="coaching-page">
      <section className="coaching-team">
        <h2>COACHING TEAM</h2>
        <div className="coaching-chart">
        </div>
        <div className="coaching-list">
          <ul>
            <li>Head Coach</li>
            <li>Lead Squad Coach</li>
            <li>Coach</li>
            <li>Poolside Helper</li>
            <li>Young Poolside Volunteers</li>
          </ul>
        </div>
        <img src={coachingChart} alt="Coaching Team" width={400}/>
      </section>

      <section className="head-coach-welcome">
        <h2>WELCOME FROM THE HEAD COACH</h2>
        <p>We are delighted to welcome swimmers to Stonehaven ASC and hope both swimmers and families will enjoy their time with the club. We are a competitive club and have lots of fun supporting our swimmers at local, district and national competitions.</p>
        <p>We aim to enable our swimmers to succeed to the best of their ability whilst also offering them the opportunity to improve their self-confidence, health, physical fitness, social skills and develop lifelong friendships.</p>
        </section>

        <section className="head-coach-welcome">

        <h2>COACHING TEAM VOLUNTEER OPPORTUNITIES</h2>
        <p>We are always looking for enthusiastic people to join our coaching team. If you feel that you have skills that would be suited to working with our swimmers on poolside, please contact the Head Coach to discuss.</p>
        <a href="mailto:headcoachasc@gmail.com">headcoachasc@gmail.com</a>
      </section>

      <section className="head-coach-welcome">
        <h2>COMMITTEE</h2>
        <p>Nobody can do everything, but everyone can do something…
</p>
        <p>Stonehaven Amateur Swimming Club is entirely volunteer run, from the committee to the coaching team, who volunteer and give up their time freely to assist with the running of our club. We rely heavily upon our dedicated volunteer workforce, without whom, the club would not survive.</p>
        </section>

        <section className="committees-section">
      <h2>Committees</h2>
      <div className="committees-container">
        <div className="committee">
          <h3>Committee</h3>
          <ul>
            <li>Chairperson</li>
            <li>Vice Chair</li>
            <li>Treasurer</li>
            <li>Secretary</li>
            <li>Membership Secretary</li>
            <li>Gala Secretary</li>
            <li>Gala Fund Treasurer</li>
            <li>Meet Secretary</li>
            <li>Pool Lets Coordinator</li>
            <li>Wellbeing Protection Officer (WPO)</li>
            <li>Volunteer Coordinator</li>
            <li>STO Coordinator</li>
            <li>Fundraising Officer</li>
            <li>Fundraising Treasurer</li>
            <li>SAS Rep</li>
            <li>ND Rep</li>
            <li>Kit Coordinator</li>
            <li>Digital Communications Officer</li>
            <li>Meet Convenor</li>
            <li>Young Person Rep</li>
          </ul>
        </div>
        <div className="exec-committee">
          <h3>Executive Committee</h3>
          <ul>
            <li>Head Coach</li>
            <li>Chairperson</li>
            <li>Treasurer</li>
            <li>Wellbeing Protection Officer (WPO)</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="head-coach-welcome">
        <h2>GET INVOLVED</h2>
        <p>SASC like most swimming clubs, is completely volunteer run. There are many different volunteering opportunities and roles to suit your skills and experience. Whether you can spare an hour a month or an hour a day, your time will really make a difference.</p>
       <div className="people-chart"><img src={peopleChart} alt="People Chart" width={400}/></div>
       <br />
       <p>If you would like further information about you could get involved, please contact the Volunteer Coordinator, Rowena at <a href="mailto:sascvolunteercoord@gmail.com">sascvolunteercoord@gmail.com </a>
</p>
        </section>

    </div>
    </>
  );
}

export default People;
