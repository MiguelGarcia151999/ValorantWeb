export const getAgents = async () => {
    try {
        let url = `https://valorant-api.com/v1/agents/?language=es-MX`;
        const response = await fetch(url)
        const data = await response.json();
        return data;
    } catch (error) {
        console.warn(error)
    }
}