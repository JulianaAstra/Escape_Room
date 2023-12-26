import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { FormEvent, useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { loginAction } from '../../store/api-actions';

export const LoginPage = () => {
  const [authInfo, setAuthInfo] = useState({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();

  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
  const isValidPassword = passwordRegex.test(authInfo.password);
  const isNeedDisable = !authInfo.email || !isValidPassword;

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthInfo({...authInfo, email: evt.target.value});
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setAuthInfo({...authInfo, password: evt.target.value});
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(loginAction({
      email: authInfo.email,
      password: authInfo.password}));
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>
          Вход
        </title>
      </Helmet>
      <Header />
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form
              onSubmit={handleSubmit}
              className="login-form"
              action=""
              method="post"
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">
                  E&nbsp;–&nbsp;mail
                    </label>
                    <input
                      value={authInfo.email}
                      onChange={handleEmailChange}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                      required
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">
                  Пароль
                    </label>
                    <input
                      value={authInfo.password}
                      onChange={handlePasswordChange}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Пароль"
                      required
                    />
                  </div>
                </div>
                <button
                  disabled={isNeedDisable}
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                >
              Войти
                </button>
                {isNeedDisable && (
                  <p style={{color: 'red'}}>
                    Password must contain at one number and one letter
                  </p>
                )}
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input
                  type="checkbox"
                  id="id-order-agreement"
                  name="user-agreement"
                  required
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
              Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="#">
                правилами обработки персональных данных
                  </a>
              &nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
