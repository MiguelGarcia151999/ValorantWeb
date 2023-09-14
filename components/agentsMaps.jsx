import React, { useState, useContext } from "react";
import Agente from "./sliderImagenes";
import { DataContext } from "../src/context/AgentContext";
import * as agentxmaps from "../constants/bestMapsAgents";

function AgentMapas(props) {
  const { contextData } = props.agent;
  const contexData = useContext(DataContext);

  let data = contexData.contextData;
  let datados = agentxmaps.Omen

  return (
    <div className="container-agentMaps">
      <div className="selected-IngSelected">
        <img src={`../src/assets/Mapas/Ascent.png`} className="imgMapa" />
      </div>
      <div className="Prueba">
        {datados.map((mapas, idx) => {
            <h1>{mapas}</h1>
        })}
      </div>
    </div>
  );
}

export default AgentMapas;
