import "./styles.css";
import { useState } from "react";
import Lista from '../../Data/compensados.json'

export default function Compensados() {

    const [filtro, setFiltro] = useState("todos");

  const listaFiltrada =
    filtro === "todos"
      ? Lista
      : Lista.filter(item => item.tipo === filtro);

      console.log(listaFiltrada)

  return (
    <div className="paginaCompensados">

      <h1>Compensados</h1>

      <div className="filtros">
      <button onClick={() => setFiltro("todos")}>Todos</button>
        <button onClick={() => setFiltro("naval")}>Naval</button>
        <button onClick={() => setFiltro("plastificado")}>Plastificado</button>
        <button onClick={() => setFiltro("parica")}>Parica</button>
        <button onClick={() => setFiltro("pinus")}>Pinus</button>
      </div>

      <div className="gridCompensados">
        {listaFiltrada.map((item) => (
          <div className="cardCompensado" key={item.id}>

            <img src={item.imagem} alt={item.nome} />

            <div className="info">

              <h3>{item.nome}</h3>

              <p>{item.descricao}</p>

              <span>Espessura: {item.espessura}</span>

              <div className="preco">{item.preco}</div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}