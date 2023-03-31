import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import { UseWords } from "../../API/Words";

import "./Header.css";

export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <UseWords />
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};