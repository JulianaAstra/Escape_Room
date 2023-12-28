import { Link } from 'react-router-dom';
import { AppRoute, Level } from '../../const';
import { Quest } from '../../types/types';
import { memo } from 'react';

type CardProps = {
  quest: Quest;
}

function changeImgSrc(src: string): string {
  if (src.endsWith('.webp')) {
    const string = src.slice(-5);
    const newString = `${string} + @2x.webp`;
    return newString;
  }

  const string = src.slice(-4);
  const newString = `${string} + @2x.jpg`;
  return newString;

}

function CardComponent({quest}: CardProps): JSX.Element {
  const {id, title, previewImg, previewImgWebp, level, peopleMinMax} = quest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${previewImgWebp}, ${changeImgSrc(previewImgWebp)}`}
          />
          <img
            src={previewImg}
            srcSet={changeImgSrc(previewImg)}
            width={344}
            height={232}
            alt={title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${id}`}>
            {title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {peopleMinMax[0]}–{peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {level === Level.Easy && 'легко'}
            {level === Level.Medium && 'средне'}
            {level === Level.Hard && 'сложно'}
          </li>
        </ul>
      </div>
    </div>
  );
}

export const Card = memo(CardComponent);
