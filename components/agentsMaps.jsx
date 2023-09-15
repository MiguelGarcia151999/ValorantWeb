import React, { useState, useContext } from "react";
import Agente from "./sliderImagenes";
import { DataContext } from "../src/context/AgentContext";
import * as mapas from "../constants/bestMapsAgents";

function AgentMapas(props) {
  const { contextData } = props.agent;
  const contexData = useContext(DataContext);
  
  let valor = "";
  if (contexData.contextData == "KAY/O") { valor = "KAYO" } 
    else { valor = contexData.contextData }

    const [mapaTarjeta, setMapaTarjeta] = useState('Haven')

  function mapaSelect(valor) {
    setMapaTarjeta(valor)
  }

  return (
    <div className="container-agentMaps">
      <div className="selected-IngSelected">
        <img src={`../src/assets/Mapas/${mapaTarjeta}.png`} className="imgMapa" />
      </div>
      <div className="Prueba">
        <div className="mapsNames">
        {mapas[`${valor}`].map((valor, indice) => (
          <div key={indice} className="mapsTier">
            <img src="../src/assets/Tiers/Radiant.png" className="TiersImg" />
            <h1 className="PruebaMapa" onClick={() => mapaSelect(valor)}>{valor}</h1>
          </div>
        ))}
          
        </div>
      </div>
    </div>
  );
}

export default AgentMapas;
