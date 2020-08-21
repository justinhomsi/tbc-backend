var express = require('express')
var router = express.Router()
const item_template = require('../database/item_template.json');

// Route to retrieve items by id
router.get('/:id', (req, res) => {
  var results = item_template.rows.find(e => e.entry == req.params.id);
  if (!results) {
    res.sendStatus(404).end()
  } else {
    var itemName = results.name
    itemName = itemName.replace(/\s+/g, '-').toLowerCase();
    req.url = '/item' + req.url + '/' + itemName
    res.redirect(req.url)
  }
})

// Route to retrieve items by id and name (used in case of direct links to ensure URL is correct)
router.get('/:id/:name', (req, res) => {
  var results = item_template.rows.find(e => e.entry == req.params.id);
  if (!results) {
    res.sendStatus(404).end()
  } else {
    var itemName = results.name
    itemName = itemName.replace(/\s+/g, '-').toLowerCase();
    if (req.params.name !== itemName)
    {
      req.url = '/item/' + req.params.id + '/' + itemName
      res.redirect(req.url)
    } else {
      res.send(results)
    }
  }
})


module.exports = router