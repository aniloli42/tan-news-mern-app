import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  useEffect(() => {
    const menuBar = document.getElementById("menuBar");
    const bar = document.querySelector(".bars");
    const navItems = document.querySelectorAll(".nav-item");

    menuBar.addEventListener("click", (e) => {
      menuBar.classList.toggle("open");
      bar.classList.toggle("open");

      [...navItems].forEach((link) => {
        link.addEventListener("click", hideMenu);
      });
    });

    const hideMenu = () => {
      menuBar.classList.remove("open");
      bar.classList.remove("open");
    };
  }, []);

  return (
    <header>
      <div className="header-top">
        <h1 className="title">
          <Link to="/">{props.title}</Link>
        </h1>
        <img src={"/imgs/header_ads.jpg"} alt="header ads" />
      </div>
      <div className="menu-bar" id="menuBar">
        <p>Menu</p>
        <div className="bars"></div>
      </div>
      <nav id="navBar">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/business">Business</Link>
        </div>
        <div className="nav-item">
          <Link to="/health">Health</Link>
        </div>
        <div className="nav-item">
          <Link to="/science">Science</Link>
        </div>
        <div className="nav-item">
          <Link to="/entertainment">Entertainment</Link>
        </div>
        <div className="nav-item">
          <Link to="/technology">Technology</Link>
        </div>
        <div className="nav-item">
          <Link to="/sports">Sports</Link>
        </div>
      </nav>
      <hr />
    </header>
  );
}
