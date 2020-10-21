import React from "react";
import "./Header.scss";
import classNames from "classnames";

function Header({ positionY }) {
  return (
    <nav
      className={classNames("nav", {
        "scrolled-nav": positionY,
      })}
    >
      <div className="nav__max-width">
        <div className="nav__signature">
          <a className={classNames({ scrolled: positionY })} href="/#">
            NamTruong Portfolio
          </a>
        </div>
        <ul className="nav__menu">
          <li>
            <a className={classNames({ scrolled: positionY })} href="/#">
              Home
            </a>
          </li>
          <li>
            <a className={classNames({ scrolled: positionY })} href="/#">
              About
            </a>
          </li>
          <li>
            <a className={classNames({ scrolled: positionY })} href="/#">
              Work
            </a>
          </li>
          <li>
            <a className={classNames({ scrolled: positionY })} href="/#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
