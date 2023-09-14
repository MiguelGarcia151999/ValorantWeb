import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../src/context/AgentContext"; 

const Agente = (props) => {
  const { agente } = props;
  const { displayName } = agente.data

  const [select, setSelect] = useState('Killjoy');
  const { contextData, setContextData } = useContext(DataContext)

  useEffect(() => {
    selectAgent(select);
  }, [select]);


  let agentImg = "";
  if (displayName === "KAY/O") {
    agentImg = `../src/assets/AgentesCut/KAYO.png`;
  } else {
    agentImg = `../src/assets/AgentesCut/${displayName}.png`;
  }

  function selectAgent(name) {
    setContextData(name)
  }

  return (
    <div
      className="agente-cardBody"
      onClick={() => selectAgent(displayName)}
    >
      <img src={agentImg} alt="" className="imgAgente" />
    </div>
  );
};

export default Agente;
