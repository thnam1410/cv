import React, { useState } from "react";
import "./Header.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll, Link } from "react-scroll";

function Header({ positionY, isInvisibleMenuIcon }) {
  const [menuActive, setMenuActive] = useState(false);

  const handleOnClickMenu = () => {
    setMenuActive(!menuActive);
    positionY = !positionY;
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <nav
      className={classNames("nav", {
        "scrolled-nav": positionY,
      })}
    >
      <div className="nav__max-width">
        <div className="nav__signature">

            <a className={classNames({ scrolled: positionY })} onClick={toggleHome}>
              NamTruong <span className="portfo">Portfolio</span>
            </a>
        </div>
        <ul className={classNames("nav__menu", { active: menuActive })}>
          <li>
            <Link className={classNames({ "li-scrolled": positionY })} activeClass="active" to="home" spy={true} smooth={true} offset={50}  duration={500}>
              Home
            </Link>  
          </li>
          <li>
            <Link className={classNames({ "li-scrolled": positionY })} activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}>
              About
            </Link> 
          </li>
          <li>
            <Link className={classNames({ "li-scrolled": positionY })} activeClass="active" to="skills" spy={true} smooth={true} offset={-80}  duration={500}>
              Work
            </Link> 
          </li>
          <li>
            <Link className={classNames({ "li-scrolled": positionY })} activeClass="active" to="contact" spy={true} smooth={true}  offset={100}  duration={500}>
              Contact
            </Link> 
          </li>
        </ul>
        {!isInvisibleMenuIcon ? (
          menuActive ? (
            <FontAwesomeIcon
              className="btn-menu"
              icon={faTimes}
              size="2x"
              color="white"
              onClick={handleOnClickMenu}
            />
          ) : (
            <FontAwesomeIcon
              className="btn-menu"
              icon={faBars}
              size="2x"
              color={positionY ? "white" : "black"}
              onClick={handleOnClickMenu}
            />
          )
        ) : null}
      </div>
    </nav>
  );
}

export default Header;
