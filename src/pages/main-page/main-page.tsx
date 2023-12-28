import { CardsList } from '../../components/cards-list/cards-list';
import { Quest } from '../../types/types';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import FiltersForm from '../../components/filters-form/filters-form';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import LoadingScreen from '../loading-screen/loading-screen';
import { getQuestDataLoadingStatus, getQuests } from '../../store/app-data/selectors';
import { setActiveFilterTheme, setActiveFilterDifficulty } from '../../store/app-process/selectors';
import { memo } from 'react';

function MainPageComponent(): JSX.Element {
  const activeFilterTheme = useAppSelector(setActiveFilterTheme);
  const activeFilterDifficulty = useAppSelector(setActiveFilterDifficulty);

  const isQuestsLoading = useAppSelector(getQuestDataLoadingStatus);

  const quests: Quest[] | null = useAppSelector(getQuests);

  if (isQuestsLoading || quests === null) {
    return (
      <LoadingScreen />
    );
  }

  const filteredQuests: Quest[] = quests.filter((item) => {
    if (activeFilterTheme === 'all') {
      return item;
    }
    return item.type === activeFilterTheme;
  });

  const sortedQuests: Quest[] = filteredQuests.filter((item) => {
    if (activeFilterDifficulty === 'any') {
      return item;
    }
    return item.level === activeFilterDifficulty;
  });

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
          <CardsList quests={sortedQuests}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const MainPage = memo(MainPageComponent);
