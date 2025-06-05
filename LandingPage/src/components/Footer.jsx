import React from "react";
import "./Footer.css";
import todoLogo from "../assets/do-List-logo.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="about">
        <div className="joinInvi">
          <div>
            <img src={todoLogo} alt="Todo-logo" className=" logo" />
          </div>
          <p>
            Subscribe to our newsletter for the latest features and updates
            delivered to you.
          </p>
          <form className="joinform">
            <input type="email" placeholder="Your email here" />
            <button type="button" class="btn btn-danger">
              Join
            </button>
          </form>
          <p className="priv-instu">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.{" "}
          </p>
        </div>
        <div className="link-reso">
          <div className="links">
            
            <ul className="ul">
                <h6>Useful Links</h6>
                <li>Home Page</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blog Post</li>
                <li>FAQs</li>
            </ul>
          </div>
          <div className="resource">
            
            <ul className="ul">
                <h6>Useful Links</h6>
                <li>Help Center</li>
                <li>User Guide</li>
                <li>Community Fourum</li>
                <li>FeedBack</li>
                <li>Support</li>
            </ul>
          </div>
          <div className="contc-info">
            
            <ul className="ul">
                <h6>Useful Links</h6>
                <li><i class="fa-brands fa-facebook"></i>  Facebook</li>
                <li><i class="fa-brands fa-instagram"></i>  Instagram</li>
                <li><i class="fa-brands fa-x-twitter"></i>  X</li>
                <li><i class="fa-brands fa-linkedin"></i>  LinkedIn</li>
                <li><i class="fa-brands fa-youtube"></i>  YouTube</li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      <div className="copyright">
        <p>&copy; 2024 Osumare. All rights reserved. </p>
        <div className="linkcontainer">

            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookie Settings</a>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
