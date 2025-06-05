import React, { useState } from "react";
import "./HeroSection.css";
import personImg from "../assets/personImage.png";
import leadyImg from "../assets/Leady-model.jpg";
import mobileImage from "../assets/mobileImage.jpg";
import TableComponent from "./TableComponent";

const HeroSection = ({ handleForm, blur, data }) => {
  return (
    <>
      <div className={`${blur ? "blur" : ""}`}>
        <div className="section1">
          <div className="textcontainer">
            <h1>
              Simplify Your Life with Our
              <br />
              Todo App
            </h1>
            <h4>
              Stay organized and boost your productivity with our intuitive todo
              website. Experience a modern approach to task management that fits
              your lifestyle.
            </h4>
            <div className="btns">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#formModal"
                onClick={handleForm}
              >
                Get Started
              </button>
              <button type="button" className="btn btn-outline-danger">
                Learn More
              </button>
            </div>
          </div>

          {/* card */}

          <div className="card-container">
            {/* left card */}
            <div className="card text-bg-dark left">
              <div className="card-img-overlay">
                <h5 className="card-title h51">Organize.</h5>
                <h5 className="card-title">Achieve.</h5>
                <h5 className="card-title">Relax.</h5>

                <p className="card-text">
                  Turn clutter into clarity, chaos into control, and dreams into
                  done.bold visions into market success
                </p>
                <div className="btns">
                  <button type="button" className="btn btn-light">
                    Get Started Today
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    style={{ color: "black" }}
                  >
                    Discover Features
                  </button>
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="card text-bg-dark right">
              <img src={personImg} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title h51">Your Tasks.</h5>
                <h5 className="card-title h52">Our Tools.</h5>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="section2">
          <div className="heading">
            <h2>
              Transform Your Productivity with Our Innovative To-Do List
              Features
            </h2>
          </div>
          <div className="cards">
            <div class="card">
              <div class="card-body">
                <div className="icon-container">
                  <span>
                    <i className="fas fa-laptop-code"></i>
                  </span>
                  <span id="num">01</span>
                </div>
                <h4>User-Friendly Interface</h4>
                <p>
                  Our platform offers seamless task management to boost your
                  efficiency.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div className="icon-container">
                  <span>
                    <i className="fas fa-paper-plane"></i>
                  </span>
                  <span id="num">02</span>
                </div>
                <h4>Collaborate & Share Effortlessly</h4>
                <p>
                  Invite team members to work together and achieve your goals
                  faster
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div className="icon-container">
                  <span>
                    <i className="fas fa-users"></i>
                  </span>
                  <span id="num">03</span>
                </div>
                <h4>Effortless Collaboration</h4>
                <p>
                  Invite team members to work together and achieve your goals
                  faster.
                </p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div className="icon-container">
                  <span>
                    <i className="fas fa-tasks"></i>
                  </span>
                  <span id="num">04</span>
                </div>
                <h4> Seamless Access</h4>
                <p>Stay connected and manage your tasks on the go with ease.</p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="design-container">
          <h1>Customer Testimonials</h1>
          <p>This tool has transformed my productivity and organization!</p>

          <div className="sub-design-container">
            <div className="child-design">
              <div className="text-container">
                <h1>
                  Using this website has made my tasks so much easier! I can't
                  imagine my day without it."
                </h1>
                <div>
                  <div className="sm-box"></div>
                  <span>
                    <div>
                      <h4>Sherri Cronin</h4>
                      <p>Project Manager, TechCorp</p>
                    </div>
                  </span>
                </div>
                <div className="icon">
                  <i class="fa-solid fa-circle-chevron-left"></i>
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </div>
              </div>
              <div className="img-container">
                <img src={leadyImg} alt="leady" />
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="heroCard">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-6">
                <img
                  src={mobileImage}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-6">
                <div class="card-body C-body">
                  <h5 class="card-title">Start Organizing Your Life Today</h5>
                  <p class="card-text">
                    Join us now and transform your productivity with our
                    intuitive to-do list platform!
                  </p>
                  <div className="buttonC">
                    <button type="button" class="btn btn-danger">
                      Sign Up
                    </button>
                    <button type="button" class="btn btn-outline-danger">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TableComponent data={data} />
    </>
  );
};

export default HeroSection;
