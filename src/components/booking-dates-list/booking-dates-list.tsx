import { Time } from '../../types/types';
import { MouseEvent, memo } from 'react';

type BookingDatesListProps = {
  slot: Time[] | null | undefined;
  slotNameRu: string;
  slotNameEng: string;
  handleDateClick: (value: string, name: string) => void;
}

function BookingDatesListComponent({slot, slotNameRu, slotNameEng, handleDateClick}: BookingDatesListProps): JSX.Element {

  const handleClick = (value: string, name: string) => {
    handleDateClick(value, name);
  };

  return (
    <fieldset className="booking-form__date-section">
      <legend className="booking-form__date-title">{slotNameRu}</legend>
      <div className="booking-form__date-inner-wrapper">
        {slot !== null && slot !== undefined ? slot.map(({time, isAvailable}) => (
          <label key={time} className="custom-radio booking-form__date">
            <input
              onClick={(evt: MouseEvent<HTMLInputElement>) => handleClick(evt.currentTarget.value, slotNameEng)}
              type="radio"
              id={`${slotNameEng}${time.replace(/:/, 'h')}m`}
              name="date"
              required
              value={time}
              disabled={!isAvailable}
            />
            <span className="custom-radio__label">{time}</span>
          </label>)) : ''}
      </div>
    </fieldset>
  );
}

export const BookingDatesList = memo(BookingDatesListComponent);

