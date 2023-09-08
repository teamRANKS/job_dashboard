import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { GrDatabase } from "react-icons/gr";
// import { FaRegUser } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
// import { BiBook } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      {/* <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaRegUser />
      </a> */}
      {/* <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a> */}
      <a
        href="#project"
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
      >
        <GrDatabase />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsHeadset />
      </a>
    </nav>
  );
};
export default Navbar;
