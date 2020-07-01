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
  connection.query(`SELECT * FROM creature_template WHERE entry = ${req.params.id}`, function (error, results, fields) {
    if (error) throw error;
    if (!results.length) {
      res.sendStatus(404).end()
    } else {
      var npcName = results[0].Name
      npcName = npcName.replace(/\s+/g, '-').toLowerCase();
      req.url = '/npc' + req.url + '/' + npcName
      res.redirect(req.url)
    }

  })
})

router.get('/:id/:name', (req, res) => {
  connection.query(`SELECT * FROM creature_template WHERE entry = ${req.params.id}`, function (error, results, fields) {
    if (error) throw error;
    if (!results.length) {
      res.sendStatus(404).end()
    } else {
      var npcName = results[0].Name
      npcName = npcName.replace(/\s+/g, '-').toLowerCase();
      if (req.params.name !== npcName)
      {
        req.url = '/npc/' + req.params.id + '/' + npcName
        res.redirect(req.url)
      } else {
        res.send(results)
      }
    }
  })
})




module.exports = router