const express = require('express');
const sessionServices = require("../services/sessionService");

const router = express.Router();

router.get('/', sessionServices.getSessions);
router.get("/new", sessionServices.addNewSession);
router.post("/new", sessionServices.createSession);
router.get("/:id/edit", sessionServices.showSession);
router.post("/:id/edit", sessionServices.updateSession);
router.get("/:id/delete", sessionServices.deleteSession);

module.exports = router;