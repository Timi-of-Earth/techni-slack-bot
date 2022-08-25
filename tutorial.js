const express = require('express');
const app = express();
require('dotenv').config()
const Axios = require("axios");
const eventRouter = require('./event-router/event-router');
const {define} = require("./controllers/controllers");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/define', define);

app.use(eventRouter);

// app.post("/", async function (req, res) {
//         try {
//             await Axios.post("https://hooks.slack.com/services/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", {
//                 text: "Congrats, your message was an interesting one"
//             });

//             res.json({
//                 date: new Date().toISOString()
//             })
//         } catch (error) {
            
//         }
// })


const port = process.env.PORT || 3000;

const start = () => {app.listen(port, () =>
console.log(`Server is listening on port ${port}...`)
);}

start();
