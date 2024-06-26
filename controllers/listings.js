const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  let allListings = await Listing.find();
  res.render("./listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("./listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing not exists!");
    res.redirect("/listings");
  }
  console.log(listing);
  res.render("./listings/show.ejs", { listing });
};

module.exports.addNewListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  let { listing } = req.body;
  let newListing = new Listing(listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry = response.body.features[0].geometry;
  let result = await newListing.save();
  console.log(result);
  req.flash("success", "New Listing created!");
  console.log("Successfully added!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not exists!");
    res.redirect("/listings");
  }

  let originalImgUrl = listing.image.url;
  originalImgUrl = originalImgUrl.replace("/upload", "/upload/w_250");
  res.render("./listings/edit.ejs", { listing, originalImgUrl });
};

module.exports.updateEditedInfo = async (req, res) => {
  let { id } = req.params;

  let newListing = req.body.listing;

  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  newListing.geometry = response.body.features[0].geometry;
  console.log(newListing);
  let listing = await Listing.findByIdAndUpdate(id, newListing);

  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing edited successfully!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let result = await Listing.findByIdAndDelete(id);
  console.log(result);
  req.flash("success", "Listing deleted!");
  res.redirect("/listings");
};
