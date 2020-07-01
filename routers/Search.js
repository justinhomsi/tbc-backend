var express = require('express')
var router = express.Router()

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Honeybadger27!',
  database: 'tbc'
})

router.get('', (req, res) => {
  console.log(req.query.q)
  connection.query(`SELECT entry AS id, Title, 'quest' AS type FROM quest_template WHERE Title LIKE '%${req.query.q}%'
    UNION ALL
    SELECT entry AS id, name, 'item' FROM item_template WHERE name LIKE '%${req.query.q}%'
    UNION ALL
    SELECT entry as id, Name, 'npc' FROM creature_template WHERE Name LIKE '%${req.query.q}%'`, function (error, results, fields) {
    if (error) throw error;
    if (!results.length) {
      res.sendStatus(404).end()
    } else {
      res.send(results)
    }
  })
})

module.exports = router