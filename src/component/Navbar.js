import React from 'react'
import wevolt from "../assets/wevolt.png"

export function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background: "#e3f2fd"}} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color: "#000000"}} >
    <img src={wevolt} alt="Logo" height={"70px"}></img>
     WEVOLT ENTERPRISE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        
        <button type="button" className="btn btn-info me-2"  onClick={() => props.handlepage(props.page=='home'?"business" : "home")}>{props.page==='home'?"Signin" : "Go to home"}</button>
        </li>
     </ul>
    </div>
  </div>
</nav>
  )
};


