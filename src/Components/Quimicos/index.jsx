import "./styles.css";
import Lista from '../../Data/quimicos.json'

export default function Quimicos() {

  return (
 <div className="Conteiner">   
    <div className="catalogo">
      {Lista.map((quimico) => (
        <div className="cardPorta" key={quimico.id}>
          <img src={quimico.imagem} alt={quimico.nome} />

          <div className="info">
            <h3>{quimico.nome}</h3>
            <p>{quimico.descricao}</p>
            <span className="preco">{quimico.preco}</span>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
}