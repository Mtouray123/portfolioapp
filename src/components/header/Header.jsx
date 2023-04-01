import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./header.css";

function Header(){
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            Touray
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};

export default Header;