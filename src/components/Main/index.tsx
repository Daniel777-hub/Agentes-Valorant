import Image from 'next/image'
import styles from './styles.module.scss'
import { Agent } from 'components/Agents'


const agentes = {
  uuid: '8e253930-4c05-31dd-1b6c-968525494517',
  displayName: 'Omen',
  description:
    'Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.',
  role: {
    uuid: '4ee40330-ecdd-4f2f-98a8-eb1243428373',
    displayName: 'Controlador',
    description:
      'Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.'
  },
  fullPortrait:
    'https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png',
  abilities: [
    {
      slot: 'Ability1',
      displayName: 'Paranoia',
      description:
        'EQUIPE um orbe cegante. DISPARE para lançá-lo, causando Surdez e Visão Turva brevemente em todos os jogadores atingidos. O projétil atravessa paredes.',
      displayIcon:
        'https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability1/displayicon.png'
    },
    {
      slot: 'Ability2',
      displayName: 'Manto Sombrio',
      description:
        'EQUIPE um orbe sombrio e entre em um universo distorcido para posicionar os orbes. PRESSIONE o botão de habilidade para lançar o orbe no local marcado, criando uma esfera de sombra duradoura que bloqueia a visão. SEGURE O DISPARO enquanto mira para afastar o marcador. SEGURE O DISPARO ALTERNATIVO enquanto mira para aproximar o marcador. PRESSIONE RECARREGAR para alternar para a visão de mira normal.',
      displayIcon:
        'https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ability2/displayicon.png'
    },
    {
      slot: 'Grenade',
      displayName: 'Passos Tenebrosos',
      description:
        'EQUIPE uma habilidade de Passos Tenebrosos para ver o indicador de alcance. DISPARE para começar uma breve canalização e, então, teleporte-se para o local marcado.',
      displayIcon:
        'https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/grenade/displayicon.png'
    },
    {
      slot: 'Ultimate',
      displayName: 'Salto das Sombras',
      description:
        'EQUIPE um mapa tático. DISPARE para começar a se teleportar ao local selecionado. Enquanto se teleporta, Omen aparecerá como um Vulto que pode ser destruído por qualquer inimigo para cancelar o teleporte, ou PRESSIONE EQUIPAR para cancelá-lo.',
      displayIcon:
        'https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/abilities/ultimate/displayicon.png'
    }
  ]
}

export const Main = () => (
  <main className={styles.container}>
    <div className={styles.title}>
      <Image
       src="/background-logo.svg"
       width={140}
       height={99}
      alt="Logo de background do valorant"
      />

      <h1>AGENTES</h1>
    </div>

    <div className={styles.agents}>
      <Agent agent={agentes} />
      <Agent agent={agentes} />
      <Agent agent={agentes} />
      <Agent agent={agentes} />

  </div>
</main>
)
