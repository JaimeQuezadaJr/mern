const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors({ origin: 'http://localhost:3000'}));

require ('./config/mongoose.config')

app.use(express.json());

const routes = require('./routes/product.routes');
routes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));