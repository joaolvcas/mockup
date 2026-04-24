import { useState } from "react";
import "./whatssap.css";
import { FiMessageSquare, FiArrowRight } from "react-icons/fi";

import Viviane from '../../assets/vendedores/viviane.jpeg'
import Nayara from '../../assets/vendedores/nayara.jpeg'
import Leyde from '../../assets/vendedores/leyde.jpeg'
import Beatriz from '../../assets/vendedores/beatriz.jpeg'
import Tiago from '../../assets/vendedores/tiago.jpeg'
import Caio from '../../assets/vendedores/caio.png'
import Junior from '../../assets/vendedores/junior.png'
import Padrao from '../../assets/vendedores/padrao.jpg'

function Whatssap({mdf}) {
  const [open, setOpen] = useState(true);

  const mensagem = encodeURIComponent(
  `Olá, gostaria de solicitar um orçamento do mdf ${mdf ?? ""}`
);

  return (
    <div className={`section ${open ? "open" : ""}`}>
      
        <p id="NameButton">
          Solicitar Orçamento
        </p>

      <div className="contacts">
        <div className="location">
          <p className="City">Teresina e região</p>

        <div className="contactItem"  onClick={() => window.open(`https://wa.me/558999850131?text=${mensagem}`, "_blank")}>
           <div className="avatar">
             <img src={Padrao} alt="Foto" />
          </div>
           <div className="Bag">
              <p className="Phone">Vendedor 01</p>
              <p className="Phone">(89) 9999-0000</p>
          </div>

        </div>

        <div className="contactItem"  onClick={() => window.open(`https://wa.me/55899999999?text=${mensagem}`, "_blank")}>
           <div className="avatar">
             <img src={Padrao} alt="Foto" />
          </div>
           <div className="Bag">
              <p className="Phone">Vendedor 02</p>
              <p className="Phone">(89) 9999-0000</p>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Whatssap;
