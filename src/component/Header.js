import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  let navBarClickHandle = () => {
    const hamburgerBtn = document.querySelector(".hamburger");
    hamburgerBtn.classList.toggle("open");
  };

  return (
    <header>
      <h1>{props.title}</h1>
      <div className="hamburger" onClick={navBarClickHandle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="navLinks">
        <div className="link">
          <a href="/">TECH BLOGS</a>
        </div>
        <div className="link">
          <a href="/">CTEVT BLOGS</a>
        </div>
        <div className="link">
          <a href="/">DCOM CONTENT</a>
        </div>
        <div className="link">
          <a href="/">CONTACT US</a>
        </div>
      </nav>
    </header>
  );
}

Header.protoTypes = {
  title: PropTypes.string,
};
