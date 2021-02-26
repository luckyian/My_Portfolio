import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
  return <main className="wrapper">
    {props.children}
  </main>;
}

export default Wrapper;
