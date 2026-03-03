import React from "react";
import "../Components/About.css";
import screenshot from "../Assets/Screenshot 2024-05-05 at 15.27 1.png";
import portlethen from "../Assets/Portlethen Swimming Pool 1.png";
import title from "../Assets/SASCtitle 1.png";

export default function About() {
  return (
    <>
      <header className="header-block">
        <img
          src={title}
          alt="Welcome to Stonehaven Amateur Swimming Club"
          width={200}
        />
      </header>

      <main className="about-container">
        <section className="about-column">
          <h2>OUR VISION</h2>
          <p>
            Stonehaven ASC aims to encourage the development of competitive
            swimming in the Stonehaven and Mearns area by coaching and
            motivating swimmers to achieve their goals and full potential.
          </p>
          <h3>MISSION STATEMENT</h3>
          <p>
            “We are committed to the promotion of excellence in swimming and the
            fostering of a sense of individual and team achievement within a
            competitive, stimulating and supportive environment. We provide the
            opportunity for members to pursue their goals and aspirations to the
            best of their ability within a safe, fun and fair environment.
          </p>
          <p>
            Our coaching philosophy applies the appropriate training, competing
            and recovery levels throughout our young swimmers’ career, allowing
            them to grow and develop mentally and physically as young athletes.
            We strive to promote long lasting friendships within the Club, the
            sport and beyond.”
          </p>
        </section>

        <section className="about-column">
          <h2>WELLBEING</h2>
          <p>
            SASC is committed to guiding swimmers to become the best version of
            themselves both in and out of the pool. We nurture a culture where
            athletes are inspired to work hard, believe in their abilities, and
            strive for growth every day. By celebrating teamwork, respect, and
            shared pride in each individual’s progress, we create strong
            connections that elevate the whole group. Above all, we aim to
            instil a genuine passion for swimming and positive character traits
            that will support our athletes throughout their lives, long after
            their competitive journey ends
          </p>
          <h3>SQUAD STRUCTURE</h3>
          <p>
            Stonehaven Amateur Swimming Club has 5 main squads, which swimmers
            will aim to progress through during their time with the club. Most
            swimmers will enter Junior Bronze when they join, and will progress
            through Bronze, Silver, Gold and Platinum.
          </p>
          <p>
            Platinum is a competitive squad and places are at a premium.
            Swimmers are expected to be swimming at North District level and
            beyond to be accepted in this squad.
          </p>
          <div className="badge-container">
            <div className="badge junior-bronze">Junior Bronze</div>
            <div className="badge bronze">Bronze</div>
            <div className="badge silver">Silver</div>
            <div className="badge gold">Gold</div>
            <div className="badge platinum">Platinum</div>
          </div>
          <div className="training-image">
            <img
              className="pathway-img"
              src={screenshot}
              alt="The pathway to success isn't linear"
            />
          </div>
        </section>

        <section className="training-column">
          <div className="training-content">
            <div className="training-text">
              <h2>TRAINING FACILITIES</h2>

              <p>
                Stonehaven Amateur Swimming Club’s ‘home pool’ is Stonehaven
                Leisure Centre, and our Gold and Platinum squads attend a weekly
                session at Portlethen Swimming Pool and weekly long course
                training at Aberdeen Sports Village.
                <br></br>
                <br></br>
                Stonehaven Leisure Centre has recently undergone a significant
                refurbishment, including a new changing village, which has
                greatly enhanced the facilities for our swimmers.
                <br></br>
                <br></br>Our Gold and Platinum swimmers are also offered monthly
                Yoga sessions at The Haven and regular Land Training
                sessions.{" "}
              </p>
            </div>
            <div className="training-image">
              <img
                src={portlethen}
                alt="Portlethen Swimming Pool"
                width={300}
              />
            </div>
          </div>
        </section>
        <section className="about-column">
          <h2>PARTNERSHIPS</h2>
          <p>
            SASC works closely with the South Aberdeenshire swimming clubs
            (Banchory ASC, Westhill District ASC and Upper Deeside ASC) to
            provide competition opportunities to young swimmers within the South
            Aberdeenshire area.
          </p>
        </section>
        <section className="about-column">
          <h2>SWIM WITH US</h2>
          <p>
            We aim to hold trial sessions a minimum of once a year, depending on
            the number of spaces available. We have developed links with the
            Live Life Aberdeenshire (LLA) Learn to Swim Programme and any
            upcoming trials will be advertised to appropriate level swimmers by
            LLA, typically level 5 or 6 of their program (or equivalent from any
            Learn to Swim programme). Trials will also be advertised on our
            website and facebook page. If you wish to be notified of our next
            trial session, please contact our Membership Secretary, who will be
            in contact when the next trial date is confirmed.
            <br />
            <br />
            If you are looking to transfer to Stonehaven Amateur Swimming Club
            from another club, please contact the Membership Secretary,
            providing details of your swimmer’s current club, age and level, and
            they will discuss with the Head Coach.
            <br />
            <br />
            <a href="mailto:sascmembershipsecretary@gmail.com">
              sascmembershipsecretary@gmail.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
