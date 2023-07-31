import React from "react";
import "../App.css";

export const BarraPorcentaje = ({ porcentaje }) => {
  return (
    <div className="barra-general">
      <div className="flex justify-between">
      <span className="flex">0</span>
      <span className="flex">50</span>
      <span className="flex">100</span>
      </div>
      <div className="barra-porcentaje-container">
        <div className="barra-porcentaje" style={{ width: `${porcentaje}%` }}>
        </div>
      </div>
      <span className="flex justify-end">%</span>
    </div>
  );
};
