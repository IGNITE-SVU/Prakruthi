import React from "react";
import "../../Landingpage/index.css";
import desktop from "../../assets/desktop-solid.png";
import list from "../../assets/list-check-solid.png";
import statistics from "../../assets/statistics.png";
import about from "../../assets/about.png";
import header2 from "../../assets/header2.png";
import Navbar from "../Navbar/navbar";
import {AiFillFacebook,AiFillGooglePlusCircle,AiFillLinkedin,AiFillTwitterCircle,AiFillYoutube} from 'react-icons/ai'
// import ImgSlide from "../Carousel/ImgSlide";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>
                Together,let's build a <span>Sustainable </span>and{" "}
                <span>Green Future</span>
              </h1>
              <h2>
                Sustainability is the way to our future - Prakruthi Suraksha is
                the way forward.
              </h2>
              <div class="d-flex">
                <a href="#about" class="btn-get-started scrollto">
                  About
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  class="glightbox btn-watch-video"
                >
                  <i class="bi bi-play-circle"></i>
                  <span>Contact</span>
                </a>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={header2} class="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="box-container-1">
          <div className="box">
            <div className="icon-text-layout">
              <div className="icon-container">
                <img src={desktop} alt="desktop"></img>
              </div>
              <div className="text-container">
                <h4>OUR-WEBSITE-APP</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error aliquam distinctio .
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icon-text-layout">
              <div className="icon-container">
                <img src={list} alt="desktop"></img>
              </div>
              <div className="text-container">
                <h4>WORK-PROGRESS</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error aliquam distinctio{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icon-text-layout">
              <div className="icon-container">
                <img src={statistics} alt="desktop"></img>
              </div>
              <div className="text-container">
                <h4>STATISTICS</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error aliquam distinctio{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-content-layout row">
          <div className="image-container">
            <img src={about} alt="Product" />
          </div>
          <div className="content-container">
            <h1>What is Prakruthi Suraksha !? </h1>
            <div>
              <p class="fst-italic">
                Prakruti Suraksha aims to protect and conserve natural
                resources, such as forests, water bodies, and wildlife, which
                play a vital role in reducing carbon footprints. By promoting
                sustainable and eco-friendly practices, Prakruti Suraksha can
                help reduce carbon emissions from various sources such as
                industries, agriculture, transportation, and households.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i> The program focuses on
                  promoting renewable energy sources much as solar, wind, and
                  hydro power. which can replace conventional energy sources
                  that are major contributors to carbon eminent.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Prakruti Suraksha alo aims
                  to raise awareness among people about the importance of
                  reducing carbon footprint and encouraging them to adopt
                  sustainable practices in their daily live The program aho
                  mupport: the development of carbon-neutral and carbon negative
                  technologie that can help reduce carbon footprints and combat
                  climate change.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-container-1">
          <div className="bottom-box">
            <h1>232</h1>
            <h6>SINKS</h6>
          </div>
          <div className="bottom-box">
            <h1>521</h1>
            <h6>SOURCES</h6>
          </div>
          <div className="bottom-box">
            <h1>463</h1>
            <h6>HOURS OF WORK</h6>
          </div>
          <div className="bottom-box">
            <h1>15</h1>
            <h6>VOLUNTEERS</h6>
          </div>
        </div>
        <section id="cta" class="cta">
          <div class="container">
            <div class="text-center">
              <h3>Call To Action</h3>
              <p>
                {" "}
                Safeguarding the environment is not just a duty it's our moral
                obligation.Together, we can create a greener future by promoting
                eco-friendly practices and fostering a culture of environmental
                responsibility.{" "}
              </p>
              <a class="cta-btn" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </section>
        <section>
          <div class="footer-content">
            <h3>Foolish Developer</h3>
            <p>
              Raj Template is a blog website where you will find great tutorials
              on web design and development. Here each tutorial is beautifully
              described step by step with the required source code.
            </p>
            <ul class="socials">
              <li>
                <a href="#">
                <AiFillFacebook/>
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillTwitterCircle/>
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillGooglePlusCircle/>
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillYoutube/>
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillLinkedin/>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-bottom">
            <p>
              copyright &copy; <a href="#">Foolish Developer</a>{" "}
            </p>
            <div class="footer-menu">
              <ul class="f-menu">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
