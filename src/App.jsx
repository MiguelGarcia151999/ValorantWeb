import "./styles.css";
import Agents from "../components/sliderAgents";
import agentBody from "../components/agentBody";
import { getAgents, searchAgent } from "../apis/apiValorant";
import React from "react";

const { useState, useEffect } = React;

export default function App() {
  const [agents, setAgents] = useState([]);

  const fetchAgents = async () => {
    try {
      const dataAgents = await getAgents();
      const promise = dataAgents["data"].map(async (agent) => {
        return await searchAgent(agent.uuid);
      });
      const result = await Promise.all(promise);
      console.log(result, "app");
      setAgents(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <body className="body">
      <div className="contenedorPrincipal">
        <div className="contentRed">
          <div>
            <Agents agents={agents} />
          </div>
        </div>
      </div>
      <div>
        <img src="../src/assets/Agentes/KAYO.png" className="imgbody" />
      </div>
    </body>
  );
}
