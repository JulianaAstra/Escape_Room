function HeaderBtn(): JSX.Element {
  return (
    <div className="header__side-nav">
      {/* меняется в зависимости от статуса и не отображается на странице логина */}
      {window.location.pathname !== '/login' &&
        <a className="btn btn--accent header__side-item" href="#">
          Выйти
        </a>}
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
