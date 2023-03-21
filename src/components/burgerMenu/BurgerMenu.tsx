import { FC, useState } from "react";

import { navItem } from "../../core/constants/constants";
import close from "../../assets/img/close.svg";

import { TBurgerMenu } from "./BurgerMenu.types";

import "./BurgerMenu.scss";

const BurgerMenu: FC<TBurgerMenu> = ({ setActiveBurger }) => {
  const [toggle, setToggle] = useState<string>("");
  const [toggleClassCloseBtn, setToggleClassCloseBtn] = useState(false);
  
  const getLinkData = (itemName: string) => {
    setToggle(itemName);
  };
  const resetState = () => {
    setToggle("");
  };

  const toggleClass = (bool: boolean) => {
    setToggleClassCloseBtn(bool);
  };

  const closeBurgerMenu = () => {
    setActiveBurger(false);
  };
  return (
    <div className="wrapper__burger">
      <img
        className={toggleClassCloseBtn === true ? "close-active" : "close"}
        src={close}
        alt="close"
        onMouseOver={() => toggleClass(true)}
        onMouseOut={() => toggleClass(false)}
        onClick={() => closeBurgerMenu()}
      />
      <ul className="burger">
        {navItem &&
          navItem.map((item, i) => (
            <li className="burger__item">
              <a
                href="_#"
                className={
                  item !== toggle
                    ? "burger__item-link"
                    : "burger__item-link-active"
                }
                onMouseOver={() => getLinkData(item)}
                onMouseOut={() => resetState()}
              >
                {item}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
