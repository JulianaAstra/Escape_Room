import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { MouseEvent } from 'react';
// import { changeAuthorisationStatus } from '../../store/action';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';

function HeaderBtn(): JSX.Element {

  const authorizationStatus: AuthorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  const handleBtnClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    switch (evt.currentTarget.dataset.status) {
      case AuthorizationStatus.Auth:
        dispatch(logoutAction());
        break;
      case AuthorizationStatus.NoAuth:
        dispatch(redirectToRoute(AppRoute.Login));
        break;
    }
  };

  return (

    <div className="header__side-nav">

      {window.location.pathname !== AppRoute.Login &&
        <Link data-status={authorizationStatus} onClick={handleBtnClick} className="btn btn--accent header__side-item" to='/'>
          {authorizationStatus === AuthorizationStatus.Auth ? 'Выйти' : 'Войти'}
        </Link>}

      <a
        className="link header__side-item header__phone-link"
        href="tel:88003335599"
      >
          8 (000) 111-11-11
      </a>
    </div>
  );
}

export default HeaderBtn;
