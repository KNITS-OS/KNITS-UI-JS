import { randomIntFromInterval } from "./common";

export const websitesData = [
  {
    id: 1,
    website: "livejournal.com",
  },
  {
    id: 2,
    website: "mail.ru",
  },
  {
    id: 3,
    website: "163.com",
  },
  {
    id: 4,
    website: "plala.or.jp",
  },
  {
    id: 5,
    website: "amazon.co.jp",
  },
  {
    id: 6,
    website: "amazonaws.com",
  },
  {
    id: 7,
    website: "i2i.jp",
  },
  {
    id: 8,
    website: "plala.or.jp",
  },
  {
    id: 9,
    website: "issuu.com",
  },
  {
    id: 10,
    website: "indiatimes.com",
  },
  {
    id: 11,
    website: "spotify.com",
  },
  {
    id: 12,
    website: "npr.org",
  },
  {
    id: 13,
    website: "nbcnews.com",
  },
  {
    id: 14,
    website: "answers.com",
  },
  {
    id: 15,
    website: "mashable.com",
  },
  {
    id: 16,
    website: "amazon.co.jp",
  },
  {
    id: 17,
    website: "chronoengine.com",
  },
  {
    id: 18,
    website: "go.com",
  },
  {
    id: 19,
    website: "parallels.com",
  },
  {
    id: 20,
    website: "bbb.org",
  },
  {
    id: 21,
    website: "slashdot.org",
  },
  {
    id: 22,
    website: "weather.com",
  },
  {
    id: 23,
    website: "geocities.jp",
  },
  {
    id: 24,
    website: "mysql.com",
  },
  {
    id: 25,
    website: "skyrock.com",
  },
  {
    id: 26,
    website: "free.fr",
  },
  {
    id: 27,
    website: "newsvine.com",
  },
  {
    id: 28,
    website: "google.nl",
  },
  {
    id: 29,
    website: "google.fr",
  },
  {
    id: 30,
    website: "csmonitor.com",
  },
  {
    id: 31,
    website: "ted.com",
  },
  {
    id: 32,
    website: "networksolutions.com",
  },
  {
    id: 33,
    website: "tuttocitta.it",
  },
  {
    id: 34,
    website: "bbc.co.uk",
  },
  {
    id: 35,
    website: "quantcast.com",
  },
  {
    id: 36,
    website: "exblog.jp",
  },
  {
    id: 37,
    website: "weebly.com",
  },
  {
    id: 38,
    website: "blogspot.com",
  },
  {
    id: 39,
    website: "t.co",
  },
  {
    id: 40,
    website: "twitpic.com",
  },
];

export const randomWebsite = () => {
  return websitesData[randomIntFromInterval(0, 39)];
};
