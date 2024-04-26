import { Agent } from "types/agent";

const LOCAL_KEY='@valorant/agents'

export const loadAgents = async () => {
  const localData = window.localStorage.getItem(LOCAL_KEY)

  if (localData !== null) {
    return JSON.parse(localData)
  }

  const route = 'https://valorant-api.com/v1/agents?language=pt-BR';
  const response = await fetch(route);
  const responseData = await response.json();

  let data = responseData.data as Agent[];
  data = data.filter(agent => agent.fullPortrait);

  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(data))

  return (data);
};
