import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {

  useEffect(() => {
    const mainContainer = document.querySelector('.main-container')
    mainContainer.style.cssText = `
    grid-template-columns: unset;
    `
  }, [])


  return (
    <>
      <div className="error-div">
        <div className="error-code">
          404
        </div>
        <h2>Not Found!</h2>
        <p>Sorry for your inconvinence.</p>
        <Link to="/" className="error-back-btn">Go Back Home</Link>
      </div>
    </>
  );
}
