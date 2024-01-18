import React from "react";
import { useState } from "react";
import Title from "./Title";
import trash from "../img/trash.svg";
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
              <button onClick={() => marcarComoCompletada(index)}>
                {meta.completada ? "Desmarcar" : "Marcar"}
              </button>
              <button onClick={() => eliminarMeta(index)}>
                <img src={trash} alt="basuuuura" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="entrada-container">
        <Title />
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
  );
};

export default ListaMetas;
