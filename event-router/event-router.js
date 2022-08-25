const {urlVerification} = require("../controllers/url-verification");
const {userJoined} = require("../controllers/controllers");


const eventRouter = (req, res, next) => {
    let eventType = req.body.type;
    if (eventType !== "url_verification") {
        eventType = req.body.event.type;
    }


    
    switch (eventType) {
        case "url_verification": {
            urlVerification(req, res, next)
        }
            
            break;

        case "member_joined_channel": {
            userJoined(req, res, next)
        }
            
            break;
    
        default:
            break;
    }
}

module.exports = eventRouter;