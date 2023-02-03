const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

export const formatJsDate_DD_MM_YYYY = (date) => {
  const dayWithPadding =
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  return `${dayWithPadding}/${months[date.getMonth()]}/${date.getFullYear()}`;
};

export const parseIntoJsDate_DD_MM_YYYY = (dateAsString) => {
  const dataTokens = dateAsString.split("/");
  return new Date(`${dataTokens[2]}/${dataTokens[1]}/${dataTokens[0]}`);
};

export const dateInBetween = (
  startDateAsString,
  endDateAsString,
  dateToCheckAsString
) => {
  const startDateAsLong = startDateAsString.getTime();
  const endDateAsLong = endDateAsString.getTime();
  const dateToCheckAsLong = dateToCheckAsString.getTime();
  return (
    dateToCheckAsLong > startDateAsLong && dateToCheckAsLong < endDateAsLong
  );
};

export const evaluateField = (value) => {
  if (typeof value === "string") {
    return parseIntoJsDate_DD_MM_YYYY(value);
  }
  if (value instanceof Date) {
    return value;
  }

  return null;
};

export const toFileArray = (filelist) => {
  if (!filelist || filelist.length === 0) {
    return [];
  }
  const files = [];
  for (let i = 0; i < filelist.length; i++) {
    const fileOrNull = filelist.item(i);
    if (fileOrNull) {
      files.push(fileOrNull);
    }
  }
  return files;
};
