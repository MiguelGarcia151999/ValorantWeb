import "./styles.css";
import Agents from "../components/sliderAgents";
import { getAgents, searchAgent } from "../apis/apiValorant";
import React from "react";

const {useState, useEffect} = React

export default function App() {
    const [agents, setAgents] = useState([]);

    const fetchAgents = async () => {
        try {
            const dataAgents = await getAgents();
            const promise = dataAgents['data'].map(async (agent) => {
                return await searchAgent(agent.uuid)
            })
            const result = await Promise.all(promise)
            console.log(result, 'app');
            setAgents(result)
        } catch (error) {
            console.log(error)
        }  
    }

    useEffect(() => {
        fetchAgents();
    }, [])

  return (
      <div className="App">
        <Agents 
            agents={agents}
        />
      </div>
  );
}
