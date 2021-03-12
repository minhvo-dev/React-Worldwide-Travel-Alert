const MongoClient = require("mongodb").MongoClient;
const { dbUri, dbName } = require("./config");

let instance;
const getDBInstance = async () => {
  if (instance) {
    console.log("Using established connection");
    return instance;
  }
  try {
    console.log("Establish new connection");
    const client = await MongoClient.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = client.db(dbName);
    instance = { client, db };
  }
  catch (error) {
    console.log(error);
  }
  return instance;
};

const addOne = (db, coll, doc) => db.collection(coll).insertOne(doc);

const deleteAll = (db, coll) => db.collection(coll).deleteMany({});

const findOne = (db, coll, criteria) => db.collection(coll).findOne(criteria);

const findAll = (db, coll, criteria, projection) =>
  db
    .collection(coll)
    .find(criteria)
    .project(projection)
    .toArray();

const findUniqueValues = (db, coll, field) => db.collection(coll).distinct(field);

module.exports = {
  getDBInstance,
  addOne,
  deleteAll,
  findOne,
  findAll,
  findUniqueValues
};