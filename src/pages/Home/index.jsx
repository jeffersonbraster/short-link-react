import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import "./home.css";

const Home = () => {
  const [link, setLink] = useState("");

  const handleShortLink = () => {};

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
          <input
            type="text"
            placeholder="Cole seu link aqui.."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink} type="submit">
          Encurtar link
        </button>
      </div>
      <Menu />

      <LinkItem />
    </div>
  );
};

export default Home;
