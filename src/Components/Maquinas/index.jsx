import "./styles.css";
import Lista from '../../Data/maquinas.json'

export default function Maquinas() {

  return (
 <div className="Conteiner">   
    <div className="catalogo">
      {Lista.map((maquina) => (
        <div className="cardPorta" key={maquina.id}>
          <img src={maquina.imagem} alt={maquina.nome} />

          <div className="info">
            <h3>{maquina.nome}</h3>
            <p>{maquina.descricao}</p>
            <span className="preco">{maquina.preco}</span>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
}