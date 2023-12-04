import { useState } from "react";

import HeaderLeft from "./HeaderLeft";
import NavItems from "./NavItems";
import "./header.css";
import MobileMenuBtn from "./MobileMenuBtn";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header id="main-header">
        <HeaderLeft />
        <NavItems setToggle={setToggle} />
        <MobileMenuBtn toggle={toggle} setToggle={setToggle} />
      </header>
      <aside className={toggle ? "open" : ""} id="mobile-menu">
        <NavItems setToggle={setToggle} />
      </aside>
    </>
  );
};

export default Header;
