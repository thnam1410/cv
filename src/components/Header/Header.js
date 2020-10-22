import React, { useState } from "react";
import "./Header.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


function Header({ positionY, isInvisibleMenuIcon
 }) {
  const [menuActive, setMenuActive] = useState(false);

  const handleOnClickMenu = () => {
    setMenuActive(!menuActive)
    positionY = !positionY
  }

  return (
    <nav
      className={classNames("nav", {
        "scrolled-nav": positionY,
      })}
    >
      <div className="nav__max-width">
        <div className="nav__signature">
          <a className={classNames({ scrolled: positionY })} href="/#">
            NamTruong <span className="portfo">Portfolio</span>
          </a>
        </div>
        <ul className={classNames("nav__menu",{"active": menuActive})}>
          <li>
            <a className={classNames({ "li-scrolled": positionY })} href="/#">
              Home
            </a>
          </li>
          <li>
            <a className={classNames({ "li-scrolled": positionY })} href="/#">
              About
            </a>
          </li>
          <li>
            <a className={classNames({ "li-scrolled": positionY })} href="/#">
              Work
            </a>
          </li>
          <li>
            <a className={classNames({ "li-scrolled": positionY })} href="/#">
              Contact
            </a>
          </li>
        </ul>
        {!isInvisibleMenuIcon ? 
          (menuActive ? <FontAwesomeIcon
                        className="btn-menu" 
                        icon={faTimes} 
                        size="2x" 
                        color="white"
                        onClick={handleOnClickMenu}/> 
                      : (<FontAwesomeIcon 
                        className="btn-menu" 
                        icon={faBars} 
                        size="2x" 
                        color={ positionY ? "black" : "white"}
                        onClick={handleOnClickMenu} />))
        : null 
        }
      </div>
    </nav>
  );
}

export default Header;
