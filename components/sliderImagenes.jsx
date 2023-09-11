import React from "react";

const Agente = (props) => {
const { agente } = props

console.log('slider imagenes')
console.log(agente.data.displayName)

let agentImg = ''
if (agente.data.displayName === 'KAY/O') {
    agentImg = `../src/assets/Agentes/KAYO.png`
}else{
    agentImg = `../src/assets/Agentes/${agente.data.displayName}.png`
}

    return(
        <div className="agente-cardBody">
                <img src={agentImg} alt="" className="imgAgente" />
        </div>
    )
}

export default Agente;