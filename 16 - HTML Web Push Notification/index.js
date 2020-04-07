const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set Static Path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey =
  "BPISvkpNgaUW4xJ178jAc3XDFUbtXx1ULS55h7ugX1-ZSWtmzvaNziiDMD5KACMtYfooG-3k71q_Ps0tY16jPOs";

const privateVapidKey = "UeTxYJQv9iza9CSBhdMz70zTsfq9koqFdIAP02fPavI";

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  publicVapidKey,
  privateVapidKey
);

app.post("/subscribe", (req, res) => {
  //get push sub object
  const subscription = req.body;
  console.log(subscription);
  //send 201 status
  res.status(201).json({});

  const payload = JSON.stringify({
    title: "Push Test",
  });

  // pass object into web push

  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
