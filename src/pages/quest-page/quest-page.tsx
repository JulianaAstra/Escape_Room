import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { fetchDetailedQuestAction, fetchBookingInformationAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Page404 from '../404-page/404-page';
import { useEffect } from 'react';

function QuestPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const questId = useParams().id as string;
  const quests = useAppSelector((state) => state.quests);
  const isQuestsLoading = useAppSelector((state) => state.isQuestDataLoading);
  const isIdExists = quests?.some((quest) => quest.id === questId);

  useEffect(() => {
    if (!isIdExists) {
      return;
    }
    dispatch(fetchDetailedQuestAction({id: questId}));
    dispatch(fetchBookingInformationAction({id: questId}));
  }, [isIdExists, questId, dispatch]
  );

  const quest = useAppSelector((state) => state.detailedQuest);

  const isDetailedQuestLoading = useAppSelector((state) => state.isDetailedQuestDataLoading);
  const isPageLoading = isDetailedQuestLoading;
  const isSomethingMissingFromServer = quest === null || quests === null;

  if (!isIdExists && !isQuestsLoading) {
    return (
      <Page404 />
    );
  }

  if (isPageLoading || isSomethingMissingFromServer) {
    return (
      <LoadingScreen />
    );
  }

  const {id, title, description, previewImg, previewImgWebp, coverImg, coverImgWebp, level, type, peopleMinMax} = quest;

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
            <Link
              className="btn btn--accent btn--cta quest-page__btn"
              to={`${AppRoute.Quest}/${id}${AppRoute.Booking}`}
            >
          Забронировать
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default QuestPage;
