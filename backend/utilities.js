const got = require("got");

const getJSONFromWWWPromise = (url) => {
  return new Promise((resolve, reject) => {
    got(url, { responseType: "json" })
      .then(res => {
        resolve(res.body);
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = {
  getJSONFromWWWPromise
};