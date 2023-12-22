import { Quest } from '../../mocks/quests';

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

function Card({quest}: CardProps): JSX.Element {
  const {title, previewImg, previewImgWebp, level, peopleMinMax} = quest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            // srcSet="img/content/crypt/crypt-size-s.webp, img/content/crypt/crypt-size-s@2x.webp 2x"
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
          <a className="quest-card__link" href="quest.html">
            {title}
          </a>
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
            {level}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
