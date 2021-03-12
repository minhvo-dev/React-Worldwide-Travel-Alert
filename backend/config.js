require("dotenv").config();

module.exports = {
  gocAlerts: process.env.GOCALERTS,
  isoCountries: process.env.ISOCOUNTRIES,
  dbUri: process.env.MONGODB_URI,
  dbName: process.env.DB_NAME,
  alertCollectionName: process.env.ALERT_COLLECTION,
  travellerCollectionName: process.env.ADVISORY_COLLECTION,
  port: process.env.PORT,
  graphqlRoute: process.env.GRAPHQL_ROUTE
};