var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

const Items = require('../routers/Items')
const Quests = require('../routers/Quests')
const Creatures = require('../routers/Creatures')
const Search = require('../routers/Search')
const Blue = require('../routers/Blue')

app.use(express.static('dist'))

app.use('/item', Items)
app.use('/quest', Quests)
app.use('/npc', Creatures)
app.use('/search', Search)
app.use('/blue', Blue)

const buildLocation = 'dist';

app.use((req, res, next) => {
  if (!req.originalUrl.includes(buildLocation)) {
    res.sendFile(__dirname + '/index.html');
  } else {
    next();
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});