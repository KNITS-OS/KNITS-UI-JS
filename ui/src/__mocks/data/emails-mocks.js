import { randomIntFromInterval } from "./common";

export const emailsData = [
  {
    id: 1,
    email: "rsainthill0@redcross.org",
  },
  {
    id: 2,
    email: "yfearne1@t-online.de",
  },
  {
    id: 3,
    email: "lfehners2@europa.eu",
  },
  {
    id: 4,
    email: "ndolder3@tmall.com",
  },
  {
    id: 5,
    email: "manselmi4@howstuffworks.com",
  },
  {
    id: 6,
    email: "fselburn5@youku.com",
  },
  {
    id: 7,
    email: "ptorrijos6@discuz.net",
  },
  {
    id: 8,
    email: "locurrine7@ehow.com",
  },
  {
    id: 9,
    email: "awylder8@paginegialle.it",
  },
  {
    id: 10,
    email: "fcourtois9@eventbrite.com",
  },
  {
    id: 11,
    email: "ddulinga@ameblo.jp",
  },
  {
    id: 12,
    email: "fcuphusb@ifeng.com",
  },
  {
    id: 13,
    email: "taugerc@msu.edu",
  },
  {
    id: 14,
    email: "jdunkirkd@washington.edu",
  },
  {
    id: 15,
    email: "fsavile@dmoz.org",
  },
  {
    id: 16,
    email: "rlornef@spiegel.de",
  },
  {
    id: 17,
    email: "sladelg@elegantthemes.com",
  },
  {
    id: 18,
    email: "fharteh@cnn.com",
  },
  {
    id: 19,
    email: "mdevonishi@bloglines.com",
  },
  {
    id: 20,
    email: "lgiacomuzzoj@netlog.com",
  },
  {
    id: 21,
    email: "kheartk@geocities.com",
  },
  {
    id: 22,
    email: "dwilsdonl@salon.com",
  },
  {
    id: 23,
    email: "mpelcheurm@discovery.com",
  },
  {
    id: 24,
    email: "rkasperskin@yahoo.co.jp",
  },
  {
    id: 25,
    email: "cbrauneso@reddit.com",
  },
  {
    id: 26,
    email: "cmcgarveyp@sciencedirect.com",
  },
  {
    id: 27,
    email: "rramsdaleq@loc.gov",
  },
  {
    id: 28,
    email: "rdotterillr@free.fr",
  },
  {
    id: 29,
    email: "csilwoods@java.com",
  },
  {
    id: 30,
    email: "jargentet@deviantart.com",
  },
  {
    id: 31,
    email: "cmaccoveneyu@irs.gov",
  },
  {
    id: 32,
    email: "fsehorschv@gravatar.com",
  },
  {
    id: 33,
    email: "bjanuszewiczw@artisteer.com",
  },
  {
    id: 34,
    email: "tmcgarvax@lycos.com",
  },
  {
    id: 35,
    email: "tjannequiny@alexa.com",
  },
  {
    id: 36,
    email: "ztashz@examiner.com",
  },
  {
    id: 37,
    email: "lionesco10@clickbank.net",
  },
  {
    id: 38,
    email: "dmuttitt11@washington.edu",
  },
  {
    id: 39,
    email: "acookman12@diigo.com",
  },
  {
    id: 40,
    email: "ksainsberry13@bloglines.com",
  },
];

export const randomEmail = () => {
  return emailsData[randomIntFromInterval(0, 39)];
};
