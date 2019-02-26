const Film  = require('../models/film');

function getFilms(req, res) {
  Film.findAll()
  .then(films => {
    res.render('./film/filmList', {list: films})
  })
  .catch(err => res.send(err));
}

function addNewFilm(req, res) {
  res.render("./film/create-edit");
}

function createFilm(req, res) {
  Film.create(req.body)
  .then(() => res.redirect('/films'))
  .catch(err => res.send(err));
}

function showFilm(req, res) {
  Film.findById(req.params.id)
  .then((film) => res.render("./film/create-edit", {viewTitle: "Update Film", film}))
  .catch(err => res.send(err));
}

function updateFilm(req, res) {
  Film.update(req.body, {where: { id: req.params.id }})
  .then(() => res.redirect("/films"))
  .catch(err => res.send(err));
}

function deleteFilm(req, res) {
  Film.destroy({where: {id: req.params.id}})
  .then(() => res.redirect('/films'));
}

module.exports = {
  getFilms,
  addNewFilm,
  createFilm,
  showFilm,
  updateFilm,
  deleteFilm
};
