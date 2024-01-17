const express = require('express');
const app = express();
const cors = require('cors');
const allRoutes = require("./routes/route");

app.use(cors());
app.use(express.json());


app.use("/", allRoutes);
app.listen(1000);