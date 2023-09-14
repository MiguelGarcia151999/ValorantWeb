import React from "react";
import Agente from "./sliderImagenes";
import Slider from "react-slick";
import Breach from "../src/assets/Agentes/Breach.png";

function Agents(props) {
  const { agents } = props;

  return (
    <div className="carrusel">
        {agents.map((agente, idx) => {
          return <Agente agente={agente} />;
        })}
    </div>
  );
}

export default Agents;
