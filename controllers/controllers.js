const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_TOKEN);
const Axios = require("axios");

//User joined controller
const userJoined = async (req, res, next) => {
    res.status(200).send();
    const event = req.body.event;
    const userId = event.user;
    const user = await web.users.info({
        user: userId
    });
    const username = await user.user.name;
    const channel = event.channel;

    try {
        // Use the `chat.postMessage` method to send a message from this app
        await web.chat.postMessage({
          channel: channel,
          text: `Welcome to the channel, ${username}`,
        });
      } catch (error) {
        console.log(error);
      }


    
}

const define = async (req, res, next) =>{
    res.status(200).send();
    const word = req.body.text;
    const responseUrl = req.body.response_url;
    const result = await Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const definition = result.data[0].meanings[0].definitions[0].definition;
    const response = await Axios.post(responseUrl, {"text": `${definition}`});
    

}

module.exports = {userJoined, define};