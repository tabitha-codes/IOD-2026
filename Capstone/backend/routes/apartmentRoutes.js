// APARTMENT ROUTES
const express = require("express");
const apartmentController = require("../controllers/apartmentController");

const router = express.Router();

router.get("/", apartmentController.getApartments);
router.get("/:id", apartmentController.getApartmentById);

module.exports = router;
