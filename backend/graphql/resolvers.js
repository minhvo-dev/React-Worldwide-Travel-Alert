const { loadData } = require("../setupalerts");
const dbRtns = require("../dbroutines");
const { alertCollectionName, travellerCollectionName } = require("../config");


const resolvers = {
  // queries
  setupAlerts: async () => await loadData(),

  alerts: async () => {
    const { db } = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, alertCollectionName);
  },

  alertsByRegion: async ({ region }) => {
    const { db } = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, alertCollectionName, { region });
  },

  alertsBySubregion: async ({ subregion }) => {
    const { db } = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, alertCollectionName, { subregion });
  },

  alertsByTraveller: async ({ traveller }) => {
    const { db } = await dbRtns.getDBInstance();
    return await dbRtns.findAll(db, travellerCollectionName, { travellerName: traveller });
  },

  regions: async () => {
    const { db } = await dbRtns.getDBInstance();
    return await dbRtns.findUniqueValues(db, alertCollectionName, "region");
  },

  subregions: async () => {
    const { db } = await dbRtns.getDBInstance();
    return await dbRtns.findUniqueValues(db, alertCollectionName, "subregion");
  },

  travellers: async () => {
    const { db } = await dbRtns.getDBInstance();
    return await dbRtns.findUniqueValues(db, travellerCollectionName, "travellerName");
  },

  // mutations
  addAdvisory: async (advisory) => {
    const { db } = await dbRtns.getDBInstance();
    const result = await dbRtns.addOne(db, travellerCollectionName, advisory);
    return result.insertedCount === 1 ? advisory : null;
  }
};

module.exports = { resolvers };
