import React from "react";
import logo from "./logo.png";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navContainer">
      <header className="navHeader">
        <img src={logo} width={124} height={54} alt={logo} />
      </header>
      <main className="navContent">
        <div className="navElement navAlert">
          <img src={logo} width={17.73} height={17.73} alt="alert icon" />
          <span className="navText">Alerts</span>
        </div>
        <div className="navElement navTraining">
          <img src={logo} width={20.72} height={13.56} alt="alert icon" />
          <span className="navText">Training</span>
        </div>
        <div className="navElement navAutomation">
          <img src={logo} width={23.88} height={20} alt="automation icon" />
          <span className="navText">Automation</span>
        </div>
        <div className="navElement navPortfolio">
          <img src={logo} width={25.42} height={18} alt="alert icon" />
          <span className="navText">Portfolio</span>
        </div>
        <div className="navElement navTrading">
          <img src={logo} width={25} height={21.05} alt="alert icon" />
          <span className="navText">Trading</span>
        </div>
      </main>
      <footer className="navFooter">
        <div className="currentUser">
          <img src={logo} width={38.2} height={41} alt="user photo0" />
          <div className="userInfo">
            <span className="userName">Ahmed Sayed</span>
            <span className="userTitle">Mahdi</span>
          </div>
        </div>
        <div className="version">
          <span>Street Suite 2.0</span>
        </div>
      </footer>
    </div>
  );
}

export default Navbar;
