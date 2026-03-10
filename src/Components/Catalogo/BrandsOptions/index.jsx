import { useState } from "react";
import "./brandoptions.css";

import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

import MiniaturaPlacas from "../../../../src/assets/placasMiniatura.png";
import MiniaturaArauco from "../../../../src/assets/araucoMiniatura.png";
import MiniaturaEucatex from "../../../../src/assets/eucatexMiniatura.png";
import MiniaturaDuratex from "../../../../src/assets/duratexMiniatura.png";
import MiniaturaFibraplac from "../../../../src/assets/fibraMiniatura.png";

import Placas from "../../../../src/assets/placasdobrasil.png";
import Arauco from "../../../../src/assets/arauco.png";
import Eucatex from "../../../../src/assets/eucatex.png";
import Duratex from "../../../../src/assets/duratex.png";
import Fibraplac from "../../../../src/assets/fibraplac.png";

function BrandOptions() {
  const { setBrand } = useContext(GlobalContext);
  const [ativa, setAtiva] = useState("arauco");

  const marcas = [
    { id: 'placas', img: MiniaturaPlacas, miniatura: Placas},
    { id: 'arauco', img: MiniaturaArauco, miniatura: Arauco},
    { id: 'eucatex', img: MiniaturaEucatex, miniatura: Eucatex},
    { id: 'fibraplac', img: MiniaturaFibraplac, miniatura: Fibraplac},
  ];

  return (
    <div className="brandoptions">
      {marcas.map((marca) => (
        <div
          key={marca.id}
          className={`option ${ativa === marca.id ? "active" : ""}`}
          onClick={() => {
            setAtiva(marca.id),
            setBrand(marca.id)
          }}
        >
          <img
            src={ativa === marca.id ? marca.miniatura : marca.img}
            alt="Marca"
            className="logoMiniatura"
            id={marca.id}
          />
        </div>
      ))}
    </div>
  );
}

export default BrandOptions;
