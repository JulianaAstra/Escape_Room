import CardsList from '../../components/cards-list/cards-list';
import { Quest } from '../../types/types';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import FiltersForm from '../../components/filters-form/filters-form';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { AuthorizationStatus } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';

function MainPage(): JSX.Element {
  const activeFilterTheme = useAppSelector((state) => state.activeFilterTheme);
  const activeFilterDifficulty = useAppSelector((state) => state.activeFilterDifficulty);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const isQuestsLoading = useAppSelector((state) => state.isQuestDataLoading);
  const quests: Quest[] | null = useAppSelector((state) => state.quests);

  if (isQuestsLoading || authStatus === AuthorizationStatus.Unknown || quests === null) {
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

export default MainPage;
