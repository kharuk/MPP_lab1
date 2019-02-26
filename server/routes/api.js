const express = require('express');
const filmControllers = require('../controllers/filmController');
const cinemaControllers = require('../controllers/cinemaController');
//const teachersRouter = require('../controllers/teacher');
//const classRouter = require('../controllers/class');

const router = express.Router();
router.use('/films', filmControllers);
router.use('/cinemas', cinemaControllers);
module.exports = router;