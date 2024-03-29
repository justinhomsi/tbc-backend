var express = require('express')
var router = express.Router()
const creature_template = require('../database/creature_template.json');

// Route to retrieve creature by id
router.get('/:id', (req, res) => {
  var results = creature_template.rows.find(e => e.Entry == req.params.id);
  if (!results) {
    res.sendStatus(404).end()
  } else {
    var npcName = results.Name
    npcName = npcName.replace(/\s+/g, '-').toLowerCase();
    req.url = '/npc' + req.url + '/' + npcName
    res.redirect(req.url)
  }
})

// Route to retrieve creature by id and name (used in case of direct links to ensure URL is correct)
router.get('/:id/:name', (req, res) => {
  var results = creature_template.rows.find(e => e.Entry == req.params.id);
  if (!results) {
    res.sendStatus(404).end()
  } else {
    var npcName = results.Name
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


module.exports = router