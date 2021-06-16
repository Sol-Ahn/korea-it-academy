const { req, res } = require("express");
const express = require("express");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const mysql = require("mysql");
const app = express();
const port = 3000;

let connection = mysql.createConnection({
  host: "15.164.245.8",
  port: "57495",
  user: "root",
  password: "123456",
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

app.all("/", (req, res) => {
  response.send("express server enter");
});

app.get("/get.do", (req, res) => {
  const data = { key1: "data1", key2: "data2" };
  console.log(req.query);
  for (const key in req.query) {
    const element = req.query[key];
    console.log(element);
  }
  res.send(JSON.stringify(data));
});

// Login
app.get("/login.do", (req, res) => {
  const sess = req.session;
  if (sess.is_logined) {
    console.log("이미 로그인 되어 있습니다.");
    return;
  }

  const id = req.query.id;
  const pass = req.query.pass;

  // DB data
  if (!req.session.num) req.session.num = 1;
  else req.session.num += 1;

  connection.query(
    `select * from member where id like ${id} and pass like ${pass}`,
    function (error, result, fields) {
      if (error) {
        console.log(error);
        throw error;
      }
      console.log(result);

      const r = {};

      if (result.length == 0) {
        sess.is_logined = false;
        r["flag"] = 1;
        r["msg"] = "로그인실패 아이디와 비밀번호를 확인하세요";
      } else {
        r["flag"] = 0;
        r["tokken"] = sess.id;
        sess.name = id;
        console.log(sess.name + " 로그인 성공");
        console.log(sess.cookie);
      }
      response.send(r);
    }
  );
});

app.get("/profile.do", (req, res) => {
  const token = request.query.token;
  const fs = require("fs");
  const result = {};
  fs.readFile(`sessions/${token}.json`, "utf8", function (err, data) {
    console.log(data);
    const d = JSON.parse(data);
    result["name"] = d.name;
    res.send(result);
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
