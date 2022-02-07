import Contador from "./components/Contador";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Memorización en React</h1>
      <hr />
      <h2>React memo</h2>
      <ul style={{ textAlign: "left" }}>
        <li>Se encarga de memorizar un componente</li>
        <li>Lo vuelve a memorizar al momento de que sus props cambian</li>
        <li>
          Hay que evitarlos en la medida de lo posible, ya que podira ser mas
          cotosa la tarea de meorizacion que el re-renderizado del componente
        </li>
        <li>
          Casos de uso:
          <ul>
            <li>Hay muchos elementos renderizados en una lista</li>
            <li>Llamamos datos de APIs</li>
            <li>Un componente se vuelve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
          </ul>
        </li>
      </ul>
      <h2>useCallback</h2>
      <ul>
        <li>Memoriza una funcion, para no volver a definir en cada render.</li>
        <li>
          Se usa cuando se pase una funcion como props a un componente
          memorizado
        </li>
        <li>
          Se usa siempre que se pase una función como parámetro de un efecto
        </li>
      </ul>
      <h2>useMemo</h2>
      <ul>
        <li>Memoriza un valor calculado, es decir, el resultado de una funcion. </li>
        <li>Genera propiedades computadas</li>
        <li>Se usa en procesos pesados</li>
      </ul>
      <Contador />
      <hr />
    </div>
  );
}

export default App;
