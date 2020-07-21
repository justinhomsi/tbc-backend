var express = require('express')
var router = express.Router()
const axios = require('axios');
var mysql = require('mysql')
const savedPosts = require('../database/blue_posts.json');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Honeybadger27!',
  database: 'tbc'
})

var bluePosts;

router.get('/', function(req, res) {
  res.send(savedPosts);
});

async function getBluePosts() {
  try {
    const postsFound = await axios.get('https://us.forums.blizzard.com/en/wow/groups/blizzard-tracker/posts.json')
    .then(response => {
      bluePosts = response.data;
      addToDatabaseJSON()
    })
  } catch (err) {
    console.error(err)
  }
}

function addToDatabaseJSON() {
  var fs = require('fs');

  bluePosts.forEach(post => {
    var tempObj;
    tempObj = savedPosts
    var postDate = new Date(post.created_at);
    var convertedTime = postDate.toJSON().slice(0, 19).replace('T', ' ');
    var insertVars = {id: post.topic_id, title: post.title, created: convertedTime, url: post.url, user: post.user.name};
    if (tempObj.rows.filter(e => e.id == post.topic_id).length > 0) {
      tempObj.rows.splice(0, 1, insertVars);
      var json = JSON.stringify(tempObj, null, 2);
    } else {
      tempObj.rows.push(insertVars);
      var json = JSON.stringify(tempObj, null, 2);
    }
    fs.writeFileSync('./database/blue_posts.json', json, function(err) {
      if (err) throw err;
      console.log('complete');
    });
  })
}

getBluePosts();
setInterval(getBluePosts, 900000);

module.exports = router