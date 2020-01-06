const express = require('express');
const app = express();

const router1 = require("./router/v1/router");
app.use('/v1', router1);

const router2 = require("./router/v2/router");
app.use('/v2', router2);

app.listen(3000);
