import { FC, useState } from "react";

import { accordionData } from "../../core/constants/constants";

import "./Accordion.scss";
const Accordion: FC = () => {
  const [id, setId] = useState<number>(0);
  
  const getIdAccordion = (num: number) => {
    if (num === id) {
      setId(0);
    } else {
      setId(num);
    }
  };

  return (
    <div className="accordion">
      <div className="wrapper__border">
        <div className="border"></div>
      </div>
      <h2 className="title title-accordion">
        Lorem ipsum, dolor sit adipisicing elit.
      </h2>
      <span>Porro ab rerum omnis magnam eligendi error nobis dolore?</span>

      <div className="wrapper-item-acc">
        {accordionData &&
          accordionData.map((item, i) => (
            <div
              className="item-acc"
              key={i}
              onClick={() => getIdAccordion(item.id)}
            >
              <div className="wrapper__img-title">
                <img src={item.img} alt="label" />
              </div>
              <div className="wrap-title">
                <h3
                  className={item.id === id ? "title-acc-active" : "title-acc"}
                >
                  {item.label}
                </h3>
                {id === item.id && <p className="desc">{item.text}</p>}
              </div>
              <img
                className={id === item.id ? "check-active" : "check"}
                src={item.vectorI}
                alt="open/close"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordion;
