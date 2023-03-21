import { FC, useState } from "react";

import Button from "../button/Button";

import { navItem } from "../../core/constants/constants";

import vector from "../../assets/img/Vector.svg";
import num from "../../assets/img/num.svg";
import burger from "../../assets/img/burger.svg";

import { THeader } from "./Header.types";

import "./Header.scss";

const Header: FC<THeader> = ({ setActiveBurger, activeBurger }) => {
  const [toggle, setToggle] = useState<string>("");

  const getLinkData = (itemName: string) => {
    setToggle(itemName);
  };
  const resetState = () => {
    setToggle("");
  };

  const openBurger = () => {
    setActiveBurger(true);
  };

  return (
    <header className="header">
      <a href="_#" className="logo__link">
        PRODUCT
        <div className="wrapper__img-logo">
          <img className="vector" src={vector} alt="vector" />
          <img className="time" src={num} alt="time" />
        </div>
      </a>

      {!activeBurger && (
        <img
          className="burgerBtn"
          src={burger}
          alt="burger"
          onClick={() => openBurger()}
        />
      )}

      <nav className="wrapper__menu">
        <ul className="menu">
          {navItem &&
            navItem.map((item, i) => (
              <li className="menu__item" key={i}>
                <a
                  href="_#"
                  className={
                    item !== toggle ? "menu__item-link" : "menu__item-active"
                  }
                  onMouseOver={() => getLinkData(item)}
                  onMouseOut={() => resetState()}
                >
                  {item}
                </a>
              </li>
            ))}
        </ul>
      </nav>
      <Button className="button">Button</Button>
    </header>
  );
};

export default Header;
