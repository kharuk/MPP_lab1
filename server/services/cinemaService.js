const Cinema  = require('../models/cinema');

function getCinemas(req, res) {
  Cinema.findAll()
  .then(cinemas => {
    res.render('./cinema/cinemaList', {list: cinemas})
  })
  .catch(err => res.send(err));
}

function addNewCinema(req, res) {
  res.render("./cinema/create-edit");
}

function createCinema(req, res) {
  console.log(req.body);
  Cinema.create(req.body)
  .then(() => res.redirect('/cinemas'))
  .catch(err => res.send(err));
}

function showCinema(req, res) {
  Cinema.findById(req.params.id)
  .then((cinema) => res.render("./cinema/create-edit", {viewTitle: "Update Cinema", cinema}))
  .catch(err => res.send(err));
}

function updateCinema(req, res) {
  Cinema.update(req.body, {where: { id: req.params.id }})
  .then(() => res.redirect("/cinemas"))
  .catch(err => res.send(err));
}

function deleteCinema(req, res) {
  Cinema.destroy({where: {id: req.params.id}})
  .then(() => res.redirect('/cinemas'));
}

module.exports = {
  getCinemas,
  addNewCinema,
  createCinema,
  showCinema,
  updateCinema,
  deleteCinema
};
