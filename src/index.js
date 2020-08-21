var express = require('express');
var cors = require('cors')
var app = express();
var history = require('connect-history-api-fallback');

app.use(cors())

// Import routes
const Items = require('../routers/Items')
const Quests = require('../routers/Quests')
const Creatures = require('../routers/Creatures')
const Search = require('../routers/Search')
const Blue = require('../routers/Blue')
const Notes = require('../routers/Notes')

// Use history fallback
app.use(history());
// Serve static files from dist directory
app.use(express.static('dist'))

// Use imported routes
app.use('/item', Items)
app.use('/quest', Quests)
app.use('/npc', Creatures)
app.use('/search', Search)
app.use('/blue', Blue)
app.use('/notes', Notes)

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});