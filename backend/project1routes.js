const express = require("express");

const { loadData } = require("./setupalerts");

const router = express.Router();

// GET: 
router.get("/setup", async (_req, res) => {
  const results = await loadData();
  res.json(results);
});

module.exports = router;