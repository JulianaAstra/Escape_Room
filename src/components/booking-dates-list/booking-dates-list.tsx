import { Time } from '../../types/types';

type BookingDatesListProps = {
  slot: Time[];
  slotNameRu: string;
  slotNameEng: string;
}

function BookingDatesList({slot, slotNameRu, slotNameEng}: BookingDatesListProps): JSX.Element {

  return (
    <fieldset className="booking-form__date-section">
      <legend className="booking-form__date-title">{slotNameRu}</legend>
      <div className="booking-form__date-inner-wrapper">
        {slot.map(({time, isAvailable}) => (
          <label key={time} className="custom-radio booking-form__date">
            <input
              type="radio"
              id={`${slotNameEng}${time.replace(/:/, 'h')}m`}
              name="date"
              required
              defaultValue={`${slotNameEng}${time.replace(/:/, 'h')}m`}
              disabled={!isAvailable}
            />
            <span className="custom-radio__label">{time}</span>
          </label>))}
      </div>
    </fieldset>
  );
}

export default BookingDatesList;
