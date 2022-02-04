import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <a
        className="social"
        href="https://www.linkedin.com/in/jefferson-brandao-dev/"
      >
        <BsLinkedin color="#fff" size={24} />
      </a>
      <a className="social" href="https://www.instagram.com/jeffersonbrandao/">
        <BsInstagram color="#fff" size={24} />
      </a>

      <Link className="menu_item" to="/links">
        Meus links
      </Link>
    </div>
  );
};

export default Menu;
