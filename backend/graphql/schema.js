const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type SetupAlertResults {
    results: [String]!
  }

  type Alert {
    country: String!
    name: String!
    text: String!
    date: String!
    region: String!
    subregion: String!
  }

  type Advisory {
    travellerName: String!
    name: String!
    text: String!
    date: String!
  }

  type Query {
    setupAlerts: [String]!
    
    alerts: [Alert]!
    
    alertsByRegion (
      region: String!
    ) : [Alert]

    alertsBySubregion (
      subregion: String!
    ) : [Alert]

    alertsByTraveller (
      traveller: String!
    ) : [Alert]

    regions: [String]!

    subregions: [String]!

    travellers: [String]!
  }

  type Mutation {
    addAdvisory (
      travellerName: String!
      name: String!
      text: String!
      date: String!
    ) : Advisory
  }

`);

module.exports = { schema };