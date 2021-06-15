const { request, response } = require("express");
const express = require("express");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
let mysql = require("mysql");
const app = express();
const port = 3000;

let connection = mysql.createConnection({
  host: "15.164.245.8",
  port: "57495",
  user: "root",
  password: "mysql",
  database: "web_db",
});
connection.connect();

app.use(
  session({
    secret: "sessionID",
    resave: false,
    saveUninitialized: false,
    store: new fileStore(),
  })
);

app.listen(port, () => {
  console.log(`server port is ${port}`);
});

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested With");
  next();
});

app.all("/", (request, response) => {
  response.send("express server enter");
});

app.get("/get.do", (request, response) => {
  const data = { key1: "data1", key2: "data2" };
  console.log(request.query);
  for (const key in request.query) {
    const element = request.query[key];
    console.log(element);
  }
  response.send(JSON.stringify(data));
});

// Login
app.get("/login.do", (request, response) => {
  const sess = request.session;
  if (sess.is_logined) {
    console.log("이미 로그인 되어 있습니다.");
    return;
  }

  const id = request.query.id;
  const pass = request.query.pass;
  const result = {};
  if (!request.session.num) request.session.num = 1;
  else request.session.num += 1;
  sess.is_logined = true;
  result["flag"] = 0;
  result["token"] = sess.id;
  sess.name = id;
  console.log(sess.name + "로그인 성공");
  response.send(result);
});

app.get("/profile.do", (request, response) => {
  const token = request.query.token;
  const fs = require("fs");
  const result = {};
  fs.readFile(`sessions/${token}.json`, "utf8", function (err, data) {
    console.log(data);
    const d = JSON.parse(data);
    result["name"] = d.name;
    response.send(result);
  });
});

// Logout
app.get("/logout.do", (request, response) => {
  const token = request.query.token;
  const fs = require("fs");
  const result = {};
  request.session.destroy();
  fs.rm(`sessions/${token}.json`, { recursive: true }, (err) => {
    if (err !== null) console.log(err);
  });
  result["flag"] = 1;
  response.send(result);
});
