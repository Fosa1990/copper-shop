import news_01 from '../assets/news-1.jpg';
import news_02 from '../assets/news-2.jpg';
import news_03 from '../assets/news-2.jpg';

type TNews = {
  id: string;
  title: string;
  desc: string;
  date: string;
  imgUrl: string;
};

export const news: TNews[] = [
  {
    id: '01',
    title: 'Эфирные масла для улучшения сна',
    desc: `Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил...`,
    date: '27.10.21',
    imgUrl: news_01,
  },
  {
    id: '02',
    title: 'Эфирные масла для улучшения сна',
    desc: `Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил...`,
    date: '27.10.21',
    imgUrl: news_02,
  },
  {
    id: '03',
    title: 'Эфирные масла для улучшения сна',
    desc: `Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил...`,
    date: '27.10.21',
    imgUrl: news_03,
  },
  {
    id: '04',
    title: 'Эфирные масла для улучшения сна',
    desc: `Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил...`,
    date: '27.10.21',
    imgUrl: news_01,
  },
  {
    id: '05',
    title: 'Эфирные масла для улучшения сна',
    desc: `Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил...`,
    date: '27.10.21',
    imgUrl: news_02,
  },
  {
    id: '06',
    title: 'Эфирные масла для улучшения сна',
    desc: `Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил...`,
    date: '27.10.21',
    imgUrl: news_03,
  },
];
