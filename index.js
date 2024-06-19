const path = require("path");
require("dotenv").config();
const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const app = express();
const port = process.env.PORT;
const cwd = process.cwd();

console.log("img server on port", port);

app.get("/images/tech/:imageName", (req, res) => {
  const imgName = req.params.imageName;
  console.log("이미지 요청: " + imgName);

  res.sendFile(path.join(cwd, "images", "tech", imgName));
});

app.listen(port);
// index.js
var router = express.Router();
// app.use(express.static("public"));
