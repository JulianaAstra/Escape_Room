import BookedCard from '../booked-card/booked-card';
import { bookedQuests } from '../../mocks/booked-quests';

function BookedCardsList(): JSX.Element {
  return (
    <div className="cards-grid">
      {bookedQuests.map((quest) => <BookedCard key={quest.id} bookedQuest={quest} />)}
    </div>
  );
}

export default BookedCardsList;
