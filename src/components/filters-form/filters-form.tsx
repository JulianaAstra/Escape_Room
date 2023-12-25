import { GenrereFilters, DifficultyFilters, Filters } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { changeFilterTheme, changeFilterDifficulty } from '../../store/action';
import { MouseEvent } from 'react';

function FiltersForm(): JSX.Element {
  const themeTitle = useAppSelector((state) => state.activeFilterTheme);
  const difficultyTitle = useAppSelector((state) => state.activeFilterDifficulty);
  const dispatch = useAppDispatch();

  const handleThemeClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const theme = evt.currentTarget.dataset.theme;
    dispatch(changeFilterTheme(theme));
  };

  const handleDifficultyClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const difficulty = evt.currentTarget.dataset.difficulty;
    dispatch(changeFilterDifficulty(difficulty));
  };

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">{Filters.theme}</legend>
        <ul className="filter__list">
          {GenrereFilters.map(({type, name, img, width, height}) => (
            <li key={type} data-theme={type} onClick={handleThemeClick} className="filter__item">
              <input type="radio" name="type" readOnly id={type} checked={themeTitle === type}/>
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
          {DifficultyFilters.map(({type, name}) => (
            <li key={type} data-difficulty={type} onClick={handleDifficultyClick} className="filter__item">
              <input type="radio" checked={difficultyTitle === type} name="level" readOnly id={type} />
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
