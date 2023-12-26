import Card from '../card/card';
import { Quest } from '../../types/types';
// import { Quest } from '../../mocks/quests';

type CardsListProps = {
  quests: Quest[];
}

function CardsList({quests}: CardsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => <Card key={quest.id} quest={quest} />)}
    </div>
  );
}

export default CardsList;
