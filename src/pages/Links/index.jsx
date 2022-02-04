import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import "./links.css";

const Links = () => {
  return (
    <div className="links_container">
      <div className="links_header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className="links_item">
        <button className="link">
          <FiLink size={18} color="#fff" />
          https://jeffersonbrandao.com.br
        </button>

        <button className="link_delete">
          <FiTrash size={24} color="#ff5454" />
        </button>
      </div>
    </div>
  );
};

export default Links;
