import HeaderBtn from '../header-btn/header-btn';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import LogoLink from '../logo/logo-link';
import LogoSpan from '../logo/logo-span';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { AuthorizationStatus } from '../../const';

function Header(): JSX.Element {
  const authorizationStatus: AuthorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container container--size-l">
        {window.location.pathname === AppRoute.Root ? <LogoSpan /> : <LogoLink />}
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={AppRoute.Root}>
              Квесты
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={AppRoute.Contacts}>
              Контакты
              </NavLink>
            </li>
            {authorizationStatus === AuthorizationStatus.NoAuth ? '' :
              <li className="main-nav__item">
                <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={AppRoute.MyQuests}>
              Мои бронирования
                </NavLink>
              </li>}
          </ul>
        </nav>
        <HeaderBtn />
      </div>
    </header>
  );
}

export default Header;
