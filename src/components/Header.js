import React from "react";
import logo from "./logo.png";
import Heading from "./Heading.png";
import untitled from "./Untitled.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__left">
          <img src={logo} alt="" />
        </div>
        <div className="header__right">
          <button>HOME</button>
          <button>ABOUT US</button>
          <button>COURSE </button>
          <button>BLOG</button>
          <button>CONTACT US</button>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header_bottom_left">
          <img src={Heading} alt="what is the " />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
            eros
          </p>
          <p>
            erat. Nullam vel venenatis purus. Integer fringilla felis a libero
          </p>
          <p>sollicitudin venenatis.</p>
        </div>
        <div className="header_bottom_right">
          <img src={untitled} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
