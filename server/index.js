const express = require('express');
const app = express();

const http = require('http').createServer(app);
http.listen(5000, function () {
    console.log('listening on 5000')
});

router.post("/selection", (req, res) => {
    const { options, timestamp, repeat, selected_option } = req.body
    console.log(req.body)
    // db에 넣어주기
});

router.get("/recent-topics", (req, res) => {
    console.log("최근 고민")
    res.send("최근 고민들 db에서 json 형태로")
});

router.get("/hot-topics", (req, res) => {
    console.log("핫한 고민")
    res.send("핫한 고민들 db에서 json 형태로")
});

router.get("/total", (req, res) => {
    console.log("서비스 사용횟수")
    res.send("서비스를 총 몇 번 사용했는지 횟수")
});

// ts로 바꾸기