import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

// every route inside of the postRoutes starts with '/posts'
app.use('/posts', postRoutes);

// Due to security issue, move this variable to .env later
const CONNECTION_URL = 'mongodb+srv://choicehelper:choicehelper123@cluster0.cb2bq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// Got error 
// mongoose.set('useFindAndModify', false);

// const http = require('http').createServer(app);
// http.listen(5000, function () {
//     console.log('listening on 5000')
// });

// router.post("/selection", (req, res) => {
//     const { options, timestamp, repeat, selected_option } = req.body
//     console.log(req.body)
//     // db에 넣어주기
// });

// router.get("/recent-topics", (req, res) => {
//     console.log("최근 고민")
//     res.send("최근 고민들 db에서 json 형태로")
// });

// router.get("/hot-topics", (req, res) => {
//     console.log("핫한 고민")
//     res.send("핫한 고민들 db에서 json 형태로")
// });

// router.get("/total", (req, res) => {
//     console.log("서비스 사용횟수")
//     res.send("서비스를 총 몇 번 사용했는지 횟수")
// });

// ts로 바꾸기