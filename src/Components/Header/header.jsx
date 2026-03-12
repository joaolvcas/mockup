import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
import LogoBranca from "../../../src/assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

import MDFS from '../../assets/2.png'
import Ferramentas from '../../assets/3.jpg'
import Institucional from '../../assets/logo.png'
import Quimicos from '../../assets/8.webp'
import Compensados from '../../assets/7.jpg'
import Portas from '../../assets/5.jpg'
import Maquina from '../../assets/6.jpg'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="header">
        <img src={LogoBranca} alt="Logo Barroso" className="Logo" />

        <FiMenu
          size={35}
          className="Menu"
         onClick={() => setMenuOpen(true)}
        />
      </div>

      <div
        className={`menuOverlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`menuDrawer ${menuOpen ? "open" : ""}`}>
        <div className="drawerHeader">
          <h3>Departamentos</h3>
          <FiX size={28} onClick={() => setMenuOpen(false)} />
        </div>

        <div className="drawerContent">

          <div className="menuCard" onClick={() => goTo("/")}>
            <img src={MDFS} className="IconImage" />
            <span>MDF's</span>
          </div>

          <div className="menuCard" onClick={() => goTo("/portas")}>
             <img src={Portas} className="IconImage" />
            <span>Portas</span>
          </div>

          <div className="menuCard" onClick={() => goTo("/compensados")}>
             <img src={Compensados} className="IconImage" />
            <span>Compensados</span>
          </div>    

          <div className="menuCard" onClick={() => goTo("/quimicos")}>
             <img src={Quimicos} className="IconImage" />
            <span>Químicos</span>
          </div>                


          <div className="menuCard" onClick={() => goTo("/maquinas")}>
             <img src={Maquina} className="IconImage" />
            <span>Máquinas</span>
          </div>            

          <div className="menuCard" onClick={() => goTo("/institucional")}>
             <img src={Institucional} className="IconImage" />
            <span>Institucional</span>
          </div> 
        </div>       

      </div>
    </>
  );
}

export default Header;