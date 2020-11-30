console.log("The Twitter Bot is starting");

const Twit = require('twit');

const Tokens = new Twit({
    consumer_key: "", //Your API Key
    consumer_secret: "", //Your API Secret
    access_token: "", //Your Access Token
    access_token_Secret: "", //Your Access Token Secret
});

var stream = Tokens.stream('statuses/filter', {track: '@(Your Twitter User Name)'});

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
    if(eventMsg.text == "RIP @(Your Twitter User Name)") {
        var tweet = {
            status: 'Welcome @'+eventMsg.user.screen_name
        };
        Tokens.post('status/update', tweet, tweeted);
    }

    function tweeted(err, data, response) {
        if(err) {
            console.log(err);
        }
        else {
            console.log("It worked");
        }
    }
}