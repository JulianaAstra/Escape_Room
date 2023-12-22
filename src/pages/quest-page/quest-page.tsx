import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { detailedQuests } from '../../mocks/detailed-quests';

function QuestPage(): JSX.Element {

  const idContainer = useParams();
  const quest = detailedQuests.find((elem) => elem.id === idContainer.id);

  if (quest === undefined) {
    return <Navigate to={AppRoute.Error} />;
  }

  const {title, description, previewImg, previewImgWebp, coverImg, coverImgWebp, level, type, peopleMinMax} = quest;

  return (
    <div className="wrapper">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={`${previewImgWebp}, ${coverImgWebp} 2x`}
            />
            <img
              src={previewImg}
              srcSet={coverImg}
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {peopleMinMax[0]}–{peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {level}
              </li>
            </ul>
            <p className="quest-page__description">
              {description}
            </p>
            <a
              className="btn btn--accent btn--cta quest-page__btn"
              href="booking.html"
            >
          Забронировать
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default QuestPage;
