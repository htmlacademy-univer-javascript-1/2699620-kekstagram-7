const PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const AVATAR_COUNT = 6;

const DESCRIPTIONS = [
  'Красивое фото',
  'Отличный день',
  'Момент из жизни',
  'Прекрасный вечер',
  'Незабываемый момент'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Татьяна',
  'Елена',
  'Кирилл',
  'Алиса',
  'Павел',
  'Дмитрий',
  'Полина'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

let commentIdCounter = 0;

const createComment = () => {
  commentIdCounter += 1;

  const sentenceCount = getRandomInteger(1, 2);
  const sentences = [];
  for (let i = 0; i < sentenceCount; i += 1) {
    sentences.push(getRandomArrayElement(MESSAGES));
  }
  return {
    id: commentIdCounter,
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
    message: sentences.join(' '),
    name: getRandomArrayElement(NAMES),
  };
};

const createComments = () => {
  const count = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  return Array.from({ length: count }, createComment);
};


const createPhoto = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: createComments(),
});

const photos = [];

for (let i = 0; i < PHOTOS_COUNT; i++) {
  photos.push(createPhoto(i));
}

