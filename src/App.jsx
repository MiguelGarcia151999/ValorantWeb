import "./styles.css";
import Agents from "../components/sliderAgents";
import AgentMapas from "../components/agentsMaps";
import { getAgents, searchAgent } from "../apis/apiValorant";
import React, { useContext } from "react";
import { DataContext } from "../src/context/AgentContext";

const { useState, useEffect } = React;

export default function App() {
  const [agents, setAgents] = useState([]);
  const contexData = useContext(DataContext);

  const fetchAgents = async () => {
    try {
      const dataAgents = await getAgents();
      const promise = dataAgents["data"].map(async (agent) => {
        return await searchAgent(agent.uuid);
      });
      const result = await Promise.all(promise);
      console.log(contexData.contextData, "APPPPP");

      setAgents(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, [contexData]);

  return (
    <body className="body">
      <div className="contenedorPrincipal">
        <div className="contentRed">
          <div>
           <AgentMapas agent={contexData.contextData} />
          </div>
          <div>
            <Agents agents={agents} />
          </div>
        </div>
      </div>

      <div>
        <img
          src={`../src/assets/Agentes/${
            contexData.contextData === "KAY/O" ? "KAYO" : contexData.contextData
          }.png`}
          className="imgbody"
        />
      </div>
    </body>
  );
}
