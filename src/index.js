var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

const Items = require('../routers/Items')
const Quests = require('../routers/Quests')
const Creatures = require('../routers/Creatures')
const Search = require('../routers/Search')

app.use('/item', Items)
app.use('/quest', Quests)
app.use('/npc', Creatures)
app.use('/search', Search)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});