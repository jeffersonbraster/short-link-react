import React from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

const Home = () => {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="/Logo.svg" alt="Logo links" />
        <h1>Short Links</h1>
        <span>Cole aqui seu link abaixo para encurtar!</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input type="text" placeholder="Cole seu link aqui.." />
        </div>
        <button type="submit">Encurtar link</button>
      </div>
    </div>
  );
};

export default Home;
