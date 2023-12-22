import HeaderBtn from '../header-btn/header-btn';

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
              <a className="link active" href="index.html">
              Квесты
              </a>
            </li>
            <li className="main-nav__item">
              <a className="link" href="#">
              Контакты
              </a>
            </li>
            {/* зависит от статуса авторизации, сделать по общему состоянию */}
            <li className="main-nav__item">
              <a className="link" href="my-quests.html">
              Мои бронирования
              </a>
            </li>
          </ul>
        </nav>
        <HeaderBtn />
      </div>
    </header>
  );
}

export default Header;
