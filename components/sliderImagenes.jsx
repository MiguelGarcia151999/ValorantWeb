import React, { useEffect, useState } from "react";

const Agente = (props) => {
  const { agente } = props;
  const { displayName } = agente.data

  const [select, setSelect] = useState("");

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
    console.log(name, "nombre");

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
