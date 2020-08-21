var express = require('express')
var router = express.Router()
const axios = require('axios');
const savedPosts = require('../database/blue_posts.json');

var bluePosts;

// Default route to retrive saved posts
router.get('/', function(req, res) {
  res.send(savedPosts);
});

// Function to fetch recent posts from blizzard forums
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

// Function to add recently retrieved posts to JSON file
function addToDatabaseJSON() {
  var fs = require('fs');

  bluePosts.forEach(post => {
    var tempObj;
    tempObj = savedPosts
    // If post has no posting user, replace with 'Blizzard Entertainment'
    if (post.user.name == null) {
      post.user.name = "Blizzard Entertainment";
    }
    // Replace '&hellip;' at end of retrieved post's excerpt with '...'
    var formattedExcerpt = post.excerpt.replace('&hellip;', '...');
    // Create variable to insert into JSON file
    var insertVars = {id: post.topic_id, title: post.title, created: post.created_at, url: post.url, user: post.user.name, category: post.category_id, excerpt: formattedExcerpt};
    // Check if the JSON file already contains an entry with the post'd id, replace post if found.
    if (tempObj.rows.filter(e => e.id == post.topic_id).length > 0) {
      tempObj.rows.splice(0, 1, insertVars);
      var json = JSON.stringify(tempObj, null, 2);
    } else {
      // Insert post into file
      tempObj.rows.push(insertVars);
      var json = JSON.stringify(tempObj, null, 2);
    }
    // Write to file
    fs.writeFileSync('./database/blue_posts.json', json, function(err) {
      if (err) throw err;
      console.log('complete');
    });
  })
}

// Call function to retreieve posts on startup, then set interval to retrieve every 900000 ms
getBluePosts();
setInterval(getBluePosts, 900000);

module.exports = router