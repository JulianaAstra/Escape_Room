function LogoSpan(): JSX.Element {
  return (
    <span className="logo header__logo">
      <svg width={134} height={52} aria-hidden="true">
        <use xlinkHref="#logo" />
      </svg>
    </span>
  );
}

export default LogoSpan;
