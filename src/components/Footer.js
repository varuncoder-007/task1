import React from "react";
import "./Footer.css";
import logo from "./logo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PublicIcon from "@material-ui/icons/Public";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="content_one">
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor sit amet,</p>
          <p>consectetur adipiscing elit. Aenean at.</p>
          <p>eros erat. Nullam vel venenatis</p>
          <p>purus. Integer fringilla felis a libero</p>
          <p>sollicitudin venenatis</p>
          <div className="icons">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <PublicIcon />
          </div>
        </div>
        <div className="links">
          <h3 className="heading">Products</h3>
          <span className="link">Link 1</span>
          <span className="link">Link 2</span>
          <span className="link">Link 3</span>
          <span className="link">Link 4</span>
          <span className="link">Link 5</span>
        </div>
        <div className="links">
          <h3 className="heading">Useful Links</h3>
          <span className="link">Link 1</span>
          <span className="link">Link 2</span>
          <span className="link">Link 3</span>
          <span className="link">Link 4</span>
          <span className="link">Link 5</span>
        </div>
        <div className="address">
          <h3 className="heading">Address</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="footer_bottom">
        <h6>©2020 Copyright : AnAspirantLife.com</h6>
      </div>
    </div>
  );
}

export default Footer;
