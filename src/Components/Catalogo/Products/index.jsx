import "./products.css";

import PlacasDoBrasil from '../../../Data/placasdobrasil.json'
import Arauco from '../../../Data/arauco.json'
import Fibraplac from '../../../Data/fibraplac.json'
import Duratex from '../../../Data/duratex.json'
import Eucatex from '../../../Data/eucatex.json'

import Modal from "../../Modal/index.jsx";

import { useState } from "react";
import { FiArrowUp  } from "react-icons/fi";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Soon from "../../Soon/index.jsx";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { brand, setBrand } = useContext(GlobalContext);

    const productsData =
    brand === "placas"
      ? PlacasDoBrasil
      : brand === "arauco"
      ? Arauco
      : brand === "fibraplac"
      ? Fibraplac
      : brand === "duratex"
      ? Duratex
      : brand === "eucatex"
      ? Eucatex
      : [];

  return (
    <div className="products">
        {productsData.map((padrao) => (
        <div key={padrao.id} className="product" onClick={() => setSelectedProduct(padrao)} >
          {padrao?.soon && (
          <Soon />
          )}
            <img
            src={padrao.src}
            alt={padrao.nome}
            className="padrao"
          />
          <div className="clickIcon">
            <FiArrowUp  size={40} />
          </div>
          <div className="productOverlay">
            <p>{padrao.nome}</p>
          </div>
        </div>
        ))}
        <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        Product={selectedProduct ?? { src: "", nome: ""}}
      />
    </div>
  );
}

export default Products;
