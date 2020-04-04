const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

//Set Static Path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey =
  "BJYBGcOMWV015hgejQ40PJX8hRE1flyWx21Kwl7RaErLCU7RpjbQfCmKNzN8ayDxJ_xk-Ih9fs_HcpRvJ5RQCwQ";

const privateVapidKey = "qd1A04Wy69If8hWJ4TIkmAACldoal42ICUKimk-Spqc";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

// subscribe route
app.post("/subscribe", (req, res) => {
  // get push sub obj
  const subscription = req.body;
  console.log(subscription);
  // send 201 status
  res.status(201).json({});

  // create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // pass object into web push
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
