import React from "react";
import airplane from "./imagem/airplane.png";
import "./Header.css";

const Header =() =>{
return(
    <header>
        <img src={airplane} alt="icon"/>
        <h1>Anuncio de Vôos</h1>
    </header>
);
};
 export default Header;