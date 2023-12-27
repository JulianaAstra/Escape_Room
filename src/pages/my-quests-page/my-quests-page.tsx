import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { fetchBookedQuestsAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { useEffect } from 'react';
import BookedCardsList from '../../components/booked-cards-list/booked-cards-list';

function MyQuestsPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookedQuestsAction());
  }, [dispatch]);

  const myQuests = useAppSelector((state) => state.bookedQuests);

  return (
    <div className="wrapper">
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
          Мои бронирования
            </h1>
          </div>
          <BookedCardsList bookedQuests={myQuests} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MyQuestsPage;
