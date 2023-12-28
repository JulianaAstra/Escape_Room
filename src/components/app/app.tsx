import { MainPage } from '../../pages/main-page/main-page';
import { Route, Routes } from 'react-router-dom';
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
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus, getAuthCheckedStatus } from '../../store/user-process/selectors';
import { getQuestDataLoadingStatus } from '../../store/app-data/selectors';
import { fetchQuestAction, checkAuthAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useEffect } from 'react';

function App (): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchQuestAction());
      dispatch(checkAuthAction());
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

  const isQuestsDataLoading = useAppSelector(getQuestDataLoadingStatus);

  if (isQuestsDataLoading || !isAuthChecked) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
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
            element={authorizationStatus === AuthorizationStatus.Auth ? <MainPage /> : <LoginPage />}
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
