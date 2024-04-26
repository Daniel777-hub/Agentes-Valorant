import { CardAgent } from 'components/CardAgent'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import styles from './styles.module.scss'

import { useEffect, useState } from 'react'
import { Agent } from 'types/agent'
import { loadAgents } from 'utils/loadAgents'

export const Agents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);

  const loadData = async () => {
    const data = await loadAgents()
    setAgents(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  const renderAgents = agents.map(agent => (
    <SwiperSlide key={agent.displayName}>
      <CardAgent {...agent} />
    </SwiperSlide>
  ));

  return (
    <Swiper className={styles.agents} spaceBetween={16} slidesPerView={4}>
      {renderAgents}
    </Swiper>
  );
};
