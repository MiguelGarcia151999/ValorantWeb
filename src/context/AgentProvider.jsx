/* import React, {createContext, useState } from "react";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectAgnts, setSelectAgnts] = useState("");

    const datos = {
        selectAgnts, setSelectAgnts,
    };

    return <DataContext.Provider value={datos}>{children}</DataContext.Provider>;
} */

import React, { createContext } from 'react';

export const AgentContext = createContext('')

export const AgentProvider = (props) => {
    console.log(props.children)
    return <AgentContext.Provider value="Garcia"></AgentContext.Provider>
}

