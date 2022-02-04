import React from "react";
import { FiX, FiClipboard } from "react-icons/fi";
import "./linkitem.css";

const LinkItem = () => {
  return (
    <div className="modal_container">
      <div className="modal_header">
        <h2>Link encurtado</h2>
        <button>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>https://jeffersonbrandao.com.br</span>

      <button className="modal_link">
        https://bit.ly/12121
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
};

export default LinkItem;
