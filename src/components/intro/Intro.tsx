import { FC } from "react";

import {
  introItemRowFirst,
  introItemRowThree,
  introItemRowTwo,
} from "../../core/constants/constants";

import bubbleLeft from "../../assets/img/patternLeft.svg";
import bubbleRight from "../../assets/img/patternRight.svg";

import "./Intro.scss";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
const Intro: FC = () => {
  return (
    <section className="intro">
      <SwiperComponent/>
      <div className="wrapper__border">
        <div className="border"></div>
      </div>
      <h1 className="title">Lorem ipsum, dolor sit amet consectetur</h1>

      <div className="main-food">
        <img className="bubble-left" src={bubbleLeft} alt="bubble" />
        <img className="bubble-right" src={bubbleRight} alt="bubble" />
        <div className="row">
          {introItemRowFirst &&
            introItemRowFirst.map((item, i) => (
              <div className="row__item row__item-child" key={i}>
                <img className="first-row-item" src={item.img} alt="foodItem" />
                <p className="desc">{item.text}</p>
              </div>
            ))}
        </div>
        <div className="row">
          {introItemRowTwo &&
            introItemRowTwo.map((item, i) => (
              <div className="row__item" key={i}>
                <img
                  className={i === 1 ? "two-row-item" : "first-row-item"}
                  src={item.img}
                  alt="foodItem"
                />
                <p className="desc">{item.text}</p>
              </div>
            ))}
        </div>
        <div className="row">
          {introItemRowThree &&
            introItemRowThree.map((item, i) => (
              <div className="row__item row__item-child" key={i}>
                <img className="first-row-item" src={item.img} alt="foodItem" />
                <p className="desc">{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
