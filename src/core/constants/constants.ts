import row11 from "../../assets/img/row1.1.svg";
import row12 from "../../assets/img/row1.2.svg";
import row21 from "../../assets/img/row2.1.svg";
import row22 from "../../assets/img/row2.2.svg";
import row23 from "../../assets/img/row2.3.svg";
import avatar from "../../assets/img/avatar.svg";
import check from "../../assets/img/chek.svg";
import acc1 from "../../assets/img/acc1.svg";
import acc2 from "../../assets/img/acc2.svg";
import acc3 from "../../assets/img/acc3.svg";
import acc4 from "../../assets/img/acc4.svg";
import acc5 from "../../assets/img/acc5.svg";

import { TAccordionData, TCommentsData, TIntroItemRow } from "../types/types";

export const navItem: string[] = ["NavItem1", "NavItem2", "NavItem3"];

export const introItemRowFirst: TIntroItemRow[] = [
  {
    id: 1,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: row11,
  },
  {
    id: 2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: row12,
  },
];

export const introItemRowTwo: TIntroItemRow[] = [
  {
    id: 1,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: row21,
  },
  { id: 2, img: row22 },
  {
    id: 3,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: row23,
  },
];

export const introItemRowThree: TIntroItemRow[] = [
  {
    id: 1,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: row11,
  },
  {
    id: 2,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: row12,
  },
];

export const commentsData: TCommentsData[] = [
  {
    id: 1,
    img: avatar,
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur\n" +
      " animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi\n" +
      " expedita, provident excepturi officia!\n" +
      " Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?\n",
    name: "Jane Doe",
  },

  {
    id: 2,
    img: avatar,
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur\n" +
      " animi  autem aliquid\n",
    name: "Jane Doe",
  },

  {
    id: 3,
    img: avatar,
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur\n" +
      " animi  autem aliquid\n",
    name: "Jane Doe",
  },
];

export const accordionData: TAccordionData[] = [
  {
    id: 1,
    img: acc1,
    label: "Lorem ipsum, dolor sit amet adipisicing elit.",
    text: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit",
    vectorI: check,
  },
  {
    id: 2,
    img: acc2,
    label: "Lorem ipsum, dolor sit amet adipisicing elit.",
    text: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit",
    vectorI: check,
  },
  {
    id: 3,
    img: acc3,
    label: "Lorem ipsum, dolor sit amet adipisicing elit.",
    text: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit",
    vectorI: check,
  },
  {
    id: 4,
    img: acc4,
    label: "Lorem ipsum, dolor sit amet adipisicing elit.",
    text: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit",
    vectorI: check,
  },
  {
    id: 5,
    img: acc5,
    label: "Lorem ipsum, dolor sit amet adipisicing elit.",
    text: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit",
    vectorI: check,
  },
];
