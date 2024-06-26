const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const filterController = require("../controllers/filters.js");

router.get("/trending", wrapAsync(filterController.showFiltered));

router.get("/rooms", wrapAsync(filterController.showFiltered));

router.get("/cities", wrapAsync(filterController.showFiltered));

router.get("/mountains", wrapAsync(filterController.showFiltered));

router.get("/castles", wrapAsync(filterController.showFiltered));

router.get("/pools", wrapAsync(filterController.showFiltered));

router.get("/camping", wrapAsync(filterController.showFiltered));

router.get("/farms", wrapAsync(filterController.showFiltered));

router.get("/arctic", wrapAsync(filterController.showFiltered));

router.get("/doms", wrapAsync(filterController.showFiltered));

router.get("/boats", wrapAsync(filterController.showFiltered));

module.exports = router;
