import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  return (
    <div className="container_error">
      <img src="/notfound.svg" alt="pagina não encontrada" />
      <h1>Página não encontrada</h1>

      <Link to="/">Voltar para Home</Link>
    </div>
  );
};

export default NotFound;
