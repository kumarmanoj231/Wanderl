const Listing = require("../models/listing");

module.exports.showFiltered = async (req, res) => {
  let cat = req.path.substring(1);
  let allListings = await Listing.find({ category: cat });
  res.render("./filter.ejs", { allListings });
};
