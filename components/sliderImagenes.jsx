import React, { useEffect, useState } from "react";

const Agente = (props) => {
  const { agente } = props;

  const [select, setSelect] = useState("");

  useEffect(() => {
    selectAgent(select);
  }, [select]);


  let agentImg = "";
  if (agente.data.displayName === "KAY/O") {
    agentImg = `../src/assets/AgentesCut/KAYO.png`;
  } else {
    agentImg = `../src/assets/AgentesCut/${agente.data.displayName}.png`;
  }

  function selectAgent(name) {
    console.log(name, "nombre");

    let agentImg = "";
    if (name === "KAY/O") {
      agentImg = `../src/assets/AgentesCut/KAYO.png`;
    } else {
      agentImg = `../src/assets/AgentesCut/${name}.png`;
    }

  }

  return (
    <div
      className="agente-cardBody"
      onClick={() => selectAgent(agente.data.displayName)}
    >
      <img src={agentImg} alt="" className="imgAgente" />
    </div>
  );
};

export default Agente;
