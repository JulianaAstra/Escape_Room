export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
}

export const quests: Quest[] = [
  {
    id: '1290c416-9d24-47c8-96de-5e66a9a64cbc',
    title: 'Склеп',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/crypt.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/crypt.webp',
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
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/maniac.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/maniac.webp',
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
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/ritual.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/ritual.webp',
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
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/palace.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/palace.webp',
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
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/hut.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/hut.webp',
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
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/experiment.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/experiment.webp',
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
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/metro.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/metro.webp',
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
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/loft.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/loft.webp',
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
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/mars.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/mars.webp',
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
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/frontier.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/frontier.webp',
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
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/ghosts.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/ghosts.webp',
    level: 'easy',
    type: 'mystic',
    peopleMinMax: [
      5,
      6
    ]
  }
];
