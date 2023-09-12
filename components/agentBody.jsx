import React from "react";

const agentBody = (props) => {
    const { agente } = props;

    let agentImg = `../src/assets/Agentes/KAYO.png`;
    /* if (agente.data.displayName === "KAY/O") {
        agentImg = `../src/assets/Agentes/KAYO.png`;
    } else {
        agentImg = `../src/assets/Agentes/${agente.data.displayName}.png`;
     }*/

    return (
        <div className="agenteBody">
            <img src={agentImg} alt="" className="agenteBody-img" />
        </div>
    );
};

export default agentBody;
