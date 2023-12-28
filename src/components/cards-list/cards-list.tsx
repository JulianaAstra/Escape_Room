import { Card } from '../card/card';
import { Quest } from '../../types/types';
import { memo } from 'react';

type CardsListProps = {
  quests: Quest[];
}

function CardsListComponent({quests}: CardsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => <Card key={quest.id} quest={quest} />)}
    </div>
  );
}

export const CardsList = memo(CardsListComponent);
