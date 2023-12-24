import { GenrereFilters, DifficultyFilters, Filters } from '../../const';

function FiltersForm(): JSX.Element {
  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">{Filters.theme}</legend>
        <ul className="filter__list">
          {GenrereFilters.map(({type, name, img, width, height}) => (
            <li key={type} className="filter__item">
              <input type="radio" name="type" id={type} />
              <label className="filter__label" htmlFor={type}>
                <svg
                  className="filter__icon"
                  width={width}
                  height={height}
                  aria-hidden="true"
                >
                  <use xlinkHref={img} />
                </svg>
                <span className="filter__label-text">{name}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">{Filters.difficulty}</legend>
        <ul className="filter__list">
          {DifficultyFilters. map(({type, name}) => (
            <li key={type} className="filter__item">
              <input type="radio" name="level" id={type} />
              <label className="filter__label" htmlFor={type}>
                <span className="filter__label-text">{name}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </form>
  );
}

export default FiltersForm;
