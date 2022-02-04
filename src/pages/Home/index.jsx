import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";
import "./home.css";

const Home = () => {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  const handleShortLink = async () => {
    try {
      const response = await api.post("/shorten", { long_url: link });

      setData(response.data);
      setLink("");
      saveLink("@shortLink", response.data);
      setShowModal(true);
    } catch (error) {
      alert("Ocorreu um erro ao encurtar seu link!");
      console.log(error);
      setLink("");
    }
  };

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

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
};

export default Home;
