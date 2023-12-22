import Card from '../card/card';
import { Quest } from '../../mocks/quests';

type CardsListProps = {
  quests: Quest[];
}


function CardsList({quests}: CardsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {quests.map((quest) => <Card key={quest.id} quest={quest}/>)}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

export default CardsList;
