const express = require('express');
const cinemaService = require("../services/cinemaService");

const router = express.Router();

router.get('/', cinemaService.getCinemas);
router.get("/new", cinemaService.addNewCinema);
router.post("/new", cinemaService.createCinema);
router.get("/:id/edit", cinemaService.showCinema);
router.post("/:id/edit", cinemaService.updateCinema);
router.get("/:id/delete", cinemaService.deleteCinema);

module.exports = router;