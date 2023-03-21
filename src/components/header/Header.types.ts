import React from "react";

export type THeader = {
  setActiveBurger: React.Dispatch<React.SetStateAction<boolean>>;
  activeBurger: boolean;
};
