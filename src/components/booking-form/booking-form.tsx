import { Point } from '../../types/types';
import BookingDatesList from '../booking-dates-list/booking-dates-list';
import { SlotName } from '../../const';
import { SlotNameEng } from '../../const';
import {useState, useRef} from 'react';
import { useForm } from 'react-hook-form';
import { fetchBookQuestAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { BookedQuestData } from '../../types/booked-quest-data';

type BookingFormProps = {
  selectedPoint: Point | null;
  peopleMinMax: number[];
  questId: string | null;
}

type Inputs = {
  userName: string;
  userTel: string;
  persons: string;
};

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
  });

  const {register, handleSubmit, formState: { errors, isDirty, isValid }, getValues} = useForm<Inputs>({mode: 'onChange'});

  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const {persons, userName, userTel} = getValues();

    const id = questId;
    const withChildren = childrenRef.current.checked;

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

  const onDateClick = (value: string, name: string) => {
    setFormData({...formData, time: value, date: name});
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <BookingDatesList clickHandler={onDateClick} slotNameEng={SlotNameEng.tod} slotNameRu={SlotName.today} slot={today}/>
        <BookingDatesList clickHandler={onDateClick} slotNameEng={SlotNameEng.tom} slotNameRu={SlotName.tomorrow} slot={tomorrow}/>
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
            {...register('userName', { required: true, maxLength: 15, pattern: /^[А-Яа-яЁёA-Za-z'-]*$/ })}
            aria-invalid={errors.userName ? 'true' : 'false'}
          />
          {errors.userName?.type === 'required' && <><br/><span role="alert">Укажите имя</span></>}
          {errors.userName?.type === 'maxLength' && <><br/><span role="alert">Имя должно быть от 1 до 15 символов</span></>}
          {errors.userName?.type === 'pattern' && <><br/><span role="alert">Имя может содержать только буквы А-Я, а-я, A-Z, a-z и символ &quot;-&quot;</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">
              Контактный телефон
          </label>
          <input
            type="tel"
            id="tel"
            placeholder="Телефон"
            {...register('userTel', { required: 'Укажите номер телефона', pattern: /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/ })}
            aria-invalid={errors.userTel ? 'true' : 'false'}
          />
          {errors.userTel?.type === 'pattern' && <><br/><span role="alert">Телефон должен быть введен в формате +7(000)000-00-00</span></>}
          {errors.userTel?.type === 'required' && <><br/><span role="alert">Введите номер телефона</span></>}
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">
              Количество участников
          </label>
          <input
            type="number"
            id="person"
            placeholder="Количество участников"
            {...register('persons', { required: 'Укажите количество участников', min: min, max: max })}
            aria-invalid={errors.persons ? 'true' : 'false'}
          />
          {errors.persons?.type === 'required' && <><br/><span role="alert">Укажите количество участников</span></>}
          {errors.persons?.type === 'min' && <><br/><span role="alert">Возможное количество участников: от {min} до {max}</span></>}
          {errors.persons?.type === 'max' && <><br/><span role="alert">Возможное количество участников: от {min} до {max}</span></>}
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
        disabled={!isDirty || !isValid}
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
      >
          Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
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
  );
}

export default BookingForm;
