const express = require('express');
const filmServices = require("../services/filmService");

const router = express.Router();

router.get('/', filmServices.getFilms);
router.get("/new", filmServices.addNewFilm);
router.post("/new", filmServices.createFilm);
router.get("/:id/edit", filmServices.showFilm);
router.post("/:id/edit", filmServices.updateFilm);
router.get("/:id/delete", filmServices.deleteFilm);

module.exports = router;