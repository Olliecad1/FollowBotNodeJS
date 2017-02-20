var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);


var stream = Twitter.stream('user');

// FOLLOW-Reply BOT ===========================

// when someone follows
stream.on('follow', followed);

// ...trigger the callback
function followed(event) {  
  console.log('Follow Event is running');
  //get their twitter handler (screen name)
  var
    name = event.source.name,
    screenName = event.source.screen_name;
  // function that replies back to the user who followed
  tweetNow('@' + screenName + ' Thank you for the follow.');
}

// function definition to tweet back to user who followed
function tweetNow(tweetTxt) {  
  var tweet = {
      status: tweetTxt
  }
  Twitter.post('statuses/update', tweet, function(err, data, response) {
    if(err){
      console.log("Error in Replying");
    }
    else{
      console.log("Gratitude shown successfully");
    }
  });
}
