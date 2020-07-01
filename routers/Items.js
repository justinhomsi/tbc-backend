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
  connection.query(`SELECT * FROM item_template WHERE entry = ${req.params.id}`, function (error, results, fields) {
    if (error) throw error;
    if (!results.length) {
      res.sendStatus(404).end()
    } else {
      var itemName = results[0].name
      itemName = itemName.replace(/\s+/g, '-').toLowerCase();
      req.url = '/item' + req.url + '/' + itemName
      res.redirect(req.url)
    }
  })
})

router.get('/:id/:name', (req, res) => {
  connection.query(`SELECT * FROM item_template WHERE entry = ${req.params.id}`, function (error, results, fields) {
    if (error) throw error;
    if (!results.length) {
      res.sendStatus(404).end()
    } else {
      var itemName = results[0].name
      itemName = itemName.replace(/\s+/g, '-').toLowerCase();
      if (req.params.name !== itemName) {
        req.url = '/item/' + req.params.id + '/' + itemName
        res.redirect(req.url)
      } else {
        res.send(results)
      }
    }
  })
})



module.exports = router