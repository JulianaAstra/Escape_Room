export type DetailedQuest = {
  id: string;
  title: string;
  description: string;
  previewImg: string;
  previewImgWebp: string;
  coverImg: string;
  coverImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
}

export const detailedQuests: DetailedQuest[] = [
  {
    id: '1290c416-9d24-47c8-96de-5e66a9a64cbc',
    title: 'Склеп',
    description: 'Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/crypt.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/crypt.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/crypt@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/crypt@2x.webp',
    level: 'hard',
    type: 'horror',
    peopleMinMax: [
      2,
      5
    ]
  },
  {
    id: '1163a5ae-b29a-4468-93e9-91cab0f7981c',
    title: 'Маньяк',
    description: 'В комнате с приглушённым светом несколько человек, незнакомых друг с другом, приходят в себя. Никто не помнит, что произошло прошлым вечером. Руки и ноги связаны, но одному из вас получилось освободиться. На стене висит пугающий таймер и запущен отсчёт 60 минут. Сможете ли вы разобраться в стрессовой ситуации, помочь другим, разобраться что произошло и выбраться из комнаты?',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/maniac.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/maniac.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/maniac@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/maniac@2x.webp',
    level: 'medium',
    type: 'horror',
    peopleMinMax: [
      3,
      6
    ]
  },
  {
    id: 'f75a6316-25ae-437e-9e9c-d3235bdebfb8',
    title: 'Ритуал',
    description: 'Тяжелый воздух угнетает, в ночи вы оказываетесь запертыми в сыром помещении вместе с другими ничего не понимающими жертвами. Сквозь щель в двери вы видите, как некто в капюшоне готовит площадку как будто для проведения мистического обряда. Удастся ли вам выбраться, пока вы не станете жертвой ритуала?',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/ritual.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/ritual.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/ritual@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/ritual@2x.webp',
    level: 'hard',
    type: 'mystic',
    peopleMinMax: [
      3,
      5
    ]
  },
  {
    id: 'eefbbff9-dca6-4934-9b89-4a9914281150',
    title: 'Тайны старого особняка',
    description: 'Погрузитесь в атмосферу служебных помещений закулисья, которые хранят множество тайн и загадок. Вы окажитесь в старом особняке и увидите все, что скрывают его запутанные коридоры.',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/palace.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/palace.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/palace@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/palace@2x.webp',
    level: 'easy',
    type: 'detective',
    peopleMinMax: [
      2,
      5
    ]
  },
  {
    id: 'ebc9e26e-4d93-4fb6-93ee-6431fbb71bdd',
    title: 'Хижина в лесу',
    description: 'Вы с друзьями оказались в заброшенной хижине. Какую тайну она скрывает и как из неё выбраться? На эти вопросы вам предстоит найти ответ, чтобы вернуться домой.',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/hut.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/hut.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/hut@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/hut@2x.webp',
    level: 'medium',
    type: 'mystic',
    peopleMinMax: [
      4,
      7
    ]
  },
  {
    id: 'b8715215-b4a2-48d1-a459-81cb6f9cce4c',
    title: 'Фатальный эксперимент',
    description: 'Вы стоите на пороге нового научного открытия, которое перевернет судьбу человечества. Но что-то идёт не так, и ядерный реактор, который работает на полную мощность, сигнализирует о скорой поломке. Удастся ли вам починить его в отведенное время и предотвратить гибель людей в этом фатальном эксперименте?',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/experiment.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/experiment.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/experiment@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/experiment@2x.webp',
    level: 'hard',
    type: 'adventures',
    peopleMinMax: [
      5,
      8
    ]
  },
  {
    id: '2fde6685-6385-4389-84e4-9a2e4bf649bd',
    title: 'Метро 2033',
    description: 'Мир погрузился в хаус постапокалипсиса после ядерного взрыва. Все крупные города были стёрты с лица земли и только в метро на глубине осталась жизнь. Но и здесь творится хаус. У вас и вашей команды есть только одна цель — выжить.',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/metro.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/metro.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/metro@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/metro@2x.webp',
    level: 'medium',
    type: 'sci-fi',
    peopleMinMax: [
      6,
      8
    ]
  },
  {
    id: '7ba51dea-e68c-4ba5-87fa-5fcd00cf0c25',
    title: 'Старый чердак',
    description: 'Какую тайну хранит старый чердак? Каждая вещь здесь имеет свой тайный смысл и приближает к вас к раскрытию главной тайны. Почувствуйте себя настоящими детективами и докопайтесь до истины.',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/loft.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/loft.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/loft@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/loft@2x.webp',
    level: 'easy',
    type: 'detective',
    peopleMinMax: [
      2,
      3
    ]
  },
  {
    id: '301d2730-9d30-47bf-905d-108ff5a7dafd',
    title: 'Марс-2056',
    description: '2055 год. Вы отправились на Марс в научно-исследовательскую экспедицию. Цель экспедиции колонизация планеты.  Вы прибыли на место, развернули временный лагерь, построили комплекс жизнеобеспечения и начали свою работу. У вас команда высококвалифицированных специалистов в своем деле. Но что-то идёт не так — теперь вам нужно улететь с красной планеты как можно быстрее, чтобы спасти свою жизнь.',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/mars.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/mars.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/mars@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/mars@2x.webp',
    level: 'easy',
    type: 'sci-fi',
    peopleMinMax: [
      2,
      5
    ]
  },
  {
    id: '780c4aad-5bf9-42a9-8ed5-7335de51d417',
    title: 'Последний рубеж',
    description: 'Никто не знает, что произошло, но необходимо выбираться любой ценой. Дойдут ли все до конца? Но это точно последний шанс спастись.',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/frontier.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/frontier.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/frontier@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/frontier@2x.webp',
    level: 'medium',
    type: 'adventures',
    peopleMinMax: [
      4,
      7
    ]
  },
  {
    id: 'b9b7dc85-7949-4e94-8c98-65d2f196c77e',
    title: 'История призраков',
    description: 'Ещё вчера они бегали по улицам, а сегодня сквозь них проходят толпы. Почему они застряли между мирами, что держит их на другой стороне? Узнай их историю и не забудь: духи бывают и хорошими, и плохими.',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/ghosts.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/ghosts.webp',
    coverImg: 'https://grading.design.htmlacademy.pro/static/quest/ghosts@2x.jpg',
    coverImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/ghosts@2x.webp',
    level: 'easy',
    type: 'mystic',
    peopleMinMax: [
      5,
      6
    ]
  }
];
