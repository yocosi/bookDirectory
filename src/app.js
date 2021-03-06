const express = require('express');
require('./db/mongoose');
const bookRouter = require('./routers/books');
const userRouter = require('./routers/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Automatically parse the incoming JSON into an object
app.use(bookRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})


