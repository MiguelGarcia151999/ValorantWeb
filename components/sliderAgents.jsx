import React from "react";
import Agente from "./sliderImagenes";
import Slider from "react-slick";
import Breach from "../src/assets/Agentes/Breach.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Agents(props) {
  const { agents } = props;
  console.log(agents, "slideAgents");

  return (
    <div className="carrusel">
        {agents.map((agente, idx) => {
          return <Agente agente={agente} />;
        })}
    </div>
  );
}

export default Agents;
