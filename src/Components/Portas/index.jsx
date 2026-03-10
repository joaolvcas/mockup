import "./styles.css";
import Lista from '../../Data/portas.json'

export default function Portas() {

  return (
 <div className="Conteiner">   
    <div className="catalogo">
      {Lista.map((porta) => (
        <div className="cardPorta" key={porta.id}>
          <img src={porta.imagem} alt={porta.nome} />

          <div className="info">
            <h3>{porta.nome}</h3>
            <p>{porta.descricao}</p>
            <span className="preco">{porta.preco}</span>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
}