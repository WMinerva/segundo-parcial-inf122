import Title from "./Title";
import { useState } from "react";

function Metas({ meta, onDelete, onEdit }) {
  const [editando, setEditando] = useState(false);
  const [nuevaMeta, setNuevaMeta] = useState(meta.texto);

  const handleAgregar = () => {
    onEdit(meta.id, nuevaMeta);
    setEditando(false);
  };

  return (
    <div>
      <Title />
      <br />
      {editando ? (
        <div className="editar-meta">
          <textarea
            value={nuevaMeta}
            onChange={(e) => setNuevaMeta(e.target.value)}
          />
          <button onClick={handleAgregar}>Agregar</button>
        </div>
      ) : (
        <div className="contenedor-Meta">
          <p className="meta">{meta.texto}</p>
          <button className="boton" onClick={() => onDelete(meta.id)}>
            Eliminar
          </button>
          <button className="boton" onClick={() => setEditando(true)}>
            Agregar
          </button>
        </div>
      )}
    </div>
  );
}
export default Metas;
