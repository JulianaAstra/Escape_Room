import BookedCard from '../booked-card/booked-card';
import { BookedQuest } from '../../types/types';
import { Key } from 'react';

type BookedCardsListProps = {
  bookedQuests: BookedQuest[] | null;
}

function BookedCardsList({bookedQuests}: BookedCardsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {bookedQuests?.map((quest) => <BookedCard key={quest.id as unknown as Key} bookedQuest={quest} />)}
    </div>
  );
}

export default BookedCardsList;
