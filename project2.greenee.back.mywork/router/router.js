const { spawn } = require("child_process");
const express = require("express");
const conn = require("../config");
const router = express.Router();

/* 세형 */

/* 트리형 챗봇으로 DB 성향정보 수정하는 라우터  */
router.post("/chatbotUpdate", (req, res) => {
  console.log("chatbotUpdate 라우터 진입");
  console.log("wake: " + req.body.wake);
  console.log("startwork: " + req.body.startwork);
  console.log("lunch: " + req.body.lunch);
  console.log("endwork: " + req.body.endwork);
  console.log("transport: " + req.body.transport);
  console.log("job: " + req.body.job);
  console.log("hobby: " + req.body.hobby);
  console.log("music: " + req.body.music);
  console.log("food: " + req.body.food);
  console.log("drink: " + req.body.drink);
  let email = req.body.email;
  let wake = req.body.wake;
  let startwork = req.body.startwork;
  let lunch = req.body.lunch;
  let endwork = req.body.endwork;
  let transport = req.body.transport;
  let job = req.body.job;
  let hobby = req.body.hobby;
  let music = req.body.music;
  let food = req.body.food;
  let drink = req.body.drink;
  let sql = `UPDATE userinfo
  SET wake=?, startwork=?, lunch=?, endwork=?, transpo=?, job=?, hobby=?, music=?, food=?, drink=? WHERE email=?`;
  conn.query(
    sql,
    [wake,startwork,lunch,endwork,transport,job,hobby,music,food,drink,email],
    (err, rows) => {
      console.log("컨쿼리진입");
      res.redirect("http://127.0.0.1:3000/"); //main page
    }
  );
});

/* 출발지와 도착지 두가지 인풋을 받으면 이동거리를 계산하는 `카카오맵api라우터` */
router.post('/map', function (req, res) {
  console.log('map라우터 진입 성공')
  /* let userInput = req.query.userInput */
  let userInput1 = req.body.userInput1
  let userInput2 = req.body.userInput2
  console.log(`유저인풋1 : ${userInput1}, 유저인풋2 : ${userInput2}`)
  //const result = spawn("python3", ["map.py",[userInput1,userInput2]]);
  //const result = spawn("python3", ["map.py"]);
  // const result = spawn("python", ["map.py"]);

  if (userInput1 && userInput2) {

  const result = spawn("python", ["map.py", userInput1, userInput2]);
  console.log('파이썬 파일 변수 선언 성공')
  result.stdout.on("data", (result) => {
    console.log('stdout 진입 성공')
    console.log('result : ' + result.toString());
    console.log(`파이썬 파일 변수 선언 성공  |  유저인풋1 : ${userInput1}, 유저인풋2 : ${userInput2}`)
    /* res.json(result.toString().trim()) */
     //출발지~도착지 이동예상시간
    res.json(result.toString().slice(0,(result.toString().length-6)))
    //db
/*     const movetime = result.toString().slice(0,(result.toString().length-6))
    const params = [start, sTime, end, eTime, title, sLocation, eLocation, moveTime,
      content, preAlarm, checkSpecial, tag, color, cateList, eventId].map(
        (data) => {
          return data ? data : null
        }
      );
    const sql = ``
    conn.query(sql, params, (err, rows) => {
      if (err) {
        res.send(err);
      } else if (rows.length == 0) {
        console.log("DB 적용 안됨");
        res.send("DB 적용 안됨");
      } else {
        res.json(rows);
      }
    }) */
  })
});

/* `카카오맵api라우터` test 페이지 */
router.get('/maptest', function (req, res) {
  console.log('메인라우터 진입 성공')
  //로컬파일 open with live server
  res.redirect("http://127.0.0.1:5500/server/maptest.html")
});

module.exports = router;
