import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
    const currentYear = new Date();
    document.getElementById("getYear").innerHTML = currentYear.getFullYear();
  });

  return (
    <>
      <footer className="footer-container">
        <hr />
        {/* footer top */}
        {/* <div className="footer-top">
          <div className="footer-top-section">
            <div className="footer-section-title focus-title">Categories</div>
            <div className="footer-content">
              <Link to="/">Home</Link>
              <Link to="/business">Business</Link>
              <Link to="/health">Health</Link>
              <Link to="/science">Science</Link>
              <Link to="/entertainment">Entertainment</Link>
              <Link to="/technology">Technology</Link>
              <Link to="/sports">Sports</Link>
            </div>
          </div>
          <div className="footer-top-section">
            <div className="footer-section-title focus-title">TOP LINKS</div>
            <div className="footer-content">
              <a href="/">CTEVT Website</a>
              <a href="/">TAN Facebook Page</a>
              <a href="/">Wikipedia</a>
            </div>
          </div>
        </div>
        footer-bottom */}
        <div className="footer-bottom focus-title" id="footerBottom">
          <p>
            Copyright &copy; TAN News <span id="getYear"></span>
          </p>
        </div>
      </footer>
    </>
  );
}
