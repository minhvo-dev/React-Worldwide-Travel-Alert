// convert country iso code to corresponding Unicode characters
// from https://material-ui.com/components/autocomplete/
const countryToFlag = (isoCode) => {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
      .toUpperCase()
      .replace(
        /./g,
        char => String.fromCodePoint(
          char.charCodeAt(0) + 127397
        ))
    : isoCode;
};

// convert date string to human-readable string 
// representing a locale time of that date
const dateToLocaleString = (dateString) => {
  if (dateString) {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }
  return dateString;
};

// convert date string to array of locale date and time
const dateToLocaleStringArray = (dateString) => {
  if (dateString) {
    const date = new Date(dateString);
    return [date.toLocaleDateString(), date.toLocaleTimeString()];
  }
  return dateString;
};

export {
  countryToFlag,
  dateToLocaleString,
  dateToLocaleStringArray
};