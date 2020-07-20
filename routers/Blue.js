var express = require('express')
var router = express.Router()
const axios = require('axios');
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Honeybadger27!',
  database: 'tbc'
})

var bluePosts;

router.get('/', function(req, res) {
  var sortedPosts;
  try {
    connection.query('SELECT * FROM blue_posts ORDER BY created DESC', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    })
  } catch (err) {
    console.error(err)
  }
});

async function getBluePosts() {
  try {
    const postsFound = await axios.get('https://us.forums.blizzard.com/en/wow/groups/blizzard-tracker/posts.json')
    .then(response => {
      bluePosts = response.data;
      addToDatabase()
    })
  } catch (err) {
    console.error(err)
  }
}

function addToDatabase() {
  if (!bluePosts.length) return;
  bluePosts.slice().reverse().forEach(post => {
    connection.query(`SELECT * FROM blue_posts WHERE id = ${post.topic_id}`, function (error, results, fields) {
      if (error) throw error;
      var postDate = new Date(post.created_at);
      var convertedTime = postDate.toJSON().slice(0, 19).replace('T', ' ');
      var insertVars = {id: post.topic_id, title: post.title, created: convertedTime, url: post.url, user: post.user.name};
      if (results.length > 0) {
        var query = connection.query('REPLACE INTO blue_posts SET ?', insertVars, function (error, results, fields) {
          if (error) throw error;
        })
      } else {
        var query = connection.query('INSERT INTO blue_posts SET ?', insertVars, function (error, results, fields) {
          if (error) throw error;
        })
      }
    })
  });
}

getBluePosts();
setInterval(getBluePosts, 900000);

module.exports = router