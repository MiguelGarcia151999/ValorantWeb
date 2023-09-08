import "./styles.css";
import Agents from "../components/sliderAgents";
import { getAgents } from "../apis/apiValorant";
import React from "react";

const {useState, useEffect} = React

export default function App() {
    const [agents, setAgents] = useState([]);

    const fetchAgents = async () => {
        try {
            const data = await getAgents();
            const promise = data.map(async (agent) => {
                return await get
            })
        } catch (error) {
            
        }
    }

  return (
    <div>
      <div className="App">
        <Agents />
      </div>
    </div>
  );
}
