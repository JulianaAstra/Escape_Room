import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { detailedQuests } from '../../mocks/detailed-quests';
import { AppRoute } from '../../const';
import {useParams, Navigate} from 'react-router-dom';
import BookingForm from '../../components/booking-form/booking-form';
import Map from '../../components/map/map';
import { BookingQuests } from '../../mocks/booking-quests';
import {useState, useEffect} from 'react';
import { Point } from '../../types/types';

function BookingPage(): JSX.Element {

  const [selectedPoint, setSelectedPoint] = useState<Point>(BookingQuests[0]);
  const [selectedPointId, setSelectedPointId] = useState<string>(selectedPoint.id);

  const idContainer = useParams();
  const quest = detailedQuests.find((elem) => elem.id === idContainer.id);

  useEffect(() => {
    const currentAddress: Point = BookingQuests.find((elem) => elem.id === selectedPointId);
    setSelectedPoint(currentAddress);
  }, [selectedPointId]);

  if (quest === undefined) {
    return <Navigate to={AppRoute.Error} />;
  }

  const {title, previewImg, previewImgWebp, coverImg, coverImgWebp, peopleMinMax} = quest;

  const handleMarkerClick = (point: string) => {
    setSelectedPointId(point);
  };

  return (
    <div className="wrapper">
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
              <Map points={BookingQuests} selectedPointId={selectedPointId} clickHandler={handleMarkerClick} />
              <p className="booking-map__address">
            Вы&nbsp;выбрали: {selectedPoint['location']['address']}
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
