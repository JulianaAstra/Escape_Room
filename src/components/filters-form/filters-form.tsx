import { GenreFilters, DifficultyFilters, Filters } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch/use-app-dispatch';
import { MouseEvent } from 'react';
import { setActiveFilterTheme, setActiveFilterDifficulty } from '../../store/app-data/selectors';
import {changeFilterTheme, changeFilterDifficulty} from '../../store/app-data/app-data';

type ThemeType = string;
type DifficultyType = string;

function FiltersForm(): JSX.Element {
  const themeTitle = useAppSelector(setActiveFilterTheme) ;
  const difficultyTitle = useAppSelector(setActiveFilterDifficulty) ;
  const dispatch = useAppDispatch();

  const handleThemeClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const theme = evt.currentTarget.dataset.theme as ThemeType;
    dispatch(changeFilterTheme(theme));
  };

  const handleDifficultyClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const difficulty = evt.currentTarget.dataset.difficulty as DifficultyType;
    dispatch(changeFilterDifficulty(difficulty));
  };

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">{Filters.Theme}</legend>
        <ul className="filter__list">
          {GenreFilters.map(({type, name, img, width, height}) => (
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
        <legend className="visually-hidden">{Filters.Difficulty}</legend>
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
