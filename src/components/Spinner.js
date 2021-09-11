import React from "react";

export default function Spinner() {
  let myStyle = {
    margin: "5px 0px",
  };
  return (
    <center style={myStyle}>
      <img src="/imgs/spinner.svg" alt="spinner" width="40px" />
    </center>
  );
}
