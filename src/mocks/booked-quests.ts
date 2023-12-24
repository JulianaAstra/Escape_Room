import { BookedQuest } from '../types/types';

export const bookedQuests: BookedQuest[] = [
  {
    date: 'today',
    time: '14:00',
    contactPerson: 'Oliver',
    phone: '+799911122233',
    withChildren: true,
    peopleCount: 5,
    id: '69ccff2f-c50f-4489-aff4-ae0bec31f30f',
    location: {
      address: 'Касимовская ул., 10, м. Волковская',
      coords: [
        59.89666839298755,
        30.360405971326003
      ]
    },
    quest: {
      id: 'feeb6aff-4ec5-42df-b59d-d596662ce219',
      title: 'Склеп',
      previewImg: 'https://grading.design.htmlacademy.pro/static/quest/crypt.jpg',
      previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/crypt.webp',
      level: 'easy',
      type: 'adventures',
      peopleMinMax: [
        2, 5
      ]
    }
  },
  {
    date: 'tomorrow',
    time: '15:00',
    contactPerson: 'Oliver',
    phone: '+799911122233',
    withChildren: false,
    peopleCount: 3,
    id: 'c265f7e9-2d09-465b-b955-e9a1f8bfb5a5',
    location: {
      address: 'Автозаводский пр-д, 1, м. Шушары',
      coords: [
        59.82179701478202,
        30.42098372734333
      ]
    },
    quest: {
      id: 'b02ef6de-c7d0-46a0-84bd-fa8d686f498a',
      title: 'Маньяк',
      previewImg: 'https://grading.design.htmlacademy.pro/static/quest/maniac.jpg',
      previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/maniac.webp',
      level: 'medium',
      type: 'horror',
      peopleMinMax: [
        3, 6
      ]
    }
  },
  {
    date: 'today',
    time: '17:00',
    contactPerson: 'Oliver',
    phone: '+799911122233',
    withChildren: true,
    peopleCount: 4,
    id: '90217b78-039e-4165-9f53-07842bad1c63',
    location: {
      address: 'Аллея 100 летия Комсомола, м. Политехническая',
      coords: [
        60.022639880785924,
        30.365151487500537
      ]
    },
    quest: {
      id: '7f76c1c3-4f29-4978-8305-9a40679c3e15',
      title: 'Ритуал',
      previewImg: 'https://grading.design.htmlacademy.pro/static/quest/ritual.jpg',
      previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/ritual.webp',
      level: 'hard',
      type: 'mystic',
      peopleMinMax: [
        3, 5
      ]
    }
  }
];
