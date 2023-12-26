import MainPage from '../../pages/main-page/main-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Page404 from '../../pages/404-page/404-page';
import BookingPage from '../../pages/booking-page/booking-page';
import ContactPage from '../../pages/contacts-page/contacts-page';
import LoginPage from '../../pages/login-page/login-page';
import MyQuestsPage from '../../pages/my-quests-page/my-quests-page';
import QuestPage from '../../pages/quest-page/quest-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App (): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isQuestsDataLoading = useAppSelector((state) => state.isQuestDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isQuestsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Contacts}
            element={<ContactPage />}
          />
          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyQuestsPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={`${AppRoute.Quest}/:id`}
            element={<QuestPage />}
          />
          <Route
            path='*'
            element={<Page404 />}
          />
          <Route
            path={`${AppRoute.Quest}/:id/booking`}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <BookingPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
