import { BookedQuest } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type BookedCardProps = {
  bookedQuest: BookedQuest;
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

function BookedCard({bookedQuest}: BookedCardProps): JSX.Element {
  const {date, time, peopleCount, location, quest} = bookedQuest;
  const {id, title, level, previewImg, previewImgWebp} = quest;

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
            alt=""
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${AppRoute.Quest}/${id}`}>
            {title}
          </Link>
          <span className="quest-card__info">
            {`[${date},${time}.${location.address}]`}
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {peopleCount}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {level}
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
        >
              Отменить
        </button>
      </div>
    </div>
  );
}

export default BookedCard;
