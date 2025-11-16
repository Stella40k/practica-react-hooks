//creo un btn reutilizabe, por eso esta en un componente
import React from "react";

export const button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        margin: "5px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};
