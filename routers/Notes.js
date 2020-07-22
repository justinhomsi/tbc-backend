var express = require('express')
var router = express.Router()
var fs = require('fs');

router.get('/original/:patch', (req, res) => {
  var patch = req.params.patch;
  patch = patch.split("_").join(".");
  try {
    var notes = fs.readFileSync(`./notes/${patch}.html`)
    res.send(notes)
  } catch (err) {
    console.error(err)
    res.sendStatus(404).end()
  }
})

module.exports = router