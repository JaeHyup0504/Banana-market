const express = require('express');
const app = express();
const indexRouter = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 3001;
const models = require('./models/index.js');
const { sequelize } = require('./models/index.js');
require('dotenv').config();

sequelize
  .authenticate()
  .then(() => {
    console.log(' 😈 Connection has been established successfully.');
  })
  .catch((err) => {
    console.error(' 👿 Unable to connect to the database:', err);
  });

// sequelize.sync({ alter: true });
//   .then(()=> {
//     console.log('🤢 re-sync db.')
//   })
//   .catch(err => {
//     console.log('🤮 re-sync error: ', err)
//   })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS', 'PUT'],
  })
);

app.use('/', indexRouter);
app.get('/', (req, res) => {
  res.send(`🍌 ~~ Banana Market ~~ 🍌`);
});

// http server
const http = require('http');
const server = http.createServer(app);

// socket.io server
const socketHandler = require('./socket');
const socket = require('socket.io');
const io = socket(server, {
  cors: {
    origin: true,
    credentials: true,
  },
});

socketHandler(io);

//내가 추가한 코드
// io.on("connection", (socket) => {
//   console.log('소캣 connect') // 소켓이 연결되면 connect 가 뜬다.
//   socket.on("message", ({ name, message }) => {
//     io.emit("message", { name, message });
//   });
// });

server.listen(port, () => {
  console.log(`🍌 ~~ Banana Market 서버가 작동 중입니다 ~~ 🍌`);
});
