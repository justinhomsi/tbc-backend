var express = require('express')
var router = express.Router()

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Honeybadger27!',
  database: 'tbc'
})


router.get('/:id', (req, res) => {
  connection.query(`SELECT * FROM quest_template WHERE entry = ${req.params.id}`, function (error, results, fields) {
    if (error) throw error;
    if (!results.length) {
      res.sendStatus(404).end()
    } else {
      var questName = results[0].Title
      questName = questName.replace(/\s+/g, '-').toLowerCase();
      req.url = '/quest' + req.url + '/' + questName
      res.redirect(req.url)
    }
  })
})

router.get('/:id/:name', (req, res) => {
  connection.query(`SELECT * FROM quest_template WHERE entry = ${req.params.id}`, function (error, results, fields) {
    if (error) throw error;
    if (!results.length) {
      res.sendStatus(404).end()
    } else {
      var questName = results[0].Title
      questName = questName.replace(/\s+/g, '-').toLowerCase();
      if (req.params.name !== questName) {
        req.url = '/quest/' + req.params.id + '/' + questName
        res.redirect(req.url)
      } else {
        res.send(results)
      }
    }
  })
})




module.exports = router