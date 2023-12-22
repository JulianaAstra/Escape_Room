import MainPage from '../../pages/main-page/main-page';
import { quests } from '../../mocks/quests';
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


function App (): JSX.Element {
  return(
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage quests={quests}/>}
          />
          <Route
            path={AppRoute.Contacts}
            element={<ContactPage />}
          />
          <Route
            path={AppRoute.MyQuests}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
