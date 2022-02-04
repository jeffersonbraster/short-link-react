import React from "react";
import { FiX, FiClipboard } from "react-icons/fi";
import "./linkitem.css";

const LinkItem = ({ closeModal, content }) => {
  const copyLink = async () => {
    await navigator.clipboard.writeText(content.link);
    alert("URL copiada!");
  };

  return (
    <div className="modal_container">
      <div className="modal_header">
        <h2>Link encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>{content.long_url}</span>

      <button className="modal_link" onClick={copyLink}>
        {content.link}
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
};

export default LinkItem;
