const express = require('express');
const app = express();
const conectDB = require('./DB/conect');
const { userRouter, postRouter } = require('./module/indexRouter');
const port = process.env.PORT || 5000;

conectDB();
app.use(express.json());
app.use(userRouter, postRouter);

app.listen(port, () => {
    console.log(`reunning...... ${port}`);
});