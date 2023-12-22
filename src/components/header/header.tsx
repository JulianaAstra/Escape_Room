import HeaderBtn from '../header-btn/header-btn';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </span>
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
            {/* зависит от статуса авторизации, сделать по общему состоянию */}
            <li className="main-nav__item">
              <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to={AppRoute.MyQuests}>
              Мои бронирования
              </NavLink>
            </li>
          </ul>
        </nav>
        <HeaderBtn />
      </div>
    </header>
  );
}

export default Header;
