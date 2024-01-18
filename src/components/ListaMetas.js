import React from "react";
import { useState } from "react";
import Title from "./Title";
import trash from "../img/trash.svg";
import checkCircle from "../img/check-circle.svg";
import "../styles/ListaMetas.css";

const ListaMetas = () => {
  const [metas, setMetas] = useState([]);
  const [nuevaMeta, setNuevaMeta] = useState("");

  const agregarMeta = () => {
    if (nuevaMeta.trim() !== "") {
      setMetas([...metas, { texto: nuevaMeta, completada: false }]);
      setNuevaMeta("");
    }
  };

  const marcarComoCompletada = (index) => {
    const nuevasMetas = [...metas];
    nuevasMetas[index].completada = !nuevasMetas[index].completada;
    setMetas(nuevasMetas);
  };

  const eliminarMeta = (index) => {
    const nuevasMetas = metas.filter((_, i) => i !== index);
    setMetas(nuevasMetas);
  };

  return (
    <div className="main">
      <div className="metas-container">
        <ul>
          {metas.map((meta, index) => (
            <li key={index} className={meta.completada ? "completada" : ""}>
              {meta.texto}
              <div className="check-botons">
                <button onClick={() => marcarComoCompletada(index)}>
                  {meta.completada ? (
                    <img src={checkCircle} alt="heeeecho" />
                  ) : (
                    "Marcar"
                  )}
                </button>
                <button onClick={() => eliminarMeta(index)}>
                  <img src={trash} alt="basuuuura" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="entrada-container">
        <Title />
        <div className="input-boton">
          <input
            type="text"
            value={nuevaMeta}
            onChange={(e) => setNuevaMeta(e.target.value)}
          />
          <button className="boton-agregar" onClick={agregarMeta}>
            Agregar Meta
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListaMetas;
