import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
// import { AppRoute } from '../../const';
// import {useParams, Navigate} from 'react-router-dom';
import BookingForm from '../../components/booking-form/booking-form';
import Map from '../../components/map/map';
import {useState, useEffect} from 'react';
import { Point } from '../../types/types';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
// import LoadingScreen from '../loading-screen/loading-screen';
import Page404 from '../404-page/404-page';

function BookingPage(): JSX.Element {
  const detailedQuest = useAppSelector((state) => state.detailedQuest);
  const bookingInfo = useAppSelector((state) => state.bookingInfo);
  const firstPoint: Point | null = bookingInfo !== null ? bookingInfo[0] : null;

  const [selectedPoint, setSelectedPoint] = useState<Point | null>(firstPoint);
  const selectedPointID: string | null = selectedPoint !== null ? selectedPoint.id : null;

  const [selectedPointId, setSelectedPointId] = useState<string | null>(selectedPointID);

  useEffect(() => {
    if (bookingInfo !== null) {
      const currentAddress: Point | null = bookingInfo.find((elem) => elem.id === selectedPointId);
      setSelectedPoint(currentAddress);
    }
  }, [selectedPointId]);

  // const isDetailedQuestLoading = useAppSelector((state) => state.isDetailedQuestDataLoading);
  // const isPageLoading = isDetailedQuestLoading;
  const isSomethingMissingFromServer = detailedQuest === null || bookingInfo === null;

  // if (!isBookingInfoLoading) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }

  if (isSomethingMissingFromServer) {
    return (
      <Page404 />
    );
  }

  const {title, previewImg, previewImgWebp, coverImg, coverImgWebp, peopleMinMax} = detailedQuest;

  const handleMarkerClick = (point: string) => {
    setSelectedPointId(point);
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>
          Забронировать
        </title>
      </Helmet>
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={`${previewImgWebp}, ${coverImgWebp}`}
            />
            <img
              src={previewImg}
              srcSet={coverImg}
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
          Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {title}
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <Map points={bookingInfo} selectedPointId={selectedPointId} clickHandler={handleMarkerClick} />
              <p className="booking-map__address">
            Вы&nbsp;выбрали: {selectedPoint !== null ? selectedPoint['location']['address'] : ''}
              </p>
            </div>
          </div>
          <BookingForm peopleMinMax={peopleMinMax} selectedPoint={selectedPoint}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BookingPage;
