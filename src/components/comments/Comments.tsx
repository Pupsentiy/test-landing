import { FC } from "react";

import { commentsData } from "../../core/constants/constants";

import quotesL from "../../assets/img/quotesLeft.svg";
import quotesR from "../../assets/img/quotesRight.svg";
import quoTesGreyL from '../../assets/img/quotesGreyL.svg'
import quoTesGreyR from '../../assets/img/quotesGreyR.svg'

import "./Comments.scss";

const Comments: FC = () => {
  return (
    <div className="comments">
      <div className="wrapper__border">
        <div className="border"></div>
      </div>
      <h2 className="title title-comments">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </h2>
      <div className="wrapper">
        {commentsData &&
          commentsData.map((item, i) => (
            <div
              className={
                item.id === 1 ? "wrapper__comment" : "wrapper__comment-small"
              }
              key={i}
            >
                {item.id === 1 &&
                    <img className='quoTesGreyL' src={quoTesGreyL} alt="quoTesGreyL"/>
                }
              <img
                className={item.id === 1 ? "avatar" : "small-avatar"}
                src={item.img}
                alt="avatar"
              />
                {item.id === 1 &&
                <img className='quoTesGreyR'  src={quoTesGreyR} alt="quoTesGreyR"/>}
              {item.id === 1 && (
                <img className="quoteL" src={quotesL} alt="quotesL" />
              )}
              <p className="desc">
                {item.text}
                <span>
                  {item.name}{" "}
                  {item.id === 1 && (
                    <img className="quoteR" src={quotesR} alt="quotesL" />
                  )}
                </span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
