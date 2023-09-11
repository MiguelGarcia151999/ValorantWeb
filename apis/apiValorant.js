export const getAgents = async () => {
    try {
        let url = `https://valorant-api.com/v1/agents/?language=es-MX`;
        const response = await fetch(url)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error API 1', error)
    }
}

export const searchAgent = async (agent) => {
    try {
        let url = `https://valorant-api.com/v1/agents/${agent}?language=es-MX`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error API 2', error)
    }
}