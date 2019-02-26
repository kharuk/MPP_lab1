const Film  = require('../models/film');
const Cinema = require('../models/cinema');
const Session  = require('../models/session');

function getSessions(req, res) {
  Session.findAll()
  .then(sessions => {
    res.render('./session/sessionList', {list: sessions})
  })
  .catch(err => res.send(err));
}

function addNewSession(req, res) {
 // Film.findAll()
 // .then(films => console.log('zzz ',{film_info: films, cinema_info: cinemas}))
  //.then(Cinema.findAll())
 /* .then(cinemas => {
    console.log({film_info: films, cinema_info: cinemas});
    res.render("./session/create-edit", {film_info: films, cinema_info: cinemas});
  })*/
  Film.findAll()
  .then(films => {
    let film_info = films;
    Cinema.findAll()
    .then(cinemas => {
      console.log('qwerty',{film_info: film_info, cinema_info: cinemas});
      res.render("./session/create-edit", {film_info: films, cinema_info: cinemas});
    })
   // console.log('aaa', films);
   // res.render("./session/create-edit", {film_info: films})
  })
  .catch(err => res.send(err));
  
}

function createSession(req, res) {
  console.log('body',req.body);
  Session.create(req.body)
  .then(() => res.redirect('/sessions'))
  .catch(err => res.send(err));
}

function showSession(req, res) {
  Session.findById(req.params.id)
  .then((session) => res.render("./session/create-edit", {viewTitle: "Update Session", session}))
  .catch(err => res.send(err));
}

function updateSession(req, res) {
  Session.update(req.body, {where: { id: req.params.id }})
  .then(() => res.redirect("/sessions"))
  .catch(err => res.send(err));
}

function deleteSession(req, res) {
  Session.destroy({where: {id: req.params.id}})
  .then(() => res.redirect('/sessions'));
}

module.exports = {
  getSessions,
  addNewSession,
  createSession,
  showSession,
  updateSession,
  deleteSession
};
