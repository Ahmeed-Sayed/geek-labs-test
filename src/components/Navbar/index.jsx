import { useState } from "react";
import Logo from "./icons/logo.svg?react";
import Alert from "./icons/alert.svg?react";
import Automation from "./icons/automation.svg?react";
import Portfolio from "./icons/portfolio.svg?react";
import Training from "./icons/training.svg?react";
import Avatar from "@mui/material/Avatar";
import Trading from "./icons/trading.svg?react";
import user from "./user.png";
import "./navbar.css";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpanded = (val) => {
    setIsExpanded(val);
  };

  const [hoveredElement, setHoveredElement] = useState(null);

  const handleHover = (name) => {
    setHoveredElement(name);
  };

  const navElements = [
    {
      id:1232115,
      name: "Alerts",
      icon: <Alert />,
      expandedIcon: <Alert width="30px" height="30px" />,
      soon: false,
    },
    {
      id:1557234,
      name: "Training",
      icon: <Training />,
      expandedIcon: <Training width="30px" height="30px" />,
      soon: false,
    },
    {
      id:352461,
      name: "Automation",
      icon: <Automation />,
      expandedIcon: <Automation width="30px" height="30px" />,
      soon: true,
    },
    {
      id:942324321,
      name: "Portfolio",
      icon: <Portfolio />,
      expandedIcon: <Portfolio width="30px" height="30px" />,
      soon: true,
    },
    {
      id:942234321,
      name: "Trading",
      icon: <Trading />,
      expandedIcon: <Trading width="30px" height="30px" />,
      soon: true,
    },
  ];

  return (
    <div
      className="navContainer"
      onMouseEnter={() => handleExpanded(true)}
      onMouseLeave={() => handleExpanded(false)}
    >
      <header className="navHeader">
        <Logo
          width={!isExpanded ? "60px" : null}
          height={!isExpanded ? "40px" : null}
        />
      </header>
      <main className="navContent">
        {!isExpanded &&
          navElements.map((element, index) => (
            <div
              key={element.id}
              className="navElement"
              style={{ alignSelf: "center" }}
            >
              {element.expandedIcon}
            </div>
          ))}

        {isExpanded &&
          navElements.map((element, index) => (
            <div
              key={index}
              className={`navElement nav${element.name} ${
                element.soon && hoveredElement === element.name ? "soon" : ""
              }`}
              onMouseEnter={() => handleHover(element.name)}
              onMouseLeave={() => handleHover(null)}
            >
              {isExpanded ? (
                <>
                  {element.soon && hoveredElement === element.name ? (
                    "Coming Soon"
                  ) : (
                    <>
                      {element.icon}
                      <span className="navText">{element.name}</span>
                    </>
                  )}
                </>
              ) : (
                <>
                  {element.icon}
                  <span className="navText">{element.name}</span>
                </>
              )}
            </div>
          ))}
      </main>
      <footer className="navFooter">
        <div
          className="currentUser"
          style={isExpanded ? { alignSelf: "center" } : {}}
        >
          <Avatar src={user} sx={{ backgroundColor: "white" }} />
          {isExpanded && (
            <div className="userInfo">
              <span className="userName">Moni Roy</span>
              <span className="userTitle">Mahdi</span>
            </div>
          )}
        </div>
        {isExpanded && (
          <div className="version">
            <span>Street Suite 2.0</span>
          </div>
        )}
      </footer>
    </div>
  );
}

export default Navbar;
