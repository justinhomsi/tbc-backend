var express = require('express')
var router = express.Router()
const creature_template = require('../database/creature_template.json');
const item_template = require('../database/item_template.json');
const quest_template = require('../database/quest_template.json');

router.get('', (req, res) => {
  var regex = new RegExp(req.query.q, 'i')
  var creatures = creature_template.rows.filter(e => e.Name.match(regex));
  var items = item_template.rows.filter(e => e.name.match(regex));
  var quests = quest_template.rows.filter(e => e.Title.match(regex));
  if (!creatures && !items && !quests) {
    res.sendStatus(404).end()
  } else {
    res.send({creatures: creatures, items: items, quests: quests})
    res.sendFile(__dirname + '/index.html')
  }
})

module.exports = router