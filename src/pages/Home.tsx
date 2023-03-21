import { useState } from "react";

import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import Bottom from "../components/bottom/Bottom";
import BurgerMenu from "../components/burgerMenu/BurgerMenu";

const Home = () => {
  const [activeBurger, setActiveBurger] = useState<boolean>(false);
  return (
    <>
      <Header setActiveBurger={setActiveBurger} activeBurger={activeBurger} />
      <Intro />
      <Bottom />
      {activeBurger && <BurgerMenu setActiveBurger={setActiveBurger} />}
    </>
  );
};

export default Home;
