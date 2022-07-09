const express = require("express");
const app = express();
const Port = 8000;

require("./config/mongoose.config");

app.use(express.json());

const routes = require('./routes/jokes.routes');
routes(app);

app.listen(Port, () => console.log(`APP IS RUNNING ON ${Port}`));
