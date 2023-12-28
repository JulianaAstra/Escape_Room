import { Point } from '../../types/types';
import BookingDatesList from '../booking-dates-list/booking-dates-list';
import { SlotName } from '../../const';
import { SlotNameEng } from '../../const';
import {useState, useRef} from 'react';
import { useForm } from 'react-hook-form';
import { fetchBookQuestAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { BookedQuestData } from '../../types/booked-quest-data';
import { BookingInputs } from '../../types/form';
import { USER_NAME_PATTERN, USER_PHONE_PATTERN, RegisterName, FormValidationErrorMessage } from '../../const';

type BookingFormProps = {
  selectedPoint: Point | null;
  peopleMinMax: number[];
  questId: string | null;
}

function BookingForm({selectedPoint, peopleMinMax, questId}: BookingFormProps): JSX.Element {

  const childrenRef = useRef<HTMLInputElement | null>(null);

  const [min, max] = peopleMinMax;
  const slots = selectedPoint !== null ? selectedPoint.slots : null;
  const placeId = selectedPoint !== null ? selectedPoint.id : null;
  const today = slots !== null ? slots.today : null;
  const tomorrow = slots !== null ? slots.tomorrow : null;

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    isAgree: false,
  });

  const {register, handleSubmit, formState: { errors, isDirty, isValid }, getValues} = useForm<BookingInputs>({mode: 'onChange'});

  const dispatch = useAppDispatch();

  const submitHandler = () => {
    const {persons, userName, userTel} = getValues();

    const id = questId;
    const withChildren = childrenRef.current?.checked;

    const bookedQuest: BookedQuestData = {
      contactPerson: userName,
      phone: userTel,
      peopleCount: Number(persons),
      withChildren: withChildren,
      date: formData.date,
      time: formData.time,
      placeId,
      id
    };

    dispatch(fetchBookQuestAction(bookedQuest));
  };

  const dateClickHandler = (value: string, name: string) => {
    setFormData({...formData, time: value, date: name});
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <BookingDatesList handleDateClick={dateClickHandler} slotNameEng={SlotNameEng.tod} slotNameRu={SlotName.today} slot={today}/>
        <BookingDatesList handleDateClick={dateClickHandler} slotNameEng={SlotNameEng.tom} slotNameRu={SlotName.tomorrow} slot={tomorrow}/>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">
              Ваше имя
          </label>
          <input
            type="text"
            id="name"
            placeholder="Имя"
            {...register(RegisterName.UserName, { required: true, maxLength: 15, pattern: USER_NAME_PATTERN })}
            aria-invalid={errors.userName ? 'true' : 'false'}
          />
          {errors.userName?.type === 'required' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidName}</span></>}
          {errors.userName?.type === 'maxLength' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidNameLength}</span></>}
          {errors.userName?.type === 'pattern' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidNameSymbols}</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">
              Контактный телефон
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="Телефон"
            {...register(RegisterName.UserPhone, { required: true, pattern: USER_PHONE_PATTERN })}
            aria-invalid={errors.userTel ? 'true' : 'false'}
          />
          {errors.userTel?.type === 'pattern' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidPhoneFormat}</span></>}
          {errors.userTel?.type === 'required' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidPhone}</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">
              Количество участников
          </label>
          <input
            type="number"
            id="person"
            placeholder="Количество участников"
            {...register(RegisterName.Persons, { required: true, min: min, max: max })}
            aria-invalid={errors.persons ? 'true' : 'false'}
          />
          {errors.persons?.type === 'required' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidPersons}</span></>}
          {errors.persons?.type === 'min' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidPersonsCount}от {min} до {max}</span></>}
          {errors.persons?.type === 'max' && <><br/><span role="alert">{FormValidationErrorMessage.InvalidPersonsCount}от {min} до {max}</span></>}
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            ref={childrenRef}
            type="checkbox"
            id="children"
            name="children"
            defaultChecked
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
              Со&nbsp;мной будут дети
          </span>
        </label>
      </fieldset>
      <button
        disabled={!isDirty || !isValid || !formData.isAgree}
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
      >
          Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
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
  );
}

export default BookingForm;
