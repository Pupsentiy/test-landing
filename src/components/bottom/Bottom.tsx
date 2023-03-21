import { FC } from "react";

import Accordion from "../accordion/Accordion";
import Comments from "../comments/Comments";

import "./Bottom.scss";

const Bottom: FC = () => {
  return (
    <section className="bottom">
      <Comments />
      <Accordion />
    </section>
  );
};

export default Bottom;
