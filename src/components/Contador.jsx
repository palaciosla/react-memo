import React, { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [titleHijo, setTitleHijo] = useState(null);
  const [input, setInput] = useState("");

  //const sumar = () => setContador(contador + 1); MEMO
  const sumar = useCallback(() => setContador(contador + 1), [contador]);
  

  //const restar = () => setContador(contador - 1); MEMO
  const restar = useCallback(() => setContador(contador - 1), [contador]);

  const cambiarHijo = () => setTitleHijo("Agrego un titulo al hijo");

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div>
      <h2>Contador</h2>
      <span>{contador}</span>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={cambiarHijo}>Agregar Titulo</button>
      </nav>
      <p>
        Le pasamos la variable contador pero no el input al hijo, por lo tanto,
        el contador hijo se renderiza al cambiar el contador pero no al escribir
        en el input
      </p>
      <input type="text" onChange={handleInput} value={input} />
      <ContadorHijo
        titleHijo={titleHijo}
        contador={contador}
        sumar={sumar}
        restar={restar}
      />
    </div>
  );
};

export default Contador;
