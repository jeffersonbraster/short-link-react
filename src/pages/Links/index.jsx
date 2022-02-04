import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { getLinkSave, deleteLink } from "../../services/storeLinks";
import LinkItem from "../../components/LinkItem";
import "./links.css";

const Links = () => {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});

  const [showModal, setShowModal] = useState(false);

  const [emptyList, setEmpetyList] = useState(false);

  useEffect(() => {
    const getLinks = async () => {
      const result = await getLinkSave("@shortLink");

      if (result.length === 0) {
        setEmpetyList(true);
      }

      setMyLinks(result);
    };

    getLinks();
  }, []);

  const handleOpenLink = (link) => {
    setData(link);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const result = await deleteLink(myLinks, id);

    if (result.length === 0) {
      setEmpetyList(true);
    }

    setMyLinks(result);
  };

  return (
    <div className="links_container">
      <div className="links_header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      {emptyList && (
        <div className="links_item">
          <h2 className="empty_text">Sua lista está vazia..</h2>
        </div>
      )}

      {myLinks.map((link) => (
        <div className="links_item" key={link.id}>
          <button className="link" onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>

          <button className="link_delete" onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color="#ff5454" />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
};

export default Links;
