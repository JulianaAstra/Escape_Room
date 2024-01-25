import { CardsList } from '../../components/cards-list/cards-list';
import { Quest } from '../../types/types';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import FiltersForm from '../../components/filters-form/filters-form';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import LoadingScreen from '../loading-screen/loading-screen';
import { getQuestDataLoadingStatus, getFilteredQuests, setActiveFilterTheme, setActiveFilterDifficulty } from '../../store/app-data/selectors';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { filterQuests, sortQuests } from '../../store/app-data/app-data';
import { useEffect } from 'react';

function MainPageComponent(): JSX.Element {
  const activeFilterTheme = useAppSelector(setActiveFilterTheme);
  const activeFilterDifficulty = useAppSelector(setActiveFilterDifficulty);
  const dispatch = useDispatch();

  const isQuestsLoading = useAppSelector(getQuestDataLoadingStatus);

  useEffect(() => {
    dispatch(filterQuests(activeFilterTheme));
    dispatch(sortQuests(activeFilterDifficulty));
  }, [activeFilterDifficulty, activeFilterTheme, dispatch]);

  const quests: Quest[] | null = useAppSelector(getFilteredQuests);

  if (isQuestsLoading || quests === null) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape Room</title>
      </Helmet>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
          квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
          Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <FiltersForm />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <CardsList quests={quests}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const MainPage = memo(MainPageComponent);
