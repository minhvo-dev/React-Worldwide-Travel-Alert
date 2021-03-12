const { getJSONFromWWWPromise } = require("./utilities");
const config = require("./config");
const dbRtns = require("./dbroutines");

const loadData = async () => {
  let results = [];
  try {
    // Establish new connection
    const { db } = await dbRtns.getDBInstance();

    // delete existing documents in alert collection
    const deleteResult = await dbRtns.deleteAll(db, config.alertCollectionName);
    // console.log(`Delete ${deleteResult.deletedCount} existing documents from the '${config.alertCollectionName}' collection`);
    results.push(`Delete ${deleteResult.deletedCount} existing documents from the '${config.alertCollectionName}' collection.`);

    // obtain data
    const [alert, countries] = await Promise.all([getJSONFromWWWPromise(config.gocAlerts), getJSONFromWWWPromise(config.isoCountries)]);
    // console.log("Retrieved Alert JSON and Country JSON");
    results.push(" Retrieved Alert JSON and Country JSON.");

    // insert data to database
    const insertResults = await Promise.allSettled(
      countries.map(country => {
        const { "alpha-2": alpha2, name, region, "sub-region": subregion } = country;
        const matchAlert = alert.data[alpha2];

        return dbRtns.addOne(db, config.alertCollectionName, {
          country: alpha2,
          name,
          region,
          subregion,
          text: matchAlert ? matchAlert.eng["advisory-text"] : "No travel alerts",
          date: matchAlert ? matchAlert["date-published"].date : ""
        });
      })
    );
    // console.log(`Added ${insertResults.filter(res => res.value).length} new documents to the ${config.alertCollectionName} collection`);
    results.push(` Added ${insertResults.filter(res => res.value).length} new documents to the ${config.alertCollectionName} collection.`);
    // client.close();
  }
  catch (error) {
    console.log(error);
    results = [error.message];
  }
  
  return results;
};

// loadData();
module.exports = { loadData };