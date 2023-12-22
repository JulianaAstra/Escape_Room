import Card from '../card/card';
import { Quest } from '../../mocks/quests';
import { useState } from 'react';

type CardsListProps = {
  quests: Quest[];
}

function CardsList({quests}: CardsListProps): JSX.Element {
  const [, setActiveCard] = useState('');

  function handleMouseLeave() {
    setActiveCard('');
  }

  return (
    <div className="cards-grid">
      {quests.map((quest) => <Card key={quest.id} quest={quest} onMouseEnter = {() => setActiveCard(quest.id)} onMouseLeave={handleMouseLeave}/>)}
    </div>
  );
}

export default CardsList;
