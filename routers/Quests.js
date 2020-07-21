var express = require('express')
var router = express.Router()
const quest_template = require('../database/quest_template.json');

router.get('/:id', (req, res) => {
  var results = quest_template.rows.find(e => e.entry == req.params.id);
  if (!results) {
    res.sendStatus(404).end()
  } else {
    var questName = results.Title
    questName = questName.replace(/\s+/g, '-').toLowerCase();
    req.url = '/quest' + req.url + '/' + questName
    res.redirect(req.url)
  }
})

router.get('/:id/:name', (req, res) => {
  var results = quest_template.rows.find(e => e.entry == req.params.id);
  if (!results) {
    res.sendStatus(404).end()
  } else {
    var questName = results.Title
    questName = questName.replace(/\s+/g, '-').toLowerCase();
    if (req.params.name !== questName)
    {
      req.url = '/quest/' + req.params.id + '/' + questName
      res.redirect(req.url)
    } else {
      res.send(results)
    }
  }
})


module.exports = router