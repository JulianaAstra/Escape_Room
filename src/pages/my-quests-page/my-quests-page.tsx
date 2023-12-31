import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { fetchBookedQuestsAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { useEffect } from 'react';
import BookedCardsList from '../../components/booked-cards-list/booked-cards-list';
import LoadingScreen from '../loading-screen/loading-screen';
import Page404 from '../404-page/404-page';
import { getBookedQuestsDataLoadingStatus, getBookedQuests } from '../../store/user-data/selectors';

function MyQuestsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const isBookedQuestsLoading = useAppSelector(getBookedQuestsDataLoadingStatus);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchBookedQuestsAction());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const myQuests = useAppSelector(getBookedQuests);
  const isSomethingMissingFromServer = myQuests === null;

  if(isBookedQuestsLoading) {
    return (
      <LoadingScreen />
    );
  }

  if(isSomethingMissingFromServer) {
    return (
      <Page404 />
    );
  }

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
