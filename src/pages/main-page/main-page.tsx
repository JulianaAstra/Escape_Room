import CardsList from '../../components/cards-list/cards-list';
import { Quest } from '../../mocks/quests';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import FiltersForm from '../../components/filters-form/filters-form';

type MainPageProps = {
  quests: Quest[];
}

function MainPage({quests}: MainPageProps): JSX.Element {

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

export default MainPage;
