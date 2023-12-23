import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { detailedQuests } from '../../mocks/detailed-quests';
import { AppRoute } from '../../const';
import {useParams, Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import BookingForm from '../../components/booking-form/booking-form';

function BookingPage(): JSX.Element {

  const [questtt, setQuest] = useState({});
  const idContainer = useParams();
  const id: string = idContainer.id;

  useEffect(() => {
    fetch(`https://grading.design.htmlacademy.pro/v1/escape-room/quest/${id}/booking`)
      .then((res) => res.json())
      .then((res) => setQuest(res));
  }, []);

  console.log(questtt);

  const quest = detailedQuests.find((elem) => elem.id === idContainer.id);

  if (quest === undefined) {
    return <Navigate to={AppRoute.Error} />;
  }

  const {title, previewImg, previewImgWebp, coverImg, coverImgWebp} = quest;

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
              <div className="map">
                <div className="map__container" />
              </div>
              <p className="booking-map__address">
            Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м.
            Петроградская
              </p>
            </div>
          </div>
          <BookingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BookingPage;
