import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { useForm } from 'react-hook-form';
import { LoginInputs } from '../../types/form';
import { EMAIL_PATTERN, PASSWORD_PATTERN, RegisterName, FormValidationErrorMessage } from '../../const';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    isAgree: false,
  });

  const {register, handleSubmit, formState: { errors, isDirty, isValid }, getValues} = useForm<LoginInputs>({mode: 'onChange'});

  const isNeedDisable = !formData.isAgree || !isDirty || !isValid;

  const submitHandler = () => {
    const {email, password} = getValues();
    dispatch(loginAction({email, password}));
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
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(submitHandler)}
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
                      type="email"
                      id="email"
                      placeholder="Адрес электронной почты"
                      required
                      {...register(RegisterName.Email, { required: true, pattern: EMAIL_PATTERN })}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email?.type === 'required' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidEmail}</span></>}
                    {errors.email?.type === 'pattern' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidEmailFormat}</span></>}
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">
                  Пароль
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Пароль"
                      required
                      {...register(RegisterName.Password, { required: true, minLength: 3, maxLength: 15, pattern: PASSWORD_PATTERN})}
                      aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    {errors.password?.type === 'required' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidPassword}</span></>}
                    {errors.password?.type === 'pattern' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidPasswordFormat}</span></>}
                    {(errors.password?.type === 'maxLength' || errors.password?.type === 'minLength') && <><br/><span role="alert">{FormValidationErrorMessage.InvalidPasswordLength}</span></>}
                  </div>
                </div>
                <button
                  disabled={isNeedDisable}
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                >
              Войти
                </button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input
                  onChange={() => setFormData({...formData, isAgree: !formData.isAgree})}
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
