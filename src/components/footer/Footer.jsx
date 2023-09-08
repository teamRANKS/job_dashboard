import React from "react";
import "./footer.css";

import { BsInstagram, BsTelegram, BsWhatsapp, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Ranks Team
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        {/* <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li> */}
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://youtube.com/@ranksteam7534" target="_blank">
          <BsYoutube />
        </a>
        <a href="https://t.me/ranksteam" target="_blank">
          <BsTelegram />
        </a>
        <a
          href="https://instagram.com/fullstack____developer?igshid=MzRlODBiNWFlZA=="
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a href="http://api.whatsapp.com/send?phone=9570520810" target="_blank">
          <BsWhatsapp />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Ranks team. All rights reseved</small>
      </div>
    </footer>
  );
};
export default Footer;
